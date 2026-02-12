"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/auth-context";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { AlertTriangle } from "lucide-react";
import { cdnUrl } from "@/lib/cdn";

const translations = {
  en: {
    title: "Welcome to Memento Academy",
    description:
      "Connect to start your Web3 learning journey and earn MEMO tokens",
    loginBtn: "Continue with Email",
    features: [
      "Track your learning progress",
      "Earn MEMO tokens for quiz scores",
      "Get your own Web3 wallet automatically",
    ],
    browserWarning: {
      title: "Restrictive browser detected",
      message:
        "You appear to be using Tor, Brave Shields, or a browser with strict privacy settings. Authentication may not work correctly. Please try using a standard browser like Chrome, Firefox, or Edge.",
    },
  },
  es: {
    title: "Bienvenido a Memento Academy",
    description: "Conéctate para comenzar tu viaje Web3 y ganar tokens MEMO",
    loginBtn: "Continuar con Email",
    features: [
      "Rastrea tu progreso de aprendizaje",
      "Gana tokens MEMO por tus puntuaciones",
      "Obtén tu propia wallet Web3 automáticamente",
    ],
    browserWarning: {
      title: "Navegador restrictivo detectado",
      message:
        "Parece que estás usando Tor, Brave Shields o un navegador con configuraciones de privacidad estrictas. La autenticación puede no funcionar correctamente. Por favor, usa un navegador estándar como Chrome, Firefox o Edge.",
    },
  },
};

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  lng?: string;
}

export function AuthModal({ isOpen, onClose, lng = "en" }: AuthModalProps) {
  const { login, isAuthenticated, user } = useAuth();
  const t = translations[lng as keyof typeof translations] || translations.en;
  const [isRestrictiveBrowser, setIsRestrictiveBrowser] = useState(false);

  // Detect restrictive browsers (Tor, Brave Shields, etc.)
  useEffect(() => {
    const detectRestrictiveBrowser = () => {
      try {
        // Check for Tor Browser (usually has screen size fingerprinting protection)
        const isTor =
          window.navigator.plugins.length === 0 &&
          window.screen.width === window.screen.availWidth &&
          window.screen.height === window.screen.availHeight;

        // Check for Brave browser with shields
        const isBrave = "brave" in navigator;

        // Check if cookies are disabled
        const cookiesDisabled = !navigator.cookieEnabled;

        // Check for canvas fingerprinting protection (common in privacy browsers)
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.fillStyle = "rgb(255,0,0)";
          ctx.fillRect(0, 0, 1, 1);
          const pixelData = ctx.getImageData(0, 0, 1, 1).data;
          // If canvas is blocked/modified, colors might be different
          const canvasBlocked =
            pixelData[0] !== 255 || pixelData[1] !== 0 || pixelData[2] !== 0;

          if (isTor || (isBrave && canvasBlocked) || cookiesDisabled) {
            setIsRestrictiveBrowser(true);
          }
        }

        // Check for localStorage availability (often blocked in private browsing)
        try {
          localStorage.setItem("test", "test");
          localStorage.removeItem("test");
        } catch {
          setIsRestrictiveBrowser(true);
        }
      } catch {
        // If any detection fails, assume restrictive environment
        setIsRestrictiveBrowser(true);
      }
    };

    if (isOpen) {
      detectRestrictiveBrowser();
    }
  }, [isOpen]);

  // Auto-close when authenticated AND user is synced
  useEffect(() => {
    if (user && isOpen) {
      onClose();
    }
  }, [user, isOpen, onClose]);

  const handleLogin = () => {
    onClose();
    // Allow a small delay for the modal to close properly before opening Privy
    // to prevent potential focus race conditions
    setTimeout(() => {
      login();
    }, 100);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-slate-900 border-slate-700">
        <DialogHeader className="flex flex-col items-start text-left">
          <Image
            src={cdnUrl("/memento-academy-logo.png")}
            alt="Memento Academy"
            width={64}
            height={64}
            className="mb-4"
          />
          <DialogTitle className="text-2xl text-white">{t.title}</DialogTitle>
          <DialogDescription className="text-slate-400">
            {t.description}
          </DialogDescription>
        </DialogHeader>

        {/* Browser Warning */}
        {isRestrictiveBrowser && (
          <div className="mt-4 p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-amber-400 font-medium text-sm">
                  {t.browserWarning.title}
                </p>
                <p className="text-amber-300/70 text-xs mt-1">
                  {t.browserWarning.message}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Features List */}
        <div className="mt-6 space-y-3">
          {t.features.map((feature, i) => (
            <div key={i} className="flex items-center gap-3 text-slate-300">
              <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <span className="text-cyan-400 text-xs">✓</span>
              </div>
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>

        {/* Login Button */}
        <Button
          onClick={handleLogin}
          className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-lg py-6"
        >
          {t.loginBtn}
        </Button>

        <p className="text-center text-xs text-slate-500 mt-4">
          {lng === "es"
            ? "Al continuar, recibirás un código de verificación por email"
            : "By continuing, you'll receive a verification code via email"}
        </p>
      </DialogContent>
    </Dialog>
  );
}
