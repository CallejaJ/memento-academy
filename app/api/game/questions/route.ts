import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase-server";

interface QuestionResponse {
  id: string;
  category: string;
  difficulty: string;
  question_text: { en: string; es: string };
  options: Array<{ en: string; es: string }>;
  // NOTE: correct_index is NOT included - security measure
}

export async function GET(request: NextRequest) {
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

    // Get session token from query params
    const { searchParams } = new URL(request.url);
    const sessionToken = searchParams.get("sessionToken");

    if (!sessionToken) {
      return NextResponse.json(
        { error: "Session token required" },
        { status: 400 }
      );
    }

    // Validate session
    const { data: session, error: sessionError } = await supabase
      .from("game_sessions")
      .select("*")
      .eq("session_token", sessionToken)
      .eq("user_id", user.id)
      .single();

    if (sessionError || !session) {
      return NextResponse.json({ error: "Invalid session" }, { status: 403 });
    }

    // Check if session expired
    if (new Date(session.expires_at) < new Date()) {
      return NextResponse.json({ error: "Session expired" }, { status: 410 });
    }

    // Check if session already has questions (prevent re-fetching)
    const { count: answersCount } = await supabase
      .from("game_answers")
      .select("*", { count: "exact", head: true })
      .eq("session_id", session.id);

    if (answersCount && answersCount > 0) {
      return NextResponse.json(
        { error: "Questions already fetched for this session" },
        { status: 400 }
      );
    }

    // Get questions with PROGRESSIVE DIFFICULTY
    // 4 easy -> 4 medium -> 2 hard

    // Fetch questions by difficulty
    const questionPromises = (["easy", "medium", "hard"] as const).map(
      async (difficulty) => {
        const count =
          difficulty === "easy" ? 4 : difficulty === "medium" ? 4 : 2;
        const { data } = await supabase
          .from("game_questions")
          .select("id, category, difficulty, question_text, options")
          .eq("is_active", true)
          .eq("difficulty", difficulty)
          .not(
            "id",
            "in",
            `(SELECT question_id FROM game_question_history WHERE user_id = '${user.id}')`
          )
          // Remove deterministic ordering to let DB return results more naturally,
          // though typically we'd use a random function.
          // For now, we fetch a larger batch and shuffle in memory.
          .limit(count * 10); // INCREASED: Get larger pool for better randomization
        return data || [];
      }
    );

    const [easyQuestions, mediumQuestions, hardQuestions] =
      await Promise.all(questionPromises);

    // Shuffle within each difficulty and pick required count
    const shuffleArray = <T>(arr: T[]): T[] =>
      arr.sort(() => Math.random() - 0.5);

    const selectedEasy = shuffleArray(easyQuestions).slice(0, 4);
    const selectedMedium = shuffleArray(mediumQuestions).slice(0, 4);
    const selectedHard = shuffleArray(hardQuestions).slice(0, 2);

    // Combine in progressive order: easy -> medium -> hard
    let questions = [...selectedEasy, ...selectedMedium, ...selectedHard];

    // If not enough questions (e.g. exhausted history), fill with ANY available, shuffled.
    if (questions.length < 10) {
      const { data: fallbackQuestions } = await supabase
        .from("game_questions")
        .select("id, category, difficulty, question_text, options")
        .eq("is_active", true)
        .limit(100); // INCREASED: Fetch a significantly larger pool to shuffle from

      if (fallbackQuestions) {
        // Filter out duplicates (already selected questions)
        const existingIds = new Set(questions.map((q) => q.id));
        const availableFallback = fallbackQuestions.filter(
          (q) => !existingIds.has(q.id)
        );

        // Shuffle the fallback pool heavily
        const shuffledFallback = shuffleArray(availableFallback);

        // Fill the remaining spots
        questions = [...questions, ...shuffledFallback].slice(0, 10);
      }
    }

    if (questions.length === 0) {
      return NextResponse.json(
        { error: "No questions available" },
        { status: 404 }
      );
    }

    // Return questions WITHOUT correct answers
    const safeQuestions: QuestionResponse[] = questions.map((q) => ({
      id: q.id,
      category: q.category,
      difficulty: q.difficulty,
      question_text: q.question_text as { en: string; es: string },
      options: q.options as Array<{ en: string; es: string }>,
    }));

    return NextResponse.json({
      sessionId: session.id,
      questions: safeQuestions,
      totalQuestions: safeQuestions.length,
      timePerQuestion: 30, // seconds
    });
  } catch (error) {
    console.error("Get questions error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
