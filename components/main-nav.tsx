"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function MainNav() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/auth/login",
      label: "Login",
      active: pathname === "/auth/login",
    },
    {
      href: "/auth/signup",
      label: "Sign Up",
      active: pathname === "/auth/signup",
    },
    {
      href: "/admin/dashboard",
      label: "Admin",
      active: pathname.startsWith("/admin"),
    },
  ]

  return (
    <header className="border-b border-slate-800 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <Image
                  src="/memento-academy-logo.png"
                  alt="Memento Academy"
                  width={40}
                  height={40}
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <span className="text-xl font-bold text-white transition-colors duration-300">
                Memento Academy
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium",
                  route.active && "text-cyan-400",
                )}
              >
                {route.label}
              </Link>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>

            {/* Quick access buttons for desktop */}
            <div className="hidden md:flex items-center space-x-2">
              <Button asChild variant="ghost">
                <Link href="/test-email">Test Email</Link>
              </Button>
              <Button
                asChild
                className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600"
              >
                <Link href="/admin/dashboard">Dashboard</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800">
            <nav className="flex flex-col space-y-4">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium px-2 py-1",
                    route.active && "text-cyan-400",
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {route.label}
                </Link>
              ))}

              {/* Mobile quick access */}
              <div className="pt-4 border-t border-slate-800 space-y-2">
                <Button asChild variant="ghost" className="w-full justify-start">
                  <Link href="/test-email" onClick={() => setMobileMenuOpen(false)}>
                    Test Email
                  </Link>
                </Button>
                <Button asChild className="w-full justify-start bg-gradient-to-r from-cyan-500 to-teal-500">
                  <Link href="/admin/dashboard" onClick={() => setMobileMenuOpen(false)}>
                    Admin Dashboard
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
