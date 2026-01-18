"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import {
  Crown,
  Medal,
  Trophy,
  ArrowLeft,
  Wallet,
  Flame,
  Infinity as InfinityIcon,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const translations = {
  en: {
    title: "Leaderboard",
    subtitle: "Top 100 Quiz Champions",
    rank: "Rank",
    player: "Player",
    games: "Games",
    best: "Best",
    total: "Total",
    loading: "Loading champions...",
    noData: "No players yet. Be the first!",
    backToGame: "Back to Game",
    modes: {
      classic: "Classic",
      survival: "Survival",
      daily: "Daily",
    },
  },
  es: {
    title: "Clasificación",
    subtitle: "Top 100 Campeones del Quiz",
    rank: "Puesto",
    player: "Jugador",
    games: "Partidas",
    best: "Mejor",
    total: "Total",
    loading: "Cargando campeones...",
    noData: "Aún no hay pioneros. ¡Sé el primero!",
    backToGame: "Volver al Juego",
    modes: {
      classic: "Clásico",
      survival: "Supervivencia",
      daily: "Diario",
    },
  },
};

interface LeaderboardEntry {
  rank: number;
  email: string;
  display_name?: string;
  walletAddress: string | null;
  gamesPlayed: number;
  bestScore: number;
  totalScore: number;
  avgScore: number;
}

type GameMode = "classic" | "survival" | "daily";

