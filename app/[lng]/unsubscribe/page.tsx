"use client";

import type React from "react";

import { useState, useTransition, useEffect, Suspense } from "react";
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
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { unsubscribeFromNewsletter } from "@/actions/newsletter";

function UnsubscribeForm() {
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
      const result = await unsubscribeFromNewsletter(email);
      setResponse(result);
      if (result.success) {
        setEmail("");
      }
    });
  };

  return (
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
  );
}

function LoadingCard() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Unsubscribe</CardTitle>
        <CardDescription>Loading...</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center py-8">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </CardContent>
    </Card>
  );
}

export default function UnsubscribePage() {
  return (
    <div
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-16 overflow-hidden bg-black"
      style={{
        backgroundImage: "url('/images/wallpapers/quiz-bg-dark.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content Overlay */}
      <div className="relative z-10 w-full flex flex-col items-center max-w-md">
        <h1 className="text-3xl font-bold mb-8 text-center text-white drop-shadow-lg tracking-tight">
          Unsubscribe from Newsletter
        </h1>

        <div className="w-full shadow-2xl rounded-xl border border-white/10 bg-black/40 backdrop-blur-md">
          <Suspense fallback={<LoadingCard />}>
            <UnsubscribeForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
