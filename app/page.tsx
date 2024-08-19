'use client'

import './globals.css'
import HeroSection from "@/components/hero/HeroSection";
import Skills from '@/components/skills/Skills';
import Projects from '@/components/myprojects/Projects';
import About from "@/components/About/About";
import Contact from '@/components/Contact/Contact';

export default function Home() {
  return (
    <main className="bg-black flex min-h-screen flex-col text-white">
        <div id='hero'>      
        <HeroSection />
        </div>
        <div id='about'>
        <About />
        </div>
        <div id='skills'>
        <Skills />
        </div>
        <div id='projects'>
        <Projects />
        </div>
        <div id='contact'>
        <Contact />
        </div>
    </main>
  );
}
