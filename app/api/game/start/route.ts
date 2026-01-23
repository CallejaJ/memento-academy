import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { randomUUID } from "crypto";

const MAX_DAILY_SESSIONS = 50; // Temporarily increased for testing
const SESSION_EXPIRY_MINUTES = 10;

export async function POST(request: NextRequest) {
  try {
    // Use admin client to bypass RLS
    const supabase = supabaseAdmin;

    // Get game mode and category from body - also userId now
    let gameMode = "classic";
    let category = "random";
    let userId: string | null = null;

    try {
      const body = await request.json();
      if (body.mode && ["classic", "survival", "daily"].includes(body.mode)) {
        gameMode = body.mode;
      }
      if (body.category) {
        category = body.category;
      }
      if (body.userId) {
        userId = body.userId;
      }
    } catch {
      // Body parsing failed
    }

    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized: Missing userId" },
        { status: 401 },
      );
    }

    // Define user object for compatibility
    const user = { id: userId };

    // Check daily limit - Survival has separate limit or shared? Shared for now.
    const { count } = await supabase
      .from("game_sessions")
      .select("*", { count: "exact", head: true })
      .eq("user_id", user.id)
      .gte("started_at", new Date().toISOString().split("T")[0]);

    if (count !== null && count >= MAX_DAILY_SESSIONS) {
      return NextResponse.json(
        {
          error: "Daily limit reached",
          remainingAttempts: 0,
          nextResetAt: getNextMidnight(),
        },
        { status: 429 },
      );
    }

    // Generate session token
    const sessionToken = randomUUID();
    // Survival mode has longer expiry (e.g. 1 hour)
    const expiryMinutes = gameMode === "survival" ? 60 : SESSION_EXPIRY_MINUTES;
    const expiresAt = new Date(Date.now() + expiryMinutes * 60 * 1000);

    // Get client IP for rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0] ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // Create session
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data: sessionData, error: sessionError } = await (supabase as any)
      .from("game_sessions")
      .insert({
        user_id: user.id,
        session_token: sessionToken,
        expires_at: expiresAt.toISOString(),
        ip_address: ip,
        total_questions: gameMode === "survival" ? 999 : 10, // Placeholder for infinite
        game_mode: gameMode, // Store the game mode for leaderboard filtering
      })
      .select()
      .single();

    // Type assertion for session
    const session = sessionData as { id: string } | null;

    if (sessionError || !session) {
      console.error("Session creation error:", sessionError);
      return NextResponse.json(
        { error: "Failed to create session" },
        { status: 500 },
      );
    }

    return NextResponse.json({
      sessionId: session.id,
      sessionToken,
      expiresAt: expiresAt.toISOString(),
      remainingAttempts: MAX_DAILY_SESSIONS - (count || 0) - 1,
    });
  } catch (error) {
    console.error("Start game error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

function getNextMidnight(): string {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  return tomorrow.toISOString();
}
