import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase-server";

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("game_questions")
      .select("category, difficulty");

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const summary: Record<string, any> = { total: 0 };

    data.forEach((q: any) => {
      if (!summary[q.category])
        summary[q.category] = { total: 0, easy: 0, medium: 0, hard: 0 };

      summary[q.category][q.difficulty] =
        (summary[q.category][q.difficulty] || 0) + 1;
      summary[q.category].total++;
      summary.total++;
    });

    return NextResponse.json(summary);
  } catch (error) {
    return NextResponse.json({ error: "Internal Error" }, { status: 500 });
  }
}
