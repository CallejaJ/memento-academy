import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase-server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const mode = searchParams.get("mode") || "classic";
    const supabase = await createClient();

    // Get leaderboard from the new mode-specific view
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data: leaderboard, error } = await (supabase as any)
      .from("game_leaderboard_modes")
      .select("*")
      .eq("game_mode", mode)
      .order("total_score", { ascending: false })
      .limit(100);

    if (error) {
      console.error("Leaderboard error:", error);
      return NextResponse.json({
        leaderboard: [],
        updatedAt: new Date().toISOString(),
        error: error.message,
      });
    }

    // Handle null/empty data
    if (!leaderboard || leaderboard.length === 0) {
      return NextResponse.json({
        leaderboard: [],
        updatedAt: new Date().toISOString(),
      });
    }

    // Truncate wallet addresses for privacy
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const safeLeaderboard = leaderboard.map((entry: any, index: number) => ({
      rank: index + 1,
      email: entry.email || entry.display_name || "Anonymous",
      display_name: entry.display_name,
      walletAddress: entry.wallet_address
        ? `${entry.wallet_address.slice(0, 6)}...${entry.wallet_address.slice(-4)}`
        : null,
      gamesPlayed: entry.games_played || 0,
      totalScore: entry.total_score || 0,
      bestScore: entry.best_score || 0,
      avgScore: entry.avg_score || 0,
    }));

    return NextResponse.json({
      leaderboard: safeLeaderboard,
      updatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Leaderboard error:", error);
    return NextResponse.json({
      leaderboard: [],
      updatedAt: new Date().toISOString(),
      error: "Failed to load leaderboard",
    });
  }
}
