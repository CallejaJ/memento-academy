import { Metadata } from "next";
import Link from "next/link";
import { MainNav } from "@/components/main-nav";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Globe, BookOpen, Users, Target, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NewsletterForm } from "@/components/newsletter/newsletter-form";
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
        ? "Sobre Nosotros | Nuestra Misión | Memento Academy"
        : "About Us | Our Mission | Memento Academy",
    description:
      lng === "es"
        ? "La misión de Memento Academy es democratizar la educación en Web3 y blockchain. Conocimiento gratuito para todos, en todas partes."
        : "Memento Academy's mission is to democratize Web3 and blockchain education. Free knowledge for everyone, everywhere.",
    keywords:
      lng === "es"
        ? [
            "memento academy",
            "educación web3",
            "aprender blockchain",
            "cursos cripto gratis",
            "sobre nosotros",
          ]
        : [
            "memento academy",
            "web3 education",
            "blockchain learning",
            "free crypto courses",
            "about us",
          ],
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;
  const { t } = await useTranslation(lng, "common");

  return (
    <div className="min-h-screen bg-slate-950">
      <MainNav lng={lng} />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              {t("about_page.title")}{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                {t("about_page.title_highlight")}
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              {t("about_page.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Target className="w-8 h-8 text-cyan-400" />
                {t("about_page.why_exist_title")}
              </h2>
              <p className="text-slate-300 text-lg">
                {t("about_page.why_exist_p1")}
              </p>
              <p className="text-slate-300 mt-4">
                <strong className="text-white">
                  {t("about_page.why_exist_p2_strong")}
                </strong>{" "}
                {t("about_page.why_exist_p2")}
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">
              {t("about_page.values_title")}
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">
                        {t("about_page.values.free.title")}
                      </h3>
                      <p className="text-slate-400 text-sm">
                        {t("about_page.values.free.desc")}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">
                        {t("about_page.values.beginner.title")}
                      </h3>
                      <p className="text-slate-400 text-sm">
                        {t("about_page.values.beginner.desc")}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">
                        {t("about_page.values.noscam.title")}
                      </h3>
                      <p className="text-slate-400 text-sm">
                        {t("about_page.values.noscam.desc")}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">
                        {t("about_page.values.global.title")}
                      </h3>
                      <p className="text-slate-400 text-sm">
                        {t("about_page.values.global.desc")}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Users className="w-8 h-8 text-teal-400" />
              {t("about_page.community_title")}
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="text-center p-6 bg-slate-800/30 border border-slate-700 rounded-xl">
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  50K+
                </div>
                <div className="text-slate-400">
                  {t("about_page.stats.members")}
                </div>
              </div>
              <div className="text-center p-6 bg-slate-800/30 border border-slate-700 rounded-xl">
                <div className="text-4xl font-bold text-teal-400 mb-2">
                  100%
                </div>
                <div className="text-slate-400">
                  {t("about_page.stats.free")}
                </div>
              </div>
              <div className="text-center p-6 bg-slate-800/30 border border-slate-700 rounded-xl">
                <div className="text-4xl font-bold text-emerald-400 mb-2">
                  0
                </div>
                <div className="text-slate-400">
                  {t("about_page.stats.fees")}
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">
                {t("about_page.help_title")}
              </h3>
              <p className="text-slate-300 mb-6">{t("about_page.help_desc")}</p>
              <Link href={`/${lng}/contribute`}>
                <Button className="bg-gradient-to-r from-cyan-500 to-teal-500">
                  {t("about_page.help_btn")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-bold text-white">
              {t("about_page.cta_title")}
            </h2>
            <p className="text-slate-400">{t("about_page.cta_desc")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${lng}/courses`}>
                <Button className="bg-gradient-to-r from-cyan-500 to-teal-500">
                  {t("about_page.cta_courses")}
                </Button>
              </Link>
              <NewsletterForm
                variant="modal"
                buttonText={t("about_page.cta_newsletter")}
                lng={lng}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
