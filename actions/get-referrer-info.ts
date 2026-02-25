"use server";

import { supabaseAdmin } from "@/lib/supabase-admin";

export async function getReferrerInfo(userId: string) {
  try {
    // 1. Check if this user was referred
    const { data: referral, error: refError } = await supabaseAdmin
      .from("referrals")
      .select("referrer_user_id")
      .eq("referred_user_id", userId)
      .single();

    if (refError || !referral) return null;

    // 2. Get the referrer's name
    const { data: profile, error: profError } = await supabaseAdmin
      .from("profiles")
      .select("full_name")
      .eq("id", referral.referrer_user_id)
      .single();

    if (profError || !profile) return null;

    return {
      name: profile.full_name || "a friend",
    };
  } catch (error) {
    console.error("Error fetching referrer info:", error);
    return null;
  }
}
