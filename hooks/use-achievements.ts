"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { useAuth } from "@/contexts/auth-context"
import { ACHIEVEMENTS, UserStats, getAchievements } from "@/lib/achievements-data"
import { useToast } from "@/hooks/use-toast"
import { useParams } from "next/navigation"

export interface UserAchievement {
  id: string
  user_id: string
  achievement_id: string
  earned_at: string
}

export function useAchievements() {
  const { user } = useAuth()
  const [achievements, setAchievements] = useState<UserAchievement[]>([])
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    if (!user) return
    fetchAchievements()
  }, [user])

  const fetchAchievements = async () => {
    if (!user) return
    
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from("user_achievements" as any) // Type assertion until types are regenerated
        .select("*")
        .eq("user_id", user.id)
        .order("earned_at", { ascending: false })

      if (error) {
        console.error("Error fetching achievements:", error)
        return
      }

      setAchievements((data as any) || [])
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setLoading(false)
    }
  }

  const checkAndAwardAchievements = async (stats: UserStats) => {
    if (!user) return

    const earnedIds = achievements.map(a => a.achievement_id)
    const newAchievements: string[] = []

    // Check each achievement condition
    for (const [key, achievement] of Object.entries(ACHIEVEMENTS)) {
      if (earnedIds.includes(achievement.id)) continue // Already earned
      
      if (achievement.condition(stats)) {
        newAchievements.push(achievement.id)
      }
    }

    // Award new achievements
    for (const achievementId of newAchievements) {
      await awardAchievement(achievementId)
    }
  }

  const awardAchievement = async (achievementId: string) => {
    if (!user) return

    // Check if already has it
    const hasAchievement = achievements.some(a => a.achievement_id === achievementId)
    if (hasAchievement) return

    const newAchievement = {
      user_id: user.id,
      achievement_id: achievementId
    }

    const { data, error } = await supabase
      .from("user_achievements" as any) // Type assertion until types are regenerated
      .insert(newAchievement)
      .select()
      .single()

    if (error) {
      console.error("Error awarding achievement:", error)
      return
    }

    // Update local state
    setAchievements(prev => [data as any, ...prev])

    // Show notification

    // Show notification
    const { lng } = useParams<{ lng: string }>()
    const achievementsData = getAchievements(lng)
    
    // Convert achievementId (e.g., 'first-course') to key (e.g., 'FIRST_COURSE')
    // Note: The keys in ACHIEVEMENTS match the IDs usually, but let's be safe.
    // The keys in data file are UPPERCASE_UNDERSCORE. IDs are kebab-case.
    // Let's look up by ID since both dictionaries have the same structure.
    const achievement = Object.values(achievementsData).find(a => a.id === achievementId)

    if (achievement) {
      toast({
        title: lng === 'es' ? "🎉 ¡Logro Desbloqueado!" : "🎉 Achievement Unlocked!",
        description: `${achievement.icon} ${achievement.name} - ${achievement.description}`,
        duration: 5000
      })
    }

  }

  const hasAchievement = (achievementId: string) => {
    return achievements.some(a => a.achievement_id === achievementId)
  }

  const getUnlockedCount = () => achievements.length
  const getTotalCount = () => Object.keys(ACHIEVEMENTS).length

  return {
    achievements,
    loading,
    hasAchievement,
    awardAchievement,
    checkAndAwardAchievements,
    getUnlockedCount,
    getTotalCount,
    refetch: fetchAchievements
  }
}
