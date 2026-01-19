import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lng: string }>;
}): Promise<Metadata> {
  const { lng } = await params;

  const title =
    lng === "es"
      ? "Crypto Quiz Challenge | Juego Educativo Web3 Gratis"
      : "Crypto Quiz Challenge | Free Web3 Educational Game";

  const description =
    lng === "es"
      ? "Pon a prueba tu conocimiento de criptomonedas y Web3 con nuestro quiz interactivo. Gana tokens MEMO, compite en el ranking global y aprende mientras juegas. ¡100% gratis!"
      : "Test your crypto and Web3 knowledge with our interactive quiz. Earn MEMO tokens, compete on the global leaderboard, and learn while you play. 100% free!";

  const keywords =
    lng === "es"
      ? [
          "crypto quiz",
          "juego web3",
          "quiz criptomonedas",
          "aprender crypto gratis",
          "ganar tokens",
          "educación blockchain",
          "quiz blockchain",
          "learn to earn",
        ]
      : [
          "crypto quiz",
          "web3 game",
          "cryptocurrency quiz",
          "learn crypto free",
          "earn tokens",
          "blockchain education",
          "blockchain quiz",
          "learn to earn",
        ];

  const baseUrl = "https://memento-academy.com";
  const pageUrl = `${baseUrl}/${lng}/game`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: "Memento Academy",
      type: "website",
      images: [
        {
          url: `${baseUrl}/images/og/crypto-quiz-og-${lng}.png`,
          width: 1200,
          height: 630,
          alt:
            lng === "es"
              ? "Crypto Quiz Challenge - Memento Academy"
              : "Crypto Quiz Challenge - Memento Academy",
        },
      ],
      locale: lng === "es" ? "es_ES" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/images/og/crypto-quiz-og-${lng}.png`],
      creator: "@memento_academy",
    },
    alternates: {
      canonical: pageUrl,
      languages: {
        es: `${baseUrl}/es/game`,
        en: `${baseUrl}/en/game`,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// JSON-LD Breadcrumb Schema for SEO
function BreadcrumbJsonLd({ lng }: { lng: string }) {
  const baseUrl = "https://memento-academy.com";

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
      {
        "@type": "ListItem",
        position: 2,
        name: "Crypto Quiz Challenge",
        item: `${baseUrl}/${lng}/game`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
    />
  );
}

// JSON-LD Game Schema for rich results
function GameJsonLd({ lng }: { lng: string }) {
  const baseUrl = "https://memento-academy.com";

  const gameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: "Crypto Quiz Challenge",
    description:
      lng === "es"
        ? "Quiz interactivo de criptomonedas y Web3. Gana tokens MEMO mientras aprendes."
        : "Interactive crypto and Web3 quiz. Earn MEMO tokens while learning.",
    url: `${baseUrl}/${lng}/game`,
    image: `${baseUrl}/images/og/crypto-quiz-og-${lng}.png`,
    author: {
      "@type": "Organization",
      name: "Memento Academy",
      url: baseUrl,
    },
    genre: ["Educational", "Quiz", "Trivia"],
    gamePlatform: "Web Browser",
    applicationCategory: "Game",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    inLanguage: lng === "es" ? "es" : "en",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(gameSchema) }}
    />
  );
}

export default async function GameLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;

  return (
    <>
      <BreadcrumbJsonLd lng={lng} />
      <GameJsonLd lng={lng} />
      {children}
    </>
  );
}
