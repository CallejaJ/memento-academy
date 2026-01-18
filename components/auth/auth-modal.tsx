"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/auth-context";
import { sendPasswordResetEmail } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Github,
  AlertCircle,
  CheckCircle2,
  Mail,
  Info,
  Eye,
  EyeOff,
} from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import Image from "next/image";

type AuthMode = "login" | "signup" | "forgot-password";
type SuccessState = "none" | "signup-success" | "reset-success";

const translations = {
  en: {
    signIn: "Sign In",
    createAccount: "Create an Account",
    resetPassword: "Reset Password",
    signInDesc: "Sign in to your Memento Academy account",
    signUpDesc: "Join Memento Academy to start your Web3 journey",
    resetDesc: "Enter your email to receive reset instructions",
    email: "Email",
    password: "Password",
    forgotPassword: "Forgot password?",
    passwordHint: "Password must be at least 6 characters long",
    loading: "Loading...",
    signInBtn: "Sign In",
    createAccountBtn: "Create Account",
    sendResetLink: "Send Reset Link",
    noAccount: "Don't have an account?",
    signUp: "Sign up",
    hasAccount: "Already have an account?",
    backToLogin: "Back to login",
    checkEmail: "Check your email",
    emailSentTo: "We've sent a confirmation link to",
    confirmEmail:
      "Please check your email and click the confirmation link to complete your registration.",
    emailSent: "Email sent",
    resetSentTo: "We've sent password reset instructions to",
  },
  es: {
    signIn: "Iniciar Sesión",
    createAccount: "Crear Cuenta",
    resetPassword: "Restablecer Contraseña",
    signInDesc: "Inicia sesión en tu cuenta de Memento Academy",
    signUpDesc: "Únete a Memento Academy para comenzar tu viaje Web3",
    resetDesc:
      "Ingresa tu email para recibir instrucciones de restablecimiento",
    email: "Email",
    password: "Contraseña",
    forgotPassword: "¿Olvidaste tu contraseña?",
    passwordHint: "La contraseña debe tener al menos 6 caracteres",
    loading: "Cargando...",
    signInBtn: "Iniciar Sesión",
    createAccountBtn: "Crear Cuenta",
    sendResetLink: "Enviar Enlace",
    noAccount: "¿No tienes cuenta?",
    signUp: "Regístrate",
    hasAccount: "¿Ya tienes cuenta?",
    backToLogin: "Volver al inicio de sesión",
    checkEmail: "Revisa tu email",
    emailSentTo: "Hemos enviado un enlace de confirmación a",
    confirmEmail:
      "Por favor revisa tu email y haz clic en el enlace de confirmación para completar tu registro.",
    emailSent: "Email enviado",
    resetSentTo: "Hemos enviado instrucciones de restablecimiento a",
  },
};

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: AuthMode;
  lng?: string;
}

// Mapeo de errores de autenticación
const errorMap = {
  "Invalid login credentials": {
    es: "Credenciales incorrectas",
    en: "Invalid login credentials",
  },
  "Email not confirmed": {
    es: "Por favor confirma tu email antes de iniciar sesión",
    en: "Please confirm your email before signing in",
  },
  "User already registered": {
    es: "Este usuario ya está registrado",
    en: "User already registered",
  },
};

