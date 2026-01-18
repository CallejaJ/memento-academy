"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import type { Database } from "@/types/supabase";
import { useAuth } from "@/contexts/auth-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, CheckCircle, Loader2 } from "lucide-react";

const translations = {
  en: {
    profileInfo: "Profile Information",
    updateProfile: "Update your account profile information",
    email: "Email",
    emailNote: "Email cannot be changed",
    fullName: "Full Name",
    fullNamePlaceholder: "Your full name",
    avatarUrl: "Avatar URL",
    avatarPlaceholder: "https://example.com/avatar.jpg",
    saveChanges: "Save Changes",
    saving: "Saving...",
    successMessage: "Profile updated successfully! Redirecting...",
    noUser: "No user found",
    failedUpdate: "Failed to update profile",
    yourName: "Your Name",
  },
  es: {
    profileInfo: "Información de Perfil",
    updateProfile: "Actualiza la información de tu cuenta",
    email: "Email",
    emailNote: "El email no se puede cambiar",
    fullName: "Nombre Completo",
    fullNamePlaceholder: "Tu nombre completo",
    avatarUrl: "URL de Avatar",
    avatarPlaceholder: "https://ejemplo.com/avatar.jpg",
    saveChanges: "Guardar Cambios",
    saving: "Guardando...",
    successMessage: "¡Perfil actualizado! Redirigiendo...",
    noUser: "Usuario no encontrado",
    failedUpdate: "Error al actualizar perfil",
    yourName: "Tu Nombre",
  },
};

interface ProfileFormProps {
  initialProfile?: any;
}

export function ProfileForm({ initialProfile }: ProfileFormProps) {
  const router = useRouter();
  const { lng } = useParams<{ lng: string }>();
  const t = translations[lng as keyof typeof translations] || translations.en;

  const [fullName, setFullName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const { user } = useAuth();

  // Fetch profile data on mount
  useEffect(() => {
    async function fetchProfile() {
      if (!user) {
        setIsFetching(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();

        if (error && error.code !== "PGRST116") {
          console.error("Error fetching profile:", error);
        }

        if (data) {
          setFullName((data as any).full_name || "");
          setAvatarUrl((data as any).avatar_url || "");
        }
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setIsFetching(false);
      }
    }

    fetchProfile();
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setIsLoading(true);

    if (!user?.id) {
      setError(t.noUser);
      setIsLoading(false);
      return;
    }

    try {
      // First try to update
      const { data: existingProfile } = await supabase
        .from("profiles")
        .select("id")
        .eq("id", user.id)
        .single();

      if (existingProfile) {
        // Update existing profile
        const updateData: Database["public"]["Tables"]["profiles"]["Update"] = {
          full_name: fullName || null,
          avatar_url: avatarUrl || null,
          updated_at: new Date().toISOString(),
        };
        const { error: updateError } = await (supabase as any)
          .from("profiles")
          .update(updateData)
          .eq("id", user.id);

        if (updateError) throw updateError;
      } else {
        // Insert new profile
        const insertData: Database["public"]["Tables"]["profiles"]["Insert"] = {
          id: user.id,
          email: user.email ?? null,
          full_name: fullName || null,
          avatar_url: avatarUrl || null,
        };
        const { error: insertError } = await (supabase as any)
          .from("profiles")
          .insert(insertData);

        if (insertError) throw insertError;
      }

      setSuccess(t.successMessage);

      // Redirect to dashboard after 1.5 seconds
      setTimeout(() => {
        router.push(`/${lng}/dashboard`);
      }, 1500);
    } catch (err: any) {
      setError(err.message || t.failedUpdate);
    } finally {
      setIsLoading(false);
    }
  };

  if (isFetching) {
    return (
      <Card className="bg-slate-800/50 border-slate-700">
        <CardContent className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-cyan-500" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white">{t.profileInfo}</CardTitle>
        <CardDescription className="text-slate-400">
          {t.updateProfile}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {success && (
          <Alert className="mb-4 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 border-green-200 dark:border-green-900">
            <CheckCircle className="h-4 w-4" />
            <AlertDescription>{success}</AlertDescription>
          </Alert>
        )}

        {/* Avatar Preview */}
        <div className="flex items-center gap-6 mb-6 pb-6 border-b border-slate-700">
          <div className="relative">
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt="Avatar preview"
                className="w-24 h-24 rounded-full object-cover border-2 border-cyan-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center text-white text-2xl font-bold">
                {fullName
                  ? fullName.charAt(0).toUpperCase()
                  : user?.email?.charAt(0).toUpperCase() || "?"}
              </div>
            )}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">
              {fullName || t.yourName}
            </h3>
            <p className="text-sm text-slate-400">{user?.email}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">{t.email}</Label>
            <Input
              id="email"
              type="email"
              value={user?.email || ""}
              disabled
              className="bg-slate-950/50 border-slate-700 text-slate-400"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {t.emailNote}
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="fullName">{t.fullName}</Label>
            <Input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder={t.fullNamePlaceholder}
              className="bg-slate-950/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-cyan-500/20"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="avatarUrl">{t.avatarUrl}</Label>
            <Input
              id="avatarUrl"
              type="url"
              value={avatarUrl}
              onChange={(e) => setAvatarUrl(e.target.value)}
              placeholder={t.avatarPlaceholder}
              className="bg-slate-950/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-cyan-500/20"
            />
          </div>

          <div className="pt-4">
            <Button
              type="submit"
              className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-semibold w-full sm:w-auto"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t.saving}
                </>
              ) : (
                t.saveChanges
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
