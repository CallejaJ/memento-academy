"use client";

import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { languages } from "@/app/i18n/settings";

export function LanguageSwitcher({
  lng,
  className,
}: {
  lng: string;
  className?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (value: string) => {
    if (!pathname) return;
    const segments = pathname.split("/");
    segments[1] = value;
    const newPath = segments.join("/");
    router.push(newPath);
  };

  return (
    <div
      className={cn(
        "flex items-center gap-3 text-sm font-bold tracking-wider",
        className,
      )}
    >
      <button
        onClick={() => handleLanguageChange("es")}
        className={cn(
          "transition-colors hover:text-white p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-md",
          lng === "es"
            ? "text-cyan-400 bg-cyan-500/10"
            : "text-slate-400 hover:bg-slate-800/50",
        )}
        aria-label="Switch to Spanish"
      >
        SPA
      </button>
      <span className="text-slate-700 h-4 w-[1px] bg-slate-700 block"></span>
      <button
        onClick={() => handleLanguageChange("en")}
        className={cn(
          "transition-colors hover:text-white p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-md",
          lng === "en"
            ? "text-cyan-400 bg-cyan-500/10"
            : "text-slate-400 hover:bg-slate-800/50",
        )}
        aria-label="Switch to English"
      >
        ENG
      </button>
    </div>
  );
}
