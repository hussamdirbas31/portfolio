import React from 'react';
import Link from 'next/link';

const Links = () => {
  const links = [
    { id: 0, name: "Home", href: "#home" },
    { id: 1, name: "About", href: "#about" },
    { id: 2, name: "Skills", href: "#skills" },
    { id: 3, name: "Projects", href: "#projects" },
    { id: 4, name: "Contact", href: "#contact" }
  ];

  return (
    <div className="border-l-gray-600 border-l-1 flex flex-col justify-center items-center relative top-[5rem] right-2 text-white space-y-12 p-4">
      {links.map(link => (
        <Link key={link.id} href={link.href}>
          <p className="hover:text-gray-300 py-1 bg-[#00b4b4] w-[10rem] flex rounded-xl justify-center">
            {link.name}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Links;
