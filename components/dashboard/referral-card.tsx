"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useWallets } from "@privy-io/react-auth";
import { createWalletClient, custom } from "viem";
import { sepolia } from "viem/chains";
import { createGaslessAccount, MEMO_CONTRACT_ADDRESS } from "@/lib/zerodev";
import { MEMO_QUIZ_REWARDS_ABI } from "@/lib/abi";
import { Users, Copy, Check, Gift, ExternalLink } from "lucide-react";
import type { ClaimableReferral, ReferralData } from "@/actions/get-referral";

const REFERRAL_REWARD = 10;

const translations = {
  en: {
    title: "Invite Friends, Earn MEMO",
    subtitle: `Earn ${REFERRAL_REWARD} MEMO tokens for every friend who joins Memento Academy through your link.`,
    yourLink: "Your referral link",
    copy: "Copy",
    copied: "Copied!",
    friendsJoined: "friends joined",
    rewardEarned: "rewards claimed",
    claimableLabel: "Ready to claim",
    claimBtn: `Claim ${REFERRAL_REWARD} MEMO`,
    claiming: "Claiming...",
    claimed: "Claimed!",
    noReferrals: "No referrals yet",
    invitePrompt: "Share your link and start earning!",
    viewOnEtherscan: "View on Etherscan",
  },
  es: {
    title: "Invita Amigos, Gana MEMO",
    subtitle: `Gana ${REFERRAL_REWARD} tokens MEMO por cada amigo que se una a Memento Academy con tu enlace.`,
    yourLink: "Tu enlace de referido",
    copy: "Copiar",
    copied: "¡Copiado!",
    friendsJoined: "amigos se unieron",
    rewardEarned: "recompensas reclamadas",
    claimableLabel: "Listo para reclamar",
    claimBtn: `Reclamar ${REFERRAL_REWARD} MEMO`,
    claiming: "Reclamando...",
    claimed: "¡Reclamado!",
    noReferrals: "Aún no hay referidos",
    invitePrompt: "¡Comparte tu enlace y empieza a ganar!",
    viewOnEtherscan: "Ver en Etherscan",
  },
};

interface ReferralCardProps {
  referralData: ReferralData;
  walletAddress?: string;
}

