"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import Image from "next/image";
import {
  Trophy,
  BookOpen,
  RotateCcw,
  Crown,
  Wallet,
  ExternalLink,
  CheckCircle,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import { createWalletClient, custom } from "viem";
import { sepolia } from "viem/chains";
import { createGaslessAccount, MEMO_CONTRACT_ADDRESS } from "@/lib/zerodev";
import { MEMO_QUIZ_REWARDS_ABI } from "@/lib/abi";

const translations = {
  en: {
    congratulations: "Congratulations!",
    almostThere: "Almost there!",
    score: "Your Score",
    outOf: "out of",
    youEarned: "You earned",
    memoTokens: "MEMO Tokens!",
    claimReward: "Claim Reward",
    claiming: "Claiming...",
    claimed: "Claimed!",
    needMore: "You need 8/10 to earn tokens",
    reviewTopics: "Review these topics",
    tryAgain: "Try Again",
    backToLobby: "Back to Lobby",
    viewLeaderboard: "View Leaderboard",
    loading: "Loading results...",
    gasless: "Gasless transaction - No fee!",
    viewOnEtherscan: "View on Etherscan",
    loginRequired: "Please login to claim rewards",
  },
  es: {
    congratulations: "¡Felicidades!",
    almostThere: "¡Casi lo logras!",
    score: "Tu Puntuación",
    outOf: "de",
    youEarned: "Ganaste",
    memoTokens: "¡Tokens MEMO!",
    claimReward: "Reclamar Recompensa",
    claiming: "Reclamando...",
    claimed: "¡Reclamado!",
    needMore: "Necesitas 8/10 para ganar tokens",
    reviewTopics: "Repasa estos temas",
    tryAgain: "Intentar de Nuevo",
    backToLobby: "Volver al Lobby",
    viewLeaderboard: "Ver Clasificación",
    loading: "Cargando resultados...",
    gasless: "Transacción sin gas - ¡Sin costo!",
    viewOnEtherscan: "Ver en Etherscan",
    loginRequired: "Inicia sesión para reclamar recompensas",
  },
};

function GameResultsContent() {
  const { lng } = useParams<{ lng: string }>();
  const searchParams = useSearchParams();
  const router = useRouter();
  const t = translations[lng as keyof typeof translations] || translations.en;

  const sessionToken = searchParams.get("session");

  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState<{
    score: number;
    totalQuestions: number;
    percentage: number;
    canClaimReward: boolean;
    rewardSignature: string | null;
    rewardDeadline: number | null;
    sessionId: string;
  } | null>(null);
  const [claiming, setClaiming] = useState(false);
  const [claimed, setClaimed] = useState(false);
  const [txHash, setTxHash] = useState<string | null>(null);
  const [memoBalance, setMemoBalance] = useState<string | null>(null);

  const { wallets } = useWallets();
  const { user } = usePrivy();

  // Fetch MEMO balance from contract
  const fetchMemoBalance = async (walletAddress: string) => {
    try {
      const { createPublicClient, http, formatUnits } = await import("viem");
      const publicClient = createPublicClient({
        chain: sepolia,
        transport: http(),
      });

      const balance = await publicClient.readContract({
        address: MEMO_CONTRACT_ADDRESS as `0x${string}`,
        abi: [
          {
            inputs: [{ name: "account", type: "address" }],
            name: "balanceOf",
            outputs: [{ name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
        ],
        functionName: "balanceOf",
        args: [walletAddress as `0x${string}`],
      });

      setMemoBalance(formatUnits(balance, 18));
    } catch (error) {
      console.error("Error fetching MEMO balance:", error);
    }
  };

  useEffect(() => {
    if (!sessionToken) {
      router.push(`/${lng}/game`);
      return;
    }
  }, [sessionToken]);

  // Separate effect to fetch results when wallet is ready
  useEffect(() => {
    if (!sessionToken) return;

    const privyWallet = wallets.find((w) => w.walletClientType === "privy");
    const walletAddress =
      privyWallet?.address || (wallets.length > 0 ? wallets[0].address : null);

    if (walletAddress) {
      fetchResults(walletAddress);
      fetchMemoBalance(walletAddress);
    }
  }, [sessionToken, wallets]);

  const fetchResults = async (walletAddress?: string) => {
    try {
      const res = await fetch("/api/game/results", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionToken, walletAddress }),
      });

      if (!res.ok) throw new Error("Failed to fetch results");

      const data = await res.json();
      setResults(data);

      // Celebration confetti if won
      if (data.canClaimReward) {
        setTimeout(() => {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#22d3ee", "#2dd4bf", "#a855f7", "#fbbf24"],
          });
        }, 500);
      }
    } catch (error) {
      console.error("Error fetching results:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClaimReward = async () => {
    if (!results?.rewardSignature || claiming || claimed) return;

    // Address verification
    const wallet = wallets.find((w) => w.walletClientType === "privy");
    if (!wallet) {
      alert(t.loginRequired);
      return;
    }

    setClaiming(true);
    try {
      // 1. Switch to Sepolia if needed
      if (wallet.chainId !== "eip155:11155111") {
        await wallet.switchChain(11155111);
      }

      // 2. Get the provider/client
      const provider = await wallet.getEthereumProvider();
      const walletClient = createWalletClient({
        account: wallet.address as `0x${string}`,
        chain: sepolia,
        transport: custom(provider),
      });

      // 3. Create ZeroDev Gasless Client
      const kernelClient = await createGaslessAccount(walletClient);

      // 4. Prepare data for the transaction
      const { sessionId, score, rewardDeadline, rewardSignature } = results;

      if (!rewardDeadline || !rewardSignature) {
        throw new Error("Missing reward data");
      }

      // 5. Send transaction (Gasless!) - recipient is user's EOA so tokens appear in MetaMask
      const hash = await kernelClient.writeContract({
        address: MEMO_CONTRACT_ADDRESS as `0x${string}`,
        abi: MEMO_QUIZ_REWARDS_ABI,
        functionName: "claimReward",
        args: [
          wallet.address as `0x${string}`, // recipient: EOA wallet address (so tokens appear in MetaMask!)
          `0x${sessionId.replace(/-/g, "").padEnd(64, "0")}` as `0x${string}`, // sessionId as bytes32
          BigInt(score),
          BigInt(rewardDeadline),
          rewardSignature as `0x${string}`,
        ],
      });

      console.log("Transaction sent:", hash);
      setTxHash(hash);
      setClaimed(true);

      // Update MEMO balance after claiming
      setTimeout(() => {
        fetchMemoBalance(wallet.address);
      }, 3000); // Wait 3s for transaction to be indexed

      // Celebration
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.5 },
        colors: ["#22d3ee", "#2dd4bf", "#a855f7", "#fbbf24"],
      });
    } catch (error: any) {
      console.error("Claim error:", error);
      // Show error to user
      alert("Failed to claim: " + (error.message || "Unknown error"));
    } finally {
      setClaiming(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="text-cyan-400 animate-pulse text-xl">{t.loading}</div>
      </div>
    );
  }

  if (!results) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <Button onClick={() => router.push(`/${lng}/game`)}>
          {t.backToLobby}
        </Button>
      </div>
    );
  }

  const isWinner = results.canClaimReward;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-4 relative overflow-hidden">
      {/* Animated background */}
      {isWinner && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>
      )}

      <div className="relative z-10 container mx-auto max-w-lg pt-12">
        {/* Result Icon */}
        <div className="text-center mb-8">
          <div
            className={`inline-flex items-center justify-center w-28 h-28 rounded-full mb-4 ${
              isWinner
                ? "bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border-2 border-cyan-400/50 shadow-lg shadow-cyan-500/30"
                : "bg-slate-700/50 border border-slate-600"
            }`}
          >
            {isWinner ? (
              <Image
                src="/images/logos/memo-token.png"
                alt="MEMO Token"
                width={64}
                height={64}
                className="drop-shadow-lg"
              />
            ) : (
              <BookOpen className="w-12 h-12 text-slate-400" />
            )}
          </div>
          <h1
            className={`text-3xl font-bold mb-2 ${
              isWinner
                ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400"
                : "text-slate-300"
            }`}
          >
            {isWinner ? t.congratulations : t.almostThere}
          </h1>
        </div>

        {/* Score Card */}
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 mb-6 shadow-xl text-center">
          <div className="text-slate-400 text-sm mb-2">{t.score}</div>
          <div className="text-5xl font-bold">
            <span className={isWinner ? "text-cyan-400" : "text-white"}>
              {results.score}
            </span>
            <span className="text-slate-500 text-2xl">
              /{results.totalQuestions}
            </span>
          </div>
        </div>

        {/* Reward Section */}
        {isWinner ? (
          <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-xl rounded-3xl border border-cyan-500/30 p-6 mb-6">
            <div className="text-center mb-4">
              <div className="text-slate-300 mb-1">{t.youEarned}</div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                10 {t.memoTokens}
              </div>
            </div>

            {!claimed ? (
              <div className="flex flex-col items-center">
                <Button
                  onClick={handleClaimReward}
                  disabled={claiming || !results.rewardSignature}
                  className="px-6 py-2.5 text-sm font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                >
                  {claiming ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      {t.claiming}
                    </span>
                  ) : (
                    <>
                      <Wallet className="w-4 h-4 mr-2" />
                      {t.claimReward}
                    </>
                  )}
                </Button>
                <p className="mt-3 text-xs text-slate-400/80">{t.gasless}</p>
              </div>
            ) : (
              <div className="text-center">
                {/* Success message */}
                <div className="flex items-center justify-center gap-2 text-green-400 mb-4">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">{t.claimed}</span>
                </div>

                {/* MEMO Balance */}
                {memoBalance !== null && (
                  <div className="mb-4">
                    <div className="text-xs text-slate-400 mb-1">
                      Tu saldo MEMO
                    </div>
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                      {parseFloat(memoBalance).toFixed(0)} MEMO
                    </div>
                  </div>
                )}

                {/* Etherscan link */}
                {txHash && (
                  <a
                    href={`https://sepolia.etherscan.io/tx/${txHash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-xs rounded-lg bg-slate-700/50 text-cyan-400 hover:text-cyan-300 hover:bg-slate-700 transition-colors"
                  >
                    {t.viewOnEtherscan}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="bg-slate-800/30 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 mb-6">
            <p className="text-center text-slate-400 mb-4">{t.needMore}</p>
            <Button
              onClick={() => router.push(`/${lng}/game`)}
              className="w-full py-4 text-lg font-bold rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-500"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              {t.tryAgain}
            </Button>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Button
            variant="outline"
            onClick={() => router.push(`/${lng}/game`)}
            className="flex-1 py-3 px-4 rounded-xl text-sm bg-slate-800/50 backdrop-blur-sm border-slate-600/50 text-slate-200 hover:bg-slate-700/50 hover:border-cyan-500/50 hover:text-white transition-all duration-300"
          >
            <Home className="w-4 h-4 mr-2" />
            {t.backToLobby}
          </Button>
          <Button
            variant="outline"
            onClick={() => router.push(`/${lng}/game/leaderboard`)}
            className="flex-1 py-3 px-4 rounded-xl text-sm bg-slate-800/50 backdrop-blur-sm border-slate-600/50 text-slate-200 hover:bg-slate-700/50 hover:border-purple-500/50 hover:text-white transition-all duration-300"
          >
            <Crown className="w-4 h-4 mr-2" />
            {t.viewLeaderboard}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function GameResultsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <div className="text-cyan-400 animate-pulse text-xl">Loading...</div>
        </div>
      }
    >
      <GameResultsContent />
    </Suspense>
  );
}
