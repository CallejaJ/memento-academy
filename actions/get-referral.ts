"use server";

import { supabaseAdmin } from "@/lib/supabase-admin";

export interface ClaimableReferral {
  id: string;
  completed_at: string;
  reward_signature: string | null;
  reward_deadline: number | null;
}

export interface ReferralData {
  referralCode: string | null;
  completedCount: number;
  rewardedCount: number;
  claimableReferrals: ClaimableReferral[];
}

export async function getReferralData(userId: string): Promise<ReferralData> {
  // 1. Get user's referral code
  const { data: profile } = await supabaseAdmin
    .from("profiles")
    .select("referral_code")
    .eq("id", userId)
    .single();

  // 2. Get referrals made by this user
  const { data: referrals } = await supabaseAdmin
    .from("referrals")
    .select("id, status, completed_at, reward_signature, reward_deadline")
    .eq("referrer_user_id", userId)
    .order("completed_at", { ascending: false });

  const allReferrals = referrals || [];
  const claimableReferrals = allReferrals.filter(
    (r) => r.status === "completed",
  );
  const rewardedCount = allReferrals.filter(
    (r) => r.status === "rewarded",
  ).length;

  return {
    referralCode: profile?.referral_code ?? null,
    completedCount: allReferrals.length,
    rewardedCount,
    claimableReferrals,
  };
}
