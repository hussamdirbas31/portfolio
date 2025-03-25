'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'
import Sidebar from './Sidebar'

const Nav = () => {
  return (
    <motion.nav
      className="w-full bg-black border-b border-[#333] py-4 fixed top-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Sidebar Button */}
        <div className="flex items-center">
          <Sidebar />
        </div>

        {/* Logo/Center Text */}
        <motion.div
          className="text-white text-xl md:text-2xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-[#00b4b4]">P</span>ortfolio
        </motion.div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <Link 
            href="https://github.com/hussamdirbas31" 
            target="_blank"
            aria-label="GitHub"
          >
            <motion.div
              whileHover={{ y: -2 }}
              className="text-white hover:text-[#00b4b4] transition-colors"
            >
              <FiGithub size={22} />
            </motion.div>
          </Link>
          <Link 
            href="https://www.linkedin.com/in/hussam-dirbas-83a77b31b/" 
            target="_blank"
            aria-label="LinkedIn"
          >
            <motion.div
              whileHover={{ y: -2 }}
              className="text-white hover:text-[#00b4b4] transition-colors"
            >
              <FiLinkedin size={22} />
            </motion.div>
          </Link>
          <Link 
            href="https://www.instagram.com/hussam_dr31" 
            target="_blank"
            aria-label="Instagram"
          >
            <motion.div
              whileHover={{ y: -2 }}
              className="text-white hover:text-[#00b4b4] transition-colors"
            >
              <FiInstagram size={22} />
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}

export default Nav