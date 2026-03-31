import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';

export default function KarishmaPage() {
  return (
    <div className="min-h-screen bg-white text-[#333] font-serif selection:bg-[#C1B087] selection:text-white">
      <Navbar />
      {/* 1. HERO SECTION */}
      <section className="relative h-[75vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="/hero-tiles.png"
          alt="Karishma Specialization"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl tracking-[0.3em] font-light leading-relaxed uppercase">
            Specialization <br />
            in Tiles, Stones <br />
            Marbles & Inlays
          </h1>
          <p className="mt-6 text-sm tracking-[0.4em] opacity-90 uppercase font-sans">Since 1987</p>
        </div>
      </section>

      {/* 2. OUR JOURNEY SECTION */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-center">
        <div className="flex justify-center mb-6 text-[#C1B087]">
          {/* Custom Lotus/Logo SVG */}
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </div>
        <h2 className="text-3xl tracking-[0.2em] uppercase mb-10">Our Journey</h2>
        <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto text-sm md:text-base font-sans">
          Karishma is a renowned family-owned business since three decades that has established itself as a leader in the tiles industry...
          The name "Karishma" embodies delicacy and distinctiveness, symbolizing the creation of magical surfaces.
        </p>

        {/* Timeline Component */}
        <div className="mt-24 relative flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gray-200 -z-10" />

          {[
            { year: '1986', loc: 'Ashok Vihar', city: 'New Delhi, India', type: 'top' },
            { year: '2011', loc: 'Raja Garden', city: 'New Delhi, India', type: 'bottom' },
            { year: '2014', loc: 'Jagatpuri', city: 'New Delhi, India', type: 'top' },
            { year: '2022', loc: 'Gurugram', city: 'Haryana, India', type: 'bottom' }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center relative w-full md:w-1/4">
              {item.type === 'top' && (
                <div className="hidden md:block mb-6 text-center">
                  <p className="font-bold text-[11px] uppercase tracking-wider text-[#C1B087]">{item.loc}</p>
                  <p className="text-gray-400 text-[10px]">{item.city}</p>
                  <div className="w-[1px] h-10 bg-gray-300 mx-auto mt-2" />
                </div>
              )}

              <div className="bg-[#C1B087] text-white px-10 py-3 rounded-full text-xl font-medium shadow-md z-20 hover:scale-105 transition-transform cursor-default">
                {item.year}
              </div>

              <div className={`mt-4 md:mt-0 md:absolute ${item.type === 'top' ? 'md:hidden' : 'md:top-16'} text-center`}>
                <div className="hidden md:block w-[1px] h-10 bg-gray-300 mx-auto mb-2" />
                <p className="font-bold text-[11px] uppercase tracking-wider text-[#C1B087]">{item.loc}</p>
                <p className="text-gray-400 text-[10px]">{item.city}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. OUR FOUNDERS SECTION */}
      <section className="py-24 bg-[#F9F9F9] px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl tracking-[0.2em] uppercase mb-20">Our Founders</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { name: 'Sandeep Chadha', img: '/sandeep.jpg' },
              { name: 'Rohit Chadha', img: '/rohit.jpg' },
              { name: 'Pranav Chadha', img: '/pranav.png' }
            ].map((founder, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="relative w-full aspect-[3/4] mb-8 grayscale group-hover:grayscale-0 transition-all duration-1000 overflow-hidden shadow-xl">
                  <Image src={founder.img} alt={founder.name} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                </div>
                <h3 className="uppercase tracking-[0.2em] font-bold text-sm mb-6 border-b-2 border-transparent group-hover:border-[#C1B087] transition-all pb-1">
                  {founder.name}
                </h3>
                <p className="text-[12px] text-gray-500 leading-relaxed font-sans text-justify">
                  Visionary leadership and a deep passion for surface design have been the cornerstone of our excellence. We continue to inspire, innovate and shape the future of tiles and stones.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR PHILOSOPHY & ARTISANS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl tracking-[0.2em] uppercase mb-6 font-serif">Our Philosophy</h2>
          <p className="italic text-gray-400 max-w-2xl mx-auto text-sm">
            "We believe that the spaces we inhabit play a crucial role in our well-being and quality of life."
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {/* Left Side Small Images */}
          <div className="relative col-span-1 row-span-1">
            <Image src="/d1.png" alt="Detail 1" fill className="object-cover" />
          </div>
          <div className="relative col-span-1 row-span-1">
            <Image src="/d2.png" alt="Detail 2" fill className="object-cover" />
          </div>

          {/* CENTER LARGE IMAGE (2 Columns wide, 2 Rows high) */}
          <div className="relative col-span-1 row-span-1 order-first md:order-none">
            <Image src="/d3.png" alt="Main Craftsmanship" fill className="object-cover" />
          </div>

          {/* Right Side Small Images */}
          <div className="relative col-span-1 row-span-1">
            <Image src="/d4.png" alt="Detail 3" fill className="object-cover" />
          </div>

        </div>
      </section>

      {/* 5. NEWSLETTER & BLOGS */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="uppercase tracking-widest text-sm mb-6">Subscribe Our Newsletter</h2>
            <div className="flex max-w-md mx-auto shadow-sm">
              <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 bg-gray-50 text-xs outline-none focus:bg-white transition-colors" />
              <button className="bg-[#555] text-white px-8 py-3 text-[10px] uppercase tracking-[0.2em] hover:bg-black transition-colors">Send</button>
            </div>
          </div>

          <BlogSection/>
        </div>
      </section>

      <Footer/>
    </div>
  );
}