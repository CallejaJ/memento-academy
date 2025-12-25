import { Metadata } from "next"
import { notFound } from "next/navigation"
import { allCourses } from "@/lib/courses-data"
import { CourseViewer } from "@/components/courses/course-viewer"
import { MainNav } from "@/components/main-nav"

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return allCourses.map((course) => ({
    slug: course.id,
  }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const course = allCourses.find((c) => c.id === params.slug)

  if (!course) {
    return {
      title: "Course Not Found | Memento Academy",
    }
  }

  return {
    title: `${course.title} | Memento Academy`,
    description: course.description,
    keywords: [course.title, "web3 course", "crypto education", "blockchain"],
  }
}

export default function CoursePage({ params }: PageProps) {
  const course = allCourses.find((c) => c.id === params.slug)

  if (!course) {
    notFound()
  }

  return (
    <div>
      <MainNav />
      <CourseViewer course={course} />
    </div>
  )
}
