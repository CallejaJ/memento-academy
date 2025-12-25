"use client"

import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { EnrolledCourses } from "@/components/dashboard/enrolled-courses"
import Link from "next/link"
import Image from "next/image"
import { MainNav } from "@/components/main-nav"
import { useAuthModal } from "@/contexts/auth-modal-context"
import { User } from "lucide-react"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

interface Profile {
  full_name: string | null
  avatar_url: string | null
}

export default function DashboardPage() {
  const { user, isLoading } = useAuth()
  const { openLogin } = useAuthModal()
  const [profile, setProfile] = useState<Profile | null>(null)
  const [profileLoading, setProfileLoading] = useState(true)

  // Fetch profile data from Supabase
  useEffect(() => {
    async function fetchProfile() {
      if (!user) {
        setProfileLoading(false)
        return
      }

      try {
        const { data, error } = await supabase
          .from("profiles")
          .select("full_name, avatar_url")
          .eq("id", user.id)
          .single()

        if (error && error.code !== "PGRST116") {
          console.error("Error fetching profile:", error)
        }

        if (data) {
          setProfile(data as Profile)
        }
      } catch (err) {
        console.error("Error:", err)
      } finally {
        setProfileLoading(false)
      }
    }

    if (user) {
      fetchProfile()
    }
  }, [user])

  // If still loading, show loading state
  if (isLoading || profileLoading) {
    return (
      <div className="min-h-screen bg-slate-950">
        <MainNav />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-slate-800 rounded w-64 mx-auto mb-8"></div>
              <div className="h-32 bg-slate-800 rounded mb-8"></div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="h-48 bg-slate-800 rounded"></div>
                <div className="h-48 bg-slate-800 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // If not authenticated, show login prompt
  if (!user) {
    return (
      <div className="min-h-screen bg-slate-950">
        <MainNav />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center">
            <h1 className="text-3xl font-bold text-white mb-4">Access Required</h1>
            <p className="text-slate-400 mb-8">
              Please log in to access your dashboard.
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
    )
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8">Welcome to Your Dashboard</h1>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg shadow-lg p-6 mb-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="relative flex-shrink-0">
                {profile?.avatar_url ? (
                  <img
                    src={profile.avatar_url}
                    alt="Profile"
                    className="w-24 h-24 rounded-full border-4 border-cyan-500/30 shadow-lg shadow-cyan-500/20 object-cover"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center border-4 border-cyan-500/30 shadow-lg shadow-cyan-500/20">
                    <span className="text-4xl font-bold text-white">
                      {profile?.full_name?.charAt(0).toUpperCase() || user.email?.charAt(0).toUpperCase() || "U"}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h2 className="text-xl font-semibold text-white mb-4">Your Profile</h2>
                <div className="space-y-2 text-slate-300">
                  {profile?.full_name && (
                    <p>
                      <span className="font-medium text-slate-400">Name:</span> {profile.full_name}
                    </p>
                  )}
                  <p>
                    <span className="font-medium text-slate-400">Email:</span> {user.email}
                  </p>
                  <p>
                    <span className="font-medium text-slate-400">User ID:</span> {user.id.slice(0, 8)}...
                  </p>
                  <p>
                    <span className="font-medium text-slate-400">Membership:</span>{" "}
                    <span className="text-cyan-400">Explorer (Free)</span>
                  </p>
                </div>

                <div className="mt-6">
                  <Link href="/profile">
                    <Button variant="outline" className="border-slate-600 text-slate-300 hover:text-white">
                      Edit Profile
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Your Courses</h2>
              <EnrolledCourses />
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-4">NFT Collection</h2>
              <p className="text-slate-400">You haven't added any NFTs to your collection.</p>
              <Button className="mt-4 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600">
                Explore NFTs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
