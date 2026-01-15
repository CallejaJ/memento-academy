import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase-server";
import { randomUUID } from "crypto";

const MAX_DAILY_SESSIONS = 50; // Temporarily increased for testing (was 3)
const SESSION_EXPIRY_MINUTES = 10;

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

    // Check daily limit
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
        { status: 429 }
      );
    }

    // Generate session token
    const sessionToken = randomUUID();
    const expiresAt = new Date(Date.now() + SESSION_EXPIRY_MINUTES * 60 * 1000);

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
        total_questions: 10,
      })
      .select()
      .single();

    // Type assertion for session
    const session = sessionData as { id: string } | null;

    if (sessionError || !session) {
      console.error("Session creation error:", sessionError);
      return NextResponse.json(
        { error: "Failed to create session" },
        { status: 500 }
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
      { status: 500 }
    );
  }
}

function getNextMidnight(): string {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  return tomorrow.toISOString();
}
