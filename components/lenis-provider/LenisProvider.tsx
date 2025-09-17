// components/lenis-provider/LenisProvider.tsx
'use client'

import { ReactLenis } from '@studio-freight/react-lenis'
import { useRef } from 'react'

interface LenisProviderProps {
  children: React.ReactNode
}

export default function LenisProvider({ children }: LenisProviderProps) {
  const lenisRef = useRef(null)

  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{
        lerp: 0.1,
        duration: 1.5,
        smoothWheel: true, // Changed from smoothTouch to smoothWheel
        wheelMultiplier: 1,
        touchMultiplier: 2,
      }}
    >
      {children}
    </ReactLenis>
  )
}