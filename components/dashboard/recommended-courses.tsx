"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { getAllCourses } from "@/lib/courses-data";
import { Badge } from "@/components/ui/badge";
import {
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
  LucideIcon,
  ArrowRight,
} from "lucide-react";

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
    title: "Recommended For You",
    free: "Free",
    premium: "Premium",
    start: "Start",
  },
  es: {
    title: "Recomendados Para Ti",
    free: "Gratis",
    premium: "Premium",
    start: "Empezar",
  },
};

interface RecommendedCoursesProps {
  completedCourseIds: string[];
  limit?: number;
}

export function RecommendedCourses({
  completedCourseIds,
  limit = 3,
}: RecommendedCoursesProps) {
  const { lng } = useParams<{ lng: string }>();
  const t = translations[lng as keyof typeof translations] || translations.en;

  const allCourses = getAllCourses(lng);

  // Filter out completed courses and get recommendations
  const recommendations = allCourses
    .filter((course) => !completedCourseIds.includes(course.id))
    .slice(0, limit);

  if (recommendations.length === 0) return null;

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-white mb-4">{t.title}</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {recommendations.map((course) => {
          const Icon = iconMap[course.icon] || Blocks;

          return (
            <Link
              key={course.id}
              href={`/${lng}/learn/${course.slug}`}
              className="group"
            >
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 hover:border-cyan-500/30 transition-all hover:bg-slate-800/80">
                {/* Header with icon and badge */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`p-3 rounded-lg bg-${course.color}-500/10 border border-${course.color}-500/20`}
                  >
                    <Icon className={`w-6 h-6 text-${course.color}-400`} />
                  </div>
                  <Badge
                    variant="outline"
                    className={
                      course.isPremium
                        ? "border-amber-500/30 text-amber-400"
                        : "border-emerald-500/30 text-emerald-400"
                    }
                  >
                    {course.isPremium ? t.premium : t.free}
                  </Badge>
                </div>

                {/* Title and description */}
                <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  {course.title}
                </h3>
                <p className="text-sm text-slate-400 line-clamp-2 mb-4">
                  {course.description}
                </p>

                {/* CTA */}
                <div className="flex items-center text-cyan-400 text-sm font-medium">
                  {t.start}
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
