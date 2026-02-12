import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  BookOpen,
  Globe,
  Users,
  Star,
  GraduationCap,
  LayoutPanelLeft,
  ShieldCheck,
  Twitter,
  Github,
  Linkedin,
  MessageCircle,
  Mail,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import { cdnUrl } from "@/lib/cdn";
import { NewsletterForm } from "@/components/newsletter/newsletter-form";
import { MainNav } from "@/components/main-nav";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/app/i18n";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lng: string }>;
}): Promise<Metadata> {
  const { lng } = await params;
  // We can use the translation hook here if we want, or simple logic.
  // Since we are in an async component, let's use the translation file.
  // Note: useTranslation is usually for React components. For metadata key access we might need a separate helper or just basic import if server side.
  // simpler for now:
  const title = lng === "es" ? "Inicio" : "Home";
  const description =
    lng === "es"
      ? "La forma más sencilla de entrar en Web3 y Blockchain. 100% Gratis."
      : "The simplest onboarding to Web3 and Blockchain. 100% Free.";

  return {
    title,
    description,
  };
}

export default async function LandingPage({
  params,
}: {
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;
  const { t } = await useTranslation(lng, "common");

  return (
    <div className="min-h-screen animated-bg transition-colors duration-300 relative">
      {/* Mesh overlay for depth */}
      <div className="fixed inset-0 mesh-overlay pointer-events-none" />

      <MainNav lng={lng} />

      {/* Hero Section */}
      <section
        className="pt-32 pb-20 lg:pt-48 lg:pb-32 transition-colors duration-300 overflow-hidden relative"
        style={{
          backgroundImage: "url('/images/wallpapers/quiz-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#0a1628",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight transition-colors duration-300">
                  {t("hero.title_start")}
                  <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                    {" "}
                    {t("hero.title_end")}
                  </span>
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed transition-colors duration-300">
                  {t("hero.description")}
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:gap-4">
                <NewsletterForm
                  variant="modal"
                  buttonText={t("hero.start_learning")}
                  title="Begin Your Journey"
                  description="Join our newsletter and get immediate access to our 'Web3 for Beginners' guide."
                  lng={lng}
                />
                <Link href={`/${lng}/courses`} className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-cyan-500/50 text-slate-200 hover:bg-slate-800 hover:text-white hover:border-cyan-400 focus-visible:ring-cyan-400 focus-visible:ring-offset-slate-950 transition-all duration-300 min-h-[44px]"
                  >
                    {t("hero.explore_courses")}
                  </Button>
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-6 text-sm text-slate-400 transition-colors duration-300">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-teal-400" />
                  <span>{t("hero.no_fees")}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-teal-400" />
                  <span>{t("hero.expert_guides")}</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src={cdnUrl("/images/wallpapers/quiz-login-bg-transparent.png")}
                  alt="Memento Academy - Web3 Onboarding"
                  width={600}
                  height={600}
                  className="transition-all duration-300 mx-auto w-full h-auto"
                  style={{
                    maskImage:
                      "radial-gradient(circle at center, black 80%, transparent 100%)",
                    WebkitMaskImage:
                      "radial-gradient(circle at center, black 80%, transparent 100%)",
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl blur-3xl opacity-20 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-10 relative z-10"
        style={{ backgroundColor: "#0a1628" }}
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white">
              {lng === "es"
                ? "Gana Criptomonedas Reales Jugando"
                : "Earn Real Crypto by Playing"}
            </h3>
            <p className="text-slate-400 text-sm max-w-xl">
              {lng === "es"
                ? "Entra cada día, responde al quiz y recibe tokens MEMO directamente en tu billetera. Sin costes, sin gas, solo aprendizaje y recompensas."
                : "Come back daily, answer the quiz, and receive MEMO tokens directly to your wallet. No costs, no gas, just learning and rewards."}
            </p>
          </div>
          <Link href={`/${lng}/game`}>
            <Button className="rounded-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold shadow-lg shadow-cyan-500/20 px-8">
              {lng === "es"
                ? "Regístrate y Juega Gratis"
                : "Register & Play Free"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Mission Section */}
      <section
        id="features"
        className="py-20 transition-colors duration-300 relative z-10"
        style={{ backgroundColor: "#0a1628" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white transition-colors duration-300">
              {t("mission.title")}
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto transition-colors duration-300">
              {t("mission.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="glass-card glass-card-hover border-glow rounded-xl">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4 border border-cyan-500/20 transition-colors duration-300">
                  <BookOpen className="w-6 h-6 text-cyan-400" />
                </div>
                <CardTitle className="text-white transition-colors duration-300">
                  {t("mission.foundations.title")}
                </CardTitle>
                <CardDescription className="text-slate-400 transition-colors duration-300">
                  {t("mission.foundations.desc")}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass-card glass-card-hover border-glow rounded-xl">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4 border border-teal-500/20 transition-colors duration-300">
                  <Globe className="w-6 h-6 text-teal-400" />
                </div>
                <CardTitle className="text-white transition-colors duration-300">
                  {t("mission.cbdc.title")}
                </CardTitle>
                <CardDescription className="text-slate-400 transition-colors duration-300">
                  {t("mission.cbdc.desc")}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass-card glass-card-hover border-glow rounded-xl">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4 border border-emerald-500/20 transition-colors duration-300">
                  <ShieldCheck className="w-6 h-6 text-emerald-400" />
                </div>
                <CardTitle className="text-white transition-colors duration-300">
                  {t("mission.security.title")}
                </CardTitle>
                <CardDescription className="text-slate-400 transition-colors duration-300">
                  {t("mission.security.desc")}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass-card glass-card-hover border-glow rounded-xl">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4 border border-cyan-500/20 transition-colors duration-300">
                  <Users className="w-6 h-6 text-cyan-400" />
                </div>
                <CardTitle className="text-white transition-colors duration-300">
                  {t("mission.community.title")}
                </CardTitle>
                <CardDescription className="text-slate-400 transition-colors duration-300">
                  {t("mission.community.desc")}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Proof */}
      <section
        id="community"
        className="py-20 transition-colors duration-300 relative z-10"
        style={{ backgroundColor: "#0a1628" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white transition-colors duration-300">
              {t("community_section.title")}
            </h2>
            <p className="text-xl text-slate-300 transition-colors duration-300">
              {t("community_section.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-card glass-card-hover rounded-xl glow-cyan">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-cyan-400 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-slate-300 mb-6 transition-colors duration-300">
                  {t("community_section.testimonials.1.quote")}
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400">
                    RC
                  </div>
                  <div>
                    <div className="font-semibold text-white transition-colors duration-300">
                      Ricardo C.
                    </div>
                    <div className="text-sm text-slate-400 transition-colors duration-300">
                      {t("community_section.testimonials.1.role")}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card glass-card-hover rounded-xl glow-teal">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-cyan-400 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-slate-300 mb-6 transition-colors duration-300">
                  {t("community_section.testimonials.2.quote")}
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-teal-400">
                    SM
                  </div>
                  <div>
                    <div className="font-semibold text-white transition-colors duration-300">
                      Sofia M.
                    </div>
                    <div className="text-sm text-slate-400 transition-colors duration-300">
                      {t("community_section.testimonials.2.role")}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card glass-card-hover rounded-xl glow-cyan">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-cyan-400 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-slate-300 mb-6 transition-colors duration-300">
                  {t("community_section.testimonials.3.quote")}
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-emerald-400">
                    JT
                  </div>
                  <div>
                    <div className="font-semibold text-white transition-colors duration-300">
                      Juan T.
                    </div>
                    <div className="text-sm text-slate-400 transition-colors duration-300">
                      {t("community_section.testimonials.3.role")}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Free Access Section (Replacing Pricing) */}
      <section
        id="start"
        className="py-20 transition-colors duration-300 relative"
        style={{
          backgroundImage: "url('/images/wallpapers/quiz-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "bottom center",
          backgroundColor: "#0a1628",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8 glass-card border-glow p-8 rounded-3xl">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mx-auto border border-cyan-500/20">
                <GraduationCap className="w-8 h-8 text-cyan-400" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white transition-colors duration-300">
                {t("access.title")}
              </h2>
              <p className="text-xl text-slate-300 transition-colors duration-300">
                {t("access.description")}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left max-w-5xl mx-auto mt-12">
              <div className="space-y-3 p-6 rounded-2xl glass-card glass-card-hover">
                <CheckCircle className="w-6 h-6 text-teal-400" />
                <h3 className="font-semibold text-white">
                  {t("access.cards.library.title")}
                </h3>
                <p className="text-sm text-slate-400">
                  {t("access.cards.library.desc")}
                </p>
              </div>
              <div className="space-y-3 p-6 rounded-2xl glass-card glass-card-hover">
                <CheckCircle className="w-6 h-6 text-teal-400" />
                <h3 className="font-semibold text-white">
                  {t("access.cards.newsletter.title")}
                </h3>
                <p className="text-sm text-slate-400">
                  {t("access.cards.newsletter.desc")}
                </p>
              </div>
              <div className="space-y-3 p-6 rounded-2xl glass-card glass-card-hover">
                <CheckCircle className="w-6 h-6 text-teal-400" />
                <h3 className="font-semibold text-white">
                  {t("access.cards.cbdc.title")}
                </h3>
                <p className="text-sm text-slate-400">
                  {t("access.cards.cbdc.desc")}
                </p>
              </div>
              <div className="space-y-3 p-6 rounded-2xl glass-card glass-card-hover">
                <CheckCircle className="w-6 h-6 text-teal-400" />
                <h3 className="font-semibold text-white">
                  {t("access.cards.support.title")}
                </h3>
                <p className="text-sm text-slate-400">
                  {t("access.cards.support.desc")}
                </p>
              </div>
              <div className="space-y-3 p-6 rounded-2xl glass-card glass-card-hover">
                <CheckCircle className="w-6 h-6 text-teal-400" />
                <h3 className="font-semibold text-white">
                  {t("access.cards.security.title")}
                </h3>
                <p className="text-sm text-slate-400">
                  {t("access.cards.security.desc")}
                </p>
              </div>
              <div className="space-y-3 p-6 rounded-2xl glass-card glass-card-hover">
                <CheckCircle className="w-6 h-6 text-teal-400" />
                <h3 className="font-semibold text-white">
                  {t("access.cards.open.title")}
                </h3>
                <p className="text-sm text-slate-400">
                  {t("access.cards.open.desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Newsletter Section */}
      <section
        className="py-20 border-t border-cyan-500/10 relative z-10"
        style={{ backgroundColor: "#0a1628" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                {t("newsletter_section.title")}
              </h2>
              <p className="text-xl text-slate-300">
                {t("newsletter_section.subtitle")}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-card rounded-lg p-4 text-center glow-cyan">
                    <div className="text-2xl font-bold text-cyan-400">50K+</div>
                    <div className="text-sm text-slate-400">
                      {t("newsletter_section.stats.learners")}
                    </div>
                  </div>
                  <div className="glass-card rounded-lg p-4 text-center glow-teal">
                    <div className="text-2xl font-bold text-teal-400">
                      Weekly
                    </div>
                    <div className="text-sm text-slate-400">
                      {t("newsletter_section.stats.weekly")}
                    </div>
                  </div>
                </div>

                <div className="space-y-3 font-medium">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-400" />
                    <span className="text-slate-300">
                      {t("newsletter_section.list.1")}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-400" />
                    <span className="text-slate-300">
                      {t("newsletter_section.list.2")}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-400" />
                    <span className="text-slate-300">
                      {t("newsletter_section.list.3")}
                    </span>
                  </div>
                </div>
              </div>

              <NewsletterForm
                variant="hero"
                title={t("newsletter_section.form.title")}
                description={t("newsletter_section.form.desc")}
                lng={lng}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="relative z-10 border-t border-cyan-500/20"
      >
        {/* Main Footer Content */}
        <div className="glass-card py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
              {/* Brand Section */}
              <div className="space-y-6 lg:col-span-3">
                <div className="flex items-center space-x-3 group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-cyan-500/30 blur-xl rounded-full group-hover:bg-cyan-400/40 transition-all duration-300" />
                    <Image
                      src={cdnUrl("/memento-academy-logo.png")}
                      alt="Memento Academy"
                      width={48}
                      height={48}
                      className="relative z-10"
                    />
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                    Memento Academy
                  </span>
                </div>
                <p className="text-slate-400 leading-relaxed max-w-sm">
                  {t("footer.desc")}
                </p>
              </div>

              {/* Learn Column */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-white">
                  {t("footer.cols.learn")}
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href={`/${lng}/learn/web3-basics`}
                      className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                    >
                      <span>{t("footer.links.web3")}</span>
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={`/${lng}/learn/crypto-101`}
                      className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                    >
                      <span>{t("footer.links.crypto")}</span>
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={`/${lng}/learn/cbdc`}
                      className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                    >
                      <span>{t("footer.links.cbdc")}</span>
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={`/${lng}/learn/safety`}
                      className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                    >
                      <span>{t("footer.links.safety")}</span>
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Academy Column */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-white">
                  {t("footer.cols.academy")}
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href={`/${lng}/about`}
                      className="text-slate-400 hover:text-teal-400 transition-colors duration-300"
                    >
                      {t("footer.links.mission")}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`/${lng}/courses`}
                      className="text-slate-400 hover:text-teal-400 transition-colors duration-300"
                    >
                      {t("footer.links.courses")}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`/${lng}/faqs`}
                      className="text-slate-400 hover:text-teal-400 transition-colors duration-300"
                    >
                      {t("footer.links.kb")}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`/${lng}/contribute`}
                      className="text-slate-400 hover:text-teal-400 transition-colors duration-300"
                    >
                      {t("footer.links.contribute")}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`/${lng}/updates`}
                      className="text-slate-400 hover:text-teal-400 transition-colors duration-300"
                    >
                      {lng === "es" ? "Actualizaciones" : "Updates"}
                    </a>
                  </li>
                </ul>
              </div>

              {/* Connect Column */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-white">
                  {t("footer.cols.connect")}
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://github.com/orgs/Memento-Academy/discussions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 flex items-center"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Community
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/memento_academy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 flex items-center"
                    >
                      <Twitter className="w-4 h-4 mr-2" />X (Twitter)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/memento-academy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 flex items-center"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/Memento-Academy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 flex items-center"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href={`/${lng}/contact`}
                      className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 flex items-center"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      {t("footer.links.contact")}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-slate-950/80 backdrop-blur-sm border-t border-cyan-500/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-slate-500">
                {t("footer.copyright", { year: new Date().getFullYear() })}
              </p>
              <div className="flex items-center space-x-6">
                <a
                  href={`/${lng}/privacy`}
                  className="text-sm text-slate-500 hover:text-cyan-400 transition-colors duration-300"
                >
                  {t("footer.privacy")}
                </a>
                <span className="text-slate-700">•</span>
                <a
                  href={`/${lng}/terms`}
                  className="text-sm text-slate-500 hover:text-cyan-400 transition-colors duration-300"
                >
                  {t("footer.terms")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
