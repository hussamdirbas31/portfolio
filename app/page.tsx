// app/page.tsx
'use client'

import { useState } from 'react'
import ViewportAnimation from '@/components/viewportAnimation/ViewportAnimation'
import HeroSection from "@/components/hero/HeroSection"
import About from "@/components/About/About"
import Skills from "@/components/skills/Skills"
import Projects from "@/components/myprojects/Projects"
import Contact from "@/components/Contact/Contact"

export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const handleSectionChange = (id: string | null) => {
    setActiveSection(id)
  }

  return (
    <main className="bg-black text-white">
      {/* الهيرو - دائماً مرئي */}
      <section className="min-h-screen">
        <HeroSection />
      </section>

      {/* باقي الأقسام مع التأثير الذكي */}
      <ViewportAnimation 
        id="about" 
        onSectionChange={handleSectionChange}
      >
        <About />
      </ViewportAnimation>

      <ViewportAnimation 
        id="skills" 
        onSectionChange={handleSectionChange}
      >
        <Skills />
      </ViewportAnimation>

      <ViewportAnimation 
        id="projects" 
        onSectionChange={handleSectionChange}
      >
        <Projects />
      </ViewportAnimation>

      <ViewportAnimation 
        id="contact" 
        onSectionChange={handleSectionChange}
      >
        <Contact />
      </ViewportAnimation>
    </main>
  )
}