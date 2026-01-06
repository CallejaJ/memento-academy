import { createBrowserClient } from "@supabase/ssr";
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
let supabaseInstance: ReturnType<typeof createBrowserClient<Database>> | null =
  null;

function createSupabaseInstance() {
  // createBrowserClient from @supabase/ssr stores session in cookies
  // This allows server-side access to the auth session
  return createBrowserClient<Database>(supabaseUrl, supabaseAnonKey);
}

// Export a singleton instance
export const supabase = (() => {
  if (typeof window === "undefined") {
    // Server-side: browser client shouldn't be used on server
    // but for compatibility, return a new instance
    return createSupabaseInstance();
  }

  // Client-side: use singleton
  if (!supabaseInstance) {
    supabaseInstance = createSupabaseInstance();
  }

  return supabaseInstance;
})();
