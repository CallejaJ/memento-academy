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
import { AlertCircle, CheckCircle, Loader2, Info } from "lucide-react";

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
        const { getProfile } = await import("@/actions/get-profile");
        const { data, error } = await getProfile(user.id);

        if (error) {
          console.error("Error fetching profile:", error);
        }

        if (data) {
          setFullName((data as any).full_name || "");
          setAvatarUrl((data as any).avatar_url || "");
          console.log("Profile loaded for editing:", data);
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
      // Use Server Action for updates to bypass RLS
      const { updateProfile } = await import("@/actions/update-profile");

      const result = await updateProfile(user.id, {
        full_name: fullName || null,
        avatar_url: avatarUrl || null,
      });

      if (result.error) {
        throw new Error(result.error);
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
    <Card className="bg-slate-800/50 border-slate-700 w-full overflow-hidden">
      <CardHeader className="px-4 sm:px-6">
        <CardTitle className="text-white text-lg sm:text-xl">
          {t.profileInfo}
        </CardTitle>
        <CardDescription className="text-slate-400 text-sm sm:text-base">
          {t.updateProfile}
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4 sm:px-6 pb-6">
        {error && (
          <Alert className="mb-4 bg-blue-950/50 border-blue-500 text-blue-100">
            <Info className="h-4 w-4 text-blue-400" />
            <AlertDescription className="ml-2 text-sm">
              {error}
            </AlertDescription>
          </Alert>
        )}

        {success && (
          <Alert className="mb-4 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 border-green-200 dark:border-green-900">
            <CheckCircle className="h-4 w-4" />
            <AlertDescription className="text-sm">{success}</AlertDescription>
          </Alert>
        )}

        {/* Avatar Preview */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-6 pb-6 border-b border-slate-700">
          <div className="relative shrink-0">
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt="Avatar preview"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-cyan-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            ) : (
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center text-white text-xl sm:text-2xl font-bold">
                {fullName
                  ? fullName.charAt(0).toUpperCase()
                  : user?.email?.charAt(0).toUpperCase() || "?"}
              </div>
            )}
          </div>
          <div className="text-center sm:text-left overflow-hidden w-full">
            <h3 className="text-lg font-semibold text-white truncate">
              {fullName || t.yourName}
            </h3>
            <p className="text-sm text-slate-400 truncate">{user?.email}</p>
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
              className="bg-slate-950/50 border-slate-700 text-slate-400 w-full"
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
              className="bg-slate-950/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-cyan-500/20 w-full"
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
              className="bg-slate-950/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-cyan-500/20 w-full"
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
