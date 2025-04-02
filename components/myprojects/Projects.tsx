'use client'
import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import { projectsData } from '../../utils/data/projectsImages'
import Link from 'next/link'

type Project = {
  title: string
  imageUrl: StaticImageData
  description: string
  link: string
}

const Projects = () => {
  return (
    <section id='projects' className='relative w-full py-16 md:py-24 bg-black border-b border-[#333]'>
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          className="flex flex-col items-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            My <span className="text-[#00b4b4]">Projects</span>
          </motion.h2>
          
          <motion.div
            className="w-20 h-1 bg-[#00b4b4] rounded-full"
            initial={{ scaleX: 0, originX: 0.5 }}
            animate={{ scaleX: 1 }}
            transition={{ 
              duration: 0.8,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1]
            }}
          />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-12">
          {projectsData.map((item: Project, index: number) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: "backOut"
              }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col lg:flex-row gap-8 items-center bg-[#0a0a0a] rounded-xl border border-[#333] p-6 hover:border-[#00b4b4] transition-all duration-300">
                {/* Project Image */}
                <motion.div 
                  className="w-full lg:w-1/2 overflow-hidden rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link href={item.link} target="_blank" rel="noopener noreferrer">
                    <Image 
                      src={item.imageUrl} 
                      alt={item.title}
                      width={800}
                      height={450}
                      className="w-full h-auto object-cover rounded-lg shadow-lg"
                    />
                  </Link>
                </motion.div>

                {/* Project Content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <Link href={item.link} target="_blank" rel="noopener noreferrer">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-[#00b4b4] transition-colors duration-300">
                      {item.title}
                    </h3>
                  </Link>
                  <p className="text-[#aaa] text-lg leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <Link 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="self-start mt-4 px-6 py-2 bg-[#00b4b4] text-white rounded-lg hover:bg-[#008b8b] transition-colors duration-300"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects