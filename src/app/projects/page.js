"use client";
import React from 'react';
import Image from 'next/image';
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';

const ProjectsPage = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <div className="relative h-[60vh] md:h-[75vh] w-full">
        <div className="absolute top-0 left-0 w-full z-50">
          <Navbar />
        </div>
        <Image 
          src="/project_1.jpg" 
          alt="Hero" 
          fill 
          className="object-cover brightness-[0.6]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl md:text-6xl tracking-[0.4em] font-light uppercase">Our Projects</h1>
          <p className="mt-4 text-[10px] tracking-[0.5em] opacity-70 uppercase">Crafting Excellence</p>
        </div>
      </div>

      {/* 2. LUXURIOUS BATHROOM SECTION */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl tracking-[0.3em] uppercase font-light text-gray-800 mb-6">
              Luxurious Bathroom
            </h2>
            <p className="text-gray-500 text-[11px] md:text-[12px] leading-relaxed tracking-wider uppercase">
              Revamp your bathroom with the luxurious charm of brown tiles and immerse yourself in a world of 
              sophistication and tranquility. Our projects on luxurious brown bathroom tiles offer a captivating 
              blend of style, texture, and versatility, allowing you to create a haven that reflects your personal 
              taste and elevates your daily bathing experience. Embrace the warm embrace of these tiles and 
              transform your bathroom into a space of timeless beauty and luxury.
            </p>
          </div>

          {/* Images in Same Line */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative h-[500px] md:h-[700px] w-full group overflow-hidden">
              <Image src="/bathroom-1.jpg" alt="B1" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="relative h-[500px] md:h-[700px] w-full group overflow-hidden">
              <Image src="/bathroom-2.jpg" alt="B2" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* BANNER 1 */}
      <section className="w-full h-[80vh] relative overflow-hidden">
        <Image src="/Project_banner-1.jpg" alt="Banner 1" fill className="object-cover transition-transform duration-1000 hover:scale-105" />
        <div className="absolute inset-0 bg-black/10"></div>
      </section>

      {/* 3. BLACK TEXTURED BATHROOM SECTION */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl tracking-[0.3em] uppercase font-light text-gray-800 mb-6">
              Black Textured Bathroom
            </h2>
            <p className="text-gray-500 text-[11px] md:text-[12px] leading-relaxed tracking-wider uppercase">
              Elevate your bathroom to new levels of elegance and drama with black-designed tiles. Our projects on black bathroom tiles offers a captivating blend of style, versatility, and timelessness, enabling you to create a truly remarkable space. Embrace the bold beauty of black, play with contrasts, and indulge in the luxurious ambiance that these tiles bring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative h-[500px] md:h-[700px] w-full group overflow-hidden">
              <Image src="/w1.jpg" alt="W1" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="relative h-[500px] md:h-[700px] w-full group overflow-hidden">
              <Image src="/w2.jpg" alt="W2" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* BANNER 2 */}
      <section className="w-full h-[80vh] relative overflow-hidden">
        <Image src="/w_BANNER.jpg" alt="Banner 2" fill className="object-cover transition-transform duration-1000 hover:scale-105" />
        <div className="absolute inset-0 bg-black/10"></div>
      </section>

      {/* 4. GOLDEN DESIGNED SECTION */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl tracking-[0.3em] uppercase font-light text-gray-800 mb-6">
              Golden Designed Bathroom Tiles
            </h2>
            <p className="text-gray-500 text-[11px] md:text-[12px] leading-relaxed tracking-wider uppercase">
              Embrace the luxurious allure of the golden and white design on black bathroom tiles and transform your space into a haven of opulence. Our projects showcase the captivating combination of black tiles with golden and white elements, creating a symphony of contrast that exudes elegance and sophistication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative h-[500px] md:h-[700px] w-full group overflow-hidden">
              <Image src="/w3.jpg" alt="W3" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="relative h-[500px] md:h-[700px] w-full group overflow-hidden">
              <Image src="/w4.jpg" alt="W4" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProjectsPage;