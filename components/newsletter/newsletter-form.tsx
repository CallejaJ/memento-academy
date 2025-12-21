"use client"

import type React from "react"

import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { AlertCircle, CheckCircle, ArrowRight, Mail } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { subscribeToNewsletter } from "@/actions/newsletter"

interface NewsletterFormProps {
  variant?: "inline" | "modal" | "hero"
  buttonText?: string
  title?: string
  description?: string
  className?: string
}

export function NewsletterForm({
  variant = "inline",
  buttonText = "Join Academy",
  title = "Start Your Web3 Journey",
  description = "Learn the basics of Cryptocurrencies, Blockchain, and CBDCs with our free beginner-friendly courses.",
  className = "",
}: NewsletterFormProps) {
  const [email, setEmail] = useState("")
  const [fullName, setFullName] = useState("")
  const [preferences, setPreferences] = useState({
    web3_basics: true,
    cbdc_education: true,
    free_courses: true,
    community_events: false,
  })
  const [response, setResponse] = useState<{ success: boolean; message: string } | null>(null)
  const [isPending, startTransition] = useTransition()
  const [isOpen, setIsOpen] = useState(false)
  const { user } = useAuth()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    // Add preferences to form data
    Object.entries(preferences).forEach(([key, value]) => {
      if (value) formData.append(key, "on")
    })

    startTransition(async () => {
      const result = await subscribeToNewsletter(formData)
      setResponse(result)

      if (result.success) {
        setEmail("")
        setFullName("")

        // Close modal after success
        if (variant === "modal") {
          setTimeout(() => {
            setIsOpen(false)
            setResponse(null)
          }, 3000)
        }
      }
    })
  }

  const formContent = (
    <div className={`space-y-4 ${className}`}>
      {response && (
        <Alert
          variant={response.success ? "default" : "destructive"}
          className={
            response.success
              ? "bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 border-green-200 dark:border-green-900"
              : undefined
          }
        >
          {response.success ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
          <AlertDescription>{response.message}</AlertDescription>
        </Alert>
      )}

      {(!response || !response.success) && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white dark:bg-slate-800"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="fullName">Name (Optional)</Label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Your name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="bg-white dark:bg-slate-800"
              />
            </div>
          </div>

          <div className="space-y-3">
            <Label className="text-sm font-medium">What interests you? (Optional)</Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="web3_basics"
                  name="web3_basics"
                  checked={preferences.web3_basics}
                  onCheckedChange={(checked) => setPreferences((prev) => ({ ...prev, web3_basics: !!checked }))}
                />
                <Label htmlFor="web3_basics" className="text-sm">
                  Web3 Basics
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="cbdc_education"
                  name="cbdc_education"
                  checked={preferences.cbdc_education}
                  onCheckedChange={(checked) => setPreferences((prev) => ({ ...prev, cbdc_education: !!checked }))}
                />
                <Label htmlFor="cbdc_education" className="text-sm">
                  CBDC Education
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="free_courses"
                  name="free_courses"
                  checked={preferences.free_courses}
                  onCheckedChange={(checked) =>
                    setPreferences((prev) => ({ ...prev, free_courses: !!checked }))
                  }
                />
                <Label htmlFor="free_courses" className="text-sm">
                  Free Courses
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="community_events"
                  name="community_events"
                  checked={preferences.community_events}
                  onCheckedChange={(checked) => setPreferences((prev) => ({ ...prev, community_events: !!checked }))}
                />
                <Label htmlFor="community_events" className="text-sm">
                  Community Events
                </Label>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white shadow-lg dark:shadow-cyan-500/25 transition-all duration-300"
            disabled={isPending}
          >
            {isPending ? "Joining..." : buttonText}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>

          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            By subscribing, you agree to receive emails from Memento Academy. Unsubscribe anytime.
          </p>
        </form>
      )}
    </div>
  )

  if (variant === "modal") {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white shadow-lg dark:shadow-cyan-500/25 transition-all duration-300">
            {buttonText}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-cyan-500" />
              <span>{title}</span>
            </DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          {formContent}
        </DialogContent>
      </Dialog>
    )
  }

  if (variant === "hero") {
    return (
      <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 shadow-lg dark:shadow-cyan-500/10 border border-gray-200 dark:border-slate-700">
        <div className="text-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-slate-300 text-sm">{description}</p>
        </div>
        {formContent}
      </div>
    )
  }

  return (
    <Card className="border-0 bg-white dark:bg-slate-800/50 shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center space-x-2">
          <Mail className="w-5 h-5 text-cyan-500" />
          <span>{title}</span>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {formContent}
      </CardContent>
    </Card>
  )
}
