"use client";

import { useAuth } from "@/contexts/auth-context";
import { useAuthModal } from "@/contexts/auth-modal-context";
import { Button } from "@/components/ui/button";
import { MainNav } from "@/components/main-nav";
import { ProfileForm } from "@/components/profile/profile-form";
import { EnrolledCourses } from "@/components/dashboard/enrolled-courses";
import { useParams } from "next/navigation";

export default function ProfilePage() {
  const { user, isLoading } = useAuth();
  const { openLogin } = useAuthModal();
  const { lng } = useParams<{ lng: string }>();

  // If still loading, show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-950">
        <MainNav lng={lng} />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto">
            <div className="animate-pulse">
              <div className="h-8 bg-slate-800 rounded w-48 mb-8"></div>
              <div className="h-64 bg-slate-800 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // If not authenticated, show login prompt
  if (!user) {
    return (
      <div className="min-h-screen bg-slate-950">
        <MainNav lng={lng} />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center">
            <h1 className="text-3xl font-bold text-white mb-4">
              Access Required
            </h1>
            <p className="text-slate-400 mb-8">
              Please log in to edit your profile.
            </p>
            <Button
              onClick={openLogin}
              className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600"
            >
              Log In
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <MainNav lng={lng} />
      <div className="container mx-auto px-4 pt-32 pb-12">
        <div className="max-w-3xl mx-auto">
          {/* Header with Back Button */}
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => (window.location.href = `/${lng}/dashboard`)}
              className="text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <ArrowLeft className="w-6 h-6" />
            </Button>
            <h1 className="text-3xl font-bold text-white">Edit Your Profile</h1>
          </div>

          <ProfileForm initialProfile={null} />
        </div>
      </div>
    </div>
  );
}

import { ArrowLeft } from "lucide-react";
