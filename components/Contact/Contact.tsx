'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Contact = () => {
  return (
    <section id='contact' className='relative w-full py-16 md:py-24 bg-black border-b border-[#333]'>
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          className="flex flex-col items-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-4 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Get In <span className="text-[#00b4b4]">Touch</span>
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

        {/* Contact Content */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-[#aaa] text-lg md:text-xl text-center max-w-2xl mb-10">
            Have a project in mind or want to discuss potential opportunities? 
            Feel free to reach out!
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Link
              href="mailto:hussamdirbas11@gmail.com"
              className="px-8 py-4 bg-[#00b4b4] text-white text-lg font-medium rounded-lg hover:bg-[#008b8b] transition-colors duration-300 shadow-lg shadow-[#00b4b4]/20"
              aria-label="Send email to Hussam Dirbas"
            >
              hussamdirbas11@gmail.com
            </Link>
          </motion.div>

          {/* Social Links (optional) */}
          <div className="flex gap-6 mt-12">
            {/* Add your social media links here */}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact