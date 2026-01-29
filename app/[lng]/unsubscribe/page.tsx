"use client";

import type React from "react";

import { useState, useTransition, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, AlertCircle } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function UnsubscribePage() {
  const searchParams = useSearchParams();
  const emailFromUrl = searchParams.get("email") || "";
  const [email, setEmail] = useState(emailFromUrl);
  const [isPending, startTransition] = useTransition();
  const [response, setResponse] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  // Update email when URL param changes
  useEffect(() => {
    if (emailFromUrl) {
      setEmail(emailFromUrl);
    }
  }, [emailFromUrl]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    startTransition(async () => {
      try {
        // Find the subscriber
        const { data: subscriber, error: findError } = await supabase
          .from("newsletter_subscribers")
          .select("id")
          .eq("email", email)
          .single();

        if (findError || !subscriber) {
          setResponse({
            success: false,
            message: "Email not found in our subscription list.",
          });
          return;
        }

        // Update the subscriber to inactive
        const { error: updateError } = await supabase
          .from("newsletter_subscribers")
          .update({ is_active: false })
          .eq("id", subscriber.id);

        if (updateError) throw updateError;

        setResponse({
          success: true,
          message: "You've been successfully unsubscribed from our newsletter.",
        });
        setEmail("");
      } catch (error: any) {
        setResponse({
          success: false,
          message: error.message || "Failed to unsubscribe. Please try again.",
        });
      }
    });
  };

  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Unsubscribe from Newsletter
      </h1>

      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Unsubscribe</CardTitle>
          <CardDescription>
            We're sorry to see you go. Enter your email address to unsubscribe
            from our newsletter.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {response && (
            <Alert
              variant={response.success ? "default" : "destructive"}
              className={
                response.success
                  ? "mb-4 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 border-green-200 dark:border-green-900"
                  : "mb-4"
              }
            >
              {response.success ? (
                <CheckCircle className="h-4 w-4" />
              ) : (
                <AlertCircle className="h-4 w-4" />
              )}
              <AlertDescription>{response.message}</AlertDescription>
            </Alert>
          )}

          {(!response || !response.success) && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? "Processing..." : "Unsubscribe"}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
