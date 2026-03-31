"use client";
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Our Story', href: '/Our_Story' },
    { name: 'Our Collections', href: '/collections' },
    { name: 'Our Projects', href: '/projects' },
    { name: 'Blogs', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Clientele', href: '/clientele' }
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b border-white/10">
        <div className="flex items-center justify-between px-6 md:px-16 py-3">

          {/* LOGO */}
          <h1 className="text-lg md:text-xl font-medium tracking-[0.35em] uppercase text-white">
            MURALIZ
          </h1>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex gap-6 text-[10px] uppercase tracking-[0.2em]">
            {menuItems.map((item) => (
              <li key={item.name} className="relative group">
                <Link href={item.href} className="text-white/90 group-hover:text-white transition">
                  {item.name}
                </Link>

                {/* underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* MOBILE BUTTON */}
          <button 
            onClick={() => setIsOpen(true)}
            className="md:hidden text-xl text-white"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE SIDEBAR */}
      <div className={`fixed inset-0 z-50 transition-all duration-300 ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>

        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-black/60"
          onClick={() => setIsOpen(false)}
        />

        {/* Sidebar */}
        <div className={`absolute right-0 top-0 h-full w-[70%] bg-black text-white p-8 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>

          {/* Close */}
          <button 
            onClick={() => setIsOpen(false)}
            className="text-2xl mb-8 hover:rotate-90 transition"
          >
            ✕
          </button>

          {/* Menu */}
          <ul className="flex flex-col gap-6 text-lg tracking-wide">
            {menuItems.map((item) => (
              <li key={item.name} onClick={() => setIsOpen(false)} className="border-b border-white/10 pb-2">
                <Link href={item.href} className="hover:text-gray-400 transition">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Footer */}
          
        </div>
      </div>
    </>
  );
};

export default Navbar;