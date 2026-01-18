"use server";

import { supabaseAdmin } from "@/lib/supabase-admin";

export async function getProfile(userId: string) {
  if (!userId) return { error: "User ID is required" };

  try {
    const { data, error } = await supabaseAdmin
      .from("profiles")
      .select("full_name, avatar_url, email, membership_tier")
      .eq("id", userId)
      .single();

    if (error) {
      // PGRST116 means zero rows found, which is not a server error but just specific state
      if (error.code === "PGRST116") {
        return { data: null };
      }
      console.error("[Get Profile] DB Error:", error);
      return { error: error.message };
    }

    return { data };
  } catch (error: any) {
    console.error("[Get Profile] Unexpected Error:", error);
    return { error: error.message };
  }
}
