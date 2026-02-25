import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { createWalletClient, http, encodePacked, keccak256 } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { sepolia } from "viem/chains";

const REFERRAL_REWARD = 10; // Explicitly 10 MEMOs
const SIGNATURE_EXPIRY_SECONDS = 3600; // 1 hour

const MEMO_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_MEMO_CONTRACT_ADDRESS as
  | `0x${string}`
  | undefined;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { referralId, walletAddress } = body;

    if (!referralId || !walletAddress) {
      return NextResponse.json(
        { error: "referralId and walletAddress are required" },
        { status: 400 },
      );
    }

    // 1. Fetch the referral record
    const { data: referral, error: referralError } = await supabaseAdmin
      .from("referrals")
      .select("*")
      .eq("id", referralId)
      .single();

    if (referralError || !referral) {
      return NextResponse.json(
        { error: "Referral not found" },
        { status: 404 },
      );
    }

    if (referral.status === "rewarded") {
      return NextResponse.json(
        { error: "Referral already rewarded" },
        { status: 409 },
      );
    }

    if (referral.status !== "completed") {
      return NextResponse.json(
        { error: "Referral not yet completed" },
        { status: 400 },
      );
    }

    // 2. Verify walletAddress belongs to the referrer
    const { data: walletRecord } = await supabaseAdmin
      .from("user_wallets")
      .select("user_id")
      .eq("wallet_address", walletAddress.toLowerCase())
      .single();

    if (!walletRecord || walletRecord.user_id !== referral.referrer_user_id) {
      return NextResponse.json(
        { error: "Wallet does not belong to referrer" },
        { status: 403 },
      );
    }

    // 3. Generate reward signature (same mechanism as quiz rewards)
    const privateKey = process.env.BACKEND_SIGNER_PRIVATE_KEY;

    if (!privateKey || !MEMO_CONTRACT_ADDRESS) {
      return NextResponse.json(
        { error: "Reward signing not configured" },
        { status: 503 },
      );
    }

    const account = privateKeyToAccount(privateKey as `0x${string}`);
    const client = createWalletClient({
      account,
      chain: sepolia,
      transport: http(),
    });

    const rewardDeadline =
      Math.floor(Date.now() / 1000) + SIGNATURE_EXPIRY_SECONDS;

    // Use referral UUID as bytes32 "sessionId" (same format as quiz)
    const referralIdBytes =
      `0x${referralId.replace(/-/g, "").padEnd(64, "0")}` as `0x${string}`;

    const messageHash = keccak256(
      encodePacked(
        ["address", "bytes32", "uint256", "uint256", "uint256", "address"],
        [
          walletAddress as `0x${string}`,
          referralIdBytes,
          BigInt(REFERRAL_REWARD),
          BigInt(rewardDeadline),
          BigInt(sepolia.id),
          MEMO_CONTRACT_ADDRESS as `0x${string}`,
        ],
      ),
    );

    const rewardSignature = await client.signMessage({
      message: { raw: messageHash as `0x${string}` },
    });

    // 4. Persist signature + deadline on the referral record
    await supabaseAdmin
      .from("referrals")
      .update({
        reward_signature: rewardSignature,
        reward_deadline: rewardDeadline,
      })
      .eq("id", referralId);

    return NextResponse.json({
      rewardSignature,
      rewardDeadline,
      referralId,
      score: 10,
    });
  } catch (error) {
    console.error("Referral claim error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
