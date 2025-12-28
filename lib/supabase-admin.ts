import { createClient } from "@supabase/supabase-js"
import type { Database } from "@/types/supabase"

// Note: This client should ONLY be used in server-side contexts (Server Actions, API Routes)
// It uses the SERVICE_ROLE_KEY which has full access to your database.
// NEVER expose this client or the key to the browser.

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ""

if (!supabaseUrl || !supabaseServiceRoleKey) {
  console.error("❌ Missing Supabase URL or Service Role Key for Admin Client")
}

export const supabaseAdmin = createClient<Database>(supabaseUrl, supabaseServiceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
})
