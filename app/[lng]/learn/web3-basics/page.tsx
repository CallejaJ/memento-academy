import { MainNav } from "@/components/main-nav";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CourseContentList } from "@/components/course/course-content-list";
import { getCourseContent } from "@/actions/course";
import { getSession } from "@/lib/server-auth";
import { JsonLd } from "@/components/json-ld";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lng: string }>;
}): Promise<Metadata> {
  const { lng } = await params;

  const meta = {
    en: {
      title: "What is Web3? | Free Course | Memento Academy",
      description:
        "The definitive guide to understanding the new era of the internet. Learn Web3, blockchain basics, DeFi, NFTs and more. Completely free.",
      keywords: [
        "Web3",
        "blockchain course",
        "crypto education",
        "DeFi",
        "NFTs",
        "Web 3.0",
      ],
    },
    es: {
      title: "¿Qué es Web3? | Curso Gratuito | Memento Academy",
      description:
        "La guía definitiva para entender la nueva era de internet. Aprende Web3, fundamentos de blockchain, DeFi, NFTs y más. Completamente gratis.",
      keywords: [
        "Web3",
        "curso blockchain",
        "educación crypto",
        "DeFi",
        "NFTs",
        "Web 3.0",
      ],
    },
  };

  const t = meta[lng as keyof typeof meta] || meta.en;

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
  };
}

export default async function Web3BasicsPage({
  params,
}: {
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;
  const courseId = "web3-basics";

  // Fetch content from database
  const sections = await getCourseContent(courseId);

  // Check if user is logged in
  const session = await getSession();
  const isLoggedIn = !!session;

  // Translations
  const translations = {
    en: {
      badge: "📚 Free Course",
      title_prefix: "What is",
      title_highlight: "Web3",
      title_suffix: "?",
      description:
        "The definitive guide to understanding the new era of the internet. No jargon, completely free.",
      sections: "Sections",
      level: "Level",
      duration: "Duration",
      level_val: "Beginner",
      duration_val: "45 min",
      back_to_courses: "← Back to Courses",
      curriculum_title: "Course Content",
      cta: {
        title: "Ready for the Next Step?",
        text: "Continue learning with our comprehensive cryptocurrency guide for beginners.",
        btn: "Crypto 101 →",
      },
    },
    es: {
      badge: "📚 Curso Gratuito",
      title_prefix: "¿Qué es",
      title_highlight: "Web3",
      title_suffix: "?",
      description:
        "La guía definitiva para entender la nueva era de internet. Sin tecnicismos, completamente gratis.",
      sections: "Secciones",
      level: "Nivel",
      duration: "Duración",
      level_val: "Principiante",
      duration_val: "45 min",
      back_to_courses: "← Volver a Cursos",
      curriculum_title: "Contenido del Curso",
      cta: {
        title: "¿Listo para el Siguiente Paso?",
        text: "Continúa aprendiendo con nuestra guía completa de criptomonedas para principiantes.",
        btn: "Cripto 101 →",
      },
    },
  };

  const t = translations[lng as keyof typeof translations] || translations.en;

  // Course data for JSON-LD
  const courseData = {
    name: lng === "es" ? "Fundamentos de Web3" : "What is Web3?",
    description:
      lng === "es"
        ? "La guía definitiva para entender Web3 y blockchain. DeFi, NFTs y más."
        : "The definitive guide to understanding Web3 and blockchain. DeFi, NFTs and more.",
    duration: "45 min",
    difficulty: "beginner" as const,
    isFree: true,
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <JsonLd lng={lng} url={`/${lng}/learn/web3-basics`} course={courseData} />
      <MainNav lng={lng} />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 mb-6">
              {t.badge}
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t.title_prefix}{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                {t.title_highlight}
              </span>
              {t.title_suffix}
            </h1>

            <p className="text-xl text-slate-300 mb-8 max-w-2xl">
              {t.description}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-slate-400">{t.sections}:</span>
                <span className="text-white font-medium">
                  {sections.length}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-400">{t.level}:</span>
                <span className="text-cyan-400 font-medium">{t.level_val}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-400">{t.duration}:</span>
                <span className="text-white font-medium">{t.duration_val}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
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

            <CourseContentList
              courseId={courseId}
              initialSections={sections}
              isLoggedIn={isLoggedIn}
            />
          </div>
        </div>
      </section>

      {/* CTA Card */}
      <Card className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border-cyan-500/20 mt-8 mb-16 max-w-4xl mx-auto">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">{t.cta.title}</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">{t.cta.text}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${lng}/learn/crypto-101`}>
              <Button className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white">
                {t.cta.btn}
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
