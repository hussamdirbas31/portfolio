'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

interface ViewportAnimationProps {
  children: React.ReactNode
  id: string
  className?: string
  threshold?: number
  minHeight?: string
  onVisibilityChange?: (id: string, visible: boolean) => void
}

export default function ViewportAnimation({
  children,
  id,
  className = '',
  threshold = 0.25,
  minHeight = 'full',
  onVisibilityChange
}: ViewportAnimationProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: false,
    rootMargin: '-50px 0px -50px 0px'
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
      onVisibilityChange?.(id, true)
    } else {
      controls.start('hidden')
      onVisibilityChange?.(id, false)
    }
  }, [inView, controls, id, onVisibilityChange])

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    hidden: {
      opacity: 0,
      y: 30,
      transition: { duration: 0.3 }
    }
  }

  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={`relative ${className}`}
      style={{ minHeight }}
    >
      {children}
    </motion.section>
  )
}