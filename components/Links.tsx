'use client'
import React from 'react';
import Link from 'next/link';

const Links: React.FC = () => {
  return (
    <nav className=" grid grid-cols-1 py-20 relative left-[14%]  text-white ">
      <Link href="/page1" className='py-5 relative  left-14 text-2xl'>
        Page 1
      </Link>
      <Link href="/page2" className='py-5 relative left-14 text-2xl'>
        Page 2
      </Link>
      <Link href="/page3" className='py-5 relative left-14 text-2xl'>
        Page 3
      </Link>
    </nav>
  );
};

export default Links;
