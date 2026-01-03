"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import { 
  ArrowRight, 
  Clock, 
  BarChart3, 
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
import { Course } from "@/lib/courses-data"
import { cn } from "@/lib/utils"

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

interface CourseCardProps {
  course: Course
  progress?: number // 0-100
  showProgress?: boolean
  lng: string
}

const difficultyColors = {
  beginner: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  intermediate: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  advanced: "bg-red-500/10 text-red-400 border-red-500/20"
}

const colorVariants: Record<string, string> = {
  cyan: "from-cyan-500/20 to-cyan-500/5 border-cyan-500/30 hover:border-cyan-500/50",
  teal: "from-teal-500/20 to-teal-500/5 border-teal-500/30 hover:border-teal-500/50",
  emerald: "from-emerald-500/20 to-emerald-500/5 border-emerald-500/30 hover:border-emerald-500/50",
  red: "from-red-500/20 to-red-500/5 border-red-500/30 hover:border-red-500/50",
  purple: "from-purple-500/20 to-purple-500/5 border-purple-500/30 hover:border-purple-500/50",
  pink: "from-pink-500/20 to-pink-500/5 border-pink-500/30 hover:border-pink-500/50",
  blue: "from-blue-500/20 to-blue-500/5 border-blue-500/30 hover:border-blue-500/50",
  orange: "from-orange-500/20 to-orange-500/5 border-orange-500/30 hover:border-orange-500/50",
  green: "from-green-500/20 to-green-500/5 border-green-500/30 hover:border-green-500/50",
  indigo: "from-indigo-500/20 to-indigo-500/5 border-indigo-500/30 hover:border-indigo-500/50",
}

const iconColors: Record<string, string> = {
  cyan: "text-cyan-400",
  teal: "text-teal-400",
  emerald: "text-emerald-400",
  red: "text-red-400",
  purple: "text-purple-400",
  pink: "text-pink-400",
  blue: "text-blue-400",
  orange: "text-orange-400",
  green: "text-green-400",
  indigo: "text-indigo-400",
}

export function CourseCard({ course, progress = 0, showProgress = false, lng }: CourseCardProps) {
  const Icon = iconMap[course.icon] || Blocks
  
  return (
    <Link href={`/${lng}${course.href}`}>
      <Card className="h-full min-h-[360px] bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-colors flex flex-col">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className={cn("p-2 rounded-lg bg-slate-800", iconColors[course.color])}>
              <Icon className="w-6 h-6" />
            </div>
            <div className="flex gap-2">
              <Badge className={difficultyColors[course.difficulty]}>
                {course.difficulty}
              </Badge>
              {!course.isPremium && (
                <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
                  Free
                </Badge>
              )}
            </div>
          </div>
          <CardTitle className="text-white text-xl mt-4">{course.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-400 text-sm line-clamp-2">{course.description}</p>
          
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {course.duration}
            </div>
            <div className="flex items-center gap-1">
              <BarChart3 className="w-4 h-4" />
              {course.sections.length} sections
            </div>
          </div>
          
          {showProgress && progress > 0 && (
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">Progress</span>
                <span className="text-cyan-400">{progress}%</span>
              </div>
              <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}
          
          <div className="flex items-center text-cyan-400 text-sm font-medium pt-2">
            Start Learning <ArrowRight className="w-4 h-4 ml-2" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
