"use client";

import { useAuth } from "@/contexts/auth-context";
import { Button } from "@/components/ui/button";
import { EnrolledCourses } from "@/components/dashboard/enrolled-courses";
import { ProgressStats } from "@/components/dashboard/progress-stats";
import {
  ContinueLearning,
  ContinueLearningEmpty,
} from "@/components/dashboard/continue-learning";
import { RecommendedCourses } from "@/components/dashboard/recommended-courses";
import Link from "next/link";
import { MainNav } from "@/components/main-nav";
import { useAuthModal } from "@/contexts/auth-modal-context";
import { useEffect, useState, useRef } from "react";
import { supabase } from "@/lib/supabase";
import { useAchievements } from "@/hooks/use-achievements";
import { getAchievements } from "@/lib/achievements-data";
import { useParams } from "next/navigation";
import { getAllCourses } from "@/lib/courses-data";
import { Settings } from "lucide-react";
import { AchievementsPreview } from "@/components/dashboard/achievements-preview";
import { GamePromo } from "@/components/dashboard/game-promo";
import { useWallets } from "@privy-io/react-auth";

interface Profile {
  full_name: string | null;
  avatar_url: string | null;
}

interface CourseProgress {
  course_id: string;
  progress_percentage: number;
  last_accessed_at: string;
}

const translations = {
  en: {
    loading: "Loading...",
    access_required: "Access Required",
    login_msg: "Please log in to access your dashboard.",
    login_btn: "Log In",
    welcome: "Welcome back",
    your_courses: "Your Courses",
    achievements: "Achievements",
    loading_achievements: "Loading achievements...",
    no_badges: "No badges earned yet",
    unlock_msg: "Complete course sections to unlock achievements!",
    unlocked: "Unlocked",
    locked: "Locked",
    edit_profile: "Edit Profile",
  },
  es: {
    loading: "Cargando...",
    access_required: "Acceso Requerido",
    login_msg: "Por favor inicia sesión para acceder a tu panel.",
    login_btn: "Iniciar Sesión",
    welcome: "Bienvenido de nuevo",
    your_courses: "Tus Cursos",
    achievements: "Logros",
    loading_achievements: "Cargando logros...",
    no_badges: "Aún no has ganado insignias",
    unlock_msg: "¡Completa secciones para desbloquear logros!",
    unlocked: "Desbloqueados",
    locked: "Bloqueado",
    edit_profile: "Editar Perfil",
  },
};

