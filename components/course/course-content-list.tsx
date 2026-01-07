"use client";

import { useState, useEffect } from "react";
import { CourseSection } from "@/components/course/course-section";
import { CourseSection as SectionData } from "@/actions/course";
import { useCourseProgress } from "@/hooks/use-course-progress";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

interface CourseContentListProps {
  courseId: string;
  initialSections: SectionData[];
  isLoggedIn?: boolean;
  isPremium?: boolean;
}

export function CourseContentList({
  courseId,
  initialSections,
  isLoggedIn = true,
  isPremium = false,
}: CourseContentListProps) {
  const { progress, loading, markSectionComplete, refresh } =
    useCourseProgress(courseId);
  const router = useRouter();

  const completedIds = progress?.completed_sections || [];

  // Find current active index (first uncompleted)
  // If all completed, all unlocked.
  // Sections are ordered by order_index.
  // Let's assume order_index follows 1, 2, 3...

  // Actually, we need to map over sections and determine status.

  // Handle completion refresh
  const handleComplete = async (sectionId: string) => {
    await refresh(); // Refresh client-side state
    router.refresh(); // Refresh server-side state (components)
  };

  if (loading && !progress) {
    return (
      <div className="py-10 flex justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-violet-500" />
      </div>
    );
  }

  // Determine the highest completed order index to know what is unlocked
  // We can just rely on the completedIds list.
  // A section is unlocked if the PREVIOUS section is completed.
  // Section 1 is always unlocked.

  return (
    <div className="space-y-4 relative pl-4 md:pl-0">
      {initialSections.map((section, idx) => {
        // For non-logged users (free courses): all content visible for SEO
        // For premium courses: if not logged in, CONTENT IS BLOCKED.
        // For logged users: progressive locking based on completion
        const isCompleted = isLoggedIn
          ? completedIds.includes(section.id)
          : false;

        // Locked logic:
        // 1. Premium + Not Logged In = ALL LOCKED
        // 2. Logged In = Progressive locking
        // 3. Free + Not Logged In = Unlocked (SEO)
        const prevSection = initialSections[idx - 1];
        let isLocked = false;

        if (isPremium && !isLoggedIn) {
          isLocked = true;
        } else if (isLoggedIn) {
          isLocked = idx > 0 && !completedIds.includes(prevSection?.id);
        } else {
          isLocked = false;
        }

        // Current: Unlocked but not completed (only relevant for logged users)
        const isCurrent = isLoggedIn ? !isLocked && !isCompleted : idx === 0;

        // Is this the last section? (to hide connector line)
        const isLastSection = idx === initialSections.length - 1;

        return (
          <CourseSection
            key={section.id}
            section={section}
            isLocked={isLocked}
            isCompleted={isCompleted}
            isCurrent={isCurrent}
            onComplete={() => handleComplete(section.id)}
            onMarkComplete={async () => {
              await markSectionComplete(section.id, initialSections.length);
              await refresh();
            }}
            isLoggedIn={isLoggedIn}
            isLastSection={isLastSection}
          />
        );
      })}
    </div>
  );
}
