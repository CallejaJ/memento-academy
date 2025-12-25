export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          email: string | null
          full_name: string | null
          avatar_url: string | null
          membership_tier: string
        }
        Insert: {
          id: string
          created_at?: string
          updated_at?: string
          email?: string | null
          full_name?: string | null
          avatar_url?: string | null
          membership_tier?: string
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          email?: string | null
          full_name?: string | null
          avatar_url?: string | null
          membership_tier?: string
        }
        Relationships: []
      }
      newsletter_subscribers: {
        Row: {
          id: string
          created_at: string
          email: string
          full_name: string | null
          is_active: boolean
          subscription_preferences: {
            crypto_news?: boolean
            nft_updates?: boolean
            course_announcements?: boolean
            trading_signals?: boolean
          } | null
        }
        Insert: {
          id?: string
          created_at?: string
          email: string
          full_name?: string | null
          is_active?: boolean
          subscription_preferences?: {
            crypto_news?: boolean
            nft_updates?: boolean
            course_announcements?: boolean
            trading_signals?: boolean
          } | null
        }
        Update: {
          id?: string
          created_at?: string
          email?: string
          full_name?: string | null
          is_active?: boolean
          subscription_preferences?: {
            crypto_news?: boolean
            nft_updates?: boolean
            course_announcements?: boolean
            trading_signals?: boolean
          } | null
        }
        Relationships: []
      }
      course_progress: {
        Row: {
          id: string
          user_id: string
          course_id: string
          progress_percentage: number
          completed_sections: string[]
          started_at: string
          completed_at: string | null
          last_accessed_at: string
        }
        Insert: {
          id?: string
          user_id: string
          course_id: string
          progress_percentage?: number
          completed_sections?: string[]
          started_at?: string
          completed_at?: string | null
          last_accessed_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          course_id?: string
          progress_percentage?: number
          completed_sections?: string[]
          started_at?: string
          completed_at?: string | null
          last_accessed_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
