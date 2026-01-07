import { MainNav } from "@/components/main-nav";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { CourseContentList } from "@/components/course/course-content-list";
import { getCourseContent } from "@/actions/course";

export default async function SmartContractsPage({
  params,
}: {
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;
  const courseId = "smart-contracts";

  // Fetch content
  const sections = await getCourseContent(courseId);

  const translations = {
    en: {
      badge: "🔒 Premium Course",
      title_prefix: "Smart",
      title_suffix: "Contracts",
      description:
        "Master the fundamentals of smart contract development. Learn to write, deploy, and secure self-executing code on the blockchain.",
      what_you_learn: {
        title: "What You'll Learn",
        items: [
          "Understand smart contract architecture",
          "Write code in Solidity",
          "Deploy contracts to testnets and mainnet",
          "Identify and prevent security vulnerabilities",
        ],
      },
      modules: "Modules",
      level: "Level",
      duration: "Duration",
      level_val: "Intermediate",
      duration_val: "~5h",
      back_to_courses: "← Back to Courses",
      curriculum_title: "Course Curriculum",
      cta: {
        title: "Ready to Build Smart Contracts?",
        text: "You now have the foundation to build secure smart contracts. Practice on testnets, study open-source code, and always prioritize security.",
      },
    },
    es: {
      badge: "🔒 Curso Premium",
      title_prefix: "Contratos",
      title_suffix: "Inteligentes",
      description:
        "Domina los fundamentos del desarrollo de contratos inteligentes. Aprende a escribir, desplegar y asegurar código autoejecutable en la blockchain.",
      what_you_learn: {
        title: "Lo que aprenderás",
        items: [
          "Entender la arquitectura de contratos inteligentes",
          "Escribir código en Solidity",
          "Desplegar contratos a testnets y mainnet",
          "Identificar y prevenir vulnerabilidades de seguridad",
        ],
      },
      modules: "Módulos",
      level: "Nivel",
      duration: "Duración",
      level_val: "Intermedio",
      duration_val: "~5h",
      back_to_courses: "← Volver a Cursos",
      curriculum_title: "Plan de Estudios",
      cta: {
        title: "¿Listo para Construir Smart Contracts?",
        text: "Ya tienes las bases para construir contratos seguros. Practica en testnets, estudia código open-source y prioriza siempre la seguridad.",
      },
    },
  };

  const t = translations[lng as keyof typeof translations] || translations.en;

  return (
    <div className="min-h-screen bg-slate-950">
      <MainNav lng={lng} />

      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge
              variant="secondary"
              className="bg-blue-500/10 text-blue-400 dark:border dark:border-blue-500/20 transition-colors duration-300"
            >
              {t.badge}
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {t.title_prefix}
              </span>{" "}
              {t.title_suffix}
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              {t.description}
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-blue-400">
                  {sections.length || 7}
                </div>
                <div className="text-sm text-slate-400">{t.modules}</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-cyan-400">
                  {t.level_val}
                </div>
                <div className="text-sm text-slate-400">{t.level}</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-teal-400">
                  {t.duration_val}
                </div>
                <div className="text-sm text-slate-400">{t.duration}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* What you'll learn */}
            <Card className="bg-slate-900/50 border-slate-800 mb-12">
              <CardContent className="pt-6">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  {t.what_you_learn.title}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {t.what_you_learn.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

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

      <Card className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-blue-500/20 mt-8 mb-16 max-w-4xl mx-auto mx-4 sm:mx-auto">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">{t.cta.title}</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">{t.cta.text}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${lng}/courses`}>
              <Button className="bg-white text-blue-900 hover:bg-slate-200">
                {t.back_to_courses.replace("← ", "")}
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
