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
  // Fallback for metadata translation since we might not have access to the hook here efficiently without async
  const title =
    lng === "es"
      ? "Memento Academy | Domina la Web3"
      : "Memento Academy | Master Web3";
  const description =
    lng === "es"
      ? "Tu puerta de entrada al dominio de la Web3"
      : "Your gateway to Web3 mastery";

  return {
    title: {
      default: title,
      template: `%s | Memento Academy`,
    },
    description,
    keywords: [
      "Web3",
      "Blockchain",
      "Crypto",
      "Cursos",
      "Courses",
      "Education",
      "Educación",
    ],
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
        className={`${inter.className} min-h-screen w-full overflow-x-hidden antialiased`}
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
              {children}
              <SpeedInsights />
              <Toaster />
            </AuthModalProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
