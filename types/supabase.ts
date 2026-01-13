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
      game_sessions: {
        Row: {
          id: string;
          user_id: string;
          session_token: string;
          started_at: string;
          expires_at: string;
          finished_at: string | null;
          score: number;
          total_questions: number;
          rewarded: boolean;
          reward_tx_hash: string | null;
          reward_signature: string | null;
          reward_deadline: number | null;
          ip_address: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          session_token: string;
          started_at?: string;
          expires_at?: string;
          finished_at?: string | null;
          score?: number;
          total_questions?: number;
          rewarded?: boolean;
          reward_tx_hash?: string | null;
          reward_signature?: string | null;
          reward_deadline?: number | null;
          ip_address?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          session_token?: string;
          started_at?: string;
          expires_at?: string;
          finished_at?: string | null;
          score?: number;
          total_questions?: number;
          rewarded?: boolean;
          reward_tx_hash?: string | null;
          reward_signature?: string | null;
          reward_deadline?: number | null;
          ip_address?: string | null;
          created_at?: string;
        };
        Relationships: [];
      };
      game_questions: {
        Row: {
          id: string;
          category: string;
          difficulty: "easy" | "medium" | "hard";
          question_text: { [key: string]: string };
          options: { [key: string]: string }[];
          correct_index: number;
          explanation: { [key: string]: string } | null;
          from_course: string | null;
          is_active: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          category: string;
          difficulty?: "easy" | "medium" | "hard";
          question_text: { [key: string]: string };
          options: { [key: string]: string }[];
          correct_index: number;
          explanation?: { [key: string]: string } | null;
          from_course?: string | null;
          is_active?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          category?: string;
          difficulty?: "easy" | "medium" | "hard";
          question_text?: { [key: string]: string };
          options?: { [key: string]: string }[];
          correct_index?: number;
          explanation?: { [key: string]: string } | null;
          from_course?: string | null;
          is_active?: boolean;
          created_at?: string;
        };
        Relationships: [];
      };
      game_answers: {
        Row: {
          id: string;
          session_id: string;
          question_id: string;
          answer_index: number;
          is_correct: boolean;
          response_time_ms: number | null;
          answered_at: string;
        };
        Insert: {
          id?: string;
          session_id: string;
          question_id: string;
          answer_index: number;
          is_correct: boolean;
          response_time_ms?: number | null;
          answered_at?: string;
        };
        Update: {
          id?: string;
          session_id?: string;
          question_id?: string;
          answer_index?: number;
          is_correct?: boolean;
          response_time_ms?: number | null;
          answered_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "game_answers_session_id_fkey";
            columns: ["session_id"];
            referencedRelation: "game_sessions";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "game_answers_question_id_fkey";
            columns: ["question_id"];
            referencedRelation: "game_questions";
            referencedColumns: ["id"];
          },
        ];
      };
      game_question_history: {
        Row: {
          user_id: string;
          question_id: string;
          seen_at: string;
          was_correct: boolean | null;
        };
        Insert: {
          user_id: string;
          question_id: string;
          seen_at?: string;
          was_correct?: boolean | null;
        };
        Update: {
          user_id?: string;
          question_id?: string;
          seen_at?: string;
          was_correct?: boolean | null;
        };
        Relationships: [
          {
            foreignKeyName: "game_question_history_question_id_fkey";
            columns: ["question_id"];
            referencedRelation: "game_questions";
            referencedColumns: ["id"];
          },
        ];
      };
      user_wallets: {
        Row: {
          id: string;
          user_id: string;
          wallet_address: string;
          is_embedded: boolean;
          linked_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          wallet_address: string;
          is_embedded?: boolean;
          linked_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          wallet_address?: string;
          is_embedded?: boolean;
          linked_at?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      game_leaderboard: {
        Row: {
          user_id: string;
          email: string | null;
          wallet_address: string | null;
          games_played: number;
          total_score: number;
          best_score: number;
          avg_score: number;
        };
      };
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
