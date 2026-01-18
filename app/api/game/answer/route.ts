import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase-server";

const MIN_RESPONSE_TIME_MS = 500; // More lenient for very fast readers
const TIME_PER_QUESTION_MS = 10000; // 10 seconds (aligned with frontend)
const FAST_ANSWER_THRESHOLD_MS = 3000; // Under 3s = fast bonus (50%)
const MEDIUM_ANSWER_THRESHOLD_MS = 5000; // Under 5s = medium bonus (25%)

// Calculate time bonus points
function calculateTimeBonus(responseTimeMs: number): {
  bonus: number;
  label: string;
} {
  if (responseTimeMs < FAST_ANSWER_THRESHOLD_MS) {
    return { bonus: 50, label: "¡RÁPIDO!" }; // +50% bonus
  } else if (responseTimeMs < MEDIUM_ANSWER_THRESHOLD_MS) {
    return { bonus: 25, label: "¡Veloz!" }; // +25% bonus
  }
  return { bonus: 0, label: "" };
}

// Calculate streak multiplier
function getStreakMultiplier(streak: number): {
  multiplier: number;
  label: string;
} {
  if (streak >= 5) {
    return { multiplier: 2.0, label: "🔥🔥 x2" };
  } else if (streak >= 3) {
    return { multiplier: 1.5, label: "🔥 x1.5" };
  }
  return { multiplier: 1.0, label: "" };
}

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
    const {
      sessionToken,
      questionId,
      answerIndex,
      responseTimeMs,
      currentStreak = 0,
    } = body;

    if (!sessionToken || !questionId || answerIndex === undefined) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Validate session and get option mappings
    const { data: session, error: sessionError } = await supabase
      .from("game_sessions")
      .select("*")
      .eq("session_token", sessionToken)
      .eq("user_id", user.id)
      .is("finished_at", null)
      .single();

    // Type assertion for session
    const typedSession = session as {
      id: string;
      expires_at: string;
      score: number;
      reward_signature: string | null;
      game_mode: string;
    } | null;

    if (sessionError || !typedSession) {
      return NextResponse.json(
        { error: "Invalid or completed session" },
        { status: 403 },
      );
    }

    // Check if session expired
    if (new Date(typedSession.expires_at) < new Date()) {
      return NextResponse.json({ error: "Session expired" }, { status: 410 });
    }

    // Get option mappings from session (stored when questions were fetched)
    let optionMappings: Record<string, number[]> = {};
    if (typedSession.reward_signature) {
      try {
        optionMappings = JSON.parse(typedSession.reward_signature);
      } catch {
        // If parsing fails, mappings might not exist or format changed
        console.warn("Could not parse option mappings, using direct indices");
      }
    }

    // Anti-bot: Check response time
    if (responseTimeMs && responseTimeMs < MIN_RESPONSE_TIME_MS) {
      console.warn(
        `Suspicious response time: ${responseTimeMs}ms for user ${user.id}`,
      );
      // Don't reject, but log for monitoring
    }

    // Check if question already answered in this session
    const { data: existingAnswer } = await supabase
      .from("game_answers")
      .select("id")
      .eq("session_id", typedSession.id)
      .eq("question_id", questionId)
      .single();

    if (existingAnswer) {
      return NextResponse.json(
        { error: "Question already answered" },
        { status: 400 },
      );
    }

    // Get correct answer from database (server-side only)
    const { data: questionData, error: questionError } = await supabase
      .from("game_questions")
      .select("correct_index, explanation")
      .eq("id", questionId)
      .single();

    // Type assertion for question
    const question = questionData as {
      correct_index: number;
      explanation: unknown;
    } | null;

    if (questionError || !question) {
      return NextResponse.json(
        { error: "Question not found" },
        { status: 404 },
      );
    }

    // Note: isCorrect using direct index (for backwards compatibility check)
    const isCorrect = answerIndex === question.correct_index;

    // Translate user's answer index using option mapping (if available)
    // The mapping stores: indexMap[shuffledPosition] = originalIndex
    // So we need to find which original index the user selected
    const questionMapping = optionMappings[questionId];
    let originalAnswerIndex = answerIndex;

    if (questionMapping && questionMapping[answerIndex] !== undefined) {
      // User clicked on shuffled position 'answerIndex'
      // This corresponds to original position 'questionMapping[answerIndex]'
      originalAnswerIndex = questionMapping[answerIndex];
    }

    const isCorrectWithMapping = originalAnswerIndex === question.correct_index;

    // Save answer (store original index for consistency)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { error: answerError } = await (supabase as any)
      .from("game_answers")
      .insert({
        session_id: typedSession.id,
        question_id: questionId,
        answer_index: originalAnswerIndex, // Store original index
        is_correct: isCorrectWithMapping,
        response_time_ms: responseTimeMs,
      });

    if (answerError) {
      console.error("Save answer error:", answerError);
      return NextResponse.json(
        { error: "Failed to save answer" },
        { status: 500 },
      );
    }

    // Add to user's question history
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await (supabase as any).from("game_question_history").upsert({
      user_id: user.id,
      question_id: questionId,
      was_correct: isCorrectWithMapping,
      seen_at: new Date().toISOString(),
    });

    // Update session score if correct
    if (isCorrectWithMapping) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await (supabase as any)
        .from("game_sessions")
        .update({ score: typedSession.score + 1 })
        .eq("id", typedSession.id);
    } else if (typedSession.game_mode === "survival") {
      // Check lives in Survival Mode
      const { count: wrongAnswers } = await supabase
        .from("game_answers")
        .select("id", { count: "exact", head: true })
        .eq("session_id", typedSession.id)
        .eq("is_correct", false);

      // If this was the 3rd strike (existing wrong + current wrong >= 3)
      // Note: We just inserted the current wrong answer, so query includes it
      if ((wrongAnswers || 0) >= 3) {
        await (supabase as any)
          .from("game_sessions")
          .update({ finished_at: new Date().toISOString() })
          .eq("id", typedSession.id);
      }
    }

    // Calculate shuffled correct index (for UI feedback)
    // Find which shuffled position has the correct answer
    let shuffledCorrectIndex = question.correct_index;
    if (questionMapping) {
      shuffledCorrectIndex = questionMapping.indexOf(question.correct_index);
      if (shuffledCorrectIndex === -1)
        shuffledCorrectIndex = question.correct_index;
    }

    // Calculate bonuses
    const timeBonus = responseTimeMs
      ? calculateTimeBonus(responseTimeMs)
      : { bonus: 0, label: "" };
    const streakInfo = getStreakMultiplier(
      currentStreak + (isCorrectWithMapping ? 1 : 0),
    );

    // Return feedback with correct answer and bonus info
    return NextResponse.json({
      isCorrect: isCorrectWithMapping,
      correctIndex: shuffledCorrectIndex,
      explanation: question.explanation,
      currentScore: typedSession.score + (isCorrectWithMapping ? 1 : 0),
      // New bonus fields
      timeBonus: isCorrectWithMapping ? timeBonus : { bonus: 0, label: "" },
      streakMultiplier: streakInfo,
      newStreak: isCorrectWithMapping ? currentStreak + 1 : 0,
    });
  } catch (error) {
    console.error("Submit answer error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
