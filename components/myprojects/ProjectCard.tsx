'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { StaticImageData } from 'next/image'

interface Project {
  title: string
  description: string
  imageUrl: StaticImageData
  link: string
  tech: string[]
}

interface ProjectCardProps {
  project: Project
  index: number
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "backOut"
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative"
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
    >
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-[#00b4b4] opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-500"></div>
      </div>
      
      <div className="relative h-full bg-gradient-to-b from-[#111] to-[#0a0a0a] rounded-xl border border-[#252525] group-hover:border-[#00b4b4]/50 transition-all duration-300 shadow-lg shadow-black/50 overflow-hidden">
        <Link href={project.link} target="_blank" className="block overflow-hidden h-60 md:h-64 lg:h-72 relative">
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
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
          </motion.div>
        </Link>

        <div className="p-6 relative">
          <motion.div 
            className="flex flex-wrap gap-2 mb-4 -mt-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {project.tech.map((tech, i) => (
              <motion.span 
                key={i}
                className="text-xs px-3 py-1 bg-[#00b4b4]/10 text-[#00e6e6] rounded-full border border-[#00b4b4]/20 backdrop-blur-sm"
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
            className="text-xl font-bold text-white mb-3 group-hover:text-[#00d8d8] transition-colors flex items-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.span 
              className="inline-block mr-2 text-[#00b4b4] mt-1"
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
            className="text-[#d0d0d0] text-sm mb-6 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {project.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Link
              href={project.link}
              target="_blank"
              className="relative inline-flex items-center justify-center px-5 py-2.5 overflow-hidden group rounded-lg"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#00b4b4] to-[#008c8c] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute left-0 w-0 h-full bg-[#00b4b4] group-hover:w-full transition-all duration-300 ease-out"></span>
              <span className="relative z-10 flex items-center text-sm font-medium text-white group-hover:text-white transition-colors duration-300">
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
  )
}

export default ProjectCard