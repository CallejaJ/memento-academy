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
      profiles: {
        Row: {
          id: string;
          created_at: string;
          updated_at: string;
          email: string | null;
          full_name: string | null;
          avatar_url: string | null;
          membership_tier: string;
        };
        Insert: {
          id: string;
          created_at?: string;
          updated_at?: string;
          email?: string | null;
          full_name?: string | null;
          avatar_url?: string | null;
          membership_tier?: string;
        };
        Update: {
          id?: string;
          created_at?: string;
          updated_at?: string;
          email?: string | null;
          full_name?: string | null;
          avatar_url?: string | null;
          membership_tier?: string;
        };
        Relationships: [];
      };
      newsletter_subscribers: {
        Row: {
          id: string;
          created_at: string;
          email: string;
          full_name: string | null;
          is_active: boolean;
          subscription_preferences: {
            crypto_news?: boolean;
            nft_updates?: boolean;
            course_announcements?: boolean;
            trading_signals?: boolean;
          } | null;
        };
        Insert: {
          id?: string;
          created_at?: string;
          email: string;
          full_name?: string | null;
          is_active?: boolean;
          subscription_preferences?: {
            crypto_news?: boolean;
            nft_updates?: boolean;
            course_announcements?: boolean;
            trading_signals?: boolean;
          } | null;
        };
        Update: {
          id?: string;
          created_at?: string;
          email?: string;
          full_name?: string | null;
          is_active?: boolean;
          subscription_preferences?: {
            crypto_news?: boolean;
            nft_updates?: boolean;
            course_announcements?: boolean;
            trading_signals?: boolean;
          } | null;
        };
        Relationships: [];
      };
      course_progress: {
        Row: {
          id: string;
          user_id: string;
          course_id: string;
          progress_percentage: number;
          completed_sections: string[];
          started_at: string;
          completed_at: string | null;
          last_accessed_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          course_id: string;
          progress_percentage?: number;
          completed_sections?: string[];
          started_at?: string;
          completed_at?: string | null;
          last_accessed_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          course_id?: string;
          progress_percentage?: number;
          completed_sections?: string[];
          started_at?: string;
          completed_at?: string | null;
          last_accessed_at?: string;
        };
        Relationships: [];
      };
      course_sections: {
        Row: {
          id: string;
          course_id: string;
          slug: string;
          order_index: number;
          title: { [key: string]: string } | null;
          description: { [key: string]: string } | null;
          content: Json;
          created_at: string;
        };
        Insert: {
          id?: string;
          course_id: string;
          slug: string;
          order_index: number;
          title?: { [key: string]: string } | null;
          description?: { [key: string]: string } | null;
          content?: Json;
          created_at?: string;
        };
        Update: {
          id?: string;
          course_id?: string;
          slug?: string;
          order_index?: number;
          title?: { [key: string]: string } | null;
          description?: { [key: string]: string } | null;
          content?: Json;
          created_at?: string;
        };
        Relationships: [];
      };
      quiz_questions: {
        Row: {
          id: string;
          section_id: string;
          question: { [key: string]: string };
          options: { [key: string]: string }[];
          correct_answer: number;
          explanation: { [key: string]: string } | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          section_id: string;
          question: { [key: string]: string };
          options: { [key: string]: string }[];
          correct_answer: number;
          explanation?: { [key: string]: string } | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          section_id?: string;
          question: { [key: string]: string };
          options: { [key: string]: string }[];
          correct_answer: number;
          explanation?: { [key: string]: string } | null;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "quiz_questions_section_id_fkey";
            columns: ["section_id"];
            referencedRelation: "course_sections";
            referencedColumns: ["id"];
          },
        ];
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
  };
}
