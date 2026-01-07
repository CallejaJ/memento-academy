"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Lock,
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
  Globe,
  Wallet,
  LucideIcon,
} from "lucide-react";
import { Course } from "@/lib/courses-data";
import { cn } from "@/lib/utils";
import { useAuthModal } from "@/contexts/auth-modal-context";

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
  Wallet,
};

const translations = {
  en: {
    createAccount: "Create a free account to unlock this premium course",
    unlock: "Unlock Course",
    sections: "sections",
    difficulty: {
      beginner: "Beginner",
      intermediate: "Intermediate",
      advanced: "Advanced",
    },
  },
  es: {
    createAccount:
      "Crea una cuenta gratuita para desbloquear este curso premium",
    unlock: "Desbloquear Curso",
    sections: "secciones",
    difficulty: {
      beginner: "Principiante",
      intermediate: "Intermedio",
      advanced: "Avanzado",
    },
  },
};

interface LockedCourseCardProps {
  course: Course;
  lng: string;
}

const difficultyColors = {
  beginner:
    "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20",
  intermediate:
    "bg-yellow-500/10 text-yellow-400 border-yellow-500/20 hover:bg-yellow-500/20",
  advanced: "bg-red-500/10 text-red-400 border-red-500/20 hover:bg-red-500/20",
};

const colorVariants: Record<string, string> = {
  cyan: "from-cyan-500/20 to-cyan-500/5 border-cyan-500/30",
  teal: "from-teal-500/20 to-teal-500/5 border-teal-500/30",
  emerald: "from-emerald-500/20 to-emerald-500/5 border-emerald-500/30",
  red: "from-red-500/20 to-red-500/5 border-red-500/30",
  purple: "from-purple-500/20 to-purple-500/5 border-purple-500/30",
  pink: "from-pink-500/20 to-pink-500/5 border-pink-500/30",
  blue: "from-blue-500/20 to-blue-500/5 border-blue-500/30",
  orange: "from-orange-500/20 to-orange-500/5 border-orange-500/30",
  green: "from-green-500/20 to-green-500/5 border-green-500/30",
  indigo: "from-indigo-500/20 to-indigo-500/5 border-indigo-500/30",
};

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
};

export function LockedCourseCard({ course, lng }: LockedCourseCardProps) {
  const Icon = iconMap[course.icon] || Blocks;
  const { openSignup } = useAuthModal();
  const t = translations[lng as keyof typeof translations] || translations.en;

  return (
    <div className="relative h-full min-h-[360px]">
      {/* Blurred background card */}
      <Card
        className={cn(
          "h-full bg-gradient-to-br border opacity-60 blur-[2px]",
          colorVariants[course.color] || colorVariants.cyan
        )}
      >
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div
              className={cn(
                "p-2 rounded-lg bg-slate-800/50",
                iconColors[course.color]
              )}
            >
              <Icon className="w-6 h-6" />
            </div>
            <div className="flex gap-2">
              <Badge className={difficultyColors[course.difficulty]}>
                {t.difficulty[course.difficulty]}
              </Badge>
              <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20 hover:bg-purple-500/20">
                Premium
              </Badge>
            </div>
          </div>
          <CardTitle className="text-white text-xl mt-4">
            {course.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-400 text-sm line-clamp-2">
            {course.description}
          </p>

          <div className="flex items-center gap-4 text-sm text-slate-500">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {course.duration}
            </div>
            <div className="flex items-center gap-1">
              <BarChart3 className="w-4 h-4" />
              {course.sections.length} {t.sections}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lock overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/70 rounded-lg backdrop-blur-sm">
        <div className="p-4 rounded-full bg-slate-800/80 border border-slate-700 mb-4">
          <Lock className="w-8 h-8 text-purple-400" />
        </div>
        <h3 className="text-white font-semibold text-lg mb-2">
          {course.title}
        </h3>
        <p className="text-slate-400 text-sm text-center px-4 mb-4">
          {t.createAccount}
        </p>
        <Button
          onClick={openSignup}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
        >
          <Lock className="w-4 h-4 mr-2" />
          {t.unlock}
        </Button>
      </div>
    </div>
  );
}
