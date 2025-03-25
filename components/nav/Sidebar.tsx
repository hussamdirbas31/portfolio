'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx'
import Links from './Links'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="p-2 text-white hover:text-[#00b4b4] transition-colors"
        aria-label="Open menu"
      >
        <RxHamburgerMenu size={22} />
      </button>

      {/* Sidebar */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 h-screen w-64 bg-[#0a0a0a] border-r border-[#333] z-50 shadow-xl"
      >
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 text-white hover:text-[#00b4b4] transition-colors"
          aria-label="Close menu"
        >
          <RxCross1 size={22} />
        </button>

        {/* Sidebar Content */}
        <div className="h-full flex flex-col pt-16 px-6">
          <Links />
        </div>
      </motion.div>

      {/* Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black z-40"
        />
      )}
    </div>
  )
}

export default Sidebar