export default function LeaderboardPage() {
  const { lng } = useParams<{ lng: string }>();
  const t = translations[lng as keyof typeof translations] || translations.en;

  const [activeMode, setActiveMode] = useState<GameMode>("classic");
  const [loading, setLoading] = useState(true);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    fetchLeaderboard(activeMode);
  }, [activeMode]);

  const fetchLeaderboard = async (mode: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/game/leaderboard?mode=${mode}`);
      if (res.ok) {
        const data = await res.json();
        setLeaderboard(data.leaderboard);
      }
    } catch (error) {
      console.error("Failed to fetch leaderboard:", error);
    } finally {
      setLoading(false);
    }
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-yellow-400 fill-yellow-400/20" />;
      case 2:
        return <Medal className="w-6 h-6 text-slate-300 fill-slate-300/20" />;
      case 3:
        return <Medal className="w-6 h-6 text-amber-700 fill-amber-700/20" />;
      default:
        return null;
    }
  };

  return (
    <div
      className="min-h-screen py-8 px-4 sm:px-6 relative overflow-x-hidden"
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, rgba(2, 6, 23, 0.8), rgba(15, 23, 42, 0.8)), url('/images/wallpapers/quiz-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto max-w-4xl min-w-0 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex items-start gap-3">
            <Link href={`/${lng}/game`}>
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-xl shrink-0 mt-1"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div className="min-w-0">
              <h1
                className="text-2xl sm:text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-400 flex items-center gap-2 tracking-wide"
                style={{
                  fontFamily: "var(--font-orbitron), sans-serif",
                  textShadow: "0 0 30px rgba(6,182,212,0.3)",
                }}
              >
                <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)] shrink-0" />
                <span className="truncate">{t.title}</span>
              </h1>
              <p className="text-slate-400 mt-1 text-sm sm:text-base font-medium tracking-wide">
                {t.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex justify-center mb-8 w-full">
          <div className="bg-slate-900/60 backdrop-blur-xl p-1 rounded-xl border border-slate-700/50 flex shadow-[0_0_20px_rgba(0,0,0,0.3)] w-full sm:w-auto overflow-x-auto max-w-full scrollbar-none">
            <button
              onClick={() => setActiveMode("classic")}
              className={cn(
                "flex-1 sm:flex-none px-3 sm:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 whitespace-nowrap min-w-fit",
                activeMode === "classic"
                  ? "bg-gradient-to-r from-cyan-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/20"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50",
              )}
            >
              <Flame
                className={cn(
                  "w-4 h-4 shrink-0",
                  activeMode === "classic" ? "text-white" : "text-slate-500",
                )}
              />
              {t.modes.classic}
            </button>
            <button
              onClick={() => setActiveMode("survival")}
              className={cn(
                "flex-1 sm:flex-none px-3 sm:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 whitespace-nowrap min-w-fit",
                activeMode === "survival"
                  ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg shadow-purple-500/20"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50",
              )}
            >
              <InfinityIcon
                className={cn(
                  "w-4 h-4 shrink-0",
                  activeMode === "survival" ? "text-white" : "text-slate-500",
                )}
              />
              {t.modes.survival}
            </button>
            <button
              onClick={() => setActiveMode("daily")}
              className={cn(
                "flex-1 sm:flex-none px-3 sm:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 whitespace-nowrap min-w-fit",
                activeMode === "daily"
                  ? "bg-gradient-to-r from-yellow-500 to-amber-500 text-black shadow-lg shadow-yellow-500/20"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50",
              )}
            >
              <Calendar
                className={cn(
                  "w-4 h-4 shrink-0",
                  activeMode === "daily" ? "text-black" : "text-slate-500",
                )}
              />
              {t.modes.daily}
            </button>
          </div>
        </div>

        {/* Glassmorphic Table Container */}
        <div className="relative bg-slate-900/40 backdrop-blur-md rounded-3xl border border-white/5 overflow-hidden shadow-2xl">
          {/* Decorative gradients */}
          <div
            className={`absolute top-0 inset-x-0 h-px ${activeMode === "classic" ? "bg-gradient-to-r from-transparent via-cyan-500 to-transparent" : "bg-gradient-to-r from-transparent via-purple-500 to-transparent"} opacity-50`}
          />

          {loading ? (
            <div className="text-center py-20">
              <div
                className={cn(
                  "w-12 h-12 border-4 border-t-transparent rounded-full animate-spin mx-auto mb-4",
                  activeMode === "classic"
                    ? "border-cyan-400"
                    : "border-purple-400",
                )}
              />
              <div
                className={cn(
                  "animate-pulse font-bold tracking-widest uppercase",
                  activeMode === "classic"
                    ? "text-cyan-400"
                    : "text-purple-400",
                )}
              >
                {t.loading}
              </div>
            </div>
          ) : leaderboard.length === 0 ? (
            <div className="text-center py-20 text-slate-400">
              <Trophy className="w-16 h-16 mx-auto mb-4 opacity-20" />
              <p className="text-lg">{t.noData}</p>
            </div>
          ) : (
            <>
              {/* Table Header */}
              <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-black/20 text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-white/5">
                <div className="col-span-1 text-center">{t.rank}</div>
                <div className="col-span-5">{t.player}</div>
                <div className="col-span-2 text-center">{t.games}</div>
                <div className="col-span-2 text-center">{t.best}</div>
                <div className="col-span-2 text-right pr-4">{t.total}</div>
              </div>

              {/* Leaderboard Entries Carousel */}
              <div className="divide-y divide-white/5">
                {leaderboard.map((entry, index) => (
                  <div
                    key={index}
                    className={cn(
                      "grid grid-cols-12 gap-4 items-center px-6 py-4 transition-colors hover:bg-white/5 group",
                      entry.rank <= 3 && "bg-white/5", // Slight highlight for top 3
                    )}
                  >
                    {/* Rank */}
                    <div className="col-span-2 md:col-span-1 flex justify-center">
                      <div
                        className={cn(
                          "w-8 h-8 flex items-center justify-center rounded-lg font-bold text-sm",
                          entry.rank === 1 &&
                            "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20",
                          entry.rank === 2 &&
                            "bg-slate-300/10 text-slate-300 border border-slate-300/20",
                          entry.rank === 3 &&
                            "bg-amber-700/10 text-amber-600 border border-amber-700/20",
                          entry.rank > 3 && "text-slate-500",
                        )}
                      >
                        {entry.rank <= 3
                          ? getRankIcon(entry.rank)
                          : `#${entry.rank}`}
                      </div>
                    </div>

                    {/* Player */}
                    <div className="col-span-10 md:col-span-5">
                      <div className="flex flex-col">
                        <span
                          className={cn(
                            "font-bold text-sm md:text-base truncate",
                            entry.rank === 1
                              ? "text-yellow-100"
                              : "text-slate-200",
                          )}
                        >
                          {entry.display_name ||
                            entry.email?.split("@")[0] ||
                            "Anonymous"}
                        </span>
                        {entry.walletAddress && (
                          <div className="flex items-center gap-1.5 mt-0.5 text-xs text-slate-500 font-mono">
                            <Wallet className="w-3 h-3" />
                            {entry.walletAddress}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Games */}
                    <div className="col-span-4 md:col-span-2 text-center flex flex-col md:block">
                      <span className="md:hidden text-[10px] text-slate-600 uppercase font-bold text-left mb-1">
                        {t.games}
                      </span>
                      <span className="text-slate-400 font-mono">
                        {entry.gamesPlayed}
                      </span>
                    </div>

                    {/* Best Score */}
                    <div className="col-span-4 md:col-span-2 text-center flex flex-col md:block">
                      <span className="md:hidden text-[10px] text-slate-600 uppercase font-bold text-left mb-1">
                        {t.best}
                      </span>
                      <span
                        className={cn(
                          "font-mono font-bold",
                          activeMode === "survival"
                            ? "text-purple-400"
                            : "text-teal-400",
                        )}
                      >
                        {entry.bestScore}
                      </span>
                    </div>

                    {/* Total Score */}
                    <div className="col-span-4 md:col-span-2 text-right pr-4 flex flex-col md:block">
                      <span className="md:hidden text-[10px] text-slate-600 uppercase font-bold text-right mb-1">
                        {t.total}
                      </span>
                      <span
                        className={cn(
                          "text-lg font-black tracking-tight",
                          activeMode === "survival"
                            ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
                            : "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400",
                        )}
                      >
                        {new Intl.NumberFormat(
                          lng === "es" ? "es-ES" : "en-US",
                        ).format(entry.totalScore)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
