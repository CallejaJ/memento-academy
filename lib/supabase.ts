import { createClient } from "@supabase/supabase-js"
import type { Database } from "@/types/supabase"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Create a singleton instance to prevent multiple clients
let supabaseInstance: ReturnType<typeof createClient<Database>> | null = null

function createSupabaseClient() {
  return createClient<Database>(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  })
}

// Export a singleton instance
export const supabase = (() => {
  if (typeof window === "undefined") {
    // Server-side: always create a new instance
    return createSupabaseClient()
  }

  // Client-side: use singleton
  if (!supabaseInstance) {
    supabaseInstance = createSupabaseClient()
  }

  return supabaseInstance
})()
