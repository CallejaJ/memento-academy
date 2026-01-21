"use server";

import { supabaseAdmin } from "@/lib/supabase-admin";

interface CourseProgressResult {
  success: boolean;
  data?: any;
  error?: string;
}

/**
 * Get course progress for a user
 */
export async function getCourseProgress(
  userId: string,
  courseId: string,
): Promise<CourseProgressResult> {
  try {
    const { data, error } = await supabaseAdmin
      .from("course_progress")
      .select("*")
      .eq("user_id", userId)
      .eq("course_id", courseId)
      .maybeSingle();

    if (error && error.code !== "PGRST116") {
      console.error("Error fetching progress:", error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (error: any) {
    console.error("getCourseProgress error:", error);
    return { success: false, error: error.message };
  }
}

/**
 * Start a new course (create progress record)
 */
export async function startCourseProgress(
  userId: string,
  courseId: string,
): Promise<CourseProgressResult> {
  try {
    const { data, error } = await supabaseAdmin
      .from("course_progress")
      .insert({
        user_id: userId,
        course_id: courseId,
        progress_percentage: 0,
        completed_sections: [],
      })
      .select()
      .single();

    if (error) {
      console.error("Error starting course:", error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (error: any) {
    console.error("startCourseProgress error:", error);
    return { success: false, error: error.message };
  }
}

/**
 * Update course progress (mark section complete)
 */
export async function updateCourseProgress(
  userId: string,
  courseId: string,
  completedSections: string[],
  progressPercentage: number,
  completedAt: string | null,
): Promise<CourseProgressResult> {
  try {
    const { data, error } = await supabaseAdmin
      .from("course_progress")
      .update({
        completed_sections: completedSections,
        progress_percentage: progressPercentage,
        completed_at: completedAt,
        last_accessed_at: new Date().toISOString(),
      })
      .eq("user_id", userId)
      .eq("course_id", courseId)
      .select()
      .single();

    if (error) {
      console.error("Error updating progress:", error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (error: any) {
    console.error("updateCourseProgress error:", error);
    return { success: false, error: error.message };
  }
}

/**
 * Get all course progress for a user (for dashboard/achievements)
 */
export async function getAllUserProgress(
  userId: string,
): Promise<CourseProgressResult> {
  try {
    const { data, error } = await supabaseAdmin
      .from("course_progress")
      .select("*")
      .eq("user_id", userId);

    if (error) {
      console.error("Error fetching all progress:", error);
      return { success: false, error: error.message };
    }

    return { success: true, data: data || [] };
  } catch (error: any) {
    console.error("getAllUserProgress error:", error);
    return { success: false, error: error.message };
  }
}
