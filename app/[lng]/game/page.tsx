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
  BookOpen,
  Swords,
  Calendar,
  Wallet,
  Brain,
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
    startQuiz: "Play Classic Mode",
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
    howToPlay: "How to Play",
    gameModes: "Game Modes",
    step1Title: "Connect Wallet",
    step1Desc: "Connect your wallet or sign in to track your progress.",
    step2Title: "Answer Quickly",
    step2Desc: "You have 15 seconds per question. Faster = More Points!",
    step3Title: "Earn Rewards",
    step3Desc: "Score 8/10 or higher to earn MEMO tokens.",
    modeClassic: "Classic",
    modeClassicDesc:
      "10 Questions. Progressive Difficulty. The standard challenge.",
    modeSurvival: "Survival",
    modeSurvivalDesc: "3 Lives. Unlimited Questions. How far can you go?",
    modeDaily: "Daily Challenge",
    modeDailyDesc: "Special theme every day. Double rewards.",
    comingSoon: "Coming Soon",
    playNow: "Play Now",
    locked: "Locked",
    guideTitle: "Master the Game",
    guideDesc: "Learn the rules and maximize your earnings.",
  },
  es: {
    title: "Crypto Quiz Challenge",
    subtitle: "¡Pon a prueba tu conocimiento Web3 y gana tokens MEMO!",
    startQuiz: "Jugar Modo Clásico",
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
    howToPlay: "Cómo Jugar",
    gameModes: "Modos de Juego",
    step1Title: "Conecta Wallet",
    step1Desc: "Conecta tu wallet o inicia sesión para guardar tu progreso.",
    step2Title: "Responde Rápido",
    step2Desc: "Tienes 10s por pregunta. ¡Más rápido = Más Puntos!",
    step3Title: "Gana Recompensas",
    step3Desc: "Acierta 8/10 o más para ganar tokens MEMO.",
    modeClassic: "Clásico",
    modeClassicDesc:
      "10 Preguntas. Dificultad Progresiva. El desafío estándar.",
    modeSurvival: "Supervivencia",
    modeSurvivalDesc: "3 Vidas. Preguntas Ilimitadas. ¿Hasta dónde llegarás?",
    modeDaily: "Desafío Diario",
    modeDailyDesc: "Tema especial cada día. Recompensas dobles.",
    comingSoon: "Próximamente",
    playNow: "Jugar Ahora",
    locked: "Bloqueado",
    guideTitle: "Domina el Juego",
    guideDesc: "Aprende las reglas y maximiza tus ganancias.",
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
  const { wallets } = useWallets();

  const embeddedWallet = wallets.find(
    (w) => w.walletClientType === "privy" || w.connectorType === "embedded",
  );

  const { isBlocked, blockReason } = useWalletBlacklistCheck();

  const [loading, setLoading] = useState(true);
  const [starting, setStarting] = useState(false);
  const [remainingAttempts, setRemainingAttempts] = useState<number | null>(
    null,
  );
  const [nextResetTime, setNextResetTime] = useState<string | null>(null);
  const [countdown, setCountdown] = useState("");
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [userStats, setUserStats] = useState({
    gamesPlayed: 0,
    bestScore: 0,
    totalScore: 0,
  });

  useEffect(() => {
    if (!authLoading && user) {
      fetchData();
    } else if (!authLoading && !user) {
      setLoading(false);
    }
  }, [authLoading, user]);

  useEffect(() => {
    if (nextResetTime) {
      const interval = setInterval(() => {
        const diff = new Date(nextResetTime).getTime() - Date.now();
        if (diff <= 0) {
          setCountdown("");
          setRemainingAttempts(5);
          setNextResetTime(null);
        } else {
          const hours = Math.floor(diff / (1000 * 60 * 60));
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((diff % (1000 * 60)) / 1000);
          setCountdown(
            `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`,
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

  const handleStartQuiz = async (mode = "classic") => {
    setStarting(true);
    try {
      const res = await fetch("/api/game/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode }),
      });
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
        <div className="flex flex-col gap-16">
          {/* Section 1: Hero & Stats */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full">
            {/* Left Column: Game Info */}
            <div className="w-full lg:col-span-8 space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
                  <Brain className="w-4 h-4" />
                  <span>Beta 2.0</span>
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-slate-400 leading-tight">
                  Crypto Quiz <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                    Challenge
                  </span>
                </h1>
                <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
                  {t.subtitle}
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-slate-900/40 border border-slate-800/60 p-4 rounded-xl backdrop-blur-sm text-center">
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">
                    {t.gamesPlayed}
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {userStats.gamesPlayed}
                  </div>
                </div>
                <div className="bg-slate-900/40 border border-slate-800/60 p-4 rounded-xl backdrop-blur-sm text-center">
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">
                    {t.bestScore}
                  </div>
                  <div className="text-2xl font-bold text-teal-400">
                    {userStats.bestScore}/10
                  </div>
                </div>
                <div className="bg-slate-900/40 border border-slate-800/60 p-4 rounded-xl backdrop-blur-sm text-center">
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">
                    {t.totalMemo}
                  </div>
                  <div className="text-2xl font-bold text-purple-400">
                    {userStats.totalScore}
                  </div>
                </div>
                <div className="bg-slate-900/40 border border-slate-800/60 p-4 rounded-xl backdrop-blur-sm text-center">
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">
                    {t.attemptsToday}
                  </div>
                  <div className="text-2xl font-bold text-yellow-400">
                    {remainingAttempts}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Leaderboard Preview */}
            <div className="w-full lg:col-span-4">
              <div className="bg-gradient-to-b from-slate-800/40 to-slate-900/40 backdrop-blur-xl border border-white/5 rounded-3xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                    {t.leaderboard}
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => router.push(`/${lng}/game/leaderboard`)}
                    className="text-slate-400 hover:text-white"
                  >
                    {t.viewAll} <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
                <div className="space-y-3">
                  {leaderboard.map((entry, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-colors"
                    >
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
                          index === 0
                            ? "bg-yellow-500/20 text-yellow-400"
                            : index === 1
                              ? "bg-slate-400/20 text-slate-300"
                              : index === 2
                                ? "bg-orange-500/20 text-orange-400"
                                : "bg-slate-800 text-slate-500"
                        }`}
                      >
                        {entry.rank}
                      </div>
                      <div className="flex-1 truncate text-sm text-slate-300">
                        {entry.email.split("@")[0]}
                      </div>
                      <div className="text-cyan-400 font-mono font-bold text-sm">
                        {entry.totalScore}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Game Modes */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Swords className="w-6 h-6 text-cyan-400" />
              {t.gameModes}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Classic Mode - Active */}
              <div className="group relative bg-slate-900/60 border border-cyan-500/30 rounded-2xl p-6 overflow-hidden hover:border-cyan-500/60 transition-all duration-300">
                <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Gamepad2 className="w-24 h-24 text-cyan-400" />
                </div>
                <div className="relative z-10 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                    <Gamepad2 className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {t.modeClassic}
                    </h3>
                    <p className="text-sm text-slate-400">
                      {t.modeClassicDesc}
                    </p>
                  </div>
                  <Button
                    onClick={() => handleStartQuiz("classic")}
                    disabled={
                      starting || remainingAttempts === 0 || !embeddedWallet
                    }
                    className="w-full bg-cyan-600 hover:bg-cyan-500 text-white"
                  >
                    {remainingAttempts === 0 && countdown
                      ? countdown
                      : t.playNow}
                  </Button>
                </div>
              </div>

              {/* Survival Mode */}
              <div className="group relative bg-slate-900/60 border border-purple-500/30 rounded-2xl p-6 overflow-hidden hover:border-purple-500/60 transition-all duration-300">
                <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Zap className="w-24 h-24 text-purple-400" />
                </div>
                <div className="relative z-10 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {t.modeSurvival}
                    </h3>
                    <p className="text-sm text-slate-400">
                      {t.modeSurvivalDesc}
                    </p>
                  </div>
                  <Button
                    onClick={() => handleStartQuiz("survival")}
                    disabled={
                      starting || remainingAttempts === 0 || !embeddedWallet
                    }
                    className="w-full bg-purple-600 hover:bg-purple-500 text-white"
                  >
                    {remainingAttempts === 0 && countdown
                      ? countdown
                      : t.playNow}
                  </Button>
                </div>
              </div>

              {/* Daily Mode - Coming Soon */}
              <div className="relative bg-slate-900/40 border border-slate-800 rounded-2xl p-6 overflow-hidden grayscale opacity-75">
                <div className="absolute inset-0 bg-slate-950/60 z-20 flex items-center justify-center">
                  <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-bold text-slate-400">
                    {t.comingSoon}
                  </span>
                </div>
                <div className="space-y-4 opacity-50">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {t.modeDaily}
                    </h3>
                    <p className="text-sm text-slate-400">{t.modeDailyDesc}</p>
                  </div>
                  <Button disabled className="w-full" variant="secondary">
                    {t.locked}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: How to Play */}
          <div className="bg-slate-900/30 border border-slate-800 rounded-3xl p-8 lg:p-12">
            <div className="text-center mb-10">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3 flex items-center justify-center gap-3">
                <BookOpen className="w-8 h-8 text-indigo-400" />
                {t.guideTitle}
              </h2>
              <p className="text-slate-400">{t.guideDesc}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connector Line (Desktop) */}
              <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-slate-700 to-transparent z-0" />

              {/* Step 1 */}
              <div className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-6 py-4 shadow-xl group-hover:border-indigo-500/50 transition-colors duration-300">
                  <Wallet className="w-10 h-10 text-indigo-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {t.step1Title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed px-4">
                  {t.step1Desc}
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-6 py-4 shadow-xl group-hover:border-cyan-500/50 transition-colors duration-300">
                  <Clock className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {t.step2Title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed px-4">
                  {t.step2Desc}
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-6 py-4 shadow-xl group-hover:border-yellow-500/50 transition-colors duration-300">
                  <Medal className="w-10 h-10 text-yellow-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {t.step3Title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed px-4">
                  {t.step3Desc}
                </p>
              </div>
            </div>
          </div>

          {!embeddedWallet && user && (
            <div className="text-center">
              <p className="text-amber-400 font-medium bg-amber-500/10 inline-block px-4 py-2 rounded-full border border-amber-500/20">
                ⚠{" "}
                {lng === "es"
                  ? "Activa tu Smart Wallet para jugar y reclamar recompensas"
                  : "Activate Smart Wallet to play and claim rewards"}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
