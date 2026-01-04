import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/types/supabase";

// Provide hardcoded fallbacks in case environment variables aren't loaded correctly in the browser
const supabaseUrl = (
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://jmmmxgnakjefsjkhqaat.supabase.co"
).trim();
const supabaseAnonKey = (
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptbW14Z25ha2plZnNqa2hxYWF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYzMjEzMzYsImV4cCI6MjA4MTg5NzMzNn0.We5meT7wgivkXeFLsbdfjqu00vvTFS-JxuH8jigZqLY"
).trim();

// Create a singleton instance to prevent multiple clients
let supabaseInstance: ReturnType<typeof createClient<Database>> | null = null;

function createSupabaseClient() {
  if (typeof window !== "undefined") {
    // Client-side initialization
  }
  return createClient<Database>(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  });
}

// Export a singleton instance
export const supabase = (() => {
  if (typeof window === "undefined") {
    // Server-side: always create a new instance
    return createSupabaseClient();
  }

  // Client-side: use singleton
  if (!supabaseInstance) {
    supabaseInstance = createSupabaseClient();
  }

  return supabaseInstance;
})();
