import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase-server";

export async function GET() {
  try {
    const supabase = await createClient();
    const today = new Date().toISOString().split("T")[0];

    const { data: challenge, error } = await supabase
      .from("daily_challenges")
      .select("*")
      .eq("challenge_date", today)
      .single();

    if (error && error.code !== "PGRST116") {
      console.error("Error fetching daily challenge:", error);
      return NextResponse.json(
        { error: "Failed to fetch daily challenge" },
        { status: 500 },
      );
    }

    // No challenge for today
    if (!challenge) {
      return NextResponse.json({ challenge: null });
    }

    return NextResponse.json({ challenge });
  } catch (error) {
    console.error("Daily API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
