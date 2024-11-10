import React from 'react';
import Link from 'next/link';

const Links = () => {
  const style = ''
  return (
    <div className=" border-l-gray-600 border-l-1 flex flex-col justify-center items-center relative top-[5rem] right-2 text-white space-y-12 p-4">
      <Link href="#home">
      <p className="hover:text-gray-300 py-1 bg-[#00b4b4] w-[10rem] flex rounded-xl justify-center">Home</p>
      </Link>
      <Link href="#about">
      <p className="hover:text-gray-300 py-1 bg-[#00b4b4] w-[10rem] flex rounded-xl justify-center">About</p>
      </Link>
      <Link href="#skills">
      <p className="hover:text-gray-300 py-1 bg-[#00b4b4] w-[10rem] flex rounded-xl justify-center">Skills</p>
      </Link>
      <Link href="#projects">
      <p className='hover:text-gray-300 py-1 bg-[#00b4b4] w-[10rem] flex rounded-xl justify-center'>Projects</p>
      </Link>
      <Link href="#contact">
      <p className="hover:text-gray-300 py-1 bg-[#00b4b4] w-[10rem] flex rounded-xl justify-center">Contact</p>
      </Link>
    </div>
  );
};

export default Links;
