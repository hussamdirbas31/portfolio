'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { projectsData } from '../../utils/data/projectsImages'

const Projects = () => {
  return (
    <section id="projects" className="w-full py-24 bg-black relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-[#00b4b4] opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-[#008c8c] opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header with refined animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="relative inline-block">
            <span className=' text-white'>My</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d8d8] via-[#00b4b4] to-[#008c8c]">
                 Projects
              </span>
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#00d8d8] via-[#00b4b4] to-[#008c8c] rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-[#e0e0e0] max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
          >
            Explore my portfolio of innovative solutions and creative implementations
          </motion.p>
        </motion.div>

        {/* Enhanced projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
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
              {/* Glow effect wrapper */}
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-[#00b4b4] opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-500"></div>
              </div>
              
              {/* Project card */}
              <div className="relative h-full bg-gradient-to-b from-[#111] to-[#0a0a0a] rounded-xl border border-[#252525] group-hover:border-[#00b4b4]/50 transition-all duration-300 shadow-lg shadow-black/50 overflow-hidden">
                {/* Image container with parallax effect */}
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
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                  </motion.div>
                </Link>

                {/* Card content */}
                <div className="p-6 relative">
                  {/* Tech stack tags */}
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
                  
                  {/* Project title with animated bullet */}
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

                  {/* Project description */}
                  <motion.p 
                    className="text-[#d0d0d0] text-sm mb-6 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {project.description}
                  </motion.p>

                  {/* Animated action button */}
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
          ))}
        </div>

        {/* Animated decorative element */}
        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block w-24 h-1 bg-gradient-to-r from-[#00b4b4] to-[#008c8c] rounded-full"
            animate={{
              scaleX: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Projects