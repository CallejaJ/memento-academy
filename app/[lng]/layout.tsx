import type React from "react";
import "../../app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/contexts/auth-context";
import { AuthModalProvider } from "@/contexts/auth-modal-context";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/toaster";
import { languages } from "../i18n/settings";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lng: string }>;
}): Promise<Metadata> {
  const { lng } = await params;
  const baseUrl = "https://memento-academy.com";

  // SEO-optimized titles and descriptions
  const title =
    lng === "es"
      ? "Memento Academy | Aprende Web3 y Blockchain Gratis"
      : "Memento Academy | Learn Web3 & Blockchain Free";
  const description =
    lng === "es"
      ? "La forma más sencilla de entrar en Web3 y Blockchain. Desglosamos conceptos complejos como CBDCs y Cripto para principiantes absolutos. ¿Lo mejor? Es 100% gratis."
      : "The simplest onboarding to Web3 and Blockchain. We break down complex concepts like CBDCs and Crypto for absolute beginners. The best part? It's 100% free.";

  const alternateLanguage = lng === "es" ? "en" : "es";

  return {
    title: {
      default: title,
      template: `%s | Memento Academy`,
    },
    description,
    keywords:
      lng === "es"
        ? [
            "Web3",
            "Blockchain",
            "Criptomonedas",
            "Cursos gratis",
            "CBDC",
            "Educación blockchain",
            "Aprende cripto",
            "DeFi",
            "NFT",
          ]
        : [
            "Web3",
            "Blockchain",
            "Cryptocurrency",
            "Free courses",
            "CBDC",
            "Blockchain education",
            "Learn crypto",
            "DeFi",
            "NFT",
          ],

    // Canonical and alternate language URLs
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `/${lng}`,
      languages: {
        en: "/en",
        es: "/es",
        "x-default": "/en",
      },
    },

    // OpenGraph for social sharing
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${lng}`,
      siteName: "Memento Academy",
      locale: lng === "es" ? "es_ES" : "en_US",
      alternateLocale: lng === "es" ? "en_US" : "es_ES",
      type: "website",
      images: [
        {
          url: `${baseUrl}/memento-academy-logo.png`,
          width: 512,
          height: 512,
          alt: "Memento Academy Logo",
        },
      ],
    },

    // Twitter Card
    twitter: {
      card: "summary_large_image",
      site: "@memento_academy",
      creator: "@memento_academy",
      title,
      description,
      images: [`${baseUrl}/memento-academy-logo.png`],
    },

    // Icons
    icons: {
      icon: [
        {
          url: "/favicon/favicon-16x16.png",
          sizes: "16x16",
          type: "image/png",
        },
        {
          url: "/favicon/favicon-32x32.png",
          sizes: "32x32",
          type: "image/png",
        },
        {
          url: "/favicon/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          url: "/favicon/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        { url: "/favicon/favicon.ico" },
      ],
      apple: [{ url: "/favicon/apple-touch-icon.png" }],
    },
    manifest: "/favicon/site.webmanifest",

    // Additional SEO
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

import { JsonLd } from "@/components/json-ld";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lng: string }>; // Params are promises in Next 15
}) {
  const { lng } = await params;
  return (
    <html lang={lng} suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen w-full overflow-x-hidden antialiased flex flex-col`}
        suppressHydrationWarning
      >
        <JsonLd lng={lng} url={`/${lng}`} />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem
        >
          <AuthProvider>
            <AuthModalProvider>
              <div className="flex-grow">{children}</div>
              <SpeedInsights />
              <Toaster />
            </AuthModalProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