export function AuthModal({
  isOpen,
  onClose,
  defaultMode = "login",
  lng = "en",
}: AuthModalProps) {
  // ... (hooks)
  const [mode, setMode] = useState<AuthMode>(defaultMode);

  useEffect(() => {
    if (isOpen) {
      setMode(defaultMode);
    }
  }, [isOpen, defaultMode]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fax, setFax] = useState(""); // Honeypot field
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [successState, setSuccessState] = useState<SuccessState>("none");
  const [showPassword, setShowPassword] = useState(false);
  const { signUp, signIn, signInWithProvider, resetPassword } = useAuth();

  const t = translations[lng as keyof typeof translations] || translations.en;

  const getErrorMessage = (msg: string) => {
    if (msg in errorMap) {
      return (errorMap as any)[msg][lng] || msg;
    }
    // Traducciones genéricas
    if (msg.includes("rate limit")) {
      return lng === "es"
        ? "Demasiados intentos. Por favor espera."
        : "Too many attempts. Please wait.";
    }
    return msg;
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setError(null);
    setSuccessState("none");
  };

  const switchMode = (newMode: AuthMode) => {
    resetForm();
    setMode(newMode);
  };

  const handleClose = () => {
    resetForm();
    setMode(defaultMode);
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Anti-bot check: If honeypot field 'fax' is filled, silently return
    if (fax) {
      console.log("Bot detected");
      setSuccessState("signup-success"); // Fake success
      return;
    }

    setError(null);
    setIsLoading(true);

    try {
      if (mode === "login") {
        await signIn(email, password);
        handleClose();
        // The AuthContext's onAuthStateChange will handle the refresh
      } else if (mode === "signup") {
        await signUp(email, password);
        setSuccessState("signup-success");
      } else if (mode === "forgot-password") {
        const result = await sendPasswordResetEmail(email);
        if (!result.success) {
          throw new Error(result.message);
        }
        setSuccessState("reset-success");
      }
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleProviderSignIn = async (
    provider: "google" | "github" | "discord",
  ) => {
    setError(null);
    try {
      await signInWithProvider(provider);
      handleClose();
    } catch (err: any) {
      setError(err.message || `Failed to sign in with ${provider}`);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-slate-900 border-slate-700">
        <DialogHeader className="flex flex-col items-center text-center">
          <Image
            src="/memento-academy-logo.png"
            alt="Memento Academy"
            width={48}
            height={48}
            className="mb-2"
          />
          <DialogTitle className="text-2xl text-white">
            {mode === "login" && t.signIn}
            {mode === "signup" && t.createAccount}
            {mode === "forgot-password" && t.resetPassword}
          </DialogTitle>
          <DialogDescription className="text-slate-400">
            {mode === "login" && t.signInDesc}
            {mode === "signup" && t.signUpDesc}
            {mode === "forgot-password" && t.resetDesc}
          </DialogDescription>
        </DialogHeader>

        {error && (
          <div className="mt-4 p-4 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-start gap-3 text-blue-200 animate-in fade-in slide-in-from-top-2">
            <Info className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
            <div className="text-sm font-medium">{getErrorMessage(error)}</div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="auth-email" className="text-slate-200">
              {t.email}
            </Label>
            <Input
              id="auth-email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-slate-800 border-slate-600 text-white"
            />
          </div>

          {/* Honeypot Field - Hidden from humans */}
          <div
            className="absolute opacity-0 -z-10 select-none pointer-events-none"
            aria-hidden="true"
          >
            <Label htmlFor="fax-number">Fax Number</Label>
            <Input
              id="fax-number"
              type="text"
              name="fax"
              value={fax}
              onChange={(e) => setFax(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {mode !== "forgot-password" && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="auth-password" className="text-slate-200">
                  {t.password}
                </Label>
                {mode === "login" && (
                  <button
                    type="button"
                    onClick={() => switchMode("forgot-password")}
                    className="text-sm text-cyan-400 hover:text-cyan-300 hover:underline"
                  >
                    {t.forgotPassword}
                  </button>
                )}
              </div>
              <div className="relative">
                <Input
                  id="auth-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={mode === "signup" ? 6 : undefined}
                  className="bg-slate-800 border-slate-600 text-white pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white focus:outline-none"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
              {mode === "signup" && (
                <p className="text-xs text-slate-500">{t.passwordHint}</p>
              )}
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600"
            disabled={isLoading}
          >
            {isLoading
              ? t.loading
              : mode === "login"
                ? t.signInBtn
                : mode === "signup"
                  ? t.createAccountBtn
                  : t.sendResetLink}
          </Button>
        </form>

        {/* OAuth providers - disabled for now
        {mode !== "forgot-password" && (
          <>
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-slate-900 text-slate-500">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <Button
                variant="outline"
                onClick={() => handleProviderSignIn("google")}
                className="w-full border-slate-600 hover:bg-slate-800"
              >
                <FcGoogle className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() => handleProviderSignIn("github")}
                className="w-full border-slate-600 hover:bg-slate-800"
              >
                <Github className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() => handleProviderSignIn("discord")}
                className="w-full border-slate-600 hover:bg-slate-800"
              >
                <FaDiscord className="h-4 w-4 text-indigo-400" />
              </Button>
            </div>
          </>
        )}
        */}

        <div className="text-center mt-6">
          {mode === "login" && (
            <p className="text-sm text-slate-400">
              {t.noAccount}{" "}
              <button
                type="button"
                onClick={() => switchMode("signup")}
                className="text-cyan-400 hover:text-cyan-300 hover:underline"
              >
                {t.signUp}
              </button>
            </p>
          )}
          {mode === "signup" && (
            <p className="text-sm text-slate-400">
              {t.hasAccount}{" "}
              <button
                type="button"
                onClick={() => switchMode("login")}
                className="text-cyan-400 hover:text-cyan-300 hover:underline"
              >
                {t.signIn}
              </button>
            </p>
          )}
          {mode === "forgot-password" && (
            <button
              type="button"
              onClick={() => switchMode("login")}
              className="text-sm text-cyan-400 hover:text-cyan-300 hover:underline"
            >
              {t.backToLogin}
            </button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
