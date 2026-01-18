import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function checkDeFiQuestion() {
  const { data, error } = await supabase
    .from("game_questions")
    .select("*")
    // Using ILIKE to find the question roughly
    .ilike("question_text->>es", "%significa DeFi%")
    .single();

  if (error) {
    console.error("Error fetching question:", error);
    return;
  }

  console.log("=== Question Data ===");
  console.log("ID:", data.id);
  console.log("Text:", data.question_text);
  console.log("Options:", data.options);
  console.log("Correct Index:", data.correct_index);
  console.log("Explanation:", data.explanation);
}

checkDeFiQuestion();
