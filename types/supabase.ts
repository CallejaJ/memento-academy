export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      newsletter_subscribers: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          subscription_preferences: Json | null;
          confirmed_at: string | null;
          is_active: boolean;
          unsubscribed_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          full_name?: string | null;
          subscription_preferences?: Json | null;
          confirmed_at?: string | null;
          is_active?: boolean;
          unsubscribed_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          subscription_preferences?: Json | null;
          confirmed_at?: string | null;
          is_active?: boolean;
          unsubscribed_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
