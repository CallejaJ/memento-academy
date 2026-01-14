"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const GA_MEASUREMENT_ID = "G-5QYEV1B185";

export function GoogleAnalytics() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const checkConsent = () => {
      const preferences = localStorage.getItem("cookie_preferences");
      if (preferences) {
        const parsed = JSON.parse(preferences);
        if (parsed.analytics) {
          setHasConsent(true);
        }
      }
    };

    // Check on mount
    checkConsent();

    // Listen for consent changes
    const handleConsentChange = (event: CustomEvent<boolean>) => {
      if (event.detail) {
        setHasConsent(true);
      }
    };

    window.addEventListener(
      "cookie-consent-analytics" as keyof WindowEventMap,
      handleConsentChange as EventListener
    );

    // Also listen for storage changes (in case user changes preferences)
    const handleStorageChange = () => {
      checkConsent();
    };
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener(
        "cookie-consent-analytics" as keyof WindowEventMap,
        handleConsentChange as EventListener
      );
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Don't render anything if no consent
  if (!hasConsent) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
