import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getBaseUrl(): string {
  if (typeof window !== "undefined") {
    // Client-side: use current origin
    return window.location.origin
  }

  // Server-side: check for Vercel URL first, then fallback to localhost
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }

  return "http://localhost:3000"
}
