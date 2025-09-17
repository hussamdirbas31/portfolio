// components/scroll-restoration/ScrollRestoration.tsx
'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export default function ScrollRestoration() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Save scroll position before unloading
    const saveScrollPosition = () => {
      sessionStorage.setItem(`scrollPos-${pathname}`, window.scrollY.toString())
    }

    // Restore scroll position when component mounts
    const savedPosition = sessionStorage.getItem(`scrollPos-${pathname}`)
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition))
    }

    window.addEventListener('beforeunload', saveScrollPosition)
    
    return () => {
      window.removeEventListener('beforeunload', saveScrollPosition)
    }
  }, [pathname, searchParams])

  return null
}