'use client'
import { projectsData } from '@/utils/data/data'
import ProjectCard from './ProjectCard'
import BackgroundElements from './BackgroundElements'
import SectionHeader from './SectionHeader'
import DecorativeElement from './DecorativeElement'

const Projects = () => {
console.log("renderd")
  return (
    <section id="projects" className="w-full py-24 bg-black relative ">
      <BackgroundElements />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <DecorativeElement />
      </div>
    </section>
  )
}

export default Projects