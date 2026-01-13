"use client";

import { usePrivy } from "@privy-io/react-auth";
import { useEffect, useState } from "react";
import { isWalletBlocked, getBlockInfo } from "./wallet-blacklist";

/**
 * Hook to check if the connected wallet is blacklisted
 * Returns blocking status and reason if blocked
 */
export function useWalletBlacklistCheck() {
  const { user, authenticated, ready } = usePrivy();
  const [isBlocked, setIsBlocked] = useState(false);
  const [blockReason, setBlockReason] = useState<string | undefined>();

  useEffect(() => {
    if (!ready || !authenticated || !user) {
      setIsBlocked(false);
      setBlockReason(undefined);
      return;
    }

    // Check all linked wallets
    const wallets = user.linkedAccounts?.filter(
      (account) => account.type === "wallet"
    );

    if (!wallets || wallets.length === 0) {
      setIsBlocked(false);
      setBlockReason(undefined);
      return;
    }

    // Check each wallet against the blacklist
    for (const wallet of wallets) {
      const address = (wallet as { address?: string }).address;
      if (address) {
        const blockInfo = getBlockInfo(address);
        if (blockInfo.blocked) {
          setIsBlocked(true);
          setBlockReason(blockInfo.reason);
          return;
        }
      }
    }

    setIsBlocked(false);
    setBlockReason(undefined);
  }, [ready, authenticated, user]);

  return { isBlocked, blockReason };
}
