"use client";

import { useState, useEffect } from "react";
import { X, Cookie, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useTranslation } from "@/app/i18n/client";
import Link from "next/link";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

const COOKIE_CONSENT_KEY = "cookie_consent";
const COOKIE_PREFERENCES_KEY = "cookie_preferences";

export function CookieConsent({ lng }: { lng: string }) {
  const { t } = useTranslation(lng, "common");
  const [isVisible, setIsVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay to prevent flash on page load
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    } else {
      // Load saved preferences
      const savedPrefs = localStorage.getItem(COOKIE_PREFERENCES_KEY);
      if (savedPrefs) {
        setPreferences(JSON.parse(savedPrefs));
      }
    }
  }, []);

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "true");
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(prefs));
    setPreferences(prefs);
    setIsVisible(false);

    // Trigger analytics if accepted
    if (prefs.analytics && typeof window !== "undefined") {
      // Enable Google Analytics - will be handled by gtag
      window.dispatchEvent(
        new CustomEvent("cookie-consent-analytics", { detail: true })
      );
    }
  };

  const handleAcceptAll = () => {
    saveConsent({
      essential: true,
      analytics: true,
      marketing: true,
    });
  };

  const handleRejectAll = () => {
    saveConsent({
      essential: true,
      analytics: false,
      marketing: false,
    });
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
    setShowCustomize(false);
  };

  // Function to reopen the banner (called from footer)
  const reopenBanner = () => {
    setIsVisible(true);
    setShowCustomize(true);
  };

  // Expose reopenBanner globally for footer access
  useEffect(() => {
    if (typeof window !== "undefined") {
      (
        window as unknown as { reopenCookieBanner: () => void }
      ).reopenCookieBanner = reopenBanner;
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => {}} // Prevent closing by clicking backdrop
      />

      {/* Banner */}
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          <div className="flex items-center gap-2">
            <Cookie className="w-5 h-5 text-cyan-400" />
            <h2 className="text-lg font-semibold text-white">
              {t("cookie_banner.title")}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {!showCustomize ? (
            <>
              <p className="text-slate-300 text-sm mb-4">
                {t("cookie_banner.description")}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                {/* Accept and Reject buttons with EQUAL visibility */}
                <Button
                  onClick={handleAcceptAll}
                  className="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white font-medium"
                >
                  {t("cookie_banner.accept_all")}
                </Button>
                <Button
                  onClick={handleRejectAll}
                  variant="outline"
                  className="flex-1 border-slate-600 text-white hover:bg-slate-800 font-medium"
                >
                  {t("cookie_banner.reject_all")}
                </Button>
              </div>

              <Button
                onClick={() => setShowCustomize(true)}
                variant="ghost"
                className="w-full text-slate-400 hover:text-white text-sm"
              >
                <Settings className="w-4 h-4 mr-2" />
                {t("cookie_banner.customize")}
              </Button>
            </>
          ) : (
            <>
              {/* Customize view */}
              <div className="space-y-4 mb-4">
                {/* Essential cookies - always on */}
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  <div>
                    <h3 className="text-white font-medium text-sm">
                      {t("cookie_banner.categories.essential.title")}
                    </h3>
                    <p className="text-slate-400 text-xs mt-1">
                      {t("cookie_banner.categories.essential.description")}
                    </p>
                  </div>
                  <Switch checked={true} disabled className="opacity-50" />
                </div>

                {/* Analytics cookies */}
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  <div>
                    <h3 className="text-white font-medium text-sm">
                      {t("cookie_banner.categories.analytics.title")}
                    </h3>
                    <p className="text-slate-400 text-xs mt-1">
                      {t("cookie_banner.categories.analytics.description")}
                    </p>
                  </div>
                  <Switch
                    checked={preferences.analytics}
                    onCheckedChange={(checked) =>
                      setPreferences({ ...preferences, analytics: checked })
                    }
                  />
                </div>

                {/* Marketing cookies */}
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  <div>
                    <h3 className="text-white font-medium text-sm">
                      {t("cookie_banner.categories.marketing.title")}
                    </h3>
                    <p className="text-slate-400 text-xs mt-1">
                      {t("cookie_banner.categories.marketing.description")}
                    </p>
                  </div>
                  <Switch
                    checked={preferences.marketing}
                    onCheckedChange={(checked) =>
                      setPreferences({ ...preferences, marketing: checked })
                    }
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={() => setShowCustomize(false)}
                  variant="ghost"
                  className="flex-1 text-slate-400"
                >
                  ← {t("cookie_banner.reject_all").split(" ")[0]}
                </Button>
                <Button
                  onClick={handleSavePreferences}
                  className="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white"
                >
                  {t("cookie_banner.save_preferences")}
                </Button>
              </div>
            </>
          )}
        </div>

        {/* Footer links */}
        <div className="px-4 pb-4 flex justify-center gap-4 text-xs text-slate-500">
          <Link
            href={`/${lng}/privacy`}
            className="hover:text-cyan-400 transition-colors"
          >
            {t("cookie_banner.privacy_policy")}
          </Link>
          <span>•</span>
          <Link
            href={`/${lng}/cookies`}
            className="hover:text-cyan-400 transition-colors"
          >
            {t("cookie_banner.cookie_policy")}
          </Link>
        </div>
      </div>
    </div>
  );
}

// Button component for footer to reopen cookie settings
export function ManageCookiesButton({ lng }: { lng: string }) {
  const { t } = useTranslation(lng, "common");

  const handleClick = () => {
    if (
      typeof window !== "undefined" &&
      (window as unknown as { reopenCookieBanner: () => void })
        .reopenCookieBanner
    ) {
      (
        window as unknown as { reopenCookieBanner: () => void }
      ).reopenCookieBanner();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
    >
      {t("cookie_banner.manage_cookies")}
    </button>
  );
}
