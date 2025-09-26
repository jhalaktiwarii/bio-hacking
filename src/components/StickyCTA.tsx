'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { X, ChevronRight } from 'lucide-react'

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    // Show the CTA after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleDismiss = () => {
    setIsDismissed(true)
    setIsVisible(false)
  }

  // Don't render if dismissed or not visible
  if (isDismissed || !isVisible) {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-in slide-in-from-bottom-2 duration-500">
      <div className="relative">
        {/* Dismiss button */}
        <button
          onClick={handleDismiss}
          className="absolute -top-2 -right-2 w-6 h-6 bg-slate-600 hover:bg-slate-500 rounded-full flex items-center justify-center text-white text-xs transition-colors duration-200 z-10"
          aria-label="Dismiss"
        >
          <X size={12} />
        </button>

        {/* Main CTA Button */}
        <Button
          asChild
          size="lg"
          className="rounded-full bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-accent/90 hover:to-brand-primary/90 text-white font-semibold px-6 py-3 h-12 min-h-[3rem] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <Link href="/select-profile" className="flex items-center gap-2">
            Book Now
            <ChevronRight className="w-4 h-4" />
          </Link>
        </Button>

        {/* Pulse animation ring */}
        <div className="absolute inset-0 rounded-full bg-brand-accent/30 animate-ping"></div>
        <div className="absolute inset-0 rounded-full bg-brand-accent/20 animate-ping animation-delay-1000"></div>
      </div>
    </div>
  )
}
