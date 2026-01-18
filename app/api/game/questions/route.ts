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

    // Check if session already has questions via reward_signature (Idempotency check)
    if (session.reward_signature) {
      try {
        const storedMappings: Record<string, number[]> = JSON.parse(
          session.reward_signature,
        );
        const questionIds = Object.keys(storedMappings);

        if (questionIds.length > 0) {
          // Fetch the specific questions that were previously assigned
          const { data: existingQuestions } = await supabase
            .from("game_questions")
            .select("id, category, difficulty, question_text, options")
            .in("id", questionIds);

          if (existingQuestions) {
            const safeReconstructedQuestions: QuestionResponse[] = (
              existingQuestions as RawQuestion[]
            ).map((q) => {
              const options = q.options as Array<{ en: string; es: string }>;
              const indexMap = storedMappings[q.id];

              // Reconstruct shuffled options using the stored map
              // indexMap[newIndex] = originalIndex
              // so shuffled[newIndex] = original[indexMap[newIndex]]
              const shuffledOptions = indexMap.map(
                (originalIndex) => options[originalIndex],
              );

              return {
                id: q.id,
                category: q.category,
                difficulty: q.difficulty,
                question_text: q.question_text as { en: string; es: string },
                options: shuffledOptions,
              };
            });

            // Return the same questions as before
            return NextResponse.json({
              sessionId: session.id,
              questions: safeReconstructedQuestions,
              totalQuestions: safeReconstructedQuestions.length,
              timePerQuestion: 10,
              gameMode: session.game_mode,
            });
          }
        }
      } catch (e) {
        console.error("Error parsing existing reward signature:", e);
        // Fall through to generate new questions if parsing fails
      }
    }

    // Check if session already has answers (block re-fetching if game started)
    // This is a secondary check; legitimate re-fetches (page refresh) are handled above.
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
    } else if (session.game_mode === "daily") {
      // Daily Mode: Fetch current day's category
      const today = new Date().toISOString().split("T")[0];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { data: dailyChallenge } = await (supabase as any)
        .from("daily_challenges")
        .select("category")
        .eq("challenge_date", today)
        .single();

      const category = dailyChallenge?.category || "random"; // Fallback to random if no challenge

      if (category === "random") {
        // Fallback: mixed questions
        const { data } = await supabase
          .from("game_questions")
          .select("id, category, difficulty, question_text, options")
          .eq("is_active", true)
          .limit(20);
        questions = ((data || []) as RawQuestion[])
          .sort(() => Math.random() - 0.5)
          .slice(0, 10);
      } else {
        // Fetch questions for specific category
        const { data } = await supabase
          .from("game_questions")
          .select("id, category, difficulty, question_text, options")
          .eq("is_active", true)
          .eq("category", category)
          .limit(20);

        questions = ((data || []) as RawQuestion[])
          .sort(() => Math.random() - 0.5)
          .slice(0, 10);

        // If not enough questions in category, fill with randoms
        if (questions.length < 10) {
          const { data: filler } = await supabase
            .from("game_questions")
            .select("id, category, difficulty, question_text, options")
            .eq("is_active", true)
            .neq("category", category)
            .limit(10 - questions.length);

          if (filler) {
            questions = [...questions, ...(filler as RawQuestion[])];
          }
        }
      }
    } else {
      // Classic Mode: Progressive Difficulty logic
      // 4 easy -> 4 medium -> 2 hard

      // Determine categories based on session.category
      let categoryFilter: string[] = [];
      const sessionCategory = session.category || "random";

      if (sessionCategory === "fundamentals") {
        categoryFilter = ["Web3 Basics", "Crypto 101", "CBDCs"];
      } else if (sessionCategory === "defi_trading") {
        categoryFilter = ["DeFi", "Technical Analysis", "Portfolio Management"];
      } else if (sessionCategory === "nfts") {
        categoryFilter = ["NFTs"];
      } else if (sessionCategory === "security") {
        categoryFilter = ["Security", "Smart Contracts"];
      }
      // "random" implies empty filter (all allowed)

      // ... existing progressive logic ...
      const questionPromises = (["easy", "medium", "hard"] as const).map(
        async (difficulty) => {
          const count =
            difficulty === "easy" ? 4 : difficulty === "medium" ? 4 : 2;

          let query = supabase
            .from("game_questions")
            .select("id, category, difficulty, question_text, options")
            .eq("is_active", true)
            .eq("difficulty", difficulty)
            .not(
              "id",
              "in",
              `(SELECT question_id FROM game_question_history WHERE user_id = '${user.id}')`,
            );

          // Apply category filter if not random
          if (categoryFilter.length > 0) {
            query = query.in("category", categoryFilter);
          }

          const { data } = await query.limit(count * 10);
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
        let fallbackQuery = supabase
          .from("game_questions")
          .select("id, category, difficulty, question_text, options")
          .eq("is_active", true);

        if (categoryFilter.length > 0) {
          fallbackQuery = fallbackQuery.in("category", categoryFilter);
        }

        const { data: fallbackQuestions } = await fallbackQuery.limit(50);

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
