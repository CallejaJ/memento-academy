"use client";

import { useAchievements } from "@/hooks/use-achievements";
import { useParams } from "next/navigation";
import { getAchievements } from "@/lib/achievements-data";
import {
  GraduationCap,
  Trophy,
  Zap,
  BookOpen,
  Gem,
  Target,
  Rocket,
  Brain,
  Lock,
} from "lucide-react";

const translations = {
  en: {
    loading_achievements: "Loading achievements...",
    no_badges: "No badges earned yet",
    unlock_msg: "Complete course sections to unlock achievements!",
    unlocked: "Unlocked",
    locked: "Locked",
  },
  es: {
    loading_achievements: "Cargando logros...",
    no_badges: "Aún no has ganado insignias",
    unlock_msg: "¡Completa secciones para desbloquear logros!",
    unlocked: "Desbloqueados",
    locked: "Bloqueado",
  },
};

const ICON_MAP: Record<string, any> = {
  "first-steps": GraduationCap,
  "first-course": Trophy,
  "speed-learner": Zap,
  "dedicated-student": BookOpen,
  "defi-master": Gem,
  "perfect-score": Target,
  "crypto-expert": Rocket,
  "knowledge-seeker": Brain,
};

export function AchievementsPreview() {
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
        <div className="w-16 h-16 rounded-2xl bg-slate-700/50 mx-auto mb-4 flex items-center justify-center border border-slate-600">
          <Trophy className="w-8 h-8 text-slate-400" />
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

      <div className="grid grid-cols-4 gap-3">
        {Object.values(achievementsData)
          .slice(0, 8)
          .map((achievement) => {
            const isUnlocked = achievements.some(
              (a) => a.achievement_id === achievement.id
            );

            const IconComponent = ICON_MAP[achievement.id] || Trophy;

            return (
              <div
                key={achievement.id}
                className={`group relative aspect-square rounded-xl flex items-center justify-center transition-all duration-300 ${
                  isUnlocked
                    ? "bg-gradient-to-br from-cyan-500/10 via-teal-500/5 to-purple-500/10 border border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105"
                    : "bg-slate-800/40 border border-slate-700/50 opacity-60"
                }`}
                title={
                  isUnlocked
                    ? achievement.name
                    : `🔒 ${achievement.name} (${t.locked})`
                }
              >
                <div
                  className={`
                  relative z-10 transition-transform duration-300 group-hover:scale-110
                  ${isUnlocked ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" : "text-slate-600"}
                `}
                >
                  <IconComponent className="w-8 h-8" strokeWidth={1.5} />
                </div>

                {!isUnlocked && (
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-950/40 rounded-xl backdrop-blur-[1px]">
                    <Lock className="w-4 h-4 text-slate-500/70" />
                  </div>
                )}

                {/* Glow Effect for Unlocked */}
                {isUnlocked && (
                  <div className="absolute inset-0 rounded-xl bg-cyan-500/5 blur-md -z-0" />
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}
