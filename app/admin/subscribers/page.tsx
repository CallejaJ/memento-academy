import { createServerSupabaseClient } from "@/lib/server-auth"
import { redirect } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatDistanceToNow } from "date-fns"

export default async function SubscribersPage() {
  const supabase = await createServerSupabaseClient()

  // Check if user is authenticated and has admin access
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect("/auth/login")
  }

  // For now, we'll just check if the user is the first user in the system
  // In a real app, you'd have proper role-based access control
  const { data: profile } = await supabase.from("profiles").select("*").eq("id", session.user.id).single()

  // Simple admin check - in production you'd have a proper admin role
  const isAdmin = profile?.email === "admin@example.com" // Replace with your admin email

  if (!isAdmin) {
    redirect("/dashboard")
  }

  // Fetch subscribers
  const { data: subscribers } = await supabase
    .from("newsletter_subscribers")
    .select("*")
    .order("created_at", { ascending: false })

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Newsletter Subscribers</h1>

        <div className="mb-6 flex justify-between items-center">
          <div>
            <Badge variant="outline" className="text-sm">
              Total: {subscribers?.length || 0}
            </Badge>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Subscribers</CardTitle>
            <CardDescription>Manage your newsletter subscribers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Email</th>
                    <th className="text-left py-3 px-4">Name</th>
                    <th className="text-left py-3 px-4">Preferences</th>
                    <th className="text-left py-3 px-4">Status</th>
                    <th className="text-left py-3 px-4">Joined</th>
                  </tr>
                </thead>
                <tbody>
                  {subscribers && subscribers.length > 0 ? (
                    subscribers.map((subscriber) => (
                      <tr key={subscriber.id} className="border-b hover:bg-gray-50 dark:hover:bg-slate-800/50">
                        <td className="py-3 px-4">{subscriber.email}</td>
                        <td className="py-3 px-4">{subscriber.full_name || "-"}</td>
                        <td className="py-3 px-4">
                          <div className="flex flex-wrap gap-1">
                            {subscriber.subscription_preferences?.crypto_news && (
                              <Badge variant="secondary" className="text-xs">
                                Crypto News
                              </Badge>
                            )}
                            {subscriber.subscription_preferences?.nft_updates && (
                              <Badge variant="secondary" className="text-xs">
                                NFT Updates
                              </Badge>
                            )}
                            {subscriber.subscription_preferences?.course_announcements && (
                              <Badge variant="secondary" className="text-xs">
                                Courses
                              </Badge>
                            )}
                            {subscriber.subscription_preferences?.trading_signals && (
                              <Badge variant="secondary" className="text-xs">
                                Trading
                              </Badge>
                            )}
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <Badge
                            variant={subscriber.is_active ? "default" : "outline"}
                            className={subscriber.is_active ? "bg-green-500" : ""}
                          >
                            {subscriber.is_active ? "Active" : "Inactive"}
                          </Badge>
                        </td>
                        <td className="py-3 px-4">
                          {subscriber.created_at
                            ? formatDistanceToNow(new Date(subscriber.created_at), { addSuffix: true })
                            : "-"}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="py-8 text-center text-gray-500">
                        No subscribers found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
