import { LoginForm } from "@/components/auth/login-form";
import { getSession } from "@/lib/server-auth";
import { redirect } from "next/navigation";

export default async function LoginPage({
  params,
}: {
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;
  const session = await getSession();

  // Redirect to dashboard if already logged in
  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Welcome Back to Memento Academy
      </h1>
      <LoginForm lng={lng} />
    </div>
  );
}
