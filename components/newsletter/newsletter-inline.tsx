"use client"

import type React from "react"

import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Mail } from "lucide-react"
import { subscribeToNewsletter } from "@/actions/newsletter"

interface NewsletterInlineProps {
  placeholder?: string
  buttonText?: string
  className?: string
}

export function NewsletterInline({
  placeholder = "Enter your email",
  buttonText = "Join Academy",
  className = "",
}: NewsletterInlineProps) {
  const [email, setEmail] = useState("")
  const [isPending, startTransition] = useTransition()
  const [message, setMessage] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append("email", email)

    startTransition(async () => {
      const result = await subscribeToNewsletter(formData)
      setMessage(result.message)
      setIsSuccess(result.success)

      if (result.success) {
        setEmail("")
      }
    })
  }

  return (
    <div className={`space-y-3 ${className}`}>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            type="email"
            name="email"
            placeholder={placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="pl-10 bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-600"
          />
        </div>
        <Button
          type="submit"
          disabled={isPending}
          className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white shadow-lg dark:shadow-cyan-500/25 transition-all duration-300"
        >
          {isPending ? "Joining..." : buttonText}
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </form>
      {message && (
        <p
          className={`text-sm text-center ${
            isSuccess ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
          } font-medium`}
        >
          {message}
        </p>
      )}
    </div>
  )
}
