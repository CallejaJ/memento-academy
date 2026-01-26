"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useAuthModal } from "@/contexts/auth-modal-context";
import { useAuth } from "@/contexts/auth-context";
import { AuthModal } from "@/components/auth/auth-modal";

import { LanguageSwitcher } from "./language-switcher";
import { useTranslation } from "@/app/i18n/client";

export function MainNav({ lng }: { lng: string }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isOpen, mode, openLogin, openSignup, close } = useAuthModal();
  const { user, signOut } = useAuth();
  const { t } = useTranslation(lng, "common");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const routes = [
    {
      href: `/${lng}#features`,
      label: t("nav.mission"),
      active: false,
    },
    {
      href: `/${lng}#community`,
      label: t("nav.community"),
      active: false,
    },
    {
      href: `/${lng}/courses`,
      label: t("nav.courses"),
      active: pathname === `/${lng}/courses`,
    },
  ];

  const handleLoginClick = () => {
    setMobileMenuOpen(false);
    openLogin();
  };

  const handleSignupClick = () => {
    setMobileMenuOpen(false);
    openSignup();
  };

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md",
          isVisible ? "translate-y-0" : "-translate-y-full",
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Link href={`/${lng}`} className="flex items-center space-x-3">
                <div className="relative">
                  <Image
                    src="/memento-academy-logo.png"
                    alt="Memento Academy"
                    width={40}
                    height={40}
                    className="transition-transform duration-300 hover:scale-105"
                    style={{ height: "auto" }}
                  />
                </div>
                <span className="text-base sm:text-xl font-bold text-white transition-colors duration-300 whitespace-nowrap">
                  Memento Academy
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium",
                    route.active && "text-cyan-400",
                  )}
                >
                  <span suppressHydrationWarning>{route.label}</span>
                </Link>
              ))}
            </nav>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              <div className="hidden lg:block">
                <LanguageSwitcher lng={lng} />
              </div>

              {/* Mobile menu button */}
              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden min-h-[44px] min-w-[44px]"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={
                  mobileMenuOpen ? t("nav.close_menu") : t("nav.open_menu")
                }
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>

              {/* Quick access buttons for desktop */}
              <div className="hidden lg:flex items-center space-x-4">
                {isMounted && user ? (
                  <>
                    <Button
                      asChild
                      variant="ghost"
                      className="text-slate-300 hover:text-white"
                    >
                      <Link href={`/${lng}/dashboard`}>
                        <span suppressHydrationWarning>
                          {t("nav.dashboard")}
                        </span>
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="border-slate-700 text-slate-300 hover:text-white"
                      onClick={() => signOut()}
                    >
                      <span suppressHydrationWarning>{t("nav.signout")}</span>
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="ghost"
                      className="text-slate-300 hover:text-white"
                      onClick={handleLoginClick}
                    >
                      <span suppressHydrationWarning>{t("nav.login")}</span>
                    </Button>
                    <Button
                      className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white border-0 shadow-lg shadow-cyan-500/20"
                      onClick={handleSignupClick}
                    >
                      <span suppressHydrationWarning>{t("nav.join")}</span>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div
              id="mobile-menu"
              role="navigation"
              aria-label={t("nav.mobile_navigation")}
              className="lg:hidden absolute top-[73px] left-0 right-0 h-[calc(100vh-73px)] bg-slate-950 border-t border-slate-800 px-4 py-6 overflow-y-auto"
            >
              <nav className="flex flex-col space-y-4">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                      "text-slate-300 hover:text-cyan-400 focus-visible:text-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-md transition-colors duration-300 font-medium px-4 py-3 min-h-[44px] flex items-center text-lg bg-slate-900/50 border border-slate-800/50",
                      route.active &&
                        "text-cyan-400 bg-slate-900 border-cyan-500/30",
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span suppressHydrationWarning>{route.label}</span>
                  </Link>
                ))}

                <div className="py-2 flex justify-start">
                  <LanguageSwitcher lng={lng} />
                </div>

                {/* Mobile quick access */}
                <div className="pt-6 border-t border-slate-800 space-y-4">
                  {isMounted && user ? (
                    <>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full justify-center border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white min-h-[48px] text-base shadow-sm"
                      >
                        <Link
                          href="/dashboard"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {t("nav.dashboard")}
                        </Link>
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-center text-slate-400 hover:text-white hover:bg-slate-800/50 min-h-[48px] text-base"
                        onClick={() => {
                          signOut();
                          setMobileMenuOpen(false);
                        }}
                      >
                        {t("nav.signout")}
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        variant="outline"
                        className="w-full justify-center border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white min-h-[48px] text-base shadow-sm"
                        onClick={handleLoginClick}
                      >
                        {t("nav.login")}
                      </Button>
                      <Button
                        className="w-full justify-center bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white border-0 min-h-[48px] text-base font-semibold shadow-md shadow-cyan-900/20"
                        onClick={handleSignupClick}
                      >
                        {t("nav.join")}
                      </Button>
                    </>
                  )}
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Auth Modal */}
      <AuthModal isOpen={isOpen} onClose={close} lng={lng} />
    </>
  );
}
