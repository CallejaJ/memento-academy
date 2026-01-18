"use server";

import { supabaseAdmin } from "@/lib/supabase-admin";

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
    return { userId };
  } catch (error: any) {
    console.error("SyncUser Error:", error);
    return { error: error.message };
  }
}
