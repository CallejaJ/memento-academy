"use server";

import { supabaseAdmin } from "@/lib/supabase-admin";

/**
 * Award an achievement to a user (bypasses RLS)
 */
export async function awardAchievementDirect(
  userId: string,
  achievementId: string,
): Promise<{ success: boolean; error?: string }> {
  try {
    // Check if already has it
    const { data: existing } = await supabaseAdmin
      .from("user_achievements" as any)
      .select("*")
      .eq("user_id", userId)
      .eq("achievement_id", achievementId)
      .single();

    if (existing) {
      return { success: true }; // Already has it
    }

    // Award it
    const { error } = await supabaseAdmin
      .from("user_achievements" as any)
      .insert({
        user_id: userId,
        achievement_id: achievementId,
      });

    if (error) {
      console.error("Error awarding achievement:", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error: any) {
    console.error("awardAchievementDirect error:", error);
    return { success: false, error: error.message };
  }
}
