import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

export default function MuralizPage() {
  const navLinks = [
    { name: 'HOME', href: '#' },
    { name: 'OUR STORY', href: '#' },
    { name: 'OUR COLLECTIONS', href: '#' },
    { name: 'OUR PROJECTS', href: '#' },
    { name: 'CONTACT US', href: '#' },
    { name: 'BLOGS', href: '#' },
  ];

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-white font-sans text-gray-800">
      
      {/* --- 1. NAVBAR & HERO SECTION --- */}
      <header className="relative h-[80vh] w-full">
        {/* Transparent Navigation Overlay */}
        
            {/* Bottom Row: Links */}
            <div className="flex justify-center gap-8 md:gap-12">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-xs tracking-widest text-white hover:text-gray-300 transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
         

        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://Muraliztiles.com/assets/images/Our%20Products%20Banner.png" 
            alt="Hero Interior" 
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      {/* --- 2. DESCRIPTION & GALLERY SECTION --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-[0.25em] text-gray-600 mb-10 uppercase">
            Slabs and Tiles
          </h2>
          <p className="max-w-5xl mx-auto text-gray-500 leading-relaxed font-light text-sm md:text-base text-justify md:text-center">
            Project slabs and tiles are building materials commonly used in construction and interior design. 
            Slabs are large, flat, and thick pieces of stone or concrete that serve as foundational elements 
            for flooring or countertops. Tiles are smaller, thinner pieces of materials like ceramic, porcelain, 
            or natural stone used to cover surfaces such as walls, floors, and backsplashes. They come in 
            various sizes, shapes, and finishes, offering a wide range of design possibilities. These versatile 
            and durable components play a vital role in enhancing the aesthetics and functionality of 
            residential and commercial spaces.
          </p>
        </div>

        {/* 3-Column Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="aspect-[4/5] overflow-hidden">
            <img src="https://i.pinimg.com/1200x/bf/dd/f4/bfddf4e690dab3e72ea61a2f15222f43.jpg" alt="Interior 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="aspect-[4/5] overflow-hidden">
            <img src="https://Muraliztiles.com/assets/images/Our%20Collections_Inside_Explore_Images/Tiles%20n%20Slabs/Tile%20Slab%202.png" alt="Interior 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="aspect-[4/5] overflow-hidden">
            <img src="https://Muraliztiles.com/assets/images/Our%20Collections_Inside_Explore_Images/Tiles%20n%20Slabs/Tile%20Slab%203.png" alt="Interior 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </section>

    </div>
    <Footer />
    </>
  );
}