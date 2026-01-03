"use client"

import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { EnrolledCourses } from "@/components/dashboard/enrolled-courses"
import Link from "next/link"
import Image from "next/image"
import { MainNav } from "@/components/main-nav"
import { useAuthModal } from "@/contexts/auth-modal-context"
import { User } from "lucide-react"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useAchievements } from "@/hooks/use-achievements"
import { ACHIEVEMENTS, getAchievements } from "@/lib/achievements-data"
import { useParams } from "next/navigation"

interface Profile {
  full_name: string | null
  avatar_url: string | null
}

const translations = {
  en: {
    loading: "Loading...",
    access_required: "Access Required",
    login_msg: "Please log in to access your dashboard.",
    login_btn: "Log In",
    welcome: "Welcome to Your Dashboard",
    your_profile: "Your Profile",
    name: "Name:",
    email: "Email:",
    user_id: "User ID:",
    membership: "Membership:",
    role: "Explorer (Free)",
    edit_profile: "Edit Profile",
    your_courses: "Your Courses",
    achievements: "Achievements",
    loading_achievements: "Loading achievements...",
    no_badges: "No badges earned yet",
    unlock_msg: "Complete course sections to unlock achievements!",
    unlocked: "Unlocked",
    locked: "Locked"
  },
  es: {
    loading: "Cargando...",
    access_required: "Acceso Requerido",
    login_msg: "Por favor inicia sesión para acceder a tu panel.",
    login_btn: "Iniciar Sesión",
    welcome: "Bienvenido a tu Panel",
    your_profile: "Tu Perfil",
    name: "Nombre:",
    email: "Email:",
    user_id: "ID Usuario:",
    membership: "Membresía:",
    role: "Explorador (Gratis)",
    edit_profile: "Editar Perfil",
    your_courses: "Tus Cursos",
    achievements: "Logros",
    loading_achievements: "Cargando logros...",
    no_badges: "Aún no has ganado insignias",
    unlock_msg: "¡Completa secciones para desbloquear logros!",
    unlocked: "Desbloqueados",
    locked: "Bloqueado"
  }
}

export default function DashboardPage() {
  const { user, isLoading } = useAuth()
  const { openLogin } = useAuthModal()
  const { lng } = useParams<{ lng: string }>()
  const [profile, setProfile] = useState<Profile | null>(null)
  const [profileLoading, setProfileLoading] = useState(true)

  const t = translations[lng as keyof typeof translations] || translations.en

  // Fetch profile data from Supabase
  useEffect(() => {
    async function fetchProfile() {
      if (!user) {
        setProfileLoading(false)
        return
      }

      try {
        const { data, error } = await supabase
          .from("profiles")
          .select("full_name, avatar_url")
          .eq("id", user.id)
          .single()

        if (error && error.code !== "PGRST116") {
          console.error("Error fetching profile:", error)
        }

        if (data) {
          setProfile(data as Profile)
        }
      } catch (err) {
        console.error("Error:", err)
      } finally {
        setProfileLoading(false)
      }
    }

    if (user) {
      fetchProfile()
    }
  }, [user])

  // If still loading, show loading state
  if (isLoading || profileLoading) {
    return (
      <div className="min-h-screen bg-slate-950">
        <MainNav lng={lng} />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-slate-800 rounded w-64 mx-auto mb-8"></div>
              <div className="h-32 bg-slate-800 rounded mb-8"></div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="h-48 bg-slate-800 rounded"></div>
                <div className="h-48 bg-slate-800 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // If not authenticated, show login prompt
  if (!user) {
    return (
      <div className="min-h-screen bg-slate-950">
        <MainNav lng={lng} />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center">
            <h1 className="text-3xl font-bold text-white mb-4">{t.access_required}</h1>
            <p className="text-slate-400 mb-8">
              {t.login_msg}
            </p>
            <Button
              onClick={openLogin}
              className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600"
            >
              {t.login_btn}
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <MainNav lng={lng} />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8">{t.welcome}</h1>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg shadow-lg p-6 mb-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="relative flex-shrink-0">
                {profile?.avatar_url ? (
                  <img
                    src={profile.avatar_url}
                    alt="Profile"
                    className="w-24 h-24 rounded-full border-4 border-cyan-500/30 shadow-lg shadow-cyan-500/20 object-cover"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center border-4 border-cyan-500/30 shadow-lg shadow-cyan-500/20">
                    <span className="text-4xl font-bold text-white">
                      {profile?.full_name?.charAt(0).toUpperCase() || user.email?.charAt(0).toUpperCase() || "U"}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h2 className="text-xl font-semibold text-white mb-4">{t.your_profile}</h2>
                <div className="space-y-2 text-slate-300">
                  {profile?.full_name && (
                    <p>
                      <span className="font-medium text-slate-400">{t.name}</span> {profile.full_name}
                    </p>
                  )}
                  <p>
                    <span className="font-medium text-slate-400">{t.email}</span> {user.email}
                  </p>
                  <p>
                    <span className="font-medium text-slate-400">{t.user_id}</span> {user.id.slice(0, 8)}...
                  </p>
                  <p>
                    <span className="font-medium text-slate-400">{t.membership}</span>{" "}
                    <span className="text-cyan-400">{t.role}</span>
                  </p>
                </div>

                <div className="mt-6">
                  <Link href={`/${lng}/profile`}>
                    <Button variant="outline" className="border-slate-600 text-slate-300 hover:text-white">
                      {t.edit_profile}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-4">{t.your_courses}</h2>
              <EnrolledCourses />
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-4">{t.achievements}</h2>
              <AchievementsPreview />
            </div>
          </div>
          </div>
        </div>
      </div>  )
}

function AchievementsPreview() {
  const { achievements, loading } = useAchievements()
  const { lng } = useParams<{ lng: string }>()
  const t = translations[lng as keyof typeof translations] || translations.en

  const achievementsData = getAchievements(lng)

  if (loading) {
    return <div className="text-slate-400">{t.loading_achievements}</div>
  }

  const totalBadges = Object.keys(achievementsData).length
  const unlockedCount = achievements.length

  if (achievements.length === 0) {
    return (
      <div className="text-center py-8">
        <div className="text-6xl mb-3">🎓</div>
        <p className="text-slate-400">{t.no_badges}</p>
        <p className="text-slate-500 text-sm mt-2">{t.unlock_msg}</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-slate-300">{t.unlocked}</span>
        <span className="text-cyan-400 font-bold">{unlockedCount}/{totalBadges}</span>
      </div>

      {/* Show all badges (unlocked and locked) */}
      <div className="grid grid-cols-4 gap-2">
        {Object.values(achievementsData).slice(0, 8).map((achievement) => {
          const isUnlocked = achievements.some(a => a.achievement_id === achievement.id)

          return (
            <div
              key={achievement.id}
              className={`relative aspect-square rounded-lg flex items-center justify-center text-3xl transition-all ${
                isUnlocked
                  ? 'bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 hover:scale-110 cursor-pointer'
                  : 'bg-slate-800/30 border border-slate-700/30 opacity-40 grayscale'
              }`}
              title={isUnlocked ? achievement.name : `🔒 ${achievement.name} (${t.locked})`}
            >
              {achievement.icon}
              {!isUnlocked && (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-950/50 rounded-lg">
                  <span className="text-slate-600 text-2xl">🔒</span>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
