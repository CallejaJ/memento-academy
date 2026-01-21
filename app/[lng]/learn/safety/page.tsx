import { MainNav } from "@/components/main-nav";
import { Badge } from "@/components/ui/badge";
import { CourseContentList } from "@/components/course/course-content-list";
import { getCourseContent } from "@/actions/course";
import { getSession } from "@/lib/server-auth";
import { JsonLd } from "@/components/json-ld";
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
      title: "Crypto Security Guide - Protect Your Assets | Memento Academy",
      description:
        "Essential security guide for cryptocurrency. Learn to identify scams, protect your wallet, secure your seed phrase, and stay safe in Web3. Free course.",
      keywords: [
        "crypto security",
        "crypto scams",
        "wallet security",
        "seed phrase",
        "phishing",
        "Web3 safety",
      ],
    },
    es: {
      title: "Guía de Seguridad Cripto - Protege tus Activos | Memento Academy",
      description:
        "Guía esencial de seguridad para criptomonedas. Aprende a identificar estafas, proteger tu wallet, asegurar tu seed phrase y mantenerte seguro en Web3. Curso gratuito.",
      keywords: [
        "seguridad cripto",
        "estafas crypto",
        "seguridad wallet",
        "seed phrase",
        "phishing",
        "seguridad Web3",
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

export default async function SafetyPage({
  params,
}: {
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;
  const courseId = "safety";

  // Fetch content from database
  const sections = await getCourseContent(courseId);

  // Check if user is logged in
  const session = await getSession();
  const isLoggedIn = !!session;

  const translations = {
    en: {
      badge: "Essential Security",
      title_prefix: "",
      title_highlight: "Security",
      title_suffix: " Guide",
      description:
        "Protect yourself from scams and learn to keep your digital assets safe.",
      sections: "Sections",
      level: "Level",
      duration: "Duration",
      level_val: "Essential",
      duration_val: "30 min",
      back_to_courses: "← Back to Courses",
      login_message: "Log in to track your progress and earn badges.",
    },
    es: {
      badge: "Seguridad Esencial",
      title_prefix: "Guía de ",
      title_highlight: "Seguridad",
      title_suffix: "",
      description:
        "Protégete de estafas y aprende a mantener seguros tus activos digitales.",
      sections: "Secciones",
      level: "Nivel",
      duration: "Duración",
      level_val: "Esencial",
      duration_val: "30 min",
      back_to_courses: "← Volver a Cursos",
      login_message: "Inicia sesión para guardar tu progreso y ganar medallas.",
    },
  };

  const t = translations[lng as keyof typeof translations] || translations.en;

  // Course data for JSON-LD
  const courseData = {
    name: lng === "es" ? "Guía de Seguridad" : "Security Guide",
    description:
      lng === "es"
        ? "Protégete de estafas y aprende a mantener seguros tus activos digitales."
        : "Protect yourself from scams and learn to keep your digital assets safe.",
    duration: "50 min",
    difficulty: "beginner" as const,
    isFree: true,
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <JsonLd lng={lng} url={`/${lng}/learn/safety`} course={courseData} />
      <MainNav lng={lng} />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-red-500/10 text-red-400 border-red-500/20">
              {t.badge}
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              {t.title_prefix}
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                {t.title_highlight}
              </span>
              {t.title_suffix}
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              {t.description}
            </p>

            <div className="flex items-center justify-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-yellow-400" />
                {t.level}: {t.level_val}
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-400" />
                {t.duration}: {t.duration_val}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <CourseContentList
              courseId={courseId}
              initialSections={sections}
              isLoggedIn={isLoggedIn}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
