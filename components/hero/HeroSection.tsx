"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import image from '@/public/image.jpeg';
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className=" py-8 px-4 sm:py-16 sm:px-8 lg:py-24 lg:px-16 h-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="col-span-1 lg:col-span-8 pt-20 text-center lg:text-left lg:pr-12"
        >
          <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            Hello, I'm Hussam Dirbas
          </h1>
           <h1 className="text-white mb-4 text-2xl sm:text-3xl lg:text-4xl font-light opacity-35">
            Frontend Developer
          </h1>      
          <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href="https://www.linkedin.com/in/hussam-dirbas-83a77b31b/"
              className="px-6 py-3 mb-4 sm:mb-0 sm:mr-4 w-full sm:w-auto rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 bg-[#00b4b4] hover:bg-black text-white text-center"
            >
              Hire Me
            </Link>
            <Link
              href="https://drive.google.com/file/d/17-zb3FFvUxxtSBQLj0tBbihyPJsAk0In/view?usp=sharing"
              className="px-1 py-1 w-full sm:w-auto rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white text-center"
            >
              <span className="block bg-black hover:bg-[#121212] rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="col-span-1 lg:col-span-4 flex justify-center lg:justify-end"
        >
          <div className="relative rounded-full bg-[#181818] w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[350px] lg:h-[350px] flex items-center justify-center">
            <Image
              src={image}
              alt="hero image"
              className="rounded-full"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;