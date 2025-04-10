// app/page.tsx
'use client'

import { useState } from 'react'
import ViewportAnimation from '@/components/viewportAnimation/ViewportAnimation'
import HeroSection from "@/components/hero/index"
import About from "@/components/About/About"
import Skills from "@/components/skills/Skills"
import Projects from "@/components/myprojects/Projects"
import Contact from "@/components/Contact/Contact"

const sections = [
  { id: 'about', component: <About /> },
  { id: 'skills', component: <Skills /> },
  { id: 'projects', component: <Projects /> },
  { id: 'contact', component: <Contact /> },
]

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
      {sections.map(({ id, component }) => (
        <ViewportAnimation 
          key={id}
          id={id}
          onVisibilityChange={handleVisibilityChange}
        >
          {component}
        </ViewportAnimation>
      ))}
    </main>
  )
}
