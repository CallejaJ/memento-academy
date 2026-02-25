import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { referralId, txHash } = body;

    if (!referralId || !txHash) {
      return NextResponse.json(
        { error: "referralId and txHash are required" },
        { status: 400 },
      );
    }

    // Update status to 'rewarded' in the database
    console.log(`Confirming referral ${referralId} with tx ${txHash}`);
    const { error } = await supabaseAdmin
      .from("referrals")
      .update({ status: "rewarded" })
      .eq("id", referralId);

    if (error) {
      console.error("Error updating referral status:", error);
      return NextResponse.json(
        { error: "Failed to update status" },
        { status: 500 },
      );
    }

    console.log(`Referral ${referralId} successfully marked as rewarded`);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Referral confirm error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
