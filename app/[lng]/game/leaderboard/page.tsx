"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Crown, Medal, Trophy, ArrowLeft, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const translations = {
  en: {
    title: "Leaderboard",
    subtitle: "Top 100 Quiz Champions",
    rank: "Rank",
    player: "Player",
    games: "Games",
    best: "Best",
    total: "Total",
    loading: "Loading...",
    noData: "No players yet. Be the first!",
    backToGame: "Back to Game",
  },
  es: {
    title: "Clasificación",
    subtitle: "Top 100 Campeones del Quiz",
    rank: "Puesto",
    player: "Jugador",
    games: "Partidas",
    best: "Mejor",
    total: "Total",
    loading: "Cargando...",
    noData: "Aún no hay jugadores. ¡Sé el primero!",
    backToGame: "Volver al Juego",
  },
};

interface LeaderboardEntry {
  rank: number;
  email: string;
  walletAddress: string | null;
  gamesPlayed: number;
  bestScore: number;
  totalScore: number;
  avgScore: number;
}

export default function LeaderboardPage() {
  const { lng } = useParams<{ lng: string }>();
  const t = translations[lng as keyof typeof translations] || translations.en;

  const [loading, setLoading] = useState(true);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    try {
      const res = await fetch("/api/game/leaderboard");
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
        return <Crown className="w-6 h-6 text-yellow-400" />;
      case 2:
        return <Medal className="w-6 h-6 text-slate-400" />;
      case 3:
        return <Medal className="w-6 h-6 text-amber-700" />;
      default:
        return null;
    }
  };

  const getRankStyle = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-500/50";
      case 2:
        return "bg-gradient-to-r from-slate-500/20 to-slate-400/20 border-slate-400/50";
      case 3:
        return "bg-gradient-to-r from-amber-700/20 to-orange-700/20 border-amber-700/50";
      default:
        return "bg-slate-800/30 border-slate-700/50";
    }
  };

  return (
    <div
      className="min-h-screen py-8 px-4"
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, rgba(2, 6, 23, 0.6), rgba(15, 23, 42, 0.5)), url('/images/wallpapers/quiz-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto max-w-3xl">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href={`/${lng}/game`}>
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-400 hover:text-white"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-white flex items-center gap-2">
              <Trophy className="w-8 h-8 text-yellow-400" />
              {t.title}
            </h1>
            <p className="text-slate-400">{t.subtitle}</p>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12 text-cyan-400 animate-pulse">
            {t.loading}
          </div>
        ) : leaderboard.length === 0 ? (
          <div className="text-center py-12 text-slate-400">{t.noData}</div>
        ) : (
          <>
            {/* Table Header */}
            <div className="hidden md:grid grid-cols-12 gap-4 px-4 py-2 text-sm text-slate-500 uppercase tracking-wide">
              <div className="col-span-1">{t.rank}</div>
              <div className="col-span-5">{t.player}</div>
              <div className="col-span-2 text-center">{t.games}</div>
              <div className="col-span-2 text-center">{t.best}</div>
              <div className="col-span-2 text-right">{t.total}</div>
            </div>

            {/* Leaderboard Entries */}
            <div className="space-y-2">
              {leaderboard.map((entry) => (
                <div
                  key={entry.rank}
                  className={`grid grid-cols-12 gap-4 items-center p-4 rounded-2xl border transition-all hover:scale-[1.01] ${getRankStyle(entry.rank)}`}
                >
                  {/* Rank */}
                  <div className="col-span-2 md:col-span-1 flex items-center gap-2">
                    {getRankIcon(entry.rank) || (
                      <span
                        className={`text-lg font-bold ${
                          entry.rank <= 10 ? "text-cyan-400" : "text-slate-500"
                        }`}
                      >
                        #{entry.rank}
                      </span>
                    )}
                  </div>

                  {/* Player */}
                  <div className="col-span-10 md:col-span-5">
                    <div className="font-medium text-white">{entry.email}</div>
                    {entry.walletAddress && (
                      <div className="text-xs text-slate-500 flex items-center gap-1">
                        <Wallet className="w-3 h-3" />
                        {entry.walletAddress}
                      </div>
                    )}
                  </div>

                  {/* Games */}
                  <div className="col-span-4 md:col-span-2 text-center">
                    <span className="md:hidden text-xs text-slate-500 block">
                      {t.games}
                    </span>
                    <span className="text-slate-300">{entry.gamesPlayed}</span>
                  </div>

                  {/* Best Score */}
                  <div className="col-span-4 md:col-span-2 text-center">
                    <span className="md:hidden text-xs text-slate-500 block">
                      {t.best}
                    </span>
                    <span className="text-teal-400 font-medium">
                      {entry.bestScore}/10
                    </span>
                  </div>

                  {/* Total Score */}
                  <div className="col-span-4 md:col-span-2 text-right">
                    <span className="md:hidden text-xs text-slate-500 block">
                      {t.total}
                    </span>
                    <span className="text-cyan-400 font-bold text-lg">
                      {entry.totalScore}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Back Button */}
        <div className="mt-8 text-center">
          <Link href={`/${lng}/game`}>
            <Button className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400">
              {t.backToGame}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
