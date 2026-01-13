import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase-server";

const MIN_RESPONSE_TIME_MS = 1000; // Answers faster than 1 second are suspicious

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
    const { sessionToken, questionId, answerIndex, responseTimeMs } = body;

    if (!sessionToken || !questionId || answerIndex === undefined) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate session
    const { data: session, error: sessionError } = await supabase
      .from("game_sessions")
      .select("*")
      .eq("session_token", sessionToken)
      .eq("user_id", user.id)
      .is("finished_at", null)
      .single();

    if (sessionError || !session) {
      return NextResponse.json(
        { error: "Invalid or completed session" },
        { status: 403 }
      );
    }

    // Check if session expired
    if (new Date(session.expires_at) < new Date()) {
      return NextResponse.json({ error: "Session expired" }, { status: 410 });
    }

    // Anti-bot: Check response time
    if (responseTimeMs && responseTimeMs < MIN_RESPONSE_TIME_MS) {
      console.warn(
        `Suspicious response time: ${responseTimeMs}ms for user ${user.id}`
      );
      // Don't reject, but log for monitoring
    }

    // Check if question already answered in this session
    const { data: existingAnswer } = await supabase
      .from("game_answers")
      .select("id")
      .eq("session_id", session.id)
      .eq("question_id", questionId)
      .single();

    if (existingAnswer) {
      return NextResponse.json(
        { error: "Question already answered" },
        { status: 400 }
      );
    }

    // Get correct answer from database (server-side only)
    const { data: question, error: questionError } = await supabase
      .from("game_questions")
      .select("correct_index, explanation")
      .eq("id", questionId)
      .single();

    if (questionError || !question) {
      return NextResponse.json(
        { error: "Question not found" },
        { status: 404 }
      );
    }

    const isCorrect = answerIndex === question.correct_index;

    // Save answer
    const { error: answerError } = await supabase.from("game_answers").insert({
      session_id: session.id,
      question_id: questionId,
      answer_index: answerIndex,
      is_correct: isCorrect,
      response_time_ms: responseTimeMs,
    });

    if (answerError) {
      console.error("Save answer error:", answerError);
      return NextResponse.json(
        { error: "Failed to save answer" },
        { status: 500 }
      );
    }

    // Add to user's question history
    await supabase.from("game_question_history").upsert({
      user_id: user.id,
      question_id: questionId,
      was_correct: isCorrect,
      seen_at: new Date().toISOString(),
    });

    // Update session score if correct
    if (isCorrect) {
      await supabase
        .from("game_sessions")
        .update({ score: session.score + 1 })
        .eq("id", session.id);
    }

    // Return feedback with correct answer
    return NextResponse.json({
      isCorrect,
      correctIndex: question.correct_index,
      explanation: question.explanation,
      currentScore: session.score + (isCorrect ? 1 : 0),
    });
  } catch (error) {
    console.error("Submit answer error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
