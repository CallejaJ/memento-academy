import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase-server";
import { createWalletClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { sepolia } from "viem/chains";

const MIN_SCORE_FOR_REWARD = 8; // 80%
const SIGNATURE_EXPIRY_SECONDS = 3600; // 1 hour

// Contract address - must match deployed contract
const MEMO_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_MEMO_CONTRACT_ADDRESS as
  | `0x${string}`
  | undefined;

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();

    // Get authenticated user
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();
    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { sessionToken, walletAddress } = body;

    if (!sessionToken) {
      return NextResponse.json(
        { error: "Session token required" },
        { status: 400 }
      );
    }

    // Get session
    const { data: sessionData, error: sessionError } = await supabase
      .from("game_sessions")
      .select("*")
      .eq("session_token", sessionToken)
      .eq("user_id", user.id)
      .single();

    // Type assertion for session
    const session = sessionData as {
      id: string;
      finished_at: string | null;
      score: number;
      total_questions: number;
      rewarded: boolean;
      reward_signature: string | null;
      reward_deadline: number | null;
    } | null;

    if (sessionError || !session) {
      return NextResponse.json({ error: "Invalid session" }, { status: 403 });
    }

    // Check if already finished
    if (session.finished_at) {
      return NextResponse.json({
        score: session.score,
        totalQuestions: session.total_questions,
        percentage: Math.round((session.score / session.total_questions) * 100),
        alreadyFinished: true,
        canClaimReward:
          session.score >= MIN_SCORE_FOR_REWARD && !session.rewarded,
        rewardSignature: session.reward_signature,
        rewardDeadline: session.reward_deadline,
        sessionId: session.id,
      });
    }

    // Count answers
    const { count: answersCount } = await supabase
      .from("game_answers")
      .select("*", { count: "exact", head: true })
      .eq("session_id", session.id);

    // Calculate final score
    const { count: correctCount } = await supabase
      .from("game_answers")
      .select("*", { count: "exact", head: true })
      .eq("session_id", session.id)
      .eq("is_correct", true);

    const score = correctCount || 0;
    const canClaimReward = score >= MIN_SCORE_FOR_REWARD;

    // Generate signature for blockchain reward if eligible
    let rewardSignature: string | null = null;
    let rewardDeadline: number | null = null;

    if (canClaimReward && !session.rewarded) {
      const privateKey = process.env.BACKEND_SIGNER_PRIVATE_KEY;

      console.log("[Results API] Attempting to generate signature...");
      console.log("[Results API] privateKey exists:", !!privateKey);
      console.log(
        "[Results API] MEMO_CONTRACT_ADDRESS:",
        MEMO_CONTRACT_ADDRESS
      );
      console.log("[Results API] walletAddress from request:", walletAddress);

      if (privateKey && MEMO_CONTRACT_ADDRESS && walletAddress) {
        try {
          const account = privateKeyToAccount(privateKey as `0x${string}`);
          const client = createWalletClient({
            account,
            chain: sepolia,
            transport: http(),
          });

          // Calculate deadline (current time + expiry)
          rewardDeadline =
            Math.floor(Date.now() / 1000) + SIGNATURE_EXPIRY_SECONDS;

          // Create message hash matching the smart contract exactly
          // Contract: keccak256(abi.encodePacked(recipient, sessionId, score, deadline, chainId, address(this)))
          const sessionIdBytes =
            `0x${session.id.replace(/-/g, "").padEnd(64, "0")}` as `0x${string}`;

          // Import encodePacked from viem to match Solidity's abi.encodePacked
          const { encodePacked, keccak256 } = await import("viem");

          const messageHash = keccak256(
            encodePacked(
              [
                "address",
                "bytes32",
                "uint256",
                "uint256",
                "uint256",
                "address",
              ],
              [
                walletAddress as `0x${string}`,
                sessionIdBytes,
                BigInt(score),
                BigInt(rewardDeadline),
                BigInt(sepolia.id),
                MEMO_CONTRACT_ADDRESS as `0x${string}`,
              ]
            )
          );

          // Sign the hash (this adds the Ethereum signed message prefix)
          rewardSignature = await client.signMessage({
            message: { raw: messageHash as `0x${string}` },
          });

          console.log("[Results API] Signature generated successfully!");

          // Save signature and deadline to session
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          await (supabase as any)
            .from("game_sessions")
            .update({
              reward_signature: rewardSignature,
              reward_deadline: rewardDeadline,
            })
            .eq("id", session.id);
        } catch (signError) {
          console.error("Signature generation error:", signError);
          // Continue without signature - user can still see results
        }
      } else {
        console.log(
          "[Results API] Missing privateKey, contract address, or walletAddress"
        );
      }
    }

    // Mark session as finished
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await (supabase as any)
      .from("game_sessions")
      .update({
        finished_at: new Date().toISOString(),
        score,
      })
      .eq("id", session.id);

    return NextResponse.json({
      score,
      totalQuestions: answersCount || 10,
      percentage: Math.round((score / (answersCount || 10)) * 100),
      canClaimReward,
      rewardSignature,
      rewardDeadline,
      sessionId: session.id,
    });
  } catch (error) {
    console.error("Results error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
