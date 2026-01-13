"use client";

import { useParams } from "next/navigation";

interface ProgressStatsProps {
  totalXP: number;
  streak: number;
  level: number;
  completionPercentage: number;
}

const translations = {
  en: {
    xp: "XP",
    streak: "Day Streak",
    level: "Level",
    completed: "Completed",
    explorer: "Explorer",
    learner: "Learner",
    specialist: "Specialist",
    expert: "Expert",
    master: "Master",
  },
  es: {
    xp: "XP",
    streak: "Días Seguidos",
    level: "Nivel",
    completed: "Completado",
    explorer: "Explorador",
    learner: "Aprendiz",
    specialist: "Especialista",
    expert: "Experto",
    master: "Maestro",
  },
};

function getLevelName(level: number, t: typeof translations.en): string {
  const levels = [t.explorer, t.learner, t.specialist, t.expert, t.master];
  return levels[Math.min(level - 1, levels.length - 1)] || t.explorer;
}

export function ProgressStats({
  totalXP,
  streak,
  level,
  completionPercentage,
}: ProgressStatsProps) {
  const { lng } = useParams<{ lng: string }>();
  const t = translations[lng as keyof typeof translations] || translations.en;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {/* XP Card */}
      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-center hover:border-cyan-500/30 transition-colors">
        <div className="text-3xl font-bold text-cyan-400">
          {totalXP.toLocaleString()}
        </div>
        <div className="text-sm text-slate-400 mt-1">{t.xp}</div>
      </div>

      {/* Streak Card */}
      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-center hover:border-orange-500/30 transition-colors">
        <div className="text-3xl font-bold text-orange-400 flex items-center justify-center gap-1">
          {streak}
        </div>
        <div className="text-sm text-slate-400 mt-1">{t.streak}</div>
      </div>

      {/* Level Card */}
      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-center hover:border-purple-500/30 transition-colors">
        <div className="text-3xl font-bold text-purple-400">{level}</div>
        <div className="text-sm text-slate-400 mt-1">
          {getLevelName(level, t)}
        </div>
      </div>

      {/* Completion Card with Ring */}
      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-colors">
        <div className="relative w-16 h-16 mx-auto">
          <svg className="w-16 h-16 -rotate-90" viewBox="0 0 36 36">
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-slate-700"
            />
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeDasharray={`${completionPercentage}, 100`}
              className="text-emerald-500"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-emerald-400">
            {completionPercentage}%
          </span>
        </div>
        <div className="text-sm text-slate-400 mt-1">{t.completed}</div>
      </div>
    </div>
  );
}
