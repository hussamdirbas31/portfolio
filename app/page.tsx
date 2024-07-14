import Contacts from "@/components/Contacts";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-[200rem] flex min-h-screen flex-col text-white bg-[#000000]">
    
      <Hero/>
      <Skills/>
      <Projects/>
      <Contacts/>
        </main>
  );
}
