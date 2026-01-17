import { Metadata } from "next";
import { MainNav } from "@/components/main-nav";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MessageCircle, Github } from "lucide-react";
import { XIcon } from "@/components/icons/x-icon";
import { DiscordIcon } from "@/components/icons/discord-icon";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact/contact-form";
import { useTranslation } from "@/app/i18n";

export const metadata: Metadata = {
  title: "Contact Us | Memento Academy",
  description:
    "Get in touch with the Memento Academy team. Join our Discord community or reach out via email.",
  keywords: [
    "contact memento academy",
    "web3 help",
    "crypto support",
    "blockchain community",
  ],
};

export default async function ContactPage({
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
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
              {t("contact_page.badge")}
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                {t("contact_page.title")}
              </span>{" "}
              {t("contact_page.title_end")}
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              {t("contact_page.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {/* Discord Card - Takes up 1 column */}
              <Card className="bg-slate-800/50 border-slate-700 h-fit">
                <CardContent className="pt-6">
                  <div className="text-center space-y-6">
                    <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center mx-auto border border-indigo-500/20">
                      <MessageCircle className="w-8 h-8 text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {t("contact_page.discord.title")}
                      </h3>
                      <p className="text-slate-400 text-sm">
                        {t("contact_page.discord.desc")}
                      </p>
                    </div>
                    <a
                      href="https://discord.gg/MWfHKfjYS7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                        {t("contact_page.discord.btn")}
                      </Button>
                    </a>

                    <div className="pt-6 border-t border-slate-700">
                      <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mx-auto border border-cyan-500/20 mb-4">
                        <Mail className="w-8 h-8 text-cyan-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {t("contact_page.email.title")}
                      </h3>
                      <p className="text-slate-400 text-sm mb-4">
                        {t("contact_page.email.desc")}
                      </p>
                      <a
                        href="mailto:posicionadoenlaweb@gmail.com"
                        className="block"
                      >
                        <Button
                          variant="outline"
                          className="w-full border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10"
                        >
                          {t("contact_page.email.btn")}
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Form - Takes up 2 columns */}
              <div className="lg:col-span-2">
                <Card className="bg-slate-900/50 border-slate-800">
                  <CardContent className="p-6 sm:p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {t("contact_page.form.title")}
                      </h3>
                      <p className="text-slate-400">
                        {t("contact_page.form.desc")}
                      </p>
                    </div>
                    <ContactForm lng={lng} />
                  </CardContent>
                </Card>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              {t("contact_page.follow_us")}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <a
                href="https://x.com/memento_academy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-4 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-cyan-500/30 transition-all"
              >
                <XIcon className="w-5 h-5 text-cyan-400" />
                <span className="text-white">X</span>
              </a>
              <a
                href="https://discord.gg/MWfHKfjYS7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-4 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-cyan-500/30 transition-all"
              >
                <DiscordIcon className="w-5 h-5 text-indigo-400" />
                <span className="text-white">Discord</span>
              </a>
              <a
                href="https://github.com/Memento-Academy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-4 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-cyan-500/30 transition-all"
              >
                <Github className="w-5 h-5 text-slate-400" />
                <span className="text-white">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/company/memento-academy/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-4 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-cyan-500/30 transition-all"
              >
                <svg
                  className="w-5 h-5 text-blue-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="text-white">LinkedIn</span>
              </a>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">
                {t("contact_page.response_times.title")}
              </h3>
              <ul className="text-slate-300 space-y-2">
                <li>
                  <strong className="text-white">
                    {t("contact_page.response_times.discord")}
                  </strong>{" "}
                  {t("contact_page.response_times.discord_time")}
                </li>
                <li>
                  <strong className="text-white">
                    {t("contact_page.response_times.email")}
                  </strong>{" "}
                  {t("contact_page.response_times.email_time")}
                </li>
                <li>
                  <strong className="text-white">
                    {t("contact_page.response_times.github")}
                  </strong>{" "}
                  {t("contact_page.response_times.github_time")}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
