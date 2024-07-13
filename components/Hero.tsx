"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import image from '../public/image.jpg';
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="py-8 px-4 sm:py-16 sm:px-8 lg:py-24 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-1 lg:col-span-8 pt-10 text-center lg:text-left lg:pr-12"
        >
          <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            Hello, I'm Hussam
          </h1>
          <p className="text-[#ffffff] text-sm sm:text-base lg:text-lg mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptuous.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptuous.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptuous.
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href="/#contact"
              className="px-6 py-3 mb-4 sm:mb-0 sm:mr-4 w-full sm:w-auto rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 bg-[#6e4c2c] hover:bg-black text-white text-center"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 py-1 w-full sm:w-auto rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white text-center"
            >
              <span className="block bg-black hover:bg-[#121212] rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-1 lg:col-span-4 flex justify-center lg:justify-end"
        >
          <div className="rounded-full bg-[#181818] w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[350px] lg:h-[350px] relative">
            <Image
              src={image}
              alt="hero image"
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
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
