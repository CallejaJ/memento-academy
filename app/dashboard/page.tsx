"use client"

import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { useAuthModal } from "@/contexts/auth-modal-context"
import { useEffect } from "react"

export default function DashboardPage() {
  const { user, isLoading } = useAuth()
  const { openLogin } = useAuthModal()

  // If still loading, show loading state
  if (isLoading) {
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
            <h2 className="text-xl font-semibold text-white mb-4">Your Profile</h2>
            <div className="space-y-2 text-slate-300">
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

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Your Courses</h2>
              <p className="text-slate-400">You haven't enrolled in any courses yet.</p>
              <Button className="mt-4 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600">
                Browse Courses
              </Button>
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
