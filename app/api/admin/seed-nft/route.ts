import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    // 1. Read the seed files
    const seedPath = path.join(
      process.cwd(),
      "supabase",
      "seed_nft_masterclass.sql"
    );
    const questionsPath = path.join(
      process.cwd(),
      "supabase",
      "seed_nft_masterclass_questions.sql"
    );

    const seedSql = fs.readFileSync(seedPath, "utf8");
    const questionsSql = fs.readFileSync(questionsPath, "utf8");

    // 2. Execute them
    // Note: $executeRawUnsafe can execute multiple statements in PG if they are separated by semicolons
    console.log("Seeding NFT Masterclass content...");
    await prisma.$executeRawUnsafe(seedSql);

    console.log("Seeding NFT Masterclass questions...");
    await prisma.$executeRawUnsafe(questionsSql);

    return NextResponse.json({
      success: true,
      message: "NFT Masterclass seeded successfully",
    });
  } catch (error) {
    console.error("Seeding error:", error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}
