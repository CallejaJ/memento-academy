/**
 * Wallet Blacklist System
 *
 * This module maintains a list of blocked wallet addresses that are
 * known to be malicious (drainers, scammers, etc.)
 */

// Blocked wallet addresses (lowercase for comparison)
const BLOCKED_WALLETS: Set<string> = new Set([
  // Known drainer wallet that steals funds via internal transactions
  "0x2538587c3227c42a1".toLowerCase(),

  // Add more addresses as needed:
  // "0x...".toLowerCase(),
]);

/**
 * Check if a wallet address is blocked
 * @param address - The wallet address to check
 * @returns true if the wallet is blocked, false otherwise
 */
export function isWalletBlocked(address: string | undefined | null): boolean {
  if (!address) return false;
  return BLOCKED_WALLETS.has(address.toLowerCase());
}

/**
 * Get the list of all blocked wallets
 * @returns Array of blocked wallet addresses
 */
export function getBlockedWallets(): string[] {
  return Array.from(BLOCKED_WALLETS);
}

/**
 * Reason codes for why a wallet might be blocked
 */
export const BlockReasons = {
  DRAINER: "This wallet is associated with automated fund draining attacks",
  SCAMMER: "This wallet has been reported for scam activity",
  SUSPICIOUS: "This wallet shows suspicious transaction patterns",
} as const;

/**
 * Get detailed block info for a wallet
 */
export function getBlockInfo(address: string): {
  blocked: boolean;
  reason?: string;
} {
  if (isWalletBlocked(address)) {
    return {
      blocked: true,
      reason: BlockReasons.DRAINER,
    };
  }
  return { blocked: false };
}
