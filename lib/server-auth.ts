import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import type { Database } from "@/types/supabase"

export async function createServerSupabaseClient() {
  const cookieStore = await cookies()

  // Provide hardcoded fallbacks for the server side too
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://jmmmxgnakjefsjkhqaat.supabase.co"
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptbW14Z25ha2plZnNqa2hxYWF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYzMjEzMzYsImV4cCI6MjA4MTg5NzMzNn0.We5meT7wgivkXeFLsbdfjqu00vvTFS-JxuH8jigZqLY"

  return createServerClient<Database>(
    supabaseUrl,
    supabaseAnonKey,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: any) {
          try {
            cookieStore.set({ name, value, ...options })
          } catch (error) {
            // This can happen in Server Components
          }
        },
        remove(name: string, options: any) {
          try {
            cookieStore.set({ name, value: "", ...options })
          } catch (error) {
            // This can happen in Server Components
          }
        },
      },
    },
  )
}

export async function getSession() {
  const supabase = await createServerSupabaseClient()
  try {
    const {
      data: { session },
    } = await supabase.auth.getSession()
    return session
  } catch (error) {
    console.error("Error getting session:", error)
    return null
  }
}

export async function getUserProfile() {
  const supabase = await createServerSupabaseClient()
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session?.user) return null

  const { data: profile } = await supabase.from("profiles").select("*").eq("id", session.user.id).single()

  return profile
}
