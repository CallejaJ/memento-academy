"use client"

import { ACHIEVEMENTS } from "@/lib/achievements-data"
import { BadgeCard } from "./badge-card"
import { useAchievements } from "@/hooks/use-achievements"
import { Card } from "@/components/ui/card"

export function BadgeGrid() {
  const { achievements, loading, hasAchievement } = useAchievements()

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[...Array(8)].map((_, i) => (
          <Card key={i} className="h-48 bg-slate-800/50 animate-pulse" />
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Stats Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Achievements</h2>
          <p className="text-slate-400 text-sm">
            Unlocked {achievements.length} of {Object.keys(ACHIEVEMENTS).length} badges
          </p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-cyan-400">
            {achievements.length}/{Object.keys(ACHIEVEMENTS).length}
          </div>
          <p className="text-xs text-slate-500">Completion</p>
        </div>
      </div>

      {/* Badge Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Object.values(ACHIEVEMENTS).map((achievement) => {
          const userAchievement = achievements.find(
            a => a.achievement_id === achievement.id
          )
          const earned = hasAchievement(achievement.id)

          return (
            <BadgeCard
              key={achievement.id}
              achievement={achievement}
              earned={earned}
              earnedDate={userAchievement?.earned_at}
            />
          )
        })}
      </div>

      {/* Recent Achievements */}
      {achievements.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-white mb-4">Recent Achievements</h3>
          <div className="space-y-2">
            {achievements.slice(0, 3).map((userAch) => {
              const achievement = Object.values(ACHIEVEMENTS).find(
                a => a.id === userAch.achievement_id
              )
              if (!achievement) return null

              return (
                <div 
                  key={userAch.id}
                  className="bg-slate-900/50 border border-slate-800 rounded-lg p-3 flex items-center gap-3"
                >
                  <div className="text-2xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <p className="text-white font-medium text-sm">{achievement.name}</p>
                    <p className="text-slate-400 text-xs">{achievement.description}</p>
                  </div>
                  <div className="text-xs text-slate-500">
                    {new Date(userAch.earned_at).toLocaleDateString()}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
