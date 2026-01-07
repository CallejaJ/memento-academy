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
    if (!courseId) return;
    fetchProgress();
  }, [user, courseId]);

  const fetchProgress = async () => {
    setLoading(true);
    try {
      if (user) {
        // Logged in: Fetch from Supabase
        const { data, error } = await supabase
          .from("course_progress")
          .select("*")
          .eq("user_id", user.id)
          .eq("course_id", courseId)
          .maybeSingle();

        if (error && error.code !== "PGRST116") {
          console.error("Error fetching progress:", error);
        }

        if (data) {
          setProgress(data);
        }
      } else {
        // Guest: Fetch from Local Storage
        const stored = localStorage.getItem(`memento_progress_${courseId}`);
        if (stored) {
          try {
            setProgress(JSON.parse(stored));
          } catch (e) {
            console.error("Error parsing local progress:", e);
          }
        }
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const startCourse = async () => {
    // Check if already started
    if (progress) return progress;

    const newProgress: CourseProgress = {
      id: crypto.randomUUID(), // Generate a temp ID for local usage
      user_id: user?.id || "guest",
      course_id: courseId,
      progress_percentage: 0,
      completed_sections: [],
      completed_at: null,
      // started_at: new Date().toISOString(), // Type definition might need update if this field exists in DB but not in interface, checking interface... interface doesn't have started_at contextually from previous read, but let's be safe.
      // Interface at top of file (lines 7-14) does NOT have started_at.
    };

    if (user) {
      // Logged in: Insert to DB
      const { data, error } = await supabase
        .from("course_progress")
        .insert({
          user_id: user.id,
          course_id: courseId,
          progress_percentage: 0,
          completed_sections: [],
        })
        .select()
        .single();

      if (error) {
        console.error("Error starting course:", error);
        return null;
      }
      setProgress(data);
      return data;
    } else {
      // Guest: Save to Local Storage
      try {
        localStorage.setItem(
          `memento_progress_${courseId}`,
          JSON.stringify(newProgress)
        );
        setProgress(newProgress);
        return newProgress;
      } catch (e) {
        console.error("Error saving local progress:", e);
        return null;
      }
    }
  };

  const markSectionComplete = async (
    sectionId: string,
    totalSections: number
  ) => {
    let currentProgress = progress;

    if (!currentProgress) {
      currentProgress = await startCourse();
    }

    if (!currentProgress) return; // Should not happen

    // Optimistic update logic
    const currentCompleted = currentProgress.completed_sections || [];
    if (currentCompleted.includes(sectionId)) return; // Already completed

    const newCompleted = [...currentCompleted, sectionId];
    const newPercentage = Math.round(
      (newCompleted.length / totalSections) * 100
    );

    const isCompleted = newPercentage === 100;
    const completedAt = isCompleted ? new Date().toISOString() : null;

    const updatedProgress = {
      ...currentProgress,
      completed_sections: newCompleted,
      progress_percentage: newPercentage,
      completed_at: inputCompletedAt(currentProgress.completed_at, completedAt),
    };

    // Update State
    setProgress(updatedProgress);

    if (user) {
      // Logged in: Update DB
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
      } else {
        await checkAchievements(newCompleted.length, isCompleted);
      }
    } else {
      // Guest: Update Local Storage
      try {
        localStorage.setItem(
          `memento_progress_${courseId}`,
          JSON.stringify(updatedProgress)
        );
      } catch (e) {
        console.error("Error updating local progress:", e);
      }
    }
  };

  // Check and award achievements based on progress
  const checkAchievements = async (
    sectionsCompleted: number,
    courseCompleted: boolean
  ) => {
    if (!user) return; // Achievements are only for logged users

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
      // For now, we'll call awardAchievementDirect via supabase

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
    refresh: fetchProgress,
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
