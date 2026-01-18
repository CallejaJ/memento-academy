import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized: Missing userId" },
        { status: 401 },
      );
    }

    // Query game sessions table using admin client (bypassing RLS)
    // Only count Classic mode for best score (out of 10)
    // Use total_questions = 10 to identify Classic mode (more reliable than game_mode for legacy sessions)
    const { data: classicSessions, error: classicError } = await supabaseAdmin
      .from("game_sessions")
      .select("score, finished_at, game_mode, total_questions")
      .eq("user_id", userId)
      .eq("total_questions", 10)
      .not("finished_at", "is", null);

    // All finished sessions for total stats
    const { data: sessions, error } = await supabaseAdmin
      .from("game_sessions")
      .select("score, finished_at, game_mode")
      .eq("user_id", userId)
      .not("finished_at", "is", null);

    if (error) {
      console.error("Error fetching user game stats:", error);
      return NextResponse.json(
        { error: "Failed to fetch stats" },
        { status: 500 },
      );
    }

    // Calculate remaining attempts logic
    const today = new Date().toISOString().split("T")[0];
    const { count: attemptsCount } = await supabaseAdmin
      .from("game_sessions")
      .select("*", { count: "exact", head: true })
      .eq("user_id", userId)
      .gte("created_at", `${today}T00:00:00.000Z`)
      .lte("created_at", `${today}T23:59:59.999Z`);

    const remainingAttempts = Math.max(0, 5 - (attemptsCount || 0)); // 5 attempts per day

    const gamesPlayed = sessions?.length || 0;
    const totalScore =
      sessions?.reduce(
        (acc: number, session: any) => acc + (session.score || 0),
        0,
      ) || 0;
    // Best score from Classic mode only (out of 10)
    const bestScore =
      classicSessions?.reduce(
        (max: number, session: any) => Math.max(max, session.score || 0),
        0,
      ) || 0;

    // Average score - avoid division by zero
    const avgScore =
      gamesPlayed > 0 ? Number((totalScore / gamesPlayed).toFixed(1)) : 0;

    // Calculate earned tokens (sum of scores where score >= 8, Classic mode only)
    const earnedTokens =
      classicSessions?.reduce(
        (acc: number, session: any) =>
          (session.score || 0) >= 8 ? acc + (session.score || 0) : acc,
        0,
      ) || 0;

    // Calculate Rank based on total score
    let rank = "Novato";
    if (totalScore >= 10000) rank = "Leyenda";
    else if (totalScore >= 2000) rank = "Maestro";
    else if (totalScore >= 500) rank = "Experto";
    else if (totalScore >= 100) rank = "Aprendiz";

    return NextResponse.json({
      gamesPlayed,
      totalScore,
      bestScore,
      avgScore,
      remainingAttempts,
      earnedTokens,
      rank,
    });
  } catch (error) {
    console.error("Error in game stats route:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
