"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { useAuthModal } from "@/contexts/auth-modal-context"
import { useAuth } from "@/contexts/auth-context"
import { AuthModal } from "@/components/auth/auth-modal"

export function MainNav() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { isOpen, mode, openLogin, openSignup, close } = useAuthModal()
  const { user, signOut } = useAuth()

  const routes = [
    {
      href: "#features",
      label: "Mission",
      active: false,
    },
    {
      href: "#community",
      label: "Community",
      active: false,
    },
    {
      href: "#start",
      label: "Free Courses",
      active: false,
    },
  ]

  const handleLoginClick = () => {
    setMobileMenuOpen(false)
    openLogin()
  }

  const handleSignupClick = () => {
    setMobileMenuOpen(false)
    openSignup()
  }

  return (
    <>
      <header className="border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50 transition-all duration-300">
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
                    style={{ height: "auto" }}
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
              <div className="hidden md:flex items-center space-x-4">
                {user ? (
                  <>
                    <Button asChild variant="ghost" className="text-slate-300 hover:text-white">
                      <Link href="/dashboard">Dashboard</Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="border-slate-700 text-slate-300 hover:text-white"
                      onClick={() => signOut()}
                    >
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="ghost"
                      className="text-slate-300 hover:text-white"
                      onClick={handleLoginClick}
                    >
                      Log In
                    </Button>
                    <Button
                      className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white border-0 shadow-lg shadow-cyan-500/20"
                      onClick={handleSignupClick}
                    >
                      Join Free
                    </Button>
                  </>
                )}
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
                <div className="pt-4 border-t border-slate-800 space-y-3">
                  {user ? (
                    <>
                      <Button asChild variant="outline" className="w-full justify-center border-slate-700 text-slate-300">
                        <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                          Dashboard
                        </Link>
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-center text-slate-300"
                        onClick={() => {
                          signOut()
                          setMobileMenuOpen(false)
                        }}
                      >
                        Sign Out
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        variant="outline"
                        className="w-full justify-center border-slate-700 text-slate-300"
                        onClick={handleLoginClick}
                      >
                        Log In
                      </Button>
                      <Button
                        className="w-full justify-center bg-gradient-to-r from-cyan-500 to-teal-500 border-0"
                        onClick={handleSignupClick}
                      >
                        Join Academy Free
                      </Button>
                    </>
                  )}
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Auth Modal */}
      <AuthModal isOpen={isOpen} onClose={close} defaultMode={mode} />
    </>
  )
}
