"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, Loader2, Lock } from "lucide-react"
import { useCourseProgress } from "@/hooks/use-course-progress"
import { useToast } from "@/hooks/use-toast"
import confetti from "canvas-confetti"

interface SectionCompleteButtonProps {
  courseId: string
  sectionId: string
  totalSections: number
  sectionNumber: number // e.g., 1, 2, 3...
  isCompleted?: boolean
}

export function SectionCompleteButton({ 
  courseId, 
  sectionId, 
  totalSections,
  sectionNumber,
  isCompleted = false
}: SectionCompleteButtonProps) {
  const { markSectionComplete, progress } = useCourseProgress(courseId)
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  const alreadyCompleted = progress?.completed_sections?.includes(sectionId) || isCompleted
  
  // Check if all previous sections are completed
  const completedSections = progress?.completed_sections || []
  const previousSectionsCompleted = Array.from({ length: sectionNumber - 1 }, (_, i) => 
    `section-${i + 1}`
  ).every(prevSection => completedSections.includes(prevSection))

  const canComplete = previousSectionsCompleted || sectionNumber === 1

  const handleComplete = async () => {
    if (alreadyCompleted || !canComplete) return

    setLoading(true)
    try {
      await markSectionComplete(sectionId, totalSections)
      
      // Confetti animation
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      })

      toast({
        title: "🎉 Section Complete!",
        description: "Great job! Keep learning to unlock more achievements.",
        duration: 3000
      })
    } catch (error) {
      console.error("Error marking section complete:", error)
      toast({
        title: "Error",
        description: "Failed to mark section as complete. Please try again.",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  if (alreadyCompleted) {
    return (
      <Button
        disabled
        className="bg-green-600/20 border-green-600/30 text-green-400 cursor-not-allowed"
        variant="outline"
      >
        <CheckCircle className="w-4 h-4 mr-2" />
        Completed
      </Button>
    )
  }

  // If previous sections not completed, show locked state
  if (!canComplete) {
    return (
      <Button
        disabled
        className="bg-slate-700/20 border-slate-700/30 text-slate-500 cursor-not-allowed"
        variant="outline"
        title={`Complete section ${sectionNumber - 1} first`}
      >
        <Lock className="w-4 h-4 mr-2" />
        Locked
      </Button>
    )
  }

  return (
    <Button
      onClick={handleComplete}
      disabled={loading}
      className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600"
    >
      {loading ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          Completing...
        </>
      ) : (
        <>
          <CheckCircle className="w-4 h-4 mr-2" />
          Mark as Complete
        </>
      )}
    </Button>
  )
}
