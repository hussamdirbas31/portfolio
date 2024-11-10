'use client';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { projectsData } from '../../utils/data/projectsImages';
import Link from 'next/link';

type Project = {
  title: string;
  imageUrl: StaticImageData; 
  description: string;
  link: string;
};

const Projects = () => {
  return (
    <div id='projects' className="border-b-[1px] border-b-gray-600 py-8 px-4 sm:py-16 sm:px-8 lg:py-24 lg:px-16">
      <motion.div
        className="flex justify-center sm:justify-start "
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.span
          className="bg-[#00b4b4] text-white py-4 px-5 mb-5 md:w-[25rem] lg:w-[25rem] text-2xl sm:text-4xl rounded-md"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Projects
        </motion.span>
      </motion.div>

      <div className="space-y-8">
        {projectsData.map((item: Project, index: number) => (
          <div key={index} className="flex flex-col md:flex-row md:space-x-8 p-6 justify-center items-center md:items-start">
            <motion.div
              className="p-4 border-[2px] border-gray-600 w-full md:w-1/2"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.6 }}
            >
              <Link href={item.link}>
                <Image src={item.imageUrl} alt={item.title} width={700} height={700} className="w-full h-auto object-cover" />
              </Link>
            </motion.div>
            <motion.div
              className="pt-4 md:pt-12 flex flex-col justify-center w-full md:w-1/2 text-center md:text-left"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.6 }}
            >
              <Link href={item.link}>
                <h2 className=" text-sm md:text-xl  font-bold text-[#00b4b47c]">{item.title}:</h2>
              </Link>
              <p className=" opacity-20 mt-2 text-xs md:text-xl ">{item.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
