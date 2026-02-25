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
      daily_challenges: {
        Row: {
          id: string;
          challenge_date: string;
          category: string;
          title: Json;
          reward_multiplier: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          challenge_date: string;
          category: string;
          title: Json;
          reward_multiplier?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          challenge_date?: string;
          category?: string;
          title?: Json;
          reward_multiplier?: number;
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
          created_at: string;
        };
        Insert: {
          id?: string;
          session_id: string;
          question_id: string;
          answer_index: number;
          is_correct: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          session_id?: string;
          question_id?: string;
          answer_index?: number;
          is_correct?: boolean;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "game_answers_session_id_fkey";
            columns: ["session_id"];
            isOneToOne: false;
            referencedRelation: "game_sessions";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "game_answers_question_id_fkey";
            columns: ["question_id"];
            isOneToOne: false;
            referencedRelation: "game_questions";
            referencedColumns: ["id"];
          },
        ];
      };
      game_questions: {
        Row: {
          id: string;
          category: string;
          difficulty: string;
          question_text: Json;
          options: Json;
          correct_index: number;
          is_active: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          category: string;
          difficulty: string;
          question_text: Json;
          options: Json;
          correct_index: number;
          is_active?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          category?: string;
          difficulty?: string;
          question_text?: Json;
          options?: Json;
          correct_index?: number;
          is_active?: boolean;
          created_at?: string;
        };
        Relationships: [];
      };
      game_sessions: {
        Row: {
          id: string;
          user_id: string;
          session_token: string;
          expires_at: string;
          started_at: string | null;
          finished_at: string | null;
          score: number;
          reward_signature: string | null;
          reward_deadline: number | null;
          game_mode: string;
          total_questions: number;
          ip_address: string | null;
          created_at: string;
          category: string | null;
          rewarded: boolean;
        };
        Insert: {
          id?: string;
          user_id: string;
          session_token: string;
          expires_at: string;
          started_at?: string | null;
          finished_at?: string | null;
          score?: number;
          reward_signature?: string | null;
          reward_deadline?: number | null;
          game_mode?: string;
          total_questions?: number;
          ip_address?: string | null;
          created_at?: string;
          category?: string | null;
          rewarded?: boolean;
        };
        Update: {
          id?: string;
          user_id?: string;
          session_token?: string;
          expires_at?: string;
          started_at?: string | null;
          finished_at?: string | null;
          score?: number;
          reward_signature?: string | null;
          reward_deadline?: number | null;
          game_mode?: string;
          total_questions?: number;
          ip_address?: string | null;
          created_at?: string;
          category?: string | null;
          rewarded?: boolean;
        };
        Relationships: [
          {
            foreignKeyName: "game_sessions_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
        ];
      };
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
      profiles: {
        Row: {
          id: string;
          full_name: string | null;
          avatar_url: string | null;
          referral_code: string | null;
          updated_at: string | null;
          created_at: string;
        };
        Insert: {
          id: string;
          full_name?: string | null;
          avatar_url?: string | null;
          referral_code?: string | null;
          updated_at?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          full_name?: string | null;
          avatar_url?: string | null;
          referral_code?: string | null;
          updated_at?: string | null;
          created_at?: string;
        };
        Relationships: [];
      };
      referrals: {
        Row: {
          id: string;
          referrer_user_id: string;
          referred_user_id: string;
          status: string;
          completed_at: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          referrer_user_id: string;
          referred_user_id: string;
          status?: string;
          completed_at?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          referrer_user_id?: string;
          referred_user_id?: string;
          status?: string;
          completed_at?: string | null;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "referrals_referrer_user_id_fkey";
            columns: ["referrer_user_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "referrals_referred_user_id_fkey";
            columns: ["referred_user_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
        ];
      };
      user_wallets: {
        Row: {
          user_id: string;
          wallet_address: string;
          privy_user_id: string;
          created_at: string;
        };
        Insert: {
          user_id: string;
          wallet_address: string;
          privy_user_id: string;
          created_at?: string;
        };
        Update: {
          user_id?: string;
          wallet_address?: string;
          privy_user_id?: string;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "user_wallets_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
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
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
