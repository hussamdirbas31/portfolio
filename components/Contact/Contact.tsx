'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';

const Contact = () => {
  const email = 'hussamdirbas11@gmail.com';

  return (
    <motion.div
    id='contact' 
      className="flex justify-center items-center h-[12rem] md:h-[20rem] w-full py-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.div 
        className="w-full px-4 sm:px-8 md:px-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h1 
          className="text-center font-bold text-2xl md:pr-14 lg:pr-14 sm:text-3xl md:text-4xl text-[#00b4b465]"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
        >
          Contact
        </motion.h1>
        
        <div className="flex justify-center mt-6 md:mr-14 lg:mr-14 outline-none">
          <Link href={`mailto:${email}`} passHref>
            <motion.p
              className="text-center w-full max-w-[20rem] p-2 sm:p-3 md:p-4 outline-none  bg-[#00b4b428] text-[#00b4b4d7] rounded-xl opacity-40 hover:opacity-100 transition-opacity cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
            >
              {email}
            </motion.p>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Contact;
