'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'
import Sidebar from './Sidebar'
import Link from 'next/link'

const Nav = () => {
  return (
    <motion.nav
      className="w-full bg-black border-b border-[#333] py-3 sm:py-4 fixed top-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center relative">
        {/* Sidebar Button - Left-aligned */}
        <div className="flex-1 flex items-center justify-start">
          <Sidebar />
        </div>

        {/* Centered Logo Text */}
        <motion.div
          className="flex-1 flex items-center justify-center absolute left-0 right-0 mx-auto w-fit"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-white text-xl sm:text-2xl font-bold">
            <span className="text-[#00b4b4]">P</span>ortfolio
          </span>
        </motion.div>

        {/* Social Links - Right-aligned */}
        <div className="flex-1 flex items-center justify-end gap-3 sm:gap-4">
          <Link 
            href="https://github.com/hussamdirbas31" 
            target="_blank"
            aria-label="GitHub"
            className="p-1"
          >
            <motion.div
              whileHover={{ y: -2 }}
              className="text-white hover:text-[#00b4b4] transition-colors"
            >
              <FiGithub size={20} className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.div>
          </Link>
          <Link 
            href="https://www.linkedin.com/in/hussam-dirbas-83a77b31b/" 
            target="_blank"
            aria-label="LinkedIn"
            className="p-1"
          >
            <motion.div
              whileHover={{ y: -2 }}
              className="text-white hover:text-[#00b4b4] transition-colors"
            >
              <FiLinkedin size={20} className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.div>
          </Link>
          <Link 
            href="https://www.instagram.com/hussam_dr31" 
            target="_blank"
            aria-label="Instagram"
            className="p-1"
          >
            <motion.div
              whileHover={{ y: -2 }}
              className="text-white hover:text-[#00b4b4] transition-colors"
            >
              <FiInstagram size={20} className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}

export default Nav