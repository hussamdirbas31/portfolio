'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ToggleButton from './ToggleButton';
import Links from './Links';
import { IoMdClose } from "react-icons/io";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative ">

      <ToggleButton toggleSidebar={toggleSidebar} />

      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 border border-l-gray-600 border-l-1 border-l-transparent border-y-transparent h-full w-64 bg-black shadow-lg z-50"
      >
        <button onClick={toggleSidebar} className="p-2 text-black bg-white rounded-full absolute top-4 z-50 left-[40%]">
          <IoMdClose size={20} />
        </button>
        <Links />
      </motion.div>
    </div>
  );
};

export default Sidebar;