"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Dashboard Error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-4 text-center">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent mb-4">
        Something went wrong!
      </h2>
      <p className="text-slate-400 mb-6 max-w-md">
        {error.message || "An unexpected error occurred."}
      </p>
      <div className="bg-slate-900 p-4 rounded-lg border border-slate-800 mb-6 w-full max-w-lg overflow-auto text-left">
        <code className="text-xs text-red-400 font-mono">{error.stack}</code>
      </div>
      <Button
        onClick={() => reset()}
        className="bg-gradient-to-r from-cyan-500 to-teal-500"
      >
        Try again
      </Button>
    </div>
  );
}
