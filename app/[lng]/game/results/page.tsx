"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import Image from "next/image";
import { Crown, Wallet, ExternalLink, CheckCircle, Home } from "lucide-react";
import { useWallets } from "@privy-io/react-auth";
import { createWalletClient, custom } from "viem";
import { sepolia } from "viem/chains";
import { createGaslessAccount, MEMO_CONTRACT_ADDRESS } from "@/lib/zerodev";
import { MEMO_QUIZ_REWARDS_ABI } from "@/lib/abi";
import { Button } from "@/components/ui/button";

const translations = {
  en: {
    victory: "VICTORY",
    defeat: "TRY AGAIN!",
    perfectScore: "PERFECT SCORE",
    score: "Score",
    youEarned: "REWARD UNLOCKED",
    memoTokens: "MEMO Tokens",
    claimReward: "CLAIM REWARD",
    claiming: "Claiming...",
    claimed: "CLAIMED!",
    needMore: "Score 8/10 to earn tokens",
    tryAgain: "Play Again",
    backToLobby: "Lobby",
    viewLeaderboard: "Leaderboard",
    loading: "Loading results...",
    gasless: "Gasless • No fees",
    viewOnEtherscan: "View on Etherscan",
    loginRequired: "Login to claim",
    yourBalance: "Your Balance",
    attemptsLeft: "attempts left today",
    attemptLeft: "attempt left today",
    noAttemptsLeft: "No attempts left today",
    playAgainCta: "PLAY AGAIN",
  },
  es: {
    victory: "¡VICTORIA!",
    defeat: "¡INTÉNTALO DE NUEVO!",
    perfectScore: "PUNTUACIÓN PERFECTA",
    score: "Puntuación",
    youEarned: "RECOMPENSA DESBLOQUEADA",
    memoTokens: "Tokens MEMO",
    claimReward: "RECLAMAR",
    claiming: "Reclamando...",
    claimed: "¡RECLAMADO!",
    needMore: "Necesitas 8/10 para ganar tokens",
    tryAgain: "Jugar de Nuevo",
    backToLobby: "Lobby",
    viewLeaderboard: "Clasificación",
    loading: "Cargando resultados...",
    gasless: "Sin gas • Sin comisiones",
    viewOnEtherscan: "Ver en Etherscan",
    loginRequired: "Inicia sesión para reclamar",
    yourBalance: "Tu Saldo",
    attemptsLeft: "intentos restantes hoy",
    attemptLeft: "intento restante hoy",
    noAttemptsLeft: "Sin intentos hoy",
    playAgainCta: "JUGAR DE NUEVO",
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
    remainingAttempts?: number;
  } | null>(null);
  const [claiming, setClaiming] = useState(false);
  const [claimed, setClaimed] = useState(false);
  const [txHash, setTxHash] = useState<string | null>(null);
  const [memoBalance, setMemoBalance] = useState<string | null>(null);

  const { wallets } = useWallets();

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

      // Celebration animation is now handled via CSS (no confetti)
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

      // Celebration is via CSS animation (sparkles)
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
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, rgba(2, 6, 23, 0.7), rgba(15, 23, 42, 0.6)), url('/images/wallpapers/quiz-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="text-cyan-400 animate-pulse text-xl">{t.loading}</div>
      </div>
    );
  }

  if (!results) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, rgba(2, 6, 23, 0.7), rgba(15, 23, 42, 0.6)), url('/images/wallpapers/quiz-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <Button onClick={() => router.push(`/${lng}/game`)}>
          {t.backToLobby}
        </Button>
      </div>
    );
  }

  const isWinner = results.canClaimReward;

  return (
    <div
      className="min-h-screen p-4 relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, rgba(2, 6, 23, 0.7), rgba(15, 23, 42, 0.6)), url('/images/wallpapers/quiz-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Animated celebration background */}
      {isWinner && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>
      )}

      <div className="relative z-10 container mx-auto max-w-2xl pt-8 sm:pt-12 px-4">
        {/* Victory/Defeat Title */}
        <h1
          className={`text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-wider sm:tracking-widest mb-8 sm:mb-14 ${
            isWinner
              ? "bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent"
              : "text-slate-400"
          }`}
          style={{
            fontFamily: "var(--font-orbitron), system-ui",
            filter: isWinner
              ? "drop-shadow(0 0 40px rgba(34,211,238,0.6))"
              : "none",
          }}
        >
          {isWinner ? t.victory : t.defeat}
        </h1>

        {/* Main Content - Different layout for winner vs loser */}
        {isWinner ? (
          /* Winner: Show both token and score cards side by side */
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10">
            {/* Token Reward Card */}
            <div className="relative backdrop-blur-xl rounded-2xl p-8 aspect-square flex flex-col items-center justify-center bg-slate-900/70 border-2 border-cyan-500/60 shadow-[0_0_40px_rgba(34,211,238,0.25),inset_0_0_30px_rgba(34,211,238,0.05)]">
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-400 rounded-tl-xl" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan-400 rounded-tr-xl" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyan-400 rounded-bl-xl" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-400 rounded-br-xl" />

              {/* Token Icon */}
              <div className="mb-6">
                <div
                  className="w-24 h-24 rounded-2xl flex items-center justify-center bg-cyan-500/10"
                  style={{
                    boxShadow:
                      "0 0 40px rgba(34,211,238,0.3), inset 0 0 20px rgba(34,211,238,0.1)",
                  }}
                >
                  <Image
                    src="/images/logos/memo-token.png"
                    alt="MEMO Token"
                    width={64}
                    height={64}
                    className="drop-shadow-[0_0_20px_rgba(34,211,238,0.6)]"
                  />
                </div>
              </div>

              {/* Token Amount */}
              <div
                className="text-3xl sm:text-4xl font-black mb-2 text-white"
                style={{ fontFamily: "var(--font-orbitron), system-ui" }}
              >
                10 {t.memoTokens}
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
                {t.youEarned}
              </p>
            </div>

            {/* Score Circle Card */}
            <div className="relative backdrop-blur-xl rounded-2xl p-8 flex flex-col items-center justify-center bg-slate-900/70 border-2 border-purple-500/60 shadow-[0_0_40px_rgba(168,85,247,0.25),inset_0_0_30px_rgba(168,85,247,0.05)]">
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-purple-400 rounded-tl-xl" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-purple-400 rounded-tr-xl" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-purple-400 rounded-bl-xl" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-purple-400 rounded-br-xl" />

              <div className="flex flex-col items-center justify-center">
                {/* Circular Progress */}
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 mb-4">
                  <div
                    className="absolute inset-0 rounded-full opacity-50"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(34,211,238,0.3) 0%, rgba(168,85,247,0.2) 50%, transparent 70%)",
                      filter: "blur(10px)",
                    }}
                  />
                  <svg
                    className="w-full h-full transform -rotate-90"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="48"
                      stroke="url(#outerRingGradient)"
                      strokeWidth="1"
                      fill="none"
                      opacity="0.4"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      stroke="#334155"
                      strokeWidth="4"
                      fill="none"
                      opacity="0.5"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      stroke="url(#scoreGradient)"
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray={`${(results.score / results.totalQuestions) * 264} 264`}
                      strokeLinecap="round"
                      className="transition-all duration-1000"
                      style={{
                        filter: "drop-shadow(0 0 6px rgba(34,211,238,0.8))",
                      }}
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="36"
                      stroke="rgba(168,85,247,0.3)"
                      strokeWidth="1"
                      fill="none"
                    />
                    <defs>
                      <linearGradient
                        id="outerRingGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#22d3ee" />
                        <stop offset="50%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#22d3ee" />
                      </linearGradient>
                      <linearGradient
                        id="scoreGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#22d3ee" />
                        <stop offset="100%" stopColor="#a855f7" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span
                      className="text-2xl sm:text-3xl font-black text-white"
                      style={{
                        fontFamily: "var(--font-orbitron), system-ui",
                        textShadow: "0 0 20px rgba(34,211,238,0.5)",
                      }}
                    >
                      {results.score}
                      <span className="text-purple-400">/</span>
                      {results.totalQuestions}
                    </span>
                  </div>
                </div>
                <p
                  className={`text-xs uppercase tracking-[0.2em] ${results.score === results.totalQuestions ? "text-purple-400" : "text-slate-500"}`}
                  style={{ fontFamily: "var(--font-orbitron), system-ui" }}
                >
                  {results.score === results.totalQuestions
                    ? t.perfectScore
                    : t.score}
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* Loser: Show only score centered, attempts remaining, and play again CTA */
          <div className="flex flex-col items-center mb-8 sm:mb-10">
            {/* Score Circle - Larger and centered */}
            <div className="relative backdrop-blur-xl rounded-2xl p-8 sm:p-10 flex flex-col items-center justify-center bg-slate-800/40 border border-slate-700/50 mb-6">
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-slate-600 rounded-tl-xl" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-slate-600 rounded-tr-xl" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-slate-600 rounded-bl-xl" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-slate-600 rounded-br-xl" />

              <div className="flex flex-col items-center justify-center">
                {/* Circular Progress - Larger for loser view */}
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 mb-4">
                  <svg
                    className="w-full h-full transform -rotate-90"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      stroke="#334155"
                      strokeWidth="4"
                      fill="none"
                      opacity="0.5"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      stroke="url(#scoreGradientLoser)"
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray={`${(results.score / results.totalQuestions) * 264} 264`}
                      strokeLinecap="round"
                      className="transition-all duration-1000"
                      style={{
                        filter: "drop-shadow(0 0 4px rgba(100,116,139,0.5))",
                      }}
                    />
                    <defs>
                      <linearGradient
                        id="scoreGradientLoser"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#64748b" />
                        <stop offset="100%" stopColor="#94a3b8" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span
                      className="text-3xl sm:text-4xl font-black text-white"
                      style={{ fontFamily: "var(--font-orbitron), system-ui" }}
                    >
                      {results.score}
                      <span className="text-slate-500">/</span>
                      {results.totalQuestions}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-slate-400 mb-2">{t.needMore}</p>
              </div>
            </div>

            {/* Remaining attempts */}
            {results.remainingAttempts !== undefined && (
              <p className="text-slate-400 text-sm mb-6">
                {results.remainingAttempts === 0 ? (
                  <span className="text-amber-400">{t.noAttemptsLeft}</span>
                ) : (
                  <>
                    <span className="text-cyan-400 font-bold">
                      {results.remainingAttempts}
                    </span>{" "}
                    {results.remainingAttempts === 1
                      ? t.attemptLeft
                      : t.attemptsLeft}
                  </>
                )}
              </p>
            )}

            {/* Play Again CTA Button */}
            {results.remainingAttempts !== 0 && (
              <button
                onClick={() => router.push(`/${lng}/game`)}
                className="w-full max-w-xs py-4 px-8 text-lg font-black uppercase tracking-wider rounded-xl
                  bg-gradient-to-r from-cyan-600 to-teal-500
                  border-2 border-cyan-400/50
                  shadow-[0_0_20px_rgba(34,211,238,0.3)]
                  hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]
                  hover:scale-[1.02]
                  text-white transition-all duration-300"
                style={{ fontFamily: "var(--font-orbitron), system-ui" }}
              >
                {t.playAgainCta}
              </button>
            )}
          </div>
        )}

        {/* Claim Button - Cyberpunk style like mockup */}
        {isWinner && (
          <div className="mb-8 sm:mb-10">
            {!claimed ? (
              <div className="relative">
                {/* Glow effect behind button */}
                <div
                  className="absolute inset-0 rounded-xl blur-md opacity-50"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(34,211,238,0.5) 0%, rgba(168,85,247,0.5) 100%)",
                  }}
                />
                <button
                  onClick={handleClaimReward}
                  disabled={claiming || !results.rewardSignature}
                  className="relative w-full py-5 px-8 text-xl font-black uppercase tracking-[0.15em] rounded-xl
                    bg-gradient-to-r from-cyan-500/90 via-teal-400/90 to-purple-500/90
                    border-2 border-cyan-400/70
                    shadow-[0_0_30px_rgba(34,211,238,0.4),inset_0_1px_0_rgba(255,255,255,0.2)]
                    hover:shadow-[0_0_50px_rgba(34,211,238,0.6),0_0_80px_rgba(168,85,247,0.4)]
                    hover:scale-[1.02] hover:border-cyan-300
                    disabled:opacity-50 disabled:hover:scale-100 disabled:hover:shadow-none
                    text-white transition-all duration-300"
                  style={{ fontFamily: "var(--font-orbitron), system-ui" }}
                >
                  {claiming ? (
                    <span className="flex items-center justify-center gap-3">
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      {t.claiming}
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-3">
                      <Wallet className="w-6 h-6" />
                      {t.claimReward}
                    </span>
                  )}
                </button>
              </div>
            ) : (
              <div className="text-center p-4 rounded-xl bg-green-500/10 border border-green-500/30">
                <div className="flex items-center justify-center gap-2 text-green-400 mb-3">
                  <CheckCircle className="w-6 h-6" />
                  <span
                    className="text-xl font-bold"
                    style={{ fontFamily: "var(--font-orbitron), system-ui" }}
                  >
                    {t.claimed}
                  </span>
                </div>

                {memoBalance !== null && (
                  <div className="mb-3">
                    <p className="text-xs text-slate-400 mb-1">
                      {t.yourBalance}
                    </p>
                    <p
                      className="text-2xl font-bold text-white"
                      style={{ fontFamily: "var(--font-orbitron), system-ui" }}
                    >
                      {parseFloat(memoBalance).toFixed(0)} MEMO
                    </p>
                  </div>
                )}

                {txHash && (
                  <a
                    href={`https://sepolia.etherscan.io/tx/${txHash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-4 py-2 text-sm rounded-lg bg-slate-800/50 text-cyan-400 hover:text-cyan-300 hover:bg-slate-700/50 transition-colors border border-slate-700"
                  >
                    {t.viewOnEtherscan}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            )}
            <p className="text-center text-xs text-slate-500 mt-2">
              {t.gasless}
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <button
            onClick={() => router.push(`/${lng}/game`)}
            className="py-3 px-4 text-sm font-semibold uppercase tracking-wider rounded-xl
              bg-slate-800/60 backdrop-blur-sm border border-slate-600/50 text-slate-300
              hover:bg-slate-700/60 hover:border-cyan-500/50 hover:text-white
              transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            {t.backToLobby}
          </button>
          <button
            onClick={() => router.push(`/${lng}/game/leaderboard`)}
            className="py-3 px-4 text-sm font-semibold uppercase tracking-wider rounded-xl
              bg-slate-800/60 backdrop-blur-sm border border-slate-600/50 text-slate-300
              hover:bg-slate-700/60 hover:border-purple-500/50 hover:text-white
              transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Crown className="w-4 h-4" />
            {t.viewLeaderboard}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function GameResultsPage() {
  return (
    <Suspense
      fallback={
        <div
          className="min-h-screen flex items-center justify-center"
          style={{
            backgroundImage:
              "linear-gradient(to bottom right, rgba(2, 6, 23, 0.7), rgba(15, 23, 42, 0.6)), url('/images/wallpapers/quiz-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="text-cyan-400 animate-pulse text-xl">Loading...</div>
        </div>
      }
    >
      <GameResultsContent />
    </Suspense>
  );
}
