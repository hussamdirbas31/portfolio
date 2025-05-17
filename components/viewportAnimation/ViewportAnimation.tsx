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
  const [ref, inView, entry] = useInView({
    threshold,
    triggerOnce: true, 
    rootMargin: '-50px 0px -50px 0px'
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
      onVisibilityChange?.(id, true)
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
      y: 20,
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
      onAnimationComplete={() => {
        if (inView) {
          controls.set('visible')
        }
      }}
    >
      {children}
    </motion.section>
  )
}