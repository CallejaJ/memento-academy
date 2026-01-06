import Link from "next/link";
import { MainNav } from "@/components/main-nav";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CourseContentList } from "@/components/course/course-content-list";
import { getCourseContent } from "@/actions/course";
import { getSession } from "@/lib/server-auth";
import type { Metadata } from "next";

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lng: string }>;
}): Promise<Metadata> {
  const { lng } = await params;

  const meta = {
    en: {
      title: "Crypto 101 - Complete Cryptocurrency Guide | Memento Academy",
      description:
        "Everything you need to know about cryptocurrencies. Learn Bitcoin, Ethereum, wallets, security, trading basics, and portfolio building. Free course.",
      keywords: [
        "cryptocurrency",
        "Bitcoin",
        "Ethereum",
        "crypto wallet",
        "crypto trading",
        "DeFi",
        "blockchain",
      ],
    },
    es: {
      title: "Cripto 101 - Guía Completa de Criptomonedas | Memento Academy",
      description:
        "Todo lo que necesitas saber sobre criptomonedas. Aprende Bitcoin, Ethereum, wallets, seguridad, trading básico y construcción de portafolio. Curso gratuito.",
      keywords: [
        "criptomonedas",
        "Bitcoin",
        "Ethereum",
        "wallet crypto",
        "trading crypto",
        "DeFi",
        "blockchain",
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

export default async function Crypto101Page({
  params,
}: {
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;
  const courseId = "crypto-101";

  // Fetch content from database
  const sections = await getCourseContent(courseId);

  // Check if user is logged in
  const session = await getSession();
  const isLoggedIn = !!session;

  // Translations
  const translations = {
    en: {
      badge: "💰 Free Course",
      title_prefix: "Crypto",
      title_highlight: "101",
      title_suffix: "",
      description:
        "Everything you need to know about cryptocurrencies, explained without technical jargon. Completely free.",
      sections: "Sections",
      level: "Level",
      duration: "Duration",
      level_val: "Beginner",
      duration_val: "60 min",
      back_to_courses: "← Back to Courses",
      curriculum_title: "Course Content",
      cta_title: "Continue Your Learning",
      cta_desc:
        "Discover how governments are creating their own digital currencies.",
      btn_cbdc: "Understanding CBDCs",
      btn_security: "Security Guide",
    },
    es: {
      badge: "💰 Curso Gratuito",
      title_prefix: "Cripto",
      title_highlight: "101",
      title_suffix: "",
      description:
        "Todo lo que necesitas saber sobre criptomonedas, explicado sin jerga técnica. Completamente gratis.",
      sections: "Secciones",
      level: "Nivel",
      duration: "Duración",
      level_val: "Principiante",
      duration_val: "60 min",
      back_to_courses: "← Volver a Cursos",
      curriculum_title: "Contenido del Curso",
      cta_title: "Continúa Aprendiendo",
      cta_desc:
        "Descubre cómo los gobiernos están creando sus propias monedas digitales.",
      btn_cbdc: "Entendiendo CBDCs",
      btn_security: "Guía de Seguridad",
    },
  };

  const t = translations[lng as keyof typeof translations] || translations.en;

  return (
    <div className="min-h-screen bg-slate-950">
      <MainNav lng={lng} />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-teal-500/10 text-teal-400 border-teal-500/20">
              {t.badge}
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              <span className="text-white">{t.title_prefix}</span>{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                {t.title_highlight}
              </span>
              {t.title_suffix && ` ${t.title_suffix}`}
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              {t.description}
            </p>

            {/* Course Stats */}
            <div className="flex justify-center gap-6 pt-4">
              <div className="text-center">
                <span className="text-slate-400">{t.sections}</span>
                <span className="text-white font-medium ml-2">9</span>
              </div>
              <div className="text-center">
                <span className="text-slate-400">{t.level}</span>
                <span className="text-white font-medium ml-2">
                  {t.level_val}
                </span>
              </div>
              <div className="text-center">
                <span className="text-slate-400">{t.duration}</span>
                <span className="text-white font-medium ml-2">
                  {t.duration_val}
                </span>
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

      {/* CTA */}
      <section className="py-16 bg-slate-950 border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-bold text-white">{t.cta_title}</h2>
            <p className="text-slate-400">{t.cta_desc}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${lng}/learn/cbdc`}>
                <Button className="bg-gradient-to-r from-cyan-500 to-teal-500">
                  {t.btn_cbdc}
                </Button>
              </Link>
              <Link href={`/${lng}/learn/safety`}>
                <Button
                  variant="outline"
                  className="border-slate-700 text-slate-300 hover:bg-slate-800"
                >
                  {t.btn_security}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
