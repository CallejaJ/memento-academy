"use server";

import { supabaseAdmin } from "@/lib/supabase-admin";
import { cookies } from "next/headers";

export async function syncUser(
  privyUserId: string,
  email: string | null,
  walletAddress: string,
) {
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    console.error("❌ Missing SUPABASE_SERVICE_ROLE_KEY");
    return { error: "Server configuration error" };
  }

  try {
    const normalizedWallet = walletAddress.toLowerCase();

    // 1. Check if wallet already exists
    const { data: existingWallet } = await supabaseAdmin
      .from("user_wallets")
      .select("user_id")
      .eq("wallet_address", normalizedWallet)
      .single();

    if (existingWallet) {
      return { userId: existingWallet.user_id };
    }

    // 2. Create new user if not exists
    const userId = crypto.randomUUID();

    // Insert into profiles FIRST (because user_wallets usually references this)
    const { error: profileError } = await supabaseAdmin
      .from("profiles")
      .insert({
        id: userId,
        full_name: email?.split("@")[0] || "Web3 User",
        avatar_url: `https://api.dicebear.com/7.x/avataaars/svg?seed=${userId}`,
        updated_at: new Date().toISOString(),
      });

    if (profileError) {
      console.error("Error creating profile:", profileError);
      // If profile fails, we probably shouldn't create the wallet either, or it might fail too if FK exists
      return {
        error: `Failed to create user profile: ${profileError.message || JSON.stringify(profileError)}`,
      };
    }

    // Insert into user_wallets
    const { error: walletError } = await supabaseAdmin
      .from("user_wallets")
      .insert({
        user_id: userId,
        wallet_address: normalizedWallet,
        privy_user_id: privyUserId,
      });

    if (walletError) throw walletError;

    console.log(
      `[Sync] Created new user ${userId} for wallet ${normalizedWallet}`,
    );

    // Process referral if a referral code cookie is present
    try {
      const cookieStore = await cookies();
      const refCode = cookieStore.get("memento_ref")?.value;

      if (refCode) {
        // Look up the referrer by code
        const { data: referrer } = await supabaseAdmin
          .from("profiles")
          .select("id")
          .eq("referral_code", refCode)
          .single();

        if (referrer && referrer.id !== userId) {
          await supabaseAdmin.from("referrals").insert({
            referrer_user_id: referrer.id,
            referred_user_id: userId,
            status: "completed",
            completed_at: new Date().toISOString(),
          });
          console.log(
            `[Sync] Referral recorded: ${referrer.id} referred ${userId}`,
          );
        }

        cookieStore.delete("memento_ref");
      }
    } catch (refError) {
      // Referral processing failure should not block user creation
      console.error("[Sync] Referral processing error:", refError);
    }

    return { userId };
  } catch (error: any) {
    console.error("SyncUser Error:", error);
    return { error: error.message };
  }
}
