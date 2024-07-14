'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import image2 from '../public/facebook.png';
import image3 from '../public/github.png';
import image4 from '../public/instagram.png';
import Sidebar from './Sidebar';

const Nav: React.FC = () => {
  return (
    <section className='bg-black flex flex-row z-40 justify-between px-[10%] py-6 sticky top-0 w-full border-b border-x-transparent border-t-transparent'>
      <Sidebar />
      <span className='text-white text-2xl font-bold'>Portfolio</span>
      <div className='flex flex-row bg-white rounded-3xl px-2'>
        <Link href="https://www.facebook.com/hussam.aldeendirbas/" target="_blank" rel="noopener noreferrer">
          <Image
            src={image2}
            alt="Facebook"
            width={30}
            height={30}
          />
        </Link>
        <Link href="https://github.com/hussamdirbas31" target="_blank" rel="noopener noreferrer">
          <Image
            src={image3}
            alt="GitHub"
            width={30}
            height={30}
          />
        </Link>
        <Link href="https://www.instagram.com/hussam_dr31" target="_blank" rel="noopener noreferrer">
          <Image
            src={image4}
            alt="Instagram"
            width={30}
            height={30}
          />
        </Link>
      </div>
    </section>
  );
};

export default Nav;
