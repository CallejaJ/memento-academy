import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function checkQuestions() {
  const { data, error } = await supabase
    .from("game_questions")
    .select("category, difficulty, id");

  if (error) {
    console.error("Error fetching questions:", error);
    return;
  }

  const summary: Record<string, Record<string, number>> = {};
  let total = 0;

  data.forEach((q) => {
    if (!summary[q.category]) summary[q.category] = { total: 0 };
    if (!summary[q.category][q.difficulty])
      summary[q.category][q.difficulty] = 0;

    summary[q.category][q.difficulty]++;
    summary[q.category].total++;
    total++;
  });

  console.log("=== Question Statistics ===");
  console.log("Total Questions:", total);
  console.table(summary);
}

checkQuestions();
