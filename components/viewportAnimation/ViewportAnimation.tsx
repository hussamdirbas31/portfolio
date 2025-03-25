// components/viewportAnimation/ViewportAnimation.tsx
'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

interface ViewportAnimationProps {
  children: React.ReactNode
  id: string
  onSectionChange?: (id: string | null) => void
  className?: string
  threshold?: number
}

export default function ViewportAnimation({
  children,
  id,
  onSectionChange,
  className = '',
  threshold = 0.4
}: ViewportAnimationProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: false
  })

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
      })
      onSectionChange?.(id)
    } else {
      controls.start({
        opacity: 0,
        y: 30,
        transition: { duration: 0.3 }
      })
    }
  }, [inView, controls, id, onSectionChange])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className={`${className} `}
    >
      {children}
    </motion.div>
  )
}