export default function DashboardPage() {
  const { user, isLoading } = useAuth();
  const { openLogin } = useAuthModal();
  const { lng } = useParams<{ lng: string }>();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [profileLoading, setProfileLoading] = useState(true);
  const [coursesProgress, setCoursesProgress] = useState<CourseProgress[]>([]);
  const [totalXP, setTotalXP] = useState(0);
  const [streak, setStreak] = useState(0);

  const [gameStats, setGameStats] = useState<{
    gamesPlayed: number;
    totalScore: number;
    bestScore: number;
    remainingAttempts?: number;
  } | null>(null);

  const { wallets } = useWallets(); // Get wallets from Privy

  // Find the embedded wallet
  const embeddedWallet = wallets.find(
    (w) => w.walletClientType === "privy" || w.connectorType === "embedded",
  );

  const t = translations[lng as keyof typeof translations] || translations.en;

  const lastFetchedUserId = useRef<string | null>(null);

  // Fetch profile and course progress
  useEffect(() => {
    async function fetchData() {
      // Guard against null user or repeated fetches for same user
      if (!user?.id || user.id === lastFetchedUserId.current) {
        setProfileLoading(false);
        return;
      }

      // Update ref immediately to block subsequent calls
      lastFetchedUserId.current = user.id;

      try {
        // Fetch profile via Server Action (bypasses RLS)
        const { getProfile } = await import("@/actions/get-profile");
        const { data: profileData, error: profileError } = await getProfile(
          user.id,
        );

        if (profileError) {
          console.error("Dashboard profile fetch error:", profileError);
        }

        if (profileData) {
          console.log("Dashboard profile data loaded:", profileData);
          setProfile(profileData as Profile);
        }

        // Fetch course progress
        const { data: progressData } = (await supabase
          .from("course_progress")
          .select("course_id, progress_percentage, last_accessed_at")
          .eq("user_id", user.id)
          .order("last_accessed_at", { ascending: false })) as {
          data: CourseProgress[] | null;
        };

        if (progressData) {
          setCoursesProgress(progressData);

          // Calculate XP (10 points per percent completed across all courses)
          const xp = progressData.reduce(
            (acc, p) => acc + Math.floor(p.progress_percentage * 10),
            0,
          );
          setTotalXP(xp);
        }

        // Fetch game stats
        try {
          const res = await fetch(`/api/game/stats?userId=${user.id}`);
          if (res.ok) {
            const stats = await res.json();
            setGameStats(stats);
          }
        } catch (e) {
          console.error("Failed to fetch game stats", e);
        }

        // TODO: Calculate streak from activity log (for now, mock it)
        setStreak(3);
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setProfileLoading(false);
      }
    }

    if (user) {
      fetchData();
    }
  }, [user?.id]);

  // Calculate stats
  const allCourses = getAllCourses(lng);
  const completedCourses = coursesProgress.filter(
    (p) => p.progress_percentage >= 100,
  );
  const completionPercentage =
    coursesProgress.length > 0
      ? Math.round(
          coursesProgress.reduce((acc, p) => acc + p.progress_percentage, 0) /
            coursesProgress.length,
        )
      : 0;
  const level = Math.floor(totalXP / 1000) + 1;

  // Get last accessed course for hero
  const lastCourse = coursesProgress[0];
  const lastCourseData = lastCourse
    ? allCourses.find((c) => c.id === lastCourse.course_id)
    : null;

  // Auth is still loading
  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-950">
        <MainNav lng={lng} />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="animate-pulse space-y-6">
              <div className="h-40 bg-slate-800 rounded-2xl"></div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="h-24 bg-slate-800 rounded-xl"></div>
                <div className="h-24 bg-slate-800 rounded-xl"></div>
                <div className="h-24 bg-slate-800 rounded-xl"></div>
                <div className="h-24 bg-slate-800 rounded-xl"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="h-64 bg-slate-800 rounded-xl"></div>
                <div className="h-64 bg-slate-800 rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Not authenticated - show login prompt
  if (!user) {
    return (
      <div
        className="min-h-screen"
        style={{
          backgroundImage: "url('/images/wallpapers/quiz-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <MainNav lng={lng} />
        <div className="container mx-auto px-4 pt-32 pb-16">
          <div className="max-w-md mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border border-cyan-500/30 mx-auto mb-6 flex items-center justify-center">
              <span className="text-4xl">🔐</span>
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">
              {t.access_required}
            </h1>
            <p className="text-slate-400 mb-8">{t.login_msg}</p>
            <Button
              onClick={openLogin}
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600"
            >
              {t.login_btn}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // User exists but profile data is still loading
  if (profileLoading) {
    return (
      <div className="min-h-screen bg-slate-950">
        <MainNav lng={lng} />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="animate-pulse space-y-6">
              <div className="h-40 bg-slate-800 rounded-2xl"></div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="h-24 bg-slate-800 rounded-xl"></div>
                <div className="h-24 bg-slate-800 rounded-xl"></div>
                <div className="h-24 bg-slate-800 rounded-xl"></div>
                <div className="h-24 bg-slate-800 rounded-xl"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="h-64 bg-slate-800 rounded-xl"></div>
                <div className="h-64 bg-slate-800 rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const userName =
    profile?.full_name?.split(" ")[0] ||
    user.email?.split("@")[0] ||
    "Explorer";

  return (
    <div className="min-h-screen bg-slate-950">
      <MainNav lng={lng} />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Welcome Header */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <Link
                href={`/${lng}/profile`}
                className="relative group flex-shrink-0"
              >
                {profile?.avatar_url ? (
                  <img
                    src={profile.avatar_url}
                    alt="Profile"
                    className="w-14 h-14 rounded-full border-2 border-cyan-500/30 object-cover group-hover:border-cyan-500 transition-colors"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center border-2 border-cyan-500/30 group-hover:border-cyan-500 transition-colors">
                    <span className="text-2xl font-bold text-white">
                      {userName.charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 rounded-full bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <Settings className="w-5 h-5 text-white" />
                </div>
              </Link>
              <div className="min-w-0 flex-1">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white break-words">
                  {t.welcome}, {userName}!
                </h1>
              </div>
            </div>
            <Link href={`/${lng}/profile`} className="sm:flex-shrink-0">
              <Button
                variant="outline"
                size="sm"
                className="w-full sm:w-auto border-slate-600 text-slate-300 hover:text-white"
              >
                <Settings className="w-4 h-4 mr-2" />
                {t.edit_profile}
              </Button>
            </Link>
          </div>

          {/* Game Promo */}
          <GamePromo
            stats={gameStats || undefined}
            walletAddress={embeddedWallet?.address}
          />

          {/* Hero: Continue Learning */}
          {lastCourseData ? (
            <ContinueLearning
              courseId={lastCourse.course_id}
              courseTitle={lastCourseData.title}
              courseSlug={lastCourseData.slug}
              currentSection={Math.ceil(
                (lastCourse.progress_percentage / 100) * 8,
              )}
              totalSections={8}
              progressPercentage={lastCourse.progress_percentage}
            />
          ) : (
            <ContinueLearningEmpty />
          )}

          {/* Stats Grid */}
          <ProgressStats
            totalXP={totalXP}
            streak={streak}
            level={level}
            completionPercentage={completionPercentage}
          />

          {/* Two Column: Courses + Achievements */}
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">
                {t.your_courses}
              </h2>
              <EnrolledCourses />
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">
                {t.achievements}
              </h2>
              <AchievementsPreview />
            </div>
          </div>

          {/* Recommended Courses */}
          <RecommendedCourses
            completedCourseIds={completedCourses.map((c) => c.course_id)}
          />
        </div>
      </div>
    </div>
  );
}
