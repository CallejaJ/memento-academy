"use client";

import { MainNav } from "@/components/main-nav";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/app/i18n/client";
import { SiteFooter } from "@/components/site-footer";

export default function PrivacyPage({
  params,
}: {
  params: Promise<{ lng: string }>;
}) {
  const { lng } = require("react").use(params);
  const { t } = useTranslation(lng, "common");

  return (
    <div className="min-h-screen bg-slate-950">
      <MainNav lng={lng} />

      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <Badge className="bg-slate-800 text-slate-400 border-slate-700">
              {t("privacy_page.last_updated")}
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              {t("privacy_page.title")}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-slate-900/50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto">
            {/* Intro box */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 mb-10">
              <p className="text-slate-300 text-lg mb-0">
                {t("privacy_page.intro")}
              </p>
            </div>

            {/* Data Controller Box */}
            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-6 mb-10">
              <h2 className="text-lg font-bold text-cyan-400 mb-4">
                {t("privacy_page.data_controller.title")}
              </h2>
              <div className="space-y-2 text-slate-300">
                <p>
                  <strong className="text-white">
                    {t("privacy_page.data_controller.name")}
                  </strong>
                </p>
                <p className="text-sm text-slate-400">
                  {t("privacy_page.data_controller.id")}
                </p>
                <p className="text-sm text-slate-400">
                  {t("privacy_page.data_controller.location")}
                </p>
                <p className="text-sm">
                  <a
                    href={`mailto:${t("privacy_page.data_controller.email")}`}
                    className="text-cyan-400 hover:text-cyan-300"
                  >
                    {t("privacy_page.data_controller.email")}
                  </a>
                </p>
              </div>
            </div>

            {/* Sections */}
            <div className="space-y-10">
              {/* Section 1 */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">
                  {t("privacy_page.section1.title")}
                </h2>
                <p className="text-slate-400">
                  {t("privacy_page.section1.text1")}
                </p>
                <ul className="text-slate-400 list-disc list-inside space-y-2 ml-2">
                  <li>
                    <strong className="text-white">
                      {t("privacy_page.section1.list1.email")}
                    </strong>{" "}
                    - {t("privacy_page.section1.list1.email_desc")}
                  </li>
                  <li>
                    <strong className="text-white">
                      {t("privacy_page.section1.list1.name")}
                    </strong>{" "}
                    - {t("privacy_page.section1.list1.name_desc")}
                  </li>
                  <li>
                    <strong className="text-white">
                      {t("privacy_page.section1.list1.preferences")}
                    </strong>{" "}
                    - {t("privacy_page.section1.list1.preferences_desc")}
                  </li>
                </ul>
                <p className="text-slate-400 mt-4">
                  {t("privacy_page.section1.text2")}
                </p>
                <ul className="text-slate-400 list-disc list-inside space-y-2 ml-2">
                  <li>{t("privacy_page.section1.list2.analytics")}</li>
                  <li>{t("privacy_page.section1.list2.device")}</li>
                </ul>
              </div>

              {/* Section 2 */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">
                  {t("privacy_page.section2.title")}
                </h2>
                <p className="text-slate-400">
                  {t("privacy_page.section2.text1")}
                </p>
                <ul className="text-slate-400 list-disc list-inside space-y-2 ml-2">
                  <li>{t("privacy_page.section2.list.item1")}</li>
                  <li>{t("privacy_page.section2.list.item2")}</li>
                  <li>{t("privacy_page.section2.list.item3")}</li>
                  <li>{t("privacy_page.section2.list.item4")}</li>
                </ul>
                <p className="text-slate-400 mt-4">
                  <strong className="text-white">
                    {t("privacy_page.section2.text2")}
                  </strong>{" "}
                  {t("privacy_page.section2.text2_suffix")}
                </p>
              </div>

              {/* Section 3 */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">
                  {t("privacy_page.section3.title")}
                </h2>
                <p className="text-slate-400">
                  {t("privacy_page.section3.text")}
                </p>
              </div>

              {/* Section 4 */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">
                  {t("privacy_page.section4.title")}
                </h2>
                <p className="text-slate-400">
                  {t("privacy_page.section4.text")}
                </p>
              </div>

              {/* Section 5 */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">
                  {t("privacy_page.section5.title")}
                </h2>
                <p className="text-slate-400">
                  {t("privacy_page.section5.text")}
                </p>
              </div>

              {/* Section 6 */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">
                  {t("privacy_page.section6.title")}
                </h2>
                <p className="text-slate-400">
                  {t("privacy_page.section6.text1")}
                </p>
                <ul className="text-slate-400 list-disc list-inside space-y-2 ml-2">
                  <li>{t("privacy_page.section6.list.item1")}</li>
                  <li>{t("privacy_page.section6.list.item2")}</li>
                  <li>{t("privacy_page.section6.list.item3")}</li>
                  <li>{t("privacy_page.section6.list.item4")}</li>
                </ul>
                <p className="text-slate-400 mt-4">
                  {t("privacy_page.section6.text2")}{" "}
                  <strong className="text-cyan-400">
                    {t("privacy_page.section6.email")}
                  </strong>
                </p>
              </div>

              {/* Section 7 - Third Party Services with links */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">
                  {t("privacy_page.section7.title")}
                </h2>
                <p className="text-slate-400">
                  {t("privacy_page.section7.text")}
                </p>
                <div className="space-y-3">
                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <strong className="text-white">
                          {t("privacy_page.section7.list.supabase")}
                        </strong>
                        <p className="text-slate-400 text-sm">
                          {t("privacy_page.section7.list.supabase_desc")}
                        </p>
                      </div>
                      <a
                        href={t("privacy_page.section7.list.supabase_policy")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 text-sm"
                      >
                        Policy →
                      </a>
                    </div>
                  </div>
                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <strong className="text-white">
                          {t("privacy_page.section7.list.brevo")}
                        </strong>
                        <p className="text-slate-400 text-sm">
                          {t("privacy_page.section7.list.brevo_desc")}
                        </p>
                      </div>
                      <a
                        href={t("privacy_page.section7.list.brevo_policy")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 text-sm"
                      >
                        Policy →
                      </a>
                    </div>
                  </div>
                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <strong className="text-white">
                          {t("privacy_page.section7.list.vercel")}
                        </strong>
                        <p className="text-slate-400 text-sm">
                          {t("privacy_page.section7.list.vercel_desc")}
                        </p>
                      </div>
                      <a
                        href={t("privacy_page.section7.list.vercel_policy")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 text-sm"
                      >
                        Policy →
                      </a>
                    </div>
                  </div>
                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <strong className="text-white">
                          {t("privacy_page.section7.list.cloudflare")}
                        </strong>
                        <p className="text-slate-400 text-sm">
                          {t("privacy_page.section7.list.cloudflare_desc")}
                        </p>
                      </div>
                      <a
                        href={t("privacy_page.section7.list.cloudflare_policy")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 text-sm"
                      >
                        Policy →
                      </a>
                    </div>
                  </div>
                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <strong className="text-white">
                          {t("privacy_page.section7.list.google_analytics")}
                        </strong>
                        <p className="text-slate-400 text-sm">
                          {t(
                            "privacy_page.section7.list.google_analytics_desc"
                          )}
                        </p>
                      </div>
                      <a
                        href={t(
                          "privacy_page.section7.list.google_analytics_policy"
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 text-sm"
                      >
                        Policy →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 8 */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">
                  {t("privacy_page.section8.title")}
                </h2>
                <p className="text-slate-400">
                  {t("privacy_page.section8.text")}
                </p>
              </div>

              {/* Section 9 */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">
                  {t("privacy_page.section9.title")}
                </h2>
                <p className="text-slate-400">
                  {t("privacy_page.section9.text")}
                </p>
              </div>

              {/* Section 10 */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">
                  {t("privacy_page.section10.title")}
                </h2>
                <p className="text-slate-400">
                  {t("privacy_page.section10.text")}{" "}
                  <strong className="text-cyan-400">
                    {t("privacy_page.section10.email")}
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter lng={lng} />
    </div>
  );
}
