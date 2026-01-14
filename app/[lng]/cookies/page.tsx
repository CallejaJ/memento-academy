"use client";

import { MainNav } from "@/components/main-nav";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/app/i18n/client";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";

export default function CookiesPage({
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
              {t("cookie_page.last_updated")}
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              {t("cookie_page.title")}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-slate-900/50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto">
            {/* Intro */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 mb-10">
              <p className="text-slate-300 text-lg mb-0">
                {t("cookie_page.intro")}
              </p>
            </div>

            <div className="space-y-10">
              {/* Section 1 */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">
                  {t("cookie_page.section1.title")}
                </h2>
                <p className="text-slate-400">
                  {t("cookie_page.section1.text")}
                </p>
              </div>

              {/* Section 2 */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">
                  {t("cookie_page.section2.title")}
                </h2>
                <p className="text-slate-400">
                  {t("cookie_page.section2.text")}
                </p>
                <ul className="text-slate-400 list-disc list-inside space-y-2 ml-2">
                  <li>{t("cookie_page.section2.list.item1")}</li>
                  <li>{t("cookie_page.section2.list.item2")}</li>
                  <li>{t("cookie_page.section2.list.item3")}</li>
                </ul>
              </div>

              {/* Section 3 - Cookie Tables */}
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-white">
                  {t("cookie_page.section3.title")}
                </h2>

                {/* Essential Cookies */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-cyan-400">
                    {t("cookie_page.section3.essential_title")}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {t("cookie_page.section3.essential_desc")}
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="text-xs text-slate-300 uppercase bg-slate-800/50">
                        <tr>
                          <th className="px-4 py-3 rounded-tl-lg">
                            {t("cookie_page.section3.cookies_table.name")}
                          </th>
                          <th className="px-4 py-3">
                            {t("cookie_page.section3.cookies_table.provider")}
                          </th>
                          <th className="px-4 py-3">
                            {t("cookie_page.section3.cookies_table.purpose")}
                          </th>
                          <th className="px-4 py-3 rounded-tr-lg">
                            {t("cookie_page.section3.cookies_table.duration")}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-400">
                        <tr className="border-b border-slate-700/50">
                          <td className="px-4 py-3 font-mono text-xs">
                            {t(
                              "cookie_page.section3.essential_cookies.cookie1.name"
                            )}
                          </td>
                          <td className="px-4 py-3">
                            {t(
                              "cookie_page.section3.essential_cookies.cookie1.provider"
                            )}
                          </td>
                          <td className="px-4 py-3">
                            {t(
                              "cookie_page.section3.essential_cookies.cookie1.purpose"
                            )}
                          </td>
                          <td className="px-4 py-3">
                            {t(
                              "cookie_page.section3.essential_cookies.cookie1.duration"
                            )}
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-mono text-xs">
                            {t(
                              "cookie_page.section3.essential_cookies.cookie2.name"
                            )}
                          </td>
                          <td className="px-4 py-3">
                            {t(
                              "cookie_page.section3.essential_cookies.cookie2.provider"
                            )}
                          </td>
                          <td className="px-4 py-3">
                            {t(
                              "cookie_page.section3.essential_cookies.cookie2.purpose"
                            )}
                          </td>
                          <td className="px-4 py-3">
                            {t(
                              "cookie_page.section3.essential_cookies.cookie2.duration"
                            )}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-cyan-400">
                    {t("cookie_page.section3.analytics_title")}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {t("cookie_page.section3.analytics_desc")}
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="text-xs text-slate-300 uppercase bg-slate-800/50">
                        <tr>
                          <th className="px-4 py-3 rounded-tl-lg">
                            {t("cookie_page.section3.cookies_table.name")}
                          </th>
                          <th className="px-4 py-3">
                            {t("cookie_page.section3.cookies_table.provider")}
                          </th>
                          <th className="px-4 py-3">
                            {t("cookie_page.section3.cookies_table.purpose")}
                          </th>
                          <th className="px-4 py-3 rounded-tr-lg">
                            {t("cookie_page.section3.cookies_table.duration")}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-400">
                        <tr className="border-b border-slate-700/50">
                          <td className="px-4 py-3 font-mono text-xs">
                            {t(
                              "cookie_page.section3.analytics_cookies.cookie1.name"
                            )}
                          </td>
                          <td className="px-4 py-3">
                            {t(
                              "cookie_page.section3.analytics_cookies.cookie1.provider"
                            )}
                          </td>
                          <td className="px-4 py-3">
                            {t(
                              "cookie_page.section3.analytics_cookies.cookie1.purpose"
                            )}
                          </td>
                          <td className="px-4 py-3">
                            {t(
                              "cookie_page.section3.analytics_cookies.cookie1.duration"
                            )}
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-mono text-xs">
                            {t(
                              "cookie_page.section3.analytics_cookies.cookie2.name"
                            )}
                          </td>
                          <td className="px-4 py-3">
                            {t(
                              "cookie_page.section3.analytics_cookies.cookie2.provider"
                            )}
                          </td>
                          <td className="px-4 py-3">
                            {t(
                              "cookie_page.section3.analytics_cookies.cookie2.purpose"
                            )}
                          </td>
                          <td className="px-4 py-3">
                            {t(
                              "cookie_page.section3.analytics_cookies.cookie2.duration"
                            )}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">
                  {t("cookie_page.section4.title")}
                </h2>
                <p className="text-slate-400">
                  {t("cookie_page.section4.text")}
                </p>
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-2">
                    {t("cookie_page.section4.google_analytics.name")}
                  </h4>
                  <p className="text-slate-400 text-sm mb-2">
                    {t("cookie_page.section4.google_analytics.desc")}
                  </p>
                  <a
                    href={t("cookie_page.section4.google_analytics.policy_url")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 text-sm"
                  >
                    {t("cookie_page.section4.google_analytics.policy_link")} →
                  </a>
                </div>
              </div>

              {/* Section 5 */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">
                  {t("cookie_page.section5.title")}
                </h2>
                <p className="text-slate-400">
                  {t("cookie_page.section5.text1")}
                </p>
                <p className="text-slate-400">
                  {t("cookie_page.section5.text2")}
                </p>
                <p className="text-slate-400 font-medium">
                  {t("cookie_page.section5.browser_links")}
                </p>
                <ul className="text-slate-400 space-y-2 ml-2">
                  <li>
                    <a
                      href="https://support.google.com/chrome/answer/95647"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300"
                    >
                      Google Chrome
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.mozilla.org/kb/cookies-information-websites-store-on-your-computer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300"
                    >
                      Mozilla Firefox
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300"
                    >
                      Safari
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.microsoft.com/help/17442/windows-internet-explorer-delete-manage-cookies"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300"
                    >
                      Microsoft Edge
                    </a>
                  </li>
                </ul>
              </div>

              {/* Section 6 */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">
                  {t("cookie_page.section6.title")}
                </h2>
                <p className="text-slate-400">
                  {t("cookie_page.section6.text")}
                </p>
              </div>

              {/* Section 7 */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">
                  {t("cookie_page.section7.title")}
                </h2>
                <p className="text-slate-400">
                  {t("cookie_page.section7.text")}{" "}
                  <strong className="text-cyan-400">
                    {t("cookie_page.section7.email")}
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
