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
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useAchievements } from "@/hooks/use-achievements";
import { getAchievements } from "@/lib/achievements-data";
import { useParams } from "next/navigation";
import { getAllCourses } from "@/lib/courses-data";

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

  const t = translations[lng as keyof typeof translations] || translations.en;

  // Fetch profile and course progress
  useEffect(() => {
    async function fetchData() {
      if (!user) {
        setProfileLoading(false);
        return;
      }

      try {
        // Fetch profile
        const { data: profileData } = await supabase
          .from("profiles")
          .select("full_name, avatar_url")
          .eq("id", user.id)
          .single();

        if (profileData) {
          setProfile(profileData as Profile);
        }

        // Fetch course progress
        const { data: progressData } = await supabase
          .from("course_progress")
          .select("course_id, progress_percentage, last_accessed_at")
          .eq("user_id", user.id)
          .order("last_accessed_at", { ascending: false });

        if (progressData) {
          setCoursesProgress(progressData);

          // Calculate XP (10 points per percent completed across all courses)
          const xp = progressData.reduce(
            (acc, p) => acc + Math.floor(p.progress_percentage * 10),
            0
          );
          setTotalXP(xp);
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
  }, [user]);

  // Calculate stats
  const allCourses = getAllCourses(lng);
  const completedCourses = coursesProgress.filter(
    (p) => p.progress_percentage >= 100
  );
  const completionPercentage =
    coursesProgress.length > 0
      ? Math.round(
          coursesProgress.reduce((acc, p) => acc + p.progress_percentage, 0) /
            coursesProgress.length
        )
      : 0;
  const level = Math.floor(totalXP / 1000) + 1;

  // Get last accessed course for hero
  const lastCourse = coursesProgress[0];
  const lastCourseData = lastCourse
    ? allCourses.find((c) => c.id === lastCourse.course_id)
    : null;

  // Loading state
  if (isLoading || profileLoading) {
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

  // Not authenticated
  if (!user) {
    return (
      <div className="min-h-screen bg-slate-950">
        <MainNav lng={lng} />
        <div className="container mx-auto px-4 py-16">
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
          <div className="flex items-center gap-4">
            {profile?.avatar_url ? (
              <img
                src={profile.avatar_url}
                alt="Profile"
                className="w-14 h-14 rounded-full border-2 border-cyan-500/30 object-cover"
              />
            ) : (
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center border-2 border-cyan-500/30">
                <span className="text-2xl font-bold text-white">
                  {userName.charAt(0).toUpperCase()}
                </span>
              </div>
            )}
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                {t.welcome}, {userName}!
              </h1>
            </div>
          </div>

          {/* Hero: Continue Learning */}
          {lastCourseData ? (
            <ContinueLearning
              courseId={lastCourse.course_id}
              courseTitle={lastCourseData.title}
              courseSlug={lastCourseData.slug}
              currentSection={Math.ceil(
                (lastCourse.progress_percentage / 100) * 8
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

function AchievementsPreview() {
  const { achievements, loading } = useAchievements();
  const { lng } = useParams<{ lng: string }>();
  const t = translations[lng as keyof typeof translations] || translations.en;

  const achievementsData = getAchievements(lng);

  if (loading) {
    return <div className="text-slate-400">{t.loading_achievements}</div>;
  }

  const totalBadges = Object.keys(achievementsData).length;
  const unlockedCount = achievements.length;

  if (achievements.length === 0) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 rounded-2xl bg-slate-700/50 mx-auto mb-4 flex items-center justify-center">
          <span className="text-3xl">🏆</span>
        </div>
        <p className="text-slate-400">{t.no_badges}</p>
        <p className="text-slate-500 text-sm mt-2">{t.unlock_msg}</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-slate-300">{t.unlocked}</span>
        <span className="text-cyan-400 font-bold">
          {unlockedCount}/{totalBadges}
        </span>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {Object.values(achievementsData)
          .slice(0, 8)
          .map((achievement) => {
            const isUnlocked = achievements.some(
              (a) => a.achievement_id === achievement.id
            );

            return (
              <div
                key={achievement.id}
                className={`relative aspect-square rounded-lg flex items-center justify-center text-2xl transition-all ${
                  isUnlocked
                    ? "bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 hover:scale-110 cursor-pointer"
                    : "bg-slate-800/30 border border-slate-700/30 opacity-40 grayscale"
                }`}
                title={
                  isUnlocked
                    ? achievement.name
                    : `🔒 ${achievement.name} (${t.locked})`
                }
              >
                {achievement.icon}
                {!isUnlocked && (
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-950/50 rounded-lg">
                    <span className="text-slate-600 text-lg">🔒</span>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}
