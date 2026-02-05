import { languages } from "@/app/i18n/settings";

interface JsonLdProps {
  lng: string;
  url: string;
  course?: {
    name: string;
    description: string;
    duration: string;
    difficulty: "beginner" | "intermediate" | "advanced";
    isFree: boolean;
  };
}

// Mapping for readable breadcrumb names
const breadcrumbNames: Record<string, Record<string, string>> = {
  en: {
    learn: "Courses",
    courses: "All Courses",
    about: "About Us",
    contact: "Contact",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    contribute: "Contribute",
    faqs: "FAQs",
    "web3-basics": "Web3 Basics",
    "crypto-101": "Crypto 101",
    cbdc: "Understanding CBDCs",
    safety: "Security Guide",
    "defi-deep-dive": "DeFi Deep Dive",
    "nft-masterclass": "NFT Masterclass",
    "smart-contracts": "Smart Contracts 101",
    "technical-analysis": "Technical Analysis",
    "portfolio-management": "Portfolio Management",
    "blockchain-dev": "Blockchain Development",
  },
  es: {
    learn: "Cursos",
    courses: "Todos los Cursos",
    about: "Sobre Nosotros",
    contact: "Contacto",
    privacy: "Política de Privacidad",
    terms: "Términos de Servicio",
    contribute: "Contribuir",
    faqs: "FAQs",
    "web3-basics": "Fundamentos de Web3",
    "crypto-101": "Cripto 101",
    cbdc: "Entendiendo CBDCs",
    safety: "Guía de Seguridad",
    "defi-deep-dive": "DeFi a Fondo",
    "nft-masterclass": "Masterclass NFT",
    "smart-contracts": "Smart Contracts 101",
    "technical-analysis": "Análisis Técnico",
    "portfolio-management": "Gestión de Portafolio",
    "blockchain-dev": "Desarrollo Blockchain",
  },
};

export const JsonLd = ({ lng, url, course }: JsonLdProps) => {
  const baseUrl = "https://memento-academy.com";
  const names = breadcrumbNames[lng] || breadcrumbNames.en;

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Memento Academy",
    url: baseUrl,
    logo: `${baseUrl}/memento-academy-logo.png`,
    sameAs: [
      "https://twitter.com/memento_academy",
      "https://github.com/Memento-Academy",
      "https://www.linkedin.com/company/memento-academy/",
    ],
    description:
      lng === "es"
        ? "La forma más sencilla de entrar en Web3 y Blockchain. Desglosamos conceptos complejos como CBDCs y Cripto para principiantes absolutos."
        : "The simplest onboarding to Web3 and Blockchain. We break down complex concepts like CBDCs and Crypto for absolute beginners.",
  };

  // WebSite Schema with SearchAction for sitelinks search box
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Memento Academy",
    url: baseUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/${lng}/courses?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  // Generate breadcrumbs based on URL path
  const pathSegments = url.split("/").filter(Boolean).slice(1); // remove empty and lng

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: lng === "es" ? "Inicio" : "Home",
        item: `${baseUrl}/${lng}`,
      },
      ...pathSegments.map((segment, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name:
          names[segment] ||
          segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " "),
        item: `${baseUrl}/${lng}/${pathSegments.slice(0, index + 1).join("/")}`,
      })),
    ],
  };

  // Course Schema (only if course prop is provided)
  const courseSchema = course
    ? {
        "@context": "https://schema.org",
        "@type": "Course",
        name: course.name,
        description: course.description,
        provider: {
          "@type": "Organization",
          name: "Memento Academy",
          sameAs: baseUrl,
        },
        isAccessibleForFree: course.isFree,
        timeRequired: `PT${course.duration.replace(/\s*min/i, "M")}`,
        educationalLevel:
          course.difficulty === "beginner"
            ? "Beginner"
            : course.difficulty === "intermediate"
              ? "Intermediate"
              : "Advanced",
        inLanguage: lng,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      }
    : null;

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />
      {courseSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
        />
      )}
    </section>
  );
};
