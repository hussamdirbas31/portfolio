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
  technologies?: string[] // جعلها اختيارية بإضافة ?
}

const Projects = () => {
  return (
    <section id='projects' className='w-full py-16 bg-black'>
      <div className="container mx-auto px-4">
        
        {/* العنوان البسيط مع لمسة إبداعية */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="text-[#00b4b4]">Projects</span> Portfolio
          </h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-[#00b4b4] to-[#008c8c] rounded-full" />
        </div>

        {/* شبكة مشاريع بسيطة لكن أنيقة */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project: Project, index: number) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg border border-[#333] hover:border-[#00b4b4] transition-all duration-300">
                {/* صورة المشروع */}
                <Link href={project.link} target="_blank">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>

                {/* محتوى المشروع */}
                <div className="p-5 bg-[#111]">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00b4b4] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#ddd] text-sm mb-4">{project.description}</p>
                  
                  {/* التقنيات المستخدمة - مع التحقق من وجودها */}
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech: string) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 text-xs bg-[#0a0a0a] border border-[#333] text-[#00b4b4] rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* زر المشروع */}
                  <Link
                    href={project.link}
                    target="_blank"
                    className="inline-block px-4 py-2 text-sm bg-gradient-to-r from-[#00b4b4] to-[#008c8c] text-white rounded hover:shadow-[0_0_15px_rgba(0,180,180,0.5)] transition-all"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* فاصل زخرفي بسيط */}
        <div className="mt-16 text-center">
          <div className="inline-block w-10 h-1 bg-[#00b4b4] rounded-full" />
          <div className="inline-block w-3 h-3 mx-2 bg-[#00b4b4] rounded-full" />
          <div className="inline-block w-10 h-1 bg-[#00b4b4] rounded-full" />
        </div>
      </div>
    </section>
  )
}

export default Projects