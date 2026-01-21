"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/auth-context";
import {
  getCourseProgress,
  startCourseProgress,
  updateCourseProgress,
  getAllUserProgress,
} from "@/actions/course-progress";
import { awardAchievementDirect } from "@/actions/course-progress-achievements";

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
        // Logged in: Fetch via Server Action (bypasses RLS)
        const result = await getCourseProgress(user.id, courseId);
        if (result.success && result.data) {
          setProgress(result.data);
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
    };

    if (user) {
      // Logged in: Insert via Server Action (bypasses RLS)
      const result = await startCourseProgress(user.id, courseId);

      if (!result.success) {
        console.error("Error starting course:", result.error);
        return null;
      }
      setProgress(result.data);
      return result.data;
    } else {
      // Guest: Save to Local Storage
      try {
        localStorage.setItem(
          `memento_progress_${courseId}`,
          JSON.stringify(newProgress),
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
    totalSections: number,
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
      (newCompleted.length / totalSections) * 100,
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
      // Logged in: Update via Server Action (bypasses RLS)
      const result = await updateCourseProgress(
        user.id,
        courseId,
        newCompleted,
        newPercentage,
        completedAt,
      );

      if (!result.success) {
        console.error("Error updating progress:", result.error);
      } else {
        await checkAchievements(newCompleted.length, isCompleted);
      }
    } else {
      // Guest: Update Local Storage
      try {
        localStorage.setItem(
          `memento_progress_${courseId}`,
          JSON.stringify(updatedProgress),
        );
      } catch (e) {
        console.error("Error updating local progress:", e);
      }
    }
  };

  // Check and award achievements based on progress
  const checkAchievements = async (
    sectionsCompleted: number,
    courseCompleted: boolean,
  ) => {
    if (!user) return; // Achievements are only for logged users

    try {
      // Fetch all user's course progress to calculate stats via Server Action
      const result = await getAllUserProgress(user.id);

      if (!result.success || !result.data) return;

      const allProgress = result.data;
      const coursesCompleted = allProgress.filter(
        (p: any) => p.progress_percentage === 100,
      ).length;
      const totalSectionsCompleted = allProgress.reduce(
        (sum: number, p: any) => sum + p.completed_sections.length,
        0,
      );

      // Award achievements via server action

      // Award "First Steps" on first section
      if (totalSectionsCompleted === 1) {
        await awardAchievementDirect(user.id, "first-steps");
      }

      // Award "Course Graduate" on first course
      if (courseCompleted && coursesCompleted === 1) {
        await awardAchievementDirect(user.id, "first-course");
      }

      // Award "Dedicated Student" on 5 courses
      if (coursesCompleted === 5) {
        await awardAchievementDirect(user.id, "dedicated-student");
      }

      // Award "Crypto Expert" on 10 courses
      if (coursesCompleted === 10) {
        await awardAchievementDirect(user.id, "crypto-expert");
      }

      // Award "Knowledge Seeker" on 50 sections
      if (totalSectionsCompleted === 50) {
        await awardAchievementDirect(user.id, "knowledge-seeker");
      }
    } catch (error) {
      console.error("Error checking achievements:", error);
    }
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
  current: string | null,
) {
  if (current) return current;
  return prev || null;
}
