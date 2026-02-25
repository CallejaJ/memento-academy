import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase-server";

export async function GET() {
  try {
    const supabase = await createClient();
    const today = new Date().toISOString().split("T")[0];

    const { data: challenge, error } = await supabase
      .from("daily_challenges")
      .select("*")
      .eq("challenge_date", today)
      .single();

    if (error && error.code !== "PGRST116") {
      console.error("Error fetching daily challenge:", error);
      return NextResponse.json(
        { error: "Failed to fetch daily challenge" },
        { status: 500 },
      );
    }

    // No challenge for today: implement a rotating fallback
    if (!challenge) {
      const dayOfWeek = new Date().getDay(); // 0 is Sunday
      const fallbacks = [
        {
          id: "fb-sun",
          category: "fundamentals",
          title: { en: "Sunday Fundaments", es: "Fundamentos de Domingo" },
          reward_multiplier: 1.5,
        },
        {
          id: "fb-mon",
          category: "fundamentals",
          title: { en: "Monday Mastery", es: "Maestría de Lunes" },
          reward_multiplier: 1.5,
        },
        {
          id: "fb-tue",
          category: "defi_trading",
          title: { en: "DeFi Tuesday", es: "Martes de DeFi" },
          reward_multiplier: 1.5,
        },
        {
          id: "fb-wed",
          category: "nfts",
          title: { en: "NFT Wednesday", es: "Miércoles de NFTs" },
          reward_multiplier: 1.5,
        },
        {
          id: "fb-thu",
          category: "security",
          title: { en: "Security Thursday", es: "Jueves de Seguridad" },
          reward_multiplier: 1.5,
        },
        {
          id: "fb-fri",
          category: "fundamentals",
          title: { en: "Future Friday", es: "Viernes de Futuro" },
          reward_multiplier: 1.5,
        },
        {
          id: "fb-sat",
          category: "defi_trading",
          title: { en: "Trading Saturday", es: "Sábado de Trading" },
          reward_multiplier: 2.0,
        },
      ];

      return NextResponse.json({ challenge: fallbacks[dayOfWeek] });
    }

    return NextResponse.json({ challenge });
  } catch (error) {
    console.error("Daily API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
