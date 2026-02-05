import { Metadata } from "next";
import Link from "next/link";
import { MainNav } from "@/components/main-nav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  HelpCircle,
  MessageCircle,
  Blocks,
  Wallet,
  Shield,
  Landmark,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/app/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lng: string }>;
}): Promise<Metadata> {
  const { lng } = await params;

  return {
    title:
      lng === "es"
        ? "FAQs | Preguntas Frecuentes | Memento Academy"
        : "FAQs | Frequently Asked Questions | Memento Academy",
    description:
      lng === "es"
        ? "Encuentra respuestas a preguntas comunes sobre Web3, blockchain, criptomonedas y CBDCs. Centro de ayuda y FAQ completo."
        : "Find answers to common questions about Web3, blockchain, cryptocurrencies, and CBDCs. Comprehensive FAQ and help center.",
    keywords:
      lng === "es"
        ? [
            "web3 faq",
            "preguntas blockchain",
            "ayuda cripto",
            "preguntas cbdc",
            "respuestas criptomoneda",
          ]
        : [
            "web3 faq",
            "blockchain questions",
            "crypto help",
            "cbdc questions",
            "cryptocurrency answers",
          ],
  };
}

const categoryIcons = {
  web3: Blocks,
  crypto: Wallet,
  cbdc: Landmark,
  security: Shield,
};

const categoryColors = {
  web3: "cyan",
  crypto: "teal",
  cbdc: "emerald",
  security: "red",
};

export default async function FAQsPage({
  params,
}: {
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;
  const { t } = await useTranslation(lng, "common");

  const categories = ["web3", "crypto", "cbdc", "security"] as const;

  return (
    <div className="min-h-screen bg-slate-950">
      <MainNav lng={lng} />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              {t("knowledge_base_page.title")}{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                {t("knowledge_base_page.title_highlight")}
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              {t("knowledge_base_page.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {categories.map((categoryKey) => {
              const Icon = categoryIcons[categoryKey];
              const color = categoryColors[categoryKey];

              return (
                <div key={categoryKey}>
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Icon className={`w-8 h-8 text-${color}-400`} />
                    {t(`knowledge_base_page.categories.${categoryKey}.title`)}
                  </h2>

                  <div className="space-y-4">
                    {[1, 2, 3].map((num) => (
                      <Card
                        key={num}
                        className="bg-slate-800/50 border-slate-700"
                      >
                        <CardHeader className="pb-2">
                          <CardTitle className="text-white text-lg flex items-start gap-3">
                            <HelpCircle
                              className={`w-5 h-5 text-${color}-400 flex-shrink-0 mt-0.5`}
                            />
                            {t(
                              `knowledge_base_page.categories.${categoryKey}.q${num}`,
                            )}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pl-11">
                          <p className="text-slate-400">
                            {t(
                              `knowledge_base_page.categories.${categoryKey}.a${num}`,
                            )}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}

            <div className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 rounded-2xl p-8 text-center">
              <MessageCircle className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">
                {t("knowledge_base_page.still_questions_title")}
              </h3>
              <p className="text-slate-300 mb-6 max-w-xl mx-auto">
                {t("knowledge_base_page.still_questions_desc")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={`/${lng}/contact`}>
                  <Button className="bg-gradient-to-r from-cyan-500 to-teal-500">
                    {t("knowledge_base_page.contact_btn")}
                  </Button>
                </Link>
                <Link href={`/${lng}/learn/web3-basics`}>
                  <Button
                    variant="outline"
                    className="border-slate-700 text-slate-300 hover:bg-slate-800"
                  >
                    {t("knowledge_base_page.learn_btn")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
