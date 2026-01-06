"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/auth-context";

export interface CourseProgress {
  id: string;
  user_id: string;
  course_id: string;
  progress_percentage: number;
  completed_sections: string[];
  completed_at: string | null;
}

export function useCourseProgress(courseId: string) {
  const { user } = useAuth();
  const [progress, setProgress] = useState<CourseProgress | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user || !courseId) return;
    fetchProgress();
  }, [user, courseId]);

  const fetchProgress = async () => {
    if (!user) return;
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("course_progress")
        .select("*")
        .eq("user_id", user?.id)
        .eq("course_id", courseId)
        .maybeSingle();

      if (error && error.code !== "PGRST116") {
        // PGRST116 is "not found"
        console.error("Error fetching progress:", error);
      }

      if (data) {
        setProgress(data);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const startCourse = async () => {
    if (!user) return null;

    // Check if already started
    if (progress) return progress;

    const newProgress = {
      user_id: user.id,
      course_id: courseId,
      progress_percentage: 0,
      completed_sections: [],
      started_at: new Date().toISOString(),
    };

    const { data, error } = await supabase
      .from("course_progress")
      .insert(newProgress)
      .select()
      .single();

    if (error) {
      console.error("Error starting course:", error);
      return null;
    }

    setProgress(data);
    return data;
  };

  const markSectionComplete = async (
    sectionId: string,
    totalSections: number
  ) => {
    if (!user || !progress) await startCourse();

    // Optimistic update
    const currentCompleted = progress?.completed_sections || [];
    if (currentCompleted.includes(sectionId)) return; // Already completed

    const newCompleted = [...currentCompleted, sectionId];
    const newPercentage = Math.round(
      (newCompleted.length / totalSections) * 100
    );

    const isCompleted = newPercentage === 100;
    const completedAt = isCompleted ? new Date().toISOString() : null;

    // Update local state
    setProgress((prev) =>
      prev
        ? {
            ...prev,
            completed_sections: newCompleted,
            progress_percentage: newPercentage,
            completed_at: inputCompletedAt(prev.completed_at, completedAt),
          }
        : null
    );

    // Update DB
    if (user) {
      const { error } = await supabase
        .from("course_progress")
        .update({
          completed_sections: newCompleted,
          progress_percentage: newPercentage,
          completed_at: completedAt,
          last_accessed_at: new Date().toISOString(),
        })
        .eq("user_id", user.id)
        .eq("course_id", courseId);

      if (error) {
        console.error("Error updating progress:", error);
        // Revert local state? (Skipping for simplicity for now)
      } else {
        // Check and award achievements
        await checkAchievements(newCompleted.length, isCompleted);
      }
    }
  };

  // Check and award achievements based on progress
  const checkAchievements = async (
    sectionsCompleted: number,
    courseCompleted: boolean
  ) => {
    if (!user) return;

    try {
      // Fetch all user's course progress to calculate stats
      const { data: allProgress, error } = await supabase
        .from("course_progress")
        .select("*")
        .eq("user_id", user.id);

      if (error || !allProgress) return;

      const coursesCompleted = allProgress.filter(
        (p) => p.progress_percentage === 100
      ).length;
      const totalSectionsCompleted = allProgress.reduce(
        (sum, p) => sum + p.completed_sections.length,
        0
      );

      // Import and use checkAndAwardAchievements from useAchievements
      // Note: We'll need to make this work without the hook
      // For now, we'll call awardAchievement directly via supabase

      // Award "First Steps" on first section
      if (totalSectionsCompleted === 1) {
        await awardAchievementDirect("first-steps");
      }

      // Award "Course Graduate" on first course
      if (courseCompleted && coursesCompleted === 1) {
        await awardAchievementDirect("first-course");
      }

      // Award "Dedicated Student" on 5 courses
      if (coursesCompleted === 5) {
        await awardAchievementDirect("dedicated-student");
      }

      // Award "Crypto Expert" on 10 courses
      if (coursesCompleted === 10) {
        await awardAchievementDirect("crypto-expert");
      }

      // Award "Knowledge Seeker" on 50 sections
      if (totalSectionsCompleted === 50) {
        await awardAchievementDirect("knowledge-seeker");
      }
    } catch (error) {
      console.error("Error checking achievements:", error);
    }
  };

  const awardAchievementDirect = async (achievementId: string) => {
    if (!user) return;

    // Check if already has it
    const { data: existing } = await supabase
      .from("user_achievements" as any)
      .select("*")
      .eq("user_id", user.id)
      .eq("achievement_id", achievementId)
      .single();

    if (existing) return; // Already has it

    // Award it
    await supabase.from("user_achievements" as any).insert({
      user_id: user.id,
      achievement_id: achievementId,
    });
  };

  return {
    progress,
    loading,
    startCourse,
    markSectionComplete,
    isStarted: !!progress,
    isCompleted: progress?.progress_percentage === 100,
  };
}

function inputCompletedAt(
  prev: string | null | undefined,
  current: string | null
) {
  if (current) return current;
  return prev || null;
}
