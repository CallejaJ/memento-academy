"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"

import { supabase } from "@/lib/supabase"
import { useAuth } from "@/contexts/auth-context"
import { getAllCourses } from "@/lib/courses-data"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { 
  ArrowRight, 
  BookOpen, 
  Trophy,
  Blocks, 
  Coins, 
  Landmark, 
  Shield, 
  TrendingUp, 
  Palette, 
  Code, 
  LineChart, 
  PieChart, 
  Layers,
  Activity,
  CreditCard,
  Building,
  Lock,
  Globe,
  Wallet,
  LucideIcon
} from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  Blocks,
  Coins,
  Landmark,
  Shield,
  TrendingUp,
  Palette,
  Code,
  LineChart,
  PieChart,
  Layers,
  Activity,
  CreditCard,
  Building,
  Lock,
  Globe,
  Wallet
}

interface EnrolledCourse {
  course_id: string
  progress_percentage: number
  last_accessed_at: string
}

const translations = {
  en: {
    loading: "Loading your courses...",
    login_prompt: "Log in to track your progress and see your courses.",
    login_btn: "Log In",
    no_courses: "No courses started yet",
    start_learning: "Start learning today by exploring our catalog.",
    browse_btn: "Browse Courses",
    completed: "Completed",
    continue: "Continue"
  },
  es: {
    loading: "Cargando tus cursos...",
    login_prompt: "Inicia sesión para ver tu progreso y tus cursos.",
    login_btn: "Iniciar Sesión",
    no_courses: "No has empezado ningún curso",
    start_learning: "Empieza a aprender hoy explorando nuestro catálogo.",
    browse_btn: "Explorar Cursos",
    completed: "Completado",
    continue: "Continuar"
  }
}

export function EnrolledCourses() {
  const { user } = useAuth()
  const [enrolled, setEnrolled] = useState<EnrolledCourse[]>([])
  const [loading, setLoading] = useState(true)
  const { lng } = useParams<{ lng: string }>()
  const t = translations[lng as keyof typeof translations] || translations.en

  useEffect(() => {
    if (user) {
      fetchEnrolledCourses()
    } else {
      setLoading(false)
    }
  }, [user])

  const fetchEnrolledCourses = async () => {
    if (!user) return
    try {
      const { data, error } = await supabase
        .from("course_progress")
        .select("course_id, progress_percentage, last_accessed_at")
        .eq("user_id", user?.id)
        .order("last_accessed_at", { ascending: false })

      if (data) {
        setEnrolled(data)
      }
    } catch (error) {
      console.error("Error fetching courses:", error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div className="text-slate-400">{t.loading}</div>
  }

  if (!user) {
    return (
      <Card className="bg-slate-800/50 border-slate-700">
        <CardContent className="p-6 text-center">
          <p className="text-slate-400 mb-4">{t.login_prompt}</p>
          <Link href={`/${lng}/profile`}>
            <Button variant="outline">{t.login_btn}</Button>
          </Link>
        </CardContent>
      </Card>
    )
  }

  if (enrolled.length === 0) {
    return (
      <Card className="bg-slate-800/50 border-slate-700">
        <CardContent className="p-8 text-center">
          <div className="w-12 h-12 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-6 h-6 text-slate-400" />
          </div>
          <h3 className="text-white font-semibold mb-2">{t.no_courses}</h3>
          <p className="text-slate-400 mb-6">{t.start_learning}</p>
          <Link href={`/${lng}/courses`}>
            <Button className="bg-gradient-to-r from-cyan-500 to-teal-500">
              {t.browse_btn}
            </Button>
          </Link>
        </CardContent>
      </Card>
    )
  }

  const courses = getAllCourses(lng)

  return (
    <div className="grid gap-4">
      {enrolled.map((item) => {
        const course = courses.find(c => c.id === item.course_id)
        // If course not found in current language, fallback to English list to ensure card renders
        const fallbackCourse = !course ? getAllCourses('en').find(c => c.id === item.course_id) : null
        const displayCourse = course || fallbackCourse

        if (!displayCourse) return null

        return (
          <Card key={item.course_id} className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-colors">
            <div className="p-4 flex flex-col sm:flex-row gap-4 items-center">
              <div className={`p-3 rounded-lg bg-${displayCourse.color}-500/10 border border-${displayCourse.color}-500/20`}>
                {(() => {
                  const Icon = iconMap[displayCourse.icon] || Blocks
                  return <Icon className={`w-6 h-6 text-${displayCourse.color}-400`} />
                })()}
              </div>
              
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-white font-semibold">{displayCourse.title}</h3>
                <div className="flex items-center gap-2 justify-center sm:justify-start mt-1">
                  <Progress value={item.progress_percentage} className="h-2 w-24 bg-slate-700" />
                  <span className="text-xs text-slate-400">{item.progress_percentage}%</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {item.progress_percentage === 100 && (
                  <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
                    <Trophy className="w-3 h-3 mr-1" />
                    {t.completed}
                  </Badge>
                )}
                <Link href={`/${lng}/learn/${displayCourse.slug}`}>
                  <Button size="sm" variant="secondary" className="bg-slate-700 hover:bg-slate-600">
                    {t.continue} <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
