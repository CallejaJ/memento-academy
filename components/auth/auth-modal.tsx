"use client"

import type React from "react"
import { useState } from "react"
import { useAuth } from "@/contexts/auth-context"
import { sendPasswordResetEmail } from "@/actions/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Github, AlertCircle, CheckCircle2, Mail } from "lucide-react"
import { FaDiscord } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import Link from "next/link"
import Image from "next/image"

type AuthMode = "login" | "signup" | "forgot-password"
type SuccessState = "none" | "signup-success" | "reset-success"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  defaultMode?: AuthMode
}

export function AuthModal({ isOpen, onClose, defaultMode = "login" }: AuthModalProps) {
  const [mode, setMode] = useState<AuthMode>(defaultMode)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [successState, setSuccessState] = useState<SuccessState>("none")
  const { signUp, signIn, signInWithProvider, resetPassword } = useAuth()

  const resetForm = () => {
    setEmail("")
    setPassword("")
    setError(null)
    setSuccessState("none")
  }

  const switchMode = (newMode: AuthMode) => {
    resetForm()
    setMode(newMode)
  }

  const handleClose = () => {
    resetForm()
    setMode(defaultMode)
    onClose()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    try {
      if (mode === "login") {
        await signIn(email, password)
        handleClose()
        // The AuthContext's onAuthStateChange will handle the refresh
      } else if (mode === "signup") {
        await signUp(email, password)
        setSuccessState("signup-success")
      } else if (mode === "forgot-password") {
        const result = await sendPasswordResetEmail(email)
        if (!result.success) {
          throw new Error(result.message)
        }
        setSuccessState("reset-success")
      }
    } catch (err: any) {
      setError(err.message || "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  const handleProviderSignIn = async (provider: "google" | "github" | "discord") => {
    setError(null)
    try {
      await signInWithProvider(provider)
      handleClose()
    } catch (err: any) {
      setError(err.message || `Failed to sign in with ${provider}`)
    }
  }

  // Success states
  if (successState === "signup-success") {
    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md bg-slate-900 border-slate-700">
          <div className="flex flex-col items-center text-center py-6">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <DialogHeader>
              <DialogTitle className="text-2xl text-white">Check your email</DialogTitle>
              <DialogDescription className="text-slate-400 mt-2">
                We've sent a confirmation link to <span className="text-cyan-400">{email}</span>
              </DialogDescription>
            </DialogHeader>
            <p className="text-slate-400 text-sm mt-4">
              Please check your email and click the confirmation link to complete your registration.
            </p>
            <Button
              variant="link"
              onClick={() => switchMode("login")}
              className="mt-6 text-cyan-400 hover:text-cyan-300"
            >
              Back to login
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  if (successState === "reset-success") {
    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md bg-slate-900 border-slate-700">
          <div className="flex flex-col items-center text-center py-6">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
            <DialogHeader>
              <DialogTitle className="text-2xl text-white">Email sent</DialogTitle>
              <DialogDescription className="text-slate-400 mt-2">
                We've sent password reset instructions to <span className="text-cyan-400">{email}</span>
              </DialogDescription>
            </DialogHeader>
            <Button
              variant="link"
              onClick={() => switchMode("login")}
              className="mt-6 text-cyan-400 hover:text-cyan-300"
            >
              Back to login
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

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
            {mode === "login" && "Sign In"}
            {mode === "signup" && "Create an Account"}
            {mode === "forgot-password" && "Reset Password"}
          </DialogTitle>
          <DialogDescription className="text-slate-400">
            {mode === "login" && "Sign in to your Memento Academy account"}
            {mode === "signup" && "Join Memento Academy to start your Web3 journey"}
            {mode === "forgot-password" && "Enter your email to receive reset instructions"}
          </DialogDescription>
        </DialogHeader>

        {error && (
          <Alert variant="destructive" className="mt-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-slate-200">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-slate-800 border-slate-600 text-white"
            />
          </div>

          {mode !== "forgot-password" && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-slate-200">Password</Label>
                {mode === "login" && (
                  <button
                    type="button"
                    onClick={() => switchMode("forgot-password")}
                    className="text-sm text-cyan-400 hover:text-cyan-300 hover:underline"
                  >
                    Forgot password?
                  </button>
                )}
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={mode === "signup" ? 6 : undefined}
                className="bg-slate-800 border-slate-600 text-white"
              />
              {mode === "signup" && (
                <p className="text-xs text-slate-500">Password must be at least 6 characters long</p>
              )}
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600"
            disabled={isLoading}
          >
            {isLoading ? (
              "Loading..."
            ) : mode === "login" ? (
              "Sign In"
            ) : mode === "signup" ? (
              "Create Account"
            ) : (
              "Send Reset Link"
            )}
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
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => switchMode("signup")}
                className="text-cyan-400 hover:text-cyan-300 hover:underline"
              >
                Sign up
              </button>
            </p>
          )}
          {mode === "signup" && (
            <p className="text-sm text-slate-400">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => switchMode("login")}
                className="text-cyan-400 hover:text-cyan-300 hover:underline"
              >
                Sign in
              </button>
            </p>
          )}
          {mode === "forgot-password" && (
            <button
              type="button"
              onClick={() => switchMode("login")}
              className="text-sm text-cyan-400 hover:text-cyan-300 hover:underline"
            >
              Back to login
            </button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
