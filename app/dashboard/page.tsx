import { getSession, getUserProfile } from "@/lib/server-auth"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default async function DashboardPage() {
  const session = await getSession()

  // Redirect to login if not authenticated
  if (!session) {
    redirect("/auth/login")
  }

  const profile = await getUserProfile()

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Welcome to Your Dashboard</h1>

        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Your Profile</h2>
          <div className="space-y-2">
            <p>
              <span className="font-medium">Email:</span> {session.user.email}
            </p>
            <p>
              <span className="font-medium">Name:</span> {profile?.full_name || "Not set"}
            </p>
            <p>
              <span className="font-medium">Membership:</span>{" "}
              <span className="capitalize">{profile?.membership_tier || "Explorer"}</span>
            </p>
          </div>

          <div className="mt-6">
            <Link href="/profile">
              <Button variant="outline">Edit Profile</Button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Your Courses</h2>
            <p className="text-gray-600 dark:text-gray-400">You haven't enrolled in any courses yet.</p>
            <Button className="mt-4 bg-gradient-to-r from-cyan-500 to-teal-500">Browse Courses</Button>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">NFT Collection</h2>
            <p className="text-gray-600 dark:text-gray-400">You haven't added any NFTs to your collection.</p>
            <Button className="mt-4 bg-gradient-to-r from-cyan-500 to-teal-500">Explore NFTs</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