export function ReferralCard({
  referralData,
  walletAddress,
}: ReferralCardProps) {
  const { lng } = useParams<{ lng: string }>();
  const t = translations[lng as keyof typeof translations] || translations.en;
  const { wallets } = useWallets();

  const [copied, setCopied] = useState(false);
  const [claimingId, setClaimingId] = useState<string | null>(null);
  const [claimedIds, setClaimedIds] = useState<Set<string>>(new Set());
  const [txHashes, setTxHashes] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const baseUrl = "https://memento-academy.com";
  const referralUrl = referralData.referralCode
    ? `${baseUrl}/${lng}?ref=${referralData.referralCode}`
    : null;

  const handleCopy = () => {
    if (!referralUrl) return;
    navigator.clipboard.writeText(referralUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClaim = async (referral: ClaimableReferral) => {
    if (claimingId || claimedIds.has(referral.id)) return;

    const wallet =
      wallets.find((w) => w.walletClientType === "privy") ?? wallets[0];
    if (!wallet) return;

    setClaimingId(referral.id);
    setErrors((prev) => ({ ...prev, [referral.id]: "" }));

    try {
      // 1. Get a fresh signature from the server
      const res = await fetch("/api/referral/claim", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          referralId: referral.id,
          walletAddress: wallet.address,
        }),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Failed to get claim signature");
      }

      const { rewardSignature, rewardDeadline, score } = await res.json();

      // 2. Switch to Sepolia if needed
      if (wallet.chainId !== "eip155:11155111") {
        await wallet.switchChain(11155111);
      }

      // 3. Build wallet + gasless client
      const provider = await wallet.getEthereumProvider();
      const walletClient = createWalletClient({
        account: wallet.address as `0x${string}`,
        chain: sepolia,
        transport: custom(provider),
      });
      const kernelClient = await createGaslessAccount(walletClient);

      // 4. Call claimReward on the smart contract (same ABI as quiz)
      const referralIdBytes =
        `0x${referral.id.replace(/-/g, "").padEnd(64, "0")}` as `0x${string}`;

      const hash = await kernelClient.writeContract({
        address: MEMO_CONTRACT_ADDRESS as `0x${string}`,
        abi: MEMO_QUIZ_REWARDS_ABI,
        functionName: "claimReward",
        args: [
          wallet.address as `0x${string}`,
          referralIdBytes,
          BigInt(score),
          BigInt(rewardDeadline),
          rewardSignature as `0x${string}`,
        ],
      });

      setTxHashes((prev) => ({ ...prev, [referral.id]: hash }));
      setClaimedIds((prev) => new Set(prev).add(referral.id));

      // 5. NEW: Confirm in database to update status to 'rewarded'
      await fetch("/api/referral/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ referralId: referral.id, txHash: hash }),
      });

      // Optionally reload the page or stats to show updated balance
      // window.location.reload();
    } catch (err: any) {
      setErrors((prev) => ({
        ...prev,
        [referral.id]: err.message || "Claim failed",
      }));
    } finally {
      setClaimingId(null);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-teal-500/30 bg-gradient-to-br from-teal-950 via-emerald-900/30 to-slate-900 p-8 shadow-2xl">
      {/* Background effects */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-teal-500/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative z-10 space-y-6">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-teal-500/40 bg-teal-500/20">
            <Users className="h-6 w-6 text-teal-300" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">{t.title}</h2>
            <p className="mt-1 text-sm text-slate-400 max-w-lg">{t.subtitle}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 max-w-xs">
          <div className="rounded-xl border border-teal-500/20 bg-teal-500/10 p-3 text-center">
            <div className="text-2xl font-bold text-teal-300">
              {referralData.completedCount + referralData.rewardedCount}
            </div>
            <div className="mt-1 text-[10px] uppercase tracking-wider text-slate-400">
              {t.friendsJoined}
            </div>
          </div>
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-3 text-center">
            <div className="text-2xl font-bold text-emerald-300">
              {referralData.rewardedCount * REFERRAL_REWARD}
            </div>
            <div className="mt-1 text-[10px] uppercase tracking-wider text-slate-400">
              MEMO {t.rewardEarned}
            </div>
          </div>
        </div>

        {/* Referral link */}
        {referralUrl && (
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              {t.yourLink}
            </p>
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5">
              <span className="flex-1 truncate text-sm text-slate-300 font-mono">
                {referralUrl}
              </span>
              <button
                onClick={handleCopy}
                className="shrink-0 flex items-center gap-1.5 rounded-lg bg-teal-500/20 border border-teal-500/30 px-3 py-1.5 text-xs font-semibold text-teal-300 transition-all hover:bg-teal-500/30"
              >
                {copied ? (
                  <Check className="h-3.5 w-3.5" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
                {copied ? t.copied : t.copy}
              </button>
            </div>
          </div>
        )}

        {/* Claimable referrals */}
        {referralData.claimableReferrals.length > 0 && (
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              {t.claimableLabel} ({referralData.claimableReferrals.length})
            </p>
            <div className="space-y-2">
              {referralData.claimableReferrals.map((ref) => {
                const isClaiming = claimingId === ref.id;
                const isClaimed = claimedIds.has(ref.id);
                const txHash = txHashes[ref.id];
                const error = errors[ref.id];

                return (
                  <div
                    key={ref.id}
                    className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <div className="flex items-center gap-2">
                      <Gift className="h-4 w-4 text-yellow-400 shrink-0" />
                      <span className="text-sm text-slate-300">
                        +{REFERRAL_REWARD} MEMO
                      </span>
                      {txHash && (
                        <a
                          href={`https://sepolia.etherscan.io/tx/${txHash}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-teal-400 hover:underline flex items-center gap-1"
                        >
                          <ExternalLink className="h-3 w-3" />
                          {t.viewOnEtherscan}
                        </a>
                      )}
                      {error && (
                        <span className="text-xs text-red-400">{error}</span>
                      )}
                    </div>
                    <button
                      onClick={() => handleClaim(ref)}
                      disabled={isClaiming || isClaimed || !!claimingId}
                      className="shrink-0 rounded-lg bg-gradient-to-r from-teal-500 to-emerald-600 px-4 py-1.5 text-xs font-bold text-white transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isClaimed
                        ? t.claimed
                        : isClaiming
                          ? t.claiming
                          : t.claimBtn}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Empty state */}
        {referralData.completedCount === 0 &&
          referralData.rewardedCount === 0 && (
            <p className="text-sm text-slate-500 italic">{t.invitePrompt}</p>
          )}
      </div>
    </div>
  );
}
