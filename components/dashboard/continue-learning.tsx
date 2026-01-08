"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Play, BookOpen } from "lucide-react";

interface ContinueLearningProps {
  courseId: string;
  courseTitle: string;
  courseSlug: string;
  currentSection: number;
  totalSections: number;
  progressPercentage: number;
  lastSectionTitle?: string;
}

const translations = {
  en: {
    continue_learning: "Continue Learning",
    section: "Section",
    of: "of",
    continue: "Continue",
    completed: "Completed!",
    review: "Review Course",
  },
  es: {
    continue_learning: "Continúa Aprendiendo",
    section: "Sección",
    of: "de",
    continue: "Continuar",
    completed: "¡Completado!",
    review: "Repasar Curso",
  },
};

export function ContinueLearning({
  courseId,
  courseTitle,
  courseSlug,
  currentSection,
  totalSections,
  progressPercentage,
  lastSectionTitle,
}: ContinueLearningProps) {
  const { lng } = useParams<{ lng: string }>();
  const t = translations[lng as keyof typeof translations] || translations.en;

  const isCompleted = progressPercentage >= 100;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-800/80 via-slate-800/60 to-slate-900/80 border border-slate-700 rounded-2xl p-6 md:p-8">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
        {/* Icon */}
        <div className="hidden md:flex w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border border-cyan-500/30 items-center justify-center">
          {isCompleted ? (
            <BookOpen className="w-10 h-10 text-cyan-400" />
          ) : (
            <Play className="w-10 h-10 text-cyan-400 ml-1" />
          )}
        </div>

        {/* Content */}
        <div className="flex-1">
          <p className="text-sm text-cyan-400 font-medium mb-1">
            {t.continue_learning}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {courseTitle}
          </h2>

          {!isCompleted && lastSectionTitle && (
            <p className="text-slate-400 mb-4">
              {t.section} {currentSection} {t.of} {totalSections}:{" "}
              {lastSectionTitle}
            </p>
          )}

          {isCompleted && (
            <p className="text-emerald-400 mb-4">{t.completed}</p>
          )}

          {/* Progress bar */}
          <div className="flex items-center gap-3 mb-4">
            <Progress
              value={progressPercentage}
              className="h-2 flex-1 bg-slate-700"
            />
            <span className="text-sm font-medium text-cyan-400">
              {progressPercentage}%
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <Link href={`/${lng}/learn/${courseSlug}`}>
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-semibold px-8 shadow-lg shadow-cyan-500/25"
          >
            {isCompleted ? t.review : t.continue}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

// Empty state when no course has been started
export function ContinueLearningEmpty() {
  const { lng } = useParams<{ lng: string }>();

  const t = {
    en: {
      title: "Start Your Web3 Journey",
      subtitle: "Choose a course to begin learning",
      cta: "Browse Courses",
    },
    es: {
      title: "Comienza Tu Viaje Web3",
      subtitle: "Elige un curso para empezar",
      cta: "Explorar Cursos",
    },
  }[lng as "en" | "es"] || {
    title: "Start Your Web3 Journey",
    subtitle: "Choose a course to begin learning",
    cta: "Browse Courses",
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-800/80 via-slate-800/60 to-slate-900/80 border border-slate-700 rounded-2xl p-8 text-center">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border border-cyan-500/30 mx-auto mb-4 flex items-center justify-center">
          <BookOpen className="w-8 h-8 text-cyan-400" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">{t.title}</h2>
        <p className="text-slate-400 mb-6">{t.subtitle}</p>
        <Link href={`/${lng}/courses`}>
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-semibold px-8"
          >
            {t.cta}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
