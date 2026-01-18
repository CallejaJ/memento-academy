"use client";

import { Button } from "@/components/ui/button";
import { Gamepad2, Trophy, Coins, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { createPublicClient, http, formatUnits } from "viem";
import { sepolia } from "viem/chains";

const MEMO_CONTRACT_ADDRESS = process.env
  .NEXT_PUBLIC_MEMO_CONTRACT_ADDRESS as `0x${string}`;

const publicClient = createPublicClient({
  chain: sepolia,
  transport: http(
    typeof window !== "undefined" ? undefined : "https://rpc.sepolia.org/",
  ),
});

interface GamePromoProps {
  stats?: {
    gamesPlayed: number;
    totalScore: number;
    bestScore: number;
    remainingAttempts?: number;
    earnedTokens?: number;
  };
  walletAddress?: string; // Wallet address passed from parent
}

const translations = {
  en: {
    title: "Crypto Quiz Challenge",
    subtitle: "Test your knowledge and earn MEMO tokens daily!",
    playNow: "Play Now",
    totalEarned: "Total Score",
    gamesPlayed: "Games Played",
    bestScore: "Best Score",
    dailyAttempts: "Attempts Left",
    memoEarned: "MEMO Earned",
  },
  es: {
    title: "Crypto Quiz Challenge",
    subtitle: "¡Pon a prueba tu conocimiento y gana tokens MEMO cada día!",
    playNow: "Jugar Ahora",
    totalEarned: "Puntos Totales",
    gamesPlayed: "Partidas",
    bestScore: "Mejor Puntuación",
    dailyAttempts: "Intentos Restantes",
    memoEarned: "MEMO Ganados",
  },
};

export function GamePromo({ stats, walletAddress }: GamePromoProps) {
  const { lng } = useParams<{ lng: string }>();
  const t = translations[lng as keyof typeof translations] || translations.en;
  const [memoBalance, setMemoBalance] = useState<string | null>(null);
  const [loadingBalance, setLoadingBalance] = useState(true);

  const remainingAttempts = stats?.remainingAttempts;

  // Fetch MEMO balance from contract
  useEffect(() => {
    const fetchMemoBalance = async () => {
      console.log("[GamePromo] fetchMemoBalance iniciado");
      console.log("[GamePromo] walletAddress:", walletAddress);
      console.log("[GamePromo] MEMO_CONTRACT_ADDRESS:", MEMO_CONTRACT_ADDRESS);

      if (!walletAddress || !MEMO_CONTRACT_ADDRESS) {
        console.log("[GamePromo] No wallet o contract address");
        setLoadingBalance(false);
        return;
      }

      try {
        const balance = await publicClient.readContract({
          address: MEMO_CONTRACT_ADDRESS,
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

        const formatted = formatUnits(balance as bigint, 18);
        console.log("[GamePromo] Balance obtenido:", formatted);
        setMemoBalance(formatted);
      } catch (error) {
        console.error("[GamePromo] Error fetching MEMO balance:", error);
      } finally {
        setLoadingBalance(false);
      }
    };

    fetchMemoBalance();
  }, [walletAddress]);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-purple-500/30 bg-gradient-to-br from-indigo-950 via-purple-900/50 to-slate-900 p-8 shadow-2xl transition-all hover:border-purple-500/50 hover:shadow-purple-500/20">
      {/* Background Effects */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl"></div>

      <div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/50 bg-purple-500/20 px-4 py-1.5 text-sm font-bold text-purple-100 shadow-lg shadow-purple-500/10">
            <Zap className="h-4 w-4 fill-purple-200 text-purple-200" />
            <span>{remainingAttempts ?? "..."}</span>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              {t.title}
            </h2>
            <p className="text-sm text-slate-300 max-w-lg leading-relaxed">
              {t.subtitle}
            </p>
          </div>
        </div>

        {/* Stats Grid & Button */}
        <div className="lg:col-span-5 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {/* MEMO Balance - Moved here */}
            <div className="rounded-xl border border-purple-500/30 bg-purple-500/10 p-3 text-center backdrop-blur-sm shadow-[0_0_15px_rgba(168,85,247,0.15)]">
              <div className="text-xl sm:text-2xl font-bold text-yellow-300">
                {walletAddress
                  ? loadingBalance
                    ? "..."
                    : memoBalance
                      ? parseFloat(memoBalance).toFixed(0)
                      : "0"
                  : stats?.earnedTokens || 0}
              </div>
              <div className="text-[10px] sm:text-xs uppercase tracking-wider text-purple-200 mt-1 font-semibold">
                {t.memoEarned}
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center backdrop-blur-sm">
              <div className="text-xl sm:text-2xl font-bold text-white">
                {stats?.totalScore || 0}
              </div>
              <div className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-400 mt-1">
                {t.totalEarned}
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center backdrop-blur-sm">
              <div className="text-xl sm:text-2xl font-bold text-white">
                {stats?.bestScore || 0}
              </div>
              <div className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-400 mt-1">
                {t.bestScore}
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center backdrop-blur-sm">
              <div className="text-xl sm:text-2xl font-bold text-white">
                {stats?.gamesPlayed || 0}
              </div>
              <div className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-400 mt-1">
                {t.gamesPlayed}
              </div>
            </div>
          </div>

          <Link href={`/${lng}/game`} className="block">
            <Button className="w-full group h-10 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 px-6 text-sm font-bold shadow-lg shadow-purple-500/25 transition-all hover:scale-[1.02] hover:from-purple-400 hover:to-indigo-500 hover:shadow-purple-500/40">
              <Gamepad2 className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
              {t.playNow}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
