import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase-server";

export async function GET() {
  try {
    const supabase = await createClient();

    // Get leaderboard from view
    const { data: leaderboard, error } = await supabase
      .from("game_leaderboard")
      .select("*")
      .limit(100);

    if (error) {
      console.error("Leaderboard error:", error);
      return NextResponse.json(
        { error: "Failed to fetch leaderboard" },
        { status: 500 }
      );
    }

    // Truncate wallet addresses for privacy
    const safeLeaderboard = (leaderboard || []).map((entry, index) => ({
      rank: index + 1,
      email: entry.email
        ? `${entry.email.split("@")[0].slice(0, 3)}***`
        : "Anonymous",
      walletAddress: entry.wallet_address
        ? `${entry.wallet_address.slice(0, 6)}...${entry.wallet_address.slice(-4)}`
        : null,
      gamesPlayed: entry.games_played,
      totalScore: entry.total_score,
      bestScore: entry.best_score,
      avgScore: entry.avg_score,
    }));

    return NextResponse.json({
      leaderboard: safeLeaderboard,
      updatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Leaderboard error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
