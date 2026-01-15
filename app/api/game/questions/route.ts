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

// Type for raw question from database
interface RawQuestion {
  id: string;
  category: string;
  difficulty: string;
  question_text: unknown;
  options: unknown;
}

// Type for session from database
interface GameSession {
  id: string;
  user_id: string;
  session_token: string;
  expires_at: string;
  score: number;
  reward_signature: string | null;
  [key: string]: unknown;
}

// Shuffle options and return mapping from new index to original index
function shuffleOptions(options: Array<{ en: string; es: string }>): {
  shuffledOptions: Array<{ en: string; es: string }>;
  indexMap: number[]; // indexMap[newIndex] = originalIndex
} {
  // Create array of indices [0, 1, 2, 3]
  const indices = options.map((_, i) => i);

  // Fisher-Yates shuffle
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }

  // Create shuffled options and mapping
  const shuffledOptions = indices.map(
    (originalIndex) => options[originalIndex]
  );
  const indexMap = indices; // indexMap[newIndex] = originalIndex

  return { shuffledOptions, indexMap };
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
    const { data: sessionData, error: sessionError } = await supabase
      .from("game_sessions")
      .select("*")
      .eq("session_token", sessionToken)
      .eq("user_id", user.id)
      .single();

    const session = sessionData as GameSession | null;

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
        return (data || []) as RawQuestion[];
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
        const typedFallback = fallbackQuestions as RawQuestion[];
        // Filter out duplicates (already selected questions)
        const existingIds = new Set(questions.map((q: RawQuestion) => q.id));
        const availableFallback = typedFallback.filter(
          (q: RawQuestion) => !existingIds.has(q.id)
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

    // Shuffle options for each question and create mapping
    const optionMappings: Record<string, number[]> = {};

    const safeQuestions: QuestionResponse[] = questions.map((q) => {
      const options = q.options as Array<{ en: string; es: string }>;
      const { shuffledOptions, indexMap } = shuffleOptions(options);

      // Store mapping: questionId -> [originalIndex for each position]
      optionMappings[q.id] = indexMap;

      return {
        id: q.id,
        category: q.category,
        difficulty: q.difficulty,
        question_text: q.question_text as { en: string; es: string },
        options: shuffledOptions,
      };
    });

    // Store option mappings in session for answer verification
    // Using reward_signature temporarily (will be overwritten when rewarded)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await (supabase as any)
      .from("game_sessions")
      .update({
        reward_signature: JSON.stringify(optionMappings),
      })
      .eq("id", session.id);

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
