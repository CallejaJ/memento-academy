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
  game_mode?: string;
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
    (originalIndex) => options[originalIndex],
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
        { status: 400 },
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
        { status: 400 },
      );
    }

    // Get questions based on Game Mode
    let questions: RawQuestion[] = [];

    if (session.game_mode === "survival") {
      // Survival: Fetch ALL available questions (or a large batch) and shuffle
      // Filter out seen only if we have plenty, otherwise re-use but shuffle
      const { data: allQuestions } = await supabase
        .from("game_questions")
        .select("id, category, difficulty, question_text, options")
        .eq("is_active", true)
        .limit(100); // Fetch all (we have ~77)

      if (!allQuestions || allQuestions.length === 0) {
        return NextResponse.json({ error: "No questions" }, { status: 404 });
      }

      const typedQuestions = allQuestions as RawQuestion[];
      questions = typedQuestions.sort(() => Math.random() - 0.5); // Shuffle all
    } else {
      // Classic Mode: Progressive Difficulty logic
      // 4 easy -> 4 medium -> 2 hard

      // ... existing progressive logic ...
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
              `(SELECT question_id FROM game_question_history WHERE user_id = '${user.id}')`,
            )
            .limit(count * 10);
          return (data || []) as RawQuestion[];
        },
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
      questions = [...selectedEasy, ...selectedMedium, ...selectedHard];

      // Fallback logic if not enough questions
      if (questions.length < 10) {
        const { data: fallbackQuestions } = await supabase
          .from("game_questions")
          .select("id, category, difficulty, question_text, options")
          .eq("is_active", true)
          .limit(50);

        if (fallbackQuestions) {
          const typedFallback = fallbackQuestions as RawQuestion[];
          const existingIds = new Set(questions.map((q: RawQuestion) => q.id));
          const availableFallback = typedFallback.filter(
            (q: RawQuestion) => !existingIds.has(q.id),
          );
          const shuffledFallback = shuffleArray(availableFallback);
          questions = [...questions, ...shuffledFallback].slice(0, 10);
        }
      }
    }

    if (questions.length === 0) {
      return NextResponse.json(
        { error: "No questions available" },
        { status: 404 },
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
      timePerQuestion: 10, // seconds
      gameMode: session.game_mode,
    });
  } catch (error) {
    console.error("Get questions error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
