import { Metadata } from "next";
import Link from "next/link";
import { MainNav } from "@/components/main-nav";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  PenLine,
  Languages,
  MessageCircle,
  Share2,
  Code,
  Heart,
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
        ? "Contribuir | Únete a Nuestra Misión | Memento Academy"
        : "Contribute | Join Our Mission | Memento Academy",
    description:
      lng === "es"
        ? "Ayuda a democratizar la educación Web3. Contribuye escribiendo, traduciendo, programando o difundiendo la palabra sobre educación blockchain gratuita."
        : "Help democratize Web3 education. Contribute by writing, translating, coding, or spreading the word about free blockchain education.",
    keywords:
      lng === "es"
        ? [
            "contribuir educación web3",
            "voluntario blockchain",
            "ayudar comunidad cripto",
            "educación código abierto",
          ]
        : [
            "contribute web3 education",
            "volunteer blockchain",
            "help crypto community",
            "open source education",
          ],
  };
}

const contributionIcons = {
  write: PenLine,
  translate: Languages,
  community: MessageCircle,
  spread: Share2,
  dev: Code,
  donate: Heart,
};

const contributionColors = {
  write: "cyan",
  translate: "teal",
  community: "purple",
  spread: "emerald",
  dev: "orange",
  donate: "red",
};

export default async function ContributePage({
  params,
}: {
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;
  const { t } = await useTranslation(lng, "common");

  const contributionKeys = [
    "write",
    "translate",
    "community",
    "spread",
    "dev",
    "donate",
  ] as const;

  return (
    <div className="min-h-screen bg-slate-950">
      <MainNav lng={lng} />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                {t("contribute_page.title")}
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              {t("contribute_page.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Contribution Options */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              {t("contribute_page.ways_title")}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {contributionKeys.map((key) => {
                const Icon = contributionIcons[key];
                const color = contributionColors[key];
                return (
                  <Card
                    key={key}
                    className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/30 transition-all duration-300"
                  >
                    <CardHeader>
                      <div
                        className={`w-12 h-12 bg-${color}-500/10 rounded-lg flex items-center justify-center mb-4 border border-${color}-500/20`}
                      >
                        <Icon className={`w-6 h-6 text-${color}-400`} />
                      </div>
                      <CardTitle className="text-white">
                        {t(`contribute_page.contributions.${key}.title`)}
                      </CardTitle>
                      <CardDescription className="text-slate-400">
                        {t(`contribute_page.contributions.${key}.desc`)}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-slate-500">
                          {t("contribute_page.requirements_label")}
                        </p>
                        <ul className="text-sm text-slate-400 space-y-1">
                          {[1, 2, 3].map((num) => (
                            <li key={num} className="flex items-start gap-2">
                              <span className="text-cyan-400">•</span>
                              {t(
                                `contribute_page.contributions.${key}.req${num}`,
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 mb-12">
              <h3 className="text-xl font-bold text-white mb-4">
                {t("contribute_page.how_to_title")}
              </h3>
              <ol className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="bg-cyan-500/20 text-cyan-400 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    1
                  </span>
                  <div>
                    <h4 className="text-white font-semibold">
                      {t("contribute_page.step1_title")}
                    </h4>
                    <p className="text-slate-400 text-sm">
                      {t("contribute_page.step1_desc")}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="bg-cyan-500/20 text-cyan-400 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    2
                  </span>
                  <div>
                    <h4 className="text-white font-semibold">
                      {t("contribute_page.step2_title")}
                    </h4>
                    <p className="text-slate-400 text-sm">
                      {t("contribute_page.step2_desc")}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="bg-cyan-500/20 text-cyan-400 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    3
                  </span>
                  <div>
                    <h4 className="text-white font-semibold">
                      {t("contribute_page.step3_title")}
                    </h4>
                    <p className="text-slate-400 text-sm">
                      {t("contribute_page.step3_desc")}
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-4">
                {t("contribute_page.ready_title")}
              </h3>
              <p className="text-slate-300 mb-6 max-w-xl mx-auto">
                {t("contribute_page.ready_desc")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={`/${lng}/contact`}>
                  <Button className="bg-gradient-to-r from-cyan-500 to-teal-500">
                    {t("contribute_page.contact_btn")}
                  </Button>
                </Link>
                <Link
                  href="https://github.com/Memento-Academy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="border-slate-700 text-slate-300 hover:bg-slate-800"
                  >
                    {t("contribute_page.github_btn")}
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
