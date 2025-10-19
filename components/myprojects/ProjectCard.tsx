'use client'
import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import VpnModal from './UseVpnModal'

interface Project {
  title: string
  description: string
  imageUrl: string | StaticImageData
  link: string
  tech: string[]
}

interface ProjectCardProps {
  project: Project
  index: number
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [showVpnModal, setShowVpnModal] = useState(false)
  
  const handleProjectClick = (e: React.MouseEvent, link: string) => {
    if (project.title === "Ecommerce") {
      e.preventDefault()
      setShowVpnModal(true)
    }
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: index * 0.1,
          ease: "backOut"
        }}
        viewport={{ once: true, margin: "-20px" }}
        className="group relative w-full"
        whileHover={{ 
          y: -4,
          transition: { duration: 0.3 }
        }}
      >
        <div className="absolute inset-0 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-[#00b4b4] opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-500"></div>
        </div>
        
        <div className="relative h-full bg-gradient-to-b from-[#111] to-[#0a0a0a] rounded-xl border border-[#252525] group-hover:border-[#00b4b4]/50 transition-all duration-300 shadow-lg shadow-black/50 overflow-hidden flex flex-col">
          <Link 
            href={project.link} 
            target="_blank" 
            onClick={(e) => handleProjectClick(e, project.link)}
            className="block overflow-hidden h-40 sm:h-48 md:h-56 lg:h-64 relative flex-shrink-0"
          >
            <motion.div
              className="w-full h-full relative"
              whileHover={{
                scale: 1.05,
              }}
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ filter: 'brightness(0.85)' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index < 3}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
            </motion.div>
          </Link>

          <div className="p-4 sm:p-5 md:p-6 flex-grow flex flex-col">
            <motion.div 
              className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 -mt-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, margin: "-20px" }}
            >
              {project.tech.map((tech, i) => (
                <motion.span 
                  key={i}
                  className="text-[0.6rem] sm:text-xs px-2 py-1 bg-[#00b4b4]/10 text-[#00e6e6] rounded-full border border-[#00b4b4]/20 backdrop-blur-sm"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: 'rgba(0, 180, 180, 0.2)'
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
            
            <motion.h3 
              className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 group-hover:text-[#00d8d8] transition-colors flex items-start"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, margin: "-20px" }}
            >
              <motion.span 
                className="inline-block mr-2 text-[#00b4b4] mt-0.5 text-sm"
                animate={{
                  x: [0, 2, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              >
                ▹
              </motion.span>
              {project.title}
            </motion.h3>

            <motion.p 
              className="text-[#d0d0d0] text-xs sm:text-sm mb-4 leading-relaxed flex-grow"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true, margin: "-20px" }}
            >
              {project.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true, margin: "-20px" }}
              className="relative mt-auto"
            >
              <Link
                href={project.link}
                target="_blank"
                onClick={(e) => handleProjectClick(e, project.link)}
                className="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden group rounded-lg w-full text-center"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#00b4b4] to-[#008c8c] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute left-0 w-0 h-full bg-[#00b4b4] group-hover:w-full transition-all duration-300 ease-out"></span>
                <span className="relative z-10 flex items-center justify-center text-xs sm:text-sm font-medium text-white group-hover:text-white transition-colors duration-300 w-full">
                  <span>View Project</span>
                  <motion.span 
                    className="ml-2"
                    animate={{
                      x: [0, 4, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: 1
                    }}
                  >
                    →
                  </motion.span>
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* VPN Modal for Ecommerce project */}
      {project.title === "Ecommerce" && (
        <VpnModal 
          isOpen={showVpnModal} 
          onClose={() => setShowVpnModal(false)} 
          redirectUrl={project.link}
        />
      )}
    </>
  )
}

export default ProjectCard