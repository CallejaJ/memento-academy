import { getSession, getUserProfile } from "@/lib/server-auth"
import { redirect } from "next/navigation"
import { ProfileForm } from "@/components/profile/profile-form"

export default async function ProfilePage() {
  const session = await getSession()

  // Redirect to login if not authenticated
  if (!session) {
    redirect("/auth/login")
  }

  const profile = await getUserProfile()

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Edit Your Profile</h1>
        <ProfileForm initialProfile={profile} />
      </div>
    </div>
  )
}
