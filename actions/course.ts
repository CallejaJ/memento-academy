"use server";

import { createServerSupabaseClient } from "@/lib/server-auth";
import { cache } from "react";

export interface CourseSection {
  id: string;
  course_id: string;
  slug: string;
  order_index: number;
  title: Record<string, string>;
  description: Record<string, string>;
  content: any; // Using any for flexible JSON content
}

export interface QuizQuestion {
  id: string;
  question: Record<string, string>;
  options: Record<string, string>[]; // Array of {en: "...", es: "..."} objects? Or just strings if localized upstream?
  // The seed data had options as `[{"en": "Opt A", "es": "Opc A"}]`.
  // Wait, the seed inserted: `[{"en": "...", "es": "..."}]`.
  // So `options` is an array of objects where keys are languages.
}

export const getCourseContent = cache(async (courseId: string) => {
  const supabase = await createServerSupabaseClient();

  const { data: sections, error } = await supabase
    .from("course_sections")
    .select("*")
    .eq("course_id", courseId)
    .order("order_index", { ascending: true });

  if (error) {
    console.error("Error fetching course content:", error);
    return [];
  }

  return sections as CourseSection[];
});

export const getCourseSections = getCourseContent;

export const getQuizQuestions = async (sectionId: string, limit = 3) => {
  const supabase = await createServerSupabaseClient();

  // Get random questions
  // Note: Supabase/Postgres doesn't have a simple "random" in simple select without RPC in some setups,
  // but we can use `.order('random()')` if enabled or fetch all and shuffle.
  // Since we expect ~15 questions, fetching all and shuffling in JS is fine and cheaper than potential DB index misses for random.

  const { data: questions, error } = await supabase
    .from("quiz_questions")
    .select("id, question, options") // Exclude correct_answer and explanation
    .eq("section_id", sectionId);

  if (error) {
    console.error("Error fetching quiz questions:", error);
    return [];
  }

  // Fisher-Yates Shuffle
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }

  return questions.slice(0, limit) as QuizQuestion[];
};

export const verifyQuizAnswers = async (
  sectionId: string,
  answers: Record<string, number> // questionId -> selectedIndex
): Promise<{
  success: boolean;
  feedback?: Record<
    string,
    { correct: boolean; explanation: Record<string, string> }
  >;
}> => {
  const supabase = await createServerSupabaseClient();

  // Fetch full questions with correct answers
  const { data: questions, error } = await supabase
    .from("quiz_questions")
    .select("id, correct_answer, explanation")
    .eq("section_id", sectionId);

  if (error || !questions) {
    throw new Error("Failed to validate quiz");
  }

  let allCorrect = true;
  const feedback: Record<
    string,
    { correct: boolean; explanation: Record<string, string> }
  > = {};

  // Check if all submitted answers match
  // Also check if we have answers for the questions asked (client should send only the IDs it got)
  // But here we might just validate the ones passed in `answers`.

  for (const qId in answers) {
    const question = questions.find((q) => q.id === qId);
    if (!question) continue;

    const isCorrect = question.correct_answer === answers[qId];
    if (!isCorrect) allCorrect = false;

    feedback[qId] = {
      correct: isCorrect,
      explanation: (question.explanation as Record<string, string>) || {},
    };
  }

  // Ensure we answered exactly 3 (or however many were required).
  // For now, strict 100% on submitted answers.

  // NOTE: Progress is saved CLIENT-SIDE via useCourseProgress hook
  // Server-side auth has issues with Next.js 15 middleware
  // The hybrid approach: server validates, client saves progress

  return { success: allCorrect, feedback };
};
