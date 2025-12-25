"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/contexts/auth-context"
import { CourseCard } from "@/components/courses/course-card"
import { LockedCourseCard } from "@/components/courses/locked-course-card"
import { allCourses } from "@/lib/courses-data"
import { supabase } from "@/lib/supabase"

export function CoursesGrid() {
  const { user } = useAuth()
  const [progressMap, setProgressMap] = useState<Record<string, number>>({})

  useEffect(() => {
    if (user) {
      fetchProgress()
    }
  }, [user])

  const fetchProgress = async () => {
    if (!user) return
    try {
      const { data, error } = await supabase
        .from("course_progress")
        .select("course_id, progress_percentage")
        .eq("user_id", user?.id)

      if (data) {
        const map: Record<string, number> = {}
        data.forEach((p) => {
          map[p.course_id] = p.progress_percentage
        })
        setProgressMap(map)
      }
    } catch (error) {
      console.error("Error fetching progress:", error)
    }
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {allCourses.map((course) => {
        // If course is premium and user is not logged in, show locked card
        if (course.isPremium && !user) {
          return <LockedCourseCard key={course.id} course={course} />
        }
        
        // Otherwise show standard card with progress if available
        return (
          <CourseCard 
            key={course.id} 
            course={course} 
            progress={progressMap[course.id] || 0}
            showProgress={!!user}
          />
        )
      })}
    </div>
  )
}
