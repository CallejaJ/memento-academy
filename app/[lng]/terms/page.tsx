"use client";

import { MainNav } from "@/components/main-nav";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/app/i18n/client";

export default function TermsPage({
  params,
}: {
  params: Promise<{ lng: string }>;
}) {
  const { lng } = require("react").use(params);
  const { t } = useTranslation(lng, "common");

  return (
    <div className="min-h-screen bg-slate-950">
      <MainNav lng={lng} />

      {/* Hero - Added pt-24 to prevent navbar overlap */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <Badge className="bg-slate-800 text-slate-400 border-slate-700">
              {t("terms_page.last_updated")}
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              {t("terms_page.title")}
            </h1>
          </div>
        </div>
      </section>

      {/* Content - Improved spacing and margins */}
      <section className="py-12 bg-slate-900/50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto">
            {/* Intro box */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 mb-10">
              <p className="text-slate-300 text-lg mb-0">
                {t("terms_page.intro")}
              </p>
            </div>

            {/* Sections with improved spacing */}
            <div className="space-y-10">
              {/* Section 1 */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">
                  {t("terms_page.section1.title")}
                </h2>
                <p className="text-slate-400">
                  {t("terms_page.section1.text")}
                </p>
              </div>

              {/* Section 2 */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">
                  {t("terms_page.section2.title")}
                </h2>
                <p className="text-slate-400">
                  {t("terms_page.section2.text")}
                </p>
              </div>

              {/* Section 3 - Warning */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">
                  {t("terms_page.section3.title")}
                </h2>
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
                  <p className="text-amber-300 mb-0">
                    <strong>{t("terms_page.section3.warning")}</strong>{" "}
                    {t("terms_page.section3.warning_text")}
                  </p>
                </div>
              </div>

              {/* Section 4 */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">
                  {t("terms_page.section4.title")}
                </h2>
                <p className="text-slate-400">
                  {t("terms_page.section4.text")}
                </p>
                <ul className="text-slate-400 list-disc list-inside space-y-2 ml-2">
                  <li>{t("terms_page.section4.list.item1")}</li>
                  <li>{t("terms_page.section4.list.item2")}</li>
                  <li>{t("terms_page.section4.list.item3")}</li>
                  <li>{t("terms_page.section4.list.item4")}</li>
                  <li>{t("terms_page.section4.list.item5")}</li>
                </ul>
              </div>

              {/* Section 5 */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">
                  {t("terms_page.section5.title")}
                </h2>
                <p className="text-slate-400">
                  {t("terms_page.section5.text1")}
                </p>
                <p className="text-slate-400">
                  {t("terms_page.section5.text2")}
                </p>
              </div>

              {/* Section 6 */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">
                  {t("terms_page.section6.title")}
                </h2>
                <p className="text-slate-400">
                  {t("terms_page.section6.text")}
                </p>
              </div>

              {/* Section 7 */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">
                  {t("terms_page.section7.title")}
                </h2>
                <p className="text-slate-400">
                  {t("terms_page.section7.text")}
                </p>
              </div>

              {/* Section 8 */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">
                  {t("terms_page.section8.title")}
                </h2>
                <p className="text-slate-400">
                  {t("terms_page.section8.text")}
                </p>
              </div>

              {/* Section 9 */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">
                  {t("terms_page.section9.title")}
                </h2>
                <p className="text-slate-400">
                  {t("terms_page.section9.text")}
                </p>
              </div>

              {/* Section 10 */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">
                  {t("terms_page.section10.title")}
                </h2>
                <p className="text-slate-400">
                  {t("terms_page.section10.text")}
                </p>
              </div>

              {/* Section 11 */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">
                  {t("terms_page.section11.title")}
                </h2>
                <p className="text-slate-400">
                  {t("terms_page.section11.text")}
                </p>
              </div>

              {/* Section 12 */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">
                  {t("terms_page.section12.title")}
                </h2>
                <p className="text-slate-400">
                  {t("terms_page.section12.text")}{" "}
                  <strong className="text-cyan-400">
                    {t("terms_page.section12.email")}
                  </strong>
                </p>
              </div>
            </div>

            {/* Outro box */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 mt-10">
              <p className="text-slate-400 mb-0">{t("terms_page.outro")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
