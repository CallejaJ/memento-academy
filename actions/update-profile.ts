"use server";

import { supabaseAdmin } from "@/lib/supabase-admin";
import { revalidatePath } from "next/cache";

export async function updateProfile(
  userId: string,
  data: {
    full_name: string | null;
    avatar_url: string | null;
  },
) {
  try {
    const { error } = await supabaseAdmin.from("profiles").upsert({
      id: userId, // Ensure ID is included for upsert
      ...data,
      updated_at: new Date().toISOString(),
    });

    if (error) {
      console.error("[Profile Update] Error:", error);
      return { error: error.message };
    }

    revalidatePath("/profile");
    revalidatePath("/dashboard");
    return { success: true };
  } catch (error: any) {
    return { error: error.message };
  }
}
