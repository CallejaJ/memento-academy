import { MainNav } from "@/components/main-nav";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CourseContentList } from "@/components/course/course-content-list";
import { getCourseContent } from "@/actions/course";

// Note: This is now a Server Component
export default async function BlockchainDevelopmentPage({
  params,
}: {
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;
  const courseId = "blockchain-dev";

  // Fetch content
  const sections = await getCourseContent(courseId);

  // Translations (Static for the page shell, dynamic for content)
  const translations = {
    en: {
      badge: "Premium Course",
      title_prefix: "Blockchain",
      title_suffix: "Development",
      description:
        "Master blockchain architecture and build decentralized applications. Learn consensus mechanisms, scalability solutions, and real-world dApp development.",
      modules: "Modules",
      level: "Level",
      duration: "Duration",
      level_val: "Advanced",
      back_to_courses: "← Back to Courses",
      curriculum_title: "Course Curriculum",
      cta: {
        title: "Build the Decentralized Future",
        text: "Blockchain technology is revolutionizing industries. Master these fundamentals and you'll be ready to build the next generation of applications.",
      },
    },
    es: {
      badge: "Curso Premium",
      title_prefix: "Desarrollo",
      title_suffix: "Blockchain",
      description:
        "Domina la arquitectura blockchain y construye aplicaciones descentralizadas. Aprende mecanismos de consenso, soluciones de escalabilidad y desarrollo de dApps en el mundo real.",
      modules: "Módulos",
      level: "Nivel",
      duration: "Duración",
      level_val: "Avanzado",
      back_to_courses: "← Volver a Cursos",
      curriculum_title: "Plan de Estudios",
      cta: {
        title: "Construye el Futuro Descentralizado",
        text: "La tecnología blockchain está revolucionando industrias. Domina estos fundamentos y estarás listo para construir la próxima generación de aplicaciones.",
      },
    },
  };

  const t = translations[lng as keyof typeof translations] || translations.en;

  return (
    <div className="min-h-screen bg-slate-950">
      <MainNav lng={lng} />

      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                {t.title_prefix}
              </span>{" "}
              {t.title_suffix}
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {t.description}
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-violet-400">
                  {sections.length || 6}
                </div>
                <div className="text-sm text-slate-400">{t.modules}</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-purple-400">
                  {t.level_val}
                </div>
                <div className="text-sm text-slate-400">{t.level}</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-fuchsia-400">~6h</div>
                <div className="text-sm text-slate-400">{t.duration}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link href={`/${lng}/courses`}>
                <Button
                  variant="outline"
                  className="border-slate-700 text-slate-300 hover:text-white"
                >
                  {t.back_to_courses}
                </Button>
              </Link>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">
              {t.curriculum_title}
            </h2>

            <CourseContentList courseId={courseId} initialSections={sections} />
          </div>
        </div>
      </section>

      <Card className="bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border-violet-500/20 mt-8 mb-16 max-w-4xl mx-auto">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">{t.cta.title}</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">{t.cta.text}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${lng}/courses`}>
              <Button className="bg-white text-violet-900 hover:bg-slate-200">
                {t.back_to_courses.replace("← ", "")}
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
