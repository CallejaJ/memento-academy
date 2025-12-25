"use client"

import { Achievement, RARITY_COLORS } from "@/lib/achievements-data"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface BadgeCardProps {
  achievement: Achievement
  earned: boolean
  earnedDate?: string
}

export function BadgeCard({ achievement, earned, earnedDate }: BadgeCardProps) {
  const rarityStyle = RARITY_COLORS[achievement.rarity]

  return (
    <Card 
      className={cn(
        "relative overflow-hidden transition-all duration-300",
        earned 
          ? `${rarityStyle.bg} ${rarityStyle.border} hover:scale-105 hover:${rarityStyle.glow} hover:shadow-lg`
          : "bg-slate-900/30 border-slate-800 opacity-50 grayscale"
      )}
    >
      <div className="p-4">
        {/* Icon */}
        <div className={cn(
          "text-4xl mb-3 flex items-center justify-center",
          earned ? "animate-bounce-slow" : ""
        )}>
          {achievement.icon}
        </div>

        {/* Rarity Badge */}
        <div className="flex justify-center mb-2">
          <span className={cn(
            "text-xs px-2 py-0.5 rounded-full border",
            rarityStyle.border,
            rarityStyle.text
          )}>
            {achievement.rarity.toUpperCase()}
          </span>
        </div>

        {/* Name */}
        <h3 className={cn(
          "font-semibold text-sm text-center mb-1",
          earned ? "text-white" : "text-slate-600"
        )}>
          {achievement.name}
        </h3>

        {/* Description */}
        <p className={cn(
          "text-xs text-center",
          earned ? "text-slate-400" : "text-slate-700"
        )}>
          {achievement.description}
        </p>

        {/* Earned Date */}
        {earned && earnedDate && (
          <p className="text-xs text-slate-500 text-center mt-2">
            Earned {new Date(earnedDate).toLocaleDateString()}
          </p>
        )}

        {/* Locked Overlay */}
        {!earned && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-950/50">
            <div className="text-slate-600 text-3xl">🔒</div>
          </div>
        )}
      </div>
    </Card>
  )
}
