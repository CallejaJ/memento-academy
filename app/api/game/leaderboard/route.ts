import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase-server";
import { Database } from "@/types/supabase";
import { PostgrestError } from "@supabase/supabase-js";

type LeaderboardRow = Database["public"]["Views"]["game_leaderboard"]["Row"];

export async function GET() {
  try {
    const supabase = await createClient();

    // Get leaderboard from view
    const { data: leaderboard, error } = (await supabase
      .from("game_leaderboard")
      .select("*")
      .limit(100)) as {
      data: LeaderboardRow[] | null;
      error: PostgrestError | null;
    };

    if (error) {
      console.error("Leaderboard error:", error);
      return NextResponse.json(
        { error: "Failed to fetch leaderboard" },
        { status: 500 }
      );
    }

    // Truncate wallet addresses for privacy (emails already truncated in view)
    const safeLeaderboard = (leaderboard || []).map((entry, index) => ({
      rank: index + 1,
      // Email ya viene truncado de la vista (ej: "joh***")
      email: entry.email || "Anonymous",
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
