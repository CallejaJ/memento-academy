"use client";

import type React from "react";
import { createContext, useContext, useEffect, useState, useMemo } from "react";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

// Simplified user type for Privy
interface PrivyUser {
  id: string;
  email: string | null;
  walletAddress: string | null;
}

type AuthContextType = {
  user: PrivyUser | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  walletAddress: string | null;
  login: () => void;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const {
    ready,
    authenticated,
    user: privyUser,
    login,
    logout: privyLogout,
  } = usePrivy();
  const { wallets } = useWallets();
  const router = useRouter();
  const [supabaseUserId, setSupabaseUserId] = useState<string | null>(null);
  const [syncAttempted, setSyncAttempted] = useState(false);

  // Find the embedded wallet
  const embeddedWallet = wallets.find(
    (w) => w.walletClientType === "privy" || w.connectorType === "embedded",
  );

  // Sync Privy user with Supabase on login
  useEffect(() => {
    async function syncUserToSupabase() {
      if (!ready) return; // Wait for Privy to be ready

      // If we already attempted syncing for this session/user state, don't auto-retry loop.
      // We only retry if syncAttempted is reset to false (e.g., by manual login action)
      if (syncAttempted) return;

      if (!authenticated || !privyUser || !embeddedWallet?.address) {
        // If not authenticated, we mark as attempted so we don't keep spinning
        // But only if we are truly done checking initial auth.
        // For now, if not authenticated, we just return. syncAttempted acts as a "done" flag for the *sync process*.
        // If we log out, we reset it.
        return;
      }

      // If already synced, don't retry (unless user changes, handled by dependency)
      if (supabaseUserId) {
        setSyncAttempted(true);
        return;
      }

      const email = privyUser.email?.address || null;
      const walletAddress = embeddedWallet.address;

      try {
        const { syncUser } = await import("@/actions/sync-user");
        const result = await syncUser(privyUser.id, email, walletAddress);

        if (result.error) {
          console.error("[Auth] Sync error:", result.error);
          // We DO NOT set supabaseUserId here, so user stays null.
        } else if (result.userId) {
          setSupabaseUserId(result.userId);
          console.log("[Auth] User synced:", result.userId);
        }
      } catch (error) {
        console.error("[Auth] Sync call failed:", error);
      } finally {
        // Mark as attempted regardless of success/fail to stop loops.
        // User must manually trigger "login" again to retry if failed.
        setSyncAttempted(true);
      }
    }

    syncUserToSupabase();
  }, [
    ready,
    authenticated,
    privyUser,
    embeddedWallet?.address,
    supabaseUserId,
    syncAttempted, // Added to dependencies so toggling it triggers effect
  ]);

  // Build user object for context - ONLY when sync is complete
  const user: PrivyUser | null = useMemo(() => {
    return authenticated && privyUser && supabaseUserId
      ? {
          id: supabaseUserId, // Strictly use Supabase UUID
          email: privyUser.email?.address || null,
          walletAddress: embeddedWallet?.address || null,
        }
      : null;
  }, [authenticated, privyUser, supabaseUserId, embeddedWallet?.address]);

  const handleLogin = () => {
    // Reset sync state to allow retry if it previously failed
    setSyncAttempted(false);
    login();
  };

  const handleLogout = async () => {
    await privyLogout();
    setSupabaseUserId(null);
    setSyncAttempted(false);
    router.refresh();
  };

  const isSyncing = authenticated && !syncAttempted;

  const value = useMemo(
    () => ({
      user,
      isLoading: !ready || isSyncing,
      isAuthenticated: authenticated,
      walletAddress: embeddedWallet?.address || null,
      login: handleLogin,
      signOut: handleLogout,
    }),
    [user, ready, isSyncing, authenticated, embeddedWallet?.address],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
