// app/page.tsx
'use client'

import { useState } from 'react'
import ViewportAnimation from '@/components/viewportAnimation/ViewportAnimation'
import HeroSection from "@/components/hero/index"
import About from "@/components/About/About"
import Skills from "@/components/skills/Skills"
import Projects from "@/components/myprojects/Projects"
import Contact from "@/components/Contact/Contact"

export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const handleVisibilityChange = (id: string, visible: boolean) => {
    if (visible) {
      setActiveSection(id)
    } else if (activeSection === id) {
      setActiveSection(null)
    }
  }

  return (
    <main className="bg-black text-white">
      <section className="min-h-screen">
        <HeroSection />
      </section>

      {/* باقي الأقسام مع التأثير الذكي */}
      <ViewportAnimation 
        id="about"
        onVisibilityChange={handleVisibilityChange}
      >
        <About />
      </ViewportAnimation>

      <ViewportAnimation 
        id="skills"
        onVisibilityChange={handleVisibilityChange}
      >
        <Skills />
      </ViewportAnimation>

      <ViewportAnimation 
        id="projects"
        onVisibilityChange={handleVisibilityChange}
      >
        <Projects />
      </ViewportAnimation>

      <ViewportAnimation 
        id="contact"
        onVisibilityChange={handleVisibilityChange}
      >
        <Contact />
      </ViewportAnimation>
    </main>
  )
}