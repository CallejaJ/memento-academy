"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import {
  Trophy,
  Gamepad2,
  Clock,
  Zap,
  ChevronRight,
  Crown,
  Medal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MainNav } from "@/components/main-nav";
import { WalletCard } from "@/components/game/wallet-card";
import { useAuth } from "@/contexts/auth-context";
import { useAuthModal } from "@/contexts/auth-modal-context";
import { Lock, ShieldX } from "lucide-react";
import { useWalletBlacklistCheck } from "@/lib/use-wallet-blacklist";

import { useWallets } from "@privy-io/react-auth";

const translations = {
  en: {
    title: "Crypto Quiz Challenge",
    subtitle: "Test your Web3 knowledge and earn MEMO tokens!",
    startQuiz: "Play",
    attemptsToday: "Attempts",
    nextQuizIn: "Next quiz available in",
    yourStats: "Your Stats",
    gamesPlayed: "Games Played",
    bestScore: "Best Score",
    totalMemo: "Total Score",
    leaderboard: "Leaderboard",
    viewAll: "View All",
    loading: "Loading...",
    loginRequired: "Login required to play",
    noAttempts: "No attempts left today",
    comeBackTomorrow: "Come back tomorrow for more!",
    playDailyTtl: "Play Daily!",
    playDailyMsg:
      "Earn MEMO tokens every day to unlock premium courses and exclusive NFTs. Reset happens at midnight UTC.",
    xpPerQuestion: "Earn 100 Points per correct answer",
  },
  es: {
    title: "Crypto Quiz Challenge",
    subtitle: "¡Pon a prueba tu conocimiento Web3 y gana tokens MEMO!",
    startQuiz: "Jugar",
    attemptsToday: "Intentos",
    nextQuizIn: "Próximo quiz disponible en",
    yourStats: "Tus Estadísticas",
    gamesPlayed: "Partidas",
    bestScore: "Mejor",
    totalMemo: "Puntos",
    leaderboard: "Clasificación",
    viewAll: "Ver Todo",
    loading: "Cargando...",
    loginRequired: "Inicia sesión para jugar",
    noAttempts: "No quedan intentos hoy",
    comeBackTomorrow: "¡Vuelve mañana para más!",
    playDailyTtl: "¡Juega a Diario!",
    playDailyMsg:
      "Gana tokens MEMO cada día para desbloquear cursos premium y NFTs exclusivos. El reinicio es a medianoche UTC.",
    xpPerQuestion: "Gana 100 Puntos por acierto",
  },
};

interface LeaderboardEntry {
  rank: number;
  email: string;
  totalScore: number;
  bestScore: number;
}

