"use client"; // Client-side interactivity ke liye zaruri hai
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
    { name: 'Clientele' ,href: '/clientele'}
  ];

  return (
    <>
      <nav className="relative z-30 flex items-center justify-between w-full px-6 py-6 md:px-12 text-white bg-gradient-to-b from-black/70 to-transparent">
        <h1 className="text-xl md:text-2xl font-light tracking-[0.3em] uppercase">
          MURALIZ
        </h1>

        {/* Desktop Menu (90% width container style) */}
        <ul className="hidden md:flex gap-8 text-[11px] uppercase tracking-widest">
          {menuItems.map((item) => (
            <li key={item.name} className="hover:text-gray-400 transition">
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsOpen(true)}
          className="md:hidden text-2xl focus:outline-none"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Slide-over Sidebar */}
      <div className={`fixed inset-0 z-50 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Overlay background */}
        <div className="absolute inset-0 bg-black/40" onClick={() => setIsOpen(false)} />
        
        {/* Sidebar Content */}
        <div className="absolute right-0 top-0 h-full w-[80%] bg-[#4a4a4a] text-white p-10 flex flex-col shadow-2xl">
          <button 
            onClick={() => setIsOpen(false)}
            className="text-3xl self-start mb-12 hover:rotate-90 transition-transform"
          >
            ✕
          </button>

          <ul className="flex flex-col gap-6 text-xl font-light tracking-wide">
            {menuItems.map((item) => (
              <li key={item.name} onClick={() => setIsOpen(false)}>
                <Link href={item.href} className="hover:text-gray-300">{item.name}</Link>
              </li>
            ))}
          </ul>

          {/* Bottom Email in Sidebar */}
          <div className="mt-auto pt-10 border-t border-white/10">
            <p className="text-sm opacity-50 tracking-wider">hello@muraliztile.in</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;