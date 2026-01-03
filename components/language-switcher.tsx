'use client'

import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { languages } from '@/app/i18n/settings'

export function LanguageSwitcher({ lng }: { lng: string }) {
  const router = useRouter()
  const pathname = usePathname()

  const handleLanguageChange = (value: string) => {
    if (!pathname) return
    const segments = pathname.split('/')
    segments[1] = value
    const newPath = segments.join('/')
    router.push(newPath)
  }

  return (
    <div className="flex items-center gap-2 text-xs font-bold tracking-wider">
      <button
        onClick={() => handleLanguageChange('es')}
        className={cn(
          "transition-colors hover:text-white",
          lng === 'es' ? "text-cyan-400" : "text-slate-400"
        )}
      >
        SPA
      </button>
      <span className="text-slate-700">|</span>
      <button
        onClick={() => handleLanguageChange('en')}
        className={cn(
          "transition-colors hover:text-white",
          lng === 'en' ? "text-cyan-400" : "text-slate-400"
        )}
      >
        ENG
      </button>
    </div>
  )
}