export default function GameLobbyPage() {
  const { lng } = useParams<{ lng: string }>();
  const router = useRouter();
  const t = translations[lng as keyof typeof translations] || translations.en;
  const { user, isLoading: authLoading } = useAuth();
  const { openLogin } = useAuthModal();
  const { wallets } = useWallets(); // Para detectar Smart Wallet

  // Detectar si el usuario tiene una Smart Wallet activa
  const embeddedWallet = wallets.find(
    (w) => w.walletClientType === "privy" || w.connectorType === "embedded"
  );

  const { isBlocked, blockReason } = useWalletBlacklistCheck();

  const [loading, setLoading] = useState(true);
  const [starting, setStarting] = useState(false);
  const [remainingAttempts, setRemainingAttempts] = useState<number | null>(
    null
  ); // Initialize null to show loading state or wait for fetch
  const [nextResetTime, setNextResetTime] = useState<string | null>(null);
  const [countdown, setCountdown] = useState("");
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [userStats, setUserStats] = useState({
    gamesPlayed: 0,
    bestScore: 0,
    totalScore: 0,
  });

  useEffect(() => {
    // Wait for auth to be ready before fetching data
    if (!authLoading && user) {
      fetchData();
    } else if (!authLoading && !user) {
      // Not logged in, stop loading
      setLoading(false);
    }
  }, [authLoading, user]);

  useEffect(() => {
    if (nextResetTime) {
      const interval = setInterval(() => {
        const diff = new Date(nextResetTime).getTime() - Date.now();
        if (diff <= 0) {
          setCountdown("");
          setRemainingAttempts(3);
          setNextResetTime(null);
        } else {
          const hours = Math.floor(diff / (1000 * 60 * 60));
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((diff % (1000 * 60)) / 1000);
          setCountdown(
            `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
          );
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [nextResetTime]);

  const fetchData = async () => {
    try {
      const [leaderboardRes, statsRes] = await Promise.all([
        fetch("/api/game/leaderboard"),
        fetch("/api/game/stats"),
      ]);

      if (leaderboardRes.ok) {
        const data = await leaderboardRes.json();
        setLeaderboard(data.leaderboard.slice(0, 5));
      }

      if (statsRes.ok) {
        const stats = await statsRes.json();
        setUserStats({
          gamesPlayed: stats.gamesPlayed || 0,
          bestScore: stats.bestScore || 0,
          totalScore: stats.totalScore || 0,
        });
        if (typeof stats.remainingAttempts === "number") {
          setRemainingAttempts(stats.remainingAttempts);
        }
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleStartQuiz = async () => {
    setStarting(true);
    try {
      const res = await fetch("/api/game/start", { method: "POST" });
      const data = await res.json();

      if (!res.ok) {
        if (res.status === 429) {
          setRemainingAttempts(0);
          setNextResetTime(data.nextResetAt);
        }
        return;
      }

      setRemainingAttempts(data.remainingAttempts);
      router.push(`/${lng}/game/play?session=${data.sessionToken}`);
    } catch (error) {
      console.error("Failed to start quiz:", error);
    } finally {
      setStarting(false);
    }
  };

  if (loading || authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="text-cyan-400 animate-pulse">{t.loading}</div>
      </div>
    );
  }

  // Check if wallet is blacklisted
  if (isBlocked) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-950/30 via-slate-950 to-slate-950 relative overflow-hidden">
        <MainNav lng={lng} />
        <div className="container mx-auto px-4 h-[calc(100vh-80px)] flex items-center justify-center">
          <div className="max-w-md w-full bg-red-950/30 border border-red-800/50 rounded-2xl p-8 text-center backdrop-blur-sm">
            <div className="w-16 h-16 bg-red-900/50 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ShieldX className="w-8 h-8 text-red-400" />
            </div>
            <h2 className="text-2xl font-bold text-red-400 mb-2">
              {lng === "es" ? "Acceso Denegado" : "Access Denied"}
            </h2>
            <p className="text-slate-400 mb-4">
              {lng === "es"
                ? "Esta wallet ha sido bloqueada por actividad sospechosa."
                : "This wallet has been blocked due to suspicious activity."}
            </p>
            {blockReason && (
              <p className="text-xs text-red-400/70 mb-6">{blockReason}</p>
            )}
            <p className="text-xs text-slate-500">
              {lng === "es"
                ? "Si crees que esto es un error, contacta con soporte."
                : "If you believe this is an error, please contact support."}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div
        className="min-h-screen relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/wallpapers/quiz-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#0a1628",
        }}
      >
        <MainNav lng={lng} />
        <div className="container mx-auto px-4 h-[calc(100vh-80px)] flex items-center justify-center">
          <div className="max-w-md w-full bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center backdrop-blur-sm">
            <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Lock className="w-8 h-8 text-slate-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              {t.loginRequired}
            </h2>
            <p className="text-slate-400 mb-6">{t.playDailyMsg}</p>
            <Button
              className="w-full bg-cyan-600 hover:bg-cyan-500"
              onClick={openLogin}
            >
              {lng === "es" ? "Iniciar Sesión" : "Log In"}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black relative overflow-hidden">
      <MainNav lng={lng} />

      {/* Hero Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-500/20 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-40 pb-12">
        <div className="max-w-6xl mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full">
          {/* Left Column: Game Info & Start */}
          <div className="w-full lg:col-span-6 space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl min-[400px]:text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-slate-400 leading-tight drop-shadow-lg break-words">
                Crypto Quiz <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  Challenge
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-lg leading-relaxed mb-8">
                {t.subtitle}
              </p>
            </div>

            <div className="relative group w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <Button
                onClick={handleStartQuiz}
                disabled={
                  starting ||
                  remainingAttempts === 0 ||
                  remainingAttempts === null ||
                  !embeddedWallet // CRÍTICO: No permitir jugar sin wallet
                }
                className={`relative w-full h-auto min-h-[6rem] py-4 text-2xl font-bold rounded-2xl transition-all duration-300 border-t border-white/10 ${
                  (remainingAttempts ?? 0) > 0 && embeddedWallet
                    ? "bg-gradient-to-br from-slate-900 to-slate-950 hover:from-slate-800 hover:to-slate-900 text-white shadow-2xl"
                    : "bg-slate-900/50 text-slate-500 cursor-not-allowed"
                }`}
              >
                {starting ? (
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 border-b-2 border-cyan-400 rounded-full animate-spin" />
                    {t.loading}
                  </div>
                ) : remainingAttempts === 0 && countdown ? (
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-normal text-slate-400 mb-1">
                      {t.nextQuizIn}
                    </span>
                    <span className="font-mono text-cyan-400">{countdown}</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-between w-full px-4 sm:px-8 max-w-full">
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/20">
                        <Gamepad2 className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-left min-w-0 flex-1">
                        <div className="text-white font-bold truncate">
                          {t.startQuiz}
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-8 h-8 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                )}
              </Button>
              {!embeddedWallet && user && (
                <div className="mt-3 text-center">
                  <p className="text-xs text-amber-400 font-medium">
                    ⚠{" "}
                    {lng === "es"
                      ? "Activa tu Smart Wallet para jugar y reclamar recompensas →"
                      : "Activate Smart Wallet to play and claim rewards →"}
                  </p>
                </div>
              )}
            </div>

            {/* Quick Stats Row */}
            <div className="grid grid-cols-2 gap-2 sm:gap-4 w-full">
              <div className="bg-slate-900/40 border border-slate-800/60 p-2 sm:p-3 rounded-xl backdrop-blur-sm text-center flex flex-col justify-center min-w-0">
                <div className="text-slate-500 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1 truncate">
                  {t.gamesPlayed}
                </div>
                <div className="text-lg sm:text-2xl font-bold text-white truncate">
                  {userStats.gamesPlayed}
                </div>
              </div>
              <div className="bg-slate-900/40 border border-slate-800/60 p-2 sm:p-3 rounded-xl backdrop-blur-sm text-center flex flex-col justify-center min-w-0">
                <div className="text-slate-500 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1 truncate">
                  {t.bestScore}
                </div>
                <div className="text-lg sm:text-2xl font-bold text-teal-400 truncate">
                  {userStats.bestScore}/10
                </div>
              </div>
              <div className="bg-slate-900/40 border border-slate-800/60 p-2 sm:p-3 rounded-xl backdrop-blur-sm text-center flex flex-col justify-center min-w-0">
                <div className="text-slate-500 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1 truncate">
                  {t.totalMemo}
                </div>
                <div className="text-lg sm:text-2xl font-bold text-purple-400 truncate">
                  {userStats.totalScore}
                </div>
              </div>
              <div className="bg-slate-900/40 border border-slate-800/60 p-2 sm:p-3 rounded-xl backdrop-blur-sm text-center flex flex-col justify-center min-w-0">
                <div className="text-slate-500 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1 truncate">
                  {t.attemptsToday}
                </div>
                <div className="text-lg sm:text-2xl font-bold text-yellow-400 truncate">
                  {remainingAttempts}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Leaderboard */}
          <div className="w-full lg:col-span-6 space-y-6">
            {/* Wallet Info Card */}
            <WalletCard lng={lng} />

            <div className="bg-gradient-to-b from-slate-800/40 to-slate-900/40 backdrop-blur-xl border border-white/5 rounded-3xl p-4 sm:p-6 shadow-2xl w-full">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <div className="p-2 bg-yellow-500/10 rounded-lg">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                  </div>
                  {t.leaderboard}
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => router.push(`/${lng}/game/leaderboard`)}
                  className="text-slate-400 hover:text-white"
                >
                  {t.viewAll}
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>

              <div className="space-y-4">
                {leaderboard.length > 0 ? (
                  leaderboard.map((entry, index) => (
                    <div
                      key={index}
                      className="group flex items-center gap-4 p-3 rounded-2xl transition-all duration-300 hover:bg-white/5 border border-transparent hover:border-white/5 min-w-0"
                    >
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg shadow-lg flex-shrink-0 ${
                          entry.rank === 1
                            ? "bg-gradient-to-br from-yellow-300 to-yellow-600 text-black shadow-yellow-500/20"
                            : entry.rank === 2
                              ? "bg-gradient-to-br from-slate-300 to-slate-500 text-black shadow-slate-500/20"
                              : entry.rank === 3
                                ? "bg-gradient-to-br from-orange-300 to-orange-600 text-black shadow-orange-500/20"
                                : "bg-slate-800 text-slate-400"
                        }`}
                      >
                        {entry.rank}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-white font-medium truncate group-hover:text-cyan-400 transition-colors">
                          {entry.email.split("@")[0]}
                        </div>
                        <div className="text-xs text-slate-500">
                          {entry.bestScore} Points
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="text-cyan-400 font-bold font-mono">
                          {entry.totalScore}
                        </div>
                        <div className="text-[10px] text-slate-500 uppercase">
                          PTS
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-slate-500">
                    {t.loading}
                  </div>
                )}
              </div>
            </div>

            {/* Quick Tips or Info */}
            <div className="bg-indigo-900/20 border border-indigo-500/20 rounded-2xl p-6 w-full">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-indigo-500/10 rounded-lg flex-shrink-0">
                  <Zap className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <h4 className="font-bold text-indigo-100 mb-1">
                    {t.playDailyTtl}
                  </h4>
                  <p className="text-sm text-indigo-200/60">{t.playDailyMsg}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
