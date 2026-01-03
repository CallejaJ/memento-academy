"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, AlertCircle } from "lucide-react"

export default function TestEmailPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<any>(null)

  const handleTestEmail = async () => {
    setIsLoading(true)
    setResult(null)

    try {
      const response = await fetch("/api/test-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()
      setResult(data)
    } catch (error: any) {
      setResult({
        success: false,
        error: error.message,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Email System Test</h1>

        <Card>
          <CardHeader>
            <CardTitle>Test Email Delivery</CardTitle>
            <CardDescription>Use this tool to test if your Resend configuration is working correctly.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <Button onClick={handleTestEmail} disabled={isLoading || !email} className="w-full">
              {isLoading ? "Sending Test Email..." : "Send Test Email"}
            </Button>

            {result && (
              <Alert variant={result.success ? "default" : "destructive"}>
                {result.success ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
                <AlertDescription>
                  {result.success ? (
                    <div>
                      <p className="font-medium">✅ Test email sent successfully!</p>
                      <p className="text-sm mt-1">Email ID: {result.emailId}</p>
                      <p className="text-sm">Check your inbox (and spam folder) for the test email.</p>
                    </div>
                  ) : (
                    <div>
                      <p className="font-medium">❌ Test email failed</p>
                      <p className="text-sm mt-1">Error: {result.error}</p>
                      <details className="mt-2">
                        <summary className="text-sm cursor-pointer">View details</summary>
                        <pre className="text-xs mt-1 bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-auto">
                          {JSON.stringify(result.details, null, 2)}
                        </pre>
                      </details>
                    </div>
                  )}
                </AlertDescription>
              </Alert>
            )}

            <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="font-medium mb-2">Troubleshooting Tips:</h3>
              <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                <li>• Check your spam/junk folder</li>
                <li>• Verify your Resend API key is correct</li>
                <li>• Make sure you're using a verified domain in Resend</li>
                <li>• Try with a different email address</li>
                <li>• Check Resend dashboard for delivery logs</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
