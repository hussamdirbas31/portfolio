'use client'
import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import { projectsData } from '../../utils/data/projectsImages'
import Link from 'next/link'
import { useRef } from 'react'

type Project = {
  title: string
  imageUrl: StaticImageData
  description: string
  link: string
  technologies?: string[]
}

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section 
      id='projects' 
      ref={sectionRef}
      className='relative w-full py-20 md:py-28 bg-black border-b border-[#333] overflow-hidden'
    >
      {/* تأثير التوهج الخلفي */}
      <motion.div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, #00b4b4 0%, transparent 70%)'
        }}
        animate={{
          opacity: [0.02, 0.05, 0.02],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* العنوان الرئيسي */}
        <motion.div
          className="flex flex-col items-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            My <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#00b4b4] to-[#008c8c]">
              Projects
            </span>
          </motion.h2>
          
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00b4b4] to-transparent rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ 
              duration: 1,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1]
            }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* شبكة المشاريع */}
        <div className="grid grid-cols-1 gap-14">
          {projectsData.map((item: Project, index: number) => (
            <motion.div
              key={item.title}
              className="group relative"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                ease: "backOut"
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
            >
              {/* تأثير الإضاءة عند hover */}
              <motion.div 
                className="absolute inset-0 bg-[#00b4b4] opacity-0 group-hover:opacity-[0.03] rounded-xl transition-opacity duration-300 pointer-events-none"
              />

              <div className="flex flex-col lg:flex-row gap-8 items-center bg-gradient-to-b from-[#111] to-[#0a0a0a] rounded-xl border border-[#333] p-6 hover:border-[#00b4b4] transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(0,180,180,0.1)]">
                {/* صورة المشروع */}
                <motion.div 
                  className="w-full lg:w-1/2 overflow-hidden rounded-lg relative"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Link href={item.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                    <Image 
                      src={item.imageUrl} 
                      alt={item.title}
                      width={800}
                      height={450}
                      className="w-full h-auto object-cover rounded-lg shadow-lg group-hover:shadow-[0_0_20px_rgba(0,180,180,0.3)] transition-all duration-500"
                      placeholder="blur"
                    />
                    {/* تأثير overlay */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </Link>
                </motion.div>

                {/* محتوى المشروع */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center p-4">
                  <Link href={item.link} target="_blank" rel="noopener noreferrer">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#00b4b4] transition-colors duration-300">
                      {item.title}
                    </h3>
                  </Link>
                  <p className="text-[#ddd] text-lg leading-relaxed mb-6">
                    {item.description}
                  </p>
                  
                  {/* تقنيات مستخدمة */}
                  {item.technologies && (
                    <div className="flex flex-wrap gap-3 mb-6">
                      {item.technologies.map(tech => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-[#0a0a0a] border border-[#333] text-[#00b4b4] text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <Link 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="relative self-start mt-2 px-6 py-3 bg-gradient-to-r from-[#00b4b4] to-[#008b8b] text-white rounded-lg overflow-hidden group-hover:shadow-[0_0_15px_rgba(0,180,180,0.5)] transition-all duration-300"
                  >
                    <span className="relative z-10">View Project</span>
                    <motion.div 
                      className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00b4b4_0%,transparent_80%)] opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                      initial={{ scale: 0.5 }}
                      animate={{ scale: 2 }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* نمط الشبكة الخلفية */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[length:40px_40px] bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)]" />
      </div>
    </section>
  )
}

export default Projects