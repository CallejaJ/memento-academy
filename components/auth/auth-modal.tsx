"use client";

import { useEffect } from "react";
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

  // Auto-close when authenticated AND user is synced
  useEffect(() => {
    if (user && isOpen) {
      onClose();
    }
  }, [user, isOpen, onClose]);

  const handleLogin = () => {
    login();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-slate-900 border-slate-700">
        <DialogHeader className="flex flex-col items-center text-center">
          <Image
            src="/memento-academy-logo.png"
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
