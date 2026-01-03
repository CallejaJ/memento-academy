import { LucideIcon } from "lucide-react"

export interface CourseSection {
  id: string
  title: string
  description: string
}

export interface Course {
  id: string
  title: string
  slug: string
  description: string
  longDescription: string
  duration: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  isPremium: boolean
  icon: string
  color: string
  href: string
  sections: CourseSection[]
  learningOutcomes: string[]
}
