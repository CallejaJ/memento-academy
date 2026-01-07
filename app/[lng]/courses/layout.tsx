import type React from "react";
import { SiteFooter } from "@/components/site-footer";

export default async function CoursesLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">{children}</div>
      <SiteFooter lng={lng} />
    </div>
  );
}
