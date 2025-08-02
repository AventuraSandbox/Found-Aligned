export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.12 (cd3cf9e)"
  }
  public: {
    Tables: {
      applications: {
        Row: {
          age: number | null
          commitment_level: string | null
          company: string | null
          created_at: string
          education: string | null
          email: string
          expectations: string | null
          first_name: string
          id: string
          ideal_partner_age_range: string | null
          ideal_partner_location: string | null
          ideal_partner_profession: string | null
          ideal_partner_qualities: string | null
          income_range: string | null
          interests: string | null
          investment_level: string | null
          last_name: string
          lifestyle: string | null
          location: string | null
          marketing_consent: boolean | null
          phone: string | null
          previous_relationships: string | null
          privacy_consent: boolean | null
          profession: string | null
          relationship_goals: string | null
          terms_consent: boolean | null
          timeline: string | null
          updated_at: string
          user_id: string | null
          values: string | null
        }
        Insert: {
          age?: number | null
          commitment_level?: string | null
          company?: string | null
          created_at?: string
          education?: string | null
          email: string
          expectations?: string | null
          first_name: string
          id?: string
          ideal_partner_age_range?: string | null
          ideal_partner_location?: string | null
          ideal_partner_profession?: string | null
          ideal_partner_qualities?: string | null
          income_range?: string | null
          interests?: string | null
          investment_level?: string | null
          last_name: string
          lifestyle?: string | null
          location?: string | null
          marketing_consent?: boolean | null
          phone?: string | null
          previous_relationships?: string | null
          privacy_consent?: boolean | null
          profession?: string | null
          relationship_goals?: string | null
          terms_consent?: boolean | null
          timeline?: string | null
          updated_at?: string
          user_id?: string | null
          values?: string | null
        }
        Update: {
          age?: number | null
          commitment_level?: string | null
          company?: string | null
          created_at?: string
          education?: string | null
          email?: string
          expectations?: string | null
          first_name?: string
          id?: string
          ideal_partner_age_range?: string | null
          ideal_partner_location?: string | null
          ideal_partner_profession?: string | null
          ideal_partner_qualities?: string | null
          income_range?: string | null
          interests?: string | null
          investment_level?: string | null
          last_name?: string
          lifestyle?: string | null
          location?: string | null
          marketing_consent?: boolean | null
          phone?: string | null
          previous_relationships?: string | null
          privacy_consent?: boolean | null
          profession?: string | null
          relationship_goals?: string | null
          terms_consent?: boolean | null
          timeline?: string | null
          updated_at?: string
          user_id?: string | null
          values?: string | null
        }
        Relationships: []
      }
      discovery_calls: {
        Row: {
          age_range: string | null
          background_info: string | null
          call_type: string | null
          created_at: string
          email: string
          first_name: string
          id: string
          last_name: string
          location: string | null
          phone: string | null
          preferred_time: string | null
          questions: string | null
          relationship_status: string | null
          timezone: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          age_range?: string | null
          background_info?: string | null
          call_type?: string | null
          created_at?: string
          email: string
          first_name: string
          id?: string
          last_name: string
          location?: string | null
          phone?: string | null
          preferred_time?: string | null
          questions?: string | null
          relationship_status?: string | null
          timezone?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          age_range?: string | null
          background_info?: string | null
          call_type?: string | null
          created_at?: string
          email?: string
          first_name?: string
          id?: string
          last_name?: string
          location?: string | null
          phone?: string | null
          preferred_time?: string | null
          questions?: string | null
          relationship_status?: string | null
          timezone?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          first_name: string | null
          id: string
          last_name: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          first_name?: string | null
          id?: string
          last_name?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          first_name?: string | null
          id?: string
          last_name?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_current_user_role: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      has_role: {
        Args: {
          _user_id: string
          _role: Database["public"]["Enums"]["app_role"]
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
    },
  },
} as const
