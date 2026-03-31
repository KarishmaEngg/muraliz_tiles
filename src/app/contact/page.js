"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';

const ContactPage = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Web3Forms Key Integration
    formData.append("access_key", "8f8f57fe-b16c-4a93-8a90-82ede60f89fc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* 1. TOP SECTION: Navbar + Hero Image (No transition at bottom) */}
      <div className="relative">
        <div className="absolute top-0 left-0 w-full z-50">
          <Navbar />
        </div>
        <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
          <Image 
            src="/contact-banner.jpg" 
            alt="Muraliz Premium Tiles"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
      </div>

      {/* 2. CONTACT HEADER */}
      <section className="py-16">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Image src="/blog_small.png" alt="Logo" width={35} height={35} className="opacity-80" />
          </div>
          <h1 className="text-2xl tracking-[0.4em] uppercase font-light text-gray-800">Contact Us</h1>
          <div className="w-16 h-[1px] bg-gray-200 mx-auto mt-8"></div>
        </div>
      </section>

      {/* 3. TALK, MEET, WRITE (Icons) */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 text-center border-b border-gray-700 pb-16">
          <div className="flex flex-col items-center border-r-0 md:border-r border-gray-700 px-6 mb-12 md:mb-0">
            <div className="mb-6 p-4 rounded-full bg-gray-50"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-600"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg></div>
            <h3 className="uppercase tracking-[0.3em] text-xs font-semibold mb-4">Talk</h3>
            <p className="text-[11px] text-gray-500 tracking-widest">+91- 981886....</p>
          </div>
          <div className="flex flex-col items-center border-r-0 md:border-r border-gray-700 px-6 mb-12 md:mb-0">
            <div className="mb-6 p-4 rounded-full bg-gray-50"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-600"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg></div>
            <h3 className="uppercase tracking-[0.3em] text-xs font-semibold mb-4">Meet</h3>
            <p className="text-[10px] text-gray-400 tracking-[0.15em] leading-relaxed uppercase">Raja Garden | Gurugram <br /> Jagatpuri | Ashok Vihar</p>
          </div>
          <div className="flex flex-col items-center px-6">
            <div className="mb-6 p-4 rounded-full bg-gray-50"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-600"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg></div>
            <h3 className="uppercase tracking-[0.3em] text-xs font-semibold mb-4">Write</h3>
            <p className="text-[11px] text-gray-500 tracking-widest lowercase">komal22012005@gmail.com</p>
          </div>
        </div>
      </section>

      {/* 4. INQUIRY FORM SECTION (Integrated with Web3Forms) */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative h-[600px] w-full shadow-sm">
            <Image src="/contact-header.jpg" alt="Design Consultation" fill className="object-cover rounded-[2px]" />
          </div>

          <div className="flex flex-col">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 leading-snug mb-16">
              Let's have discussions <br /> for <span className="italic border-b border-gray-400 pb-1">your new wonder</span>
            </h2>
            
            <form onSubmit={onSubmit} className="space-y-12">
              <input type="text" name="name" required placeholder="Name" className="w-full border-b border-gray-200 py-3 focus:border-black outline-none text-sm transition-all bg-transparent" />
              <input type="text" name="phone" required placeholder="+91" className="w-full border-b border-gray-200 py-3 focus:border-black outline-none text-sm transition-all bg-transparent" />
              <input type="email" name="email" required placeholder="Email" className="w-full border-b border-gray-200 py-3 focus:border-black outline-none text-sm transition-all bg-transparent" />
              <textarea name="message" required placeholder="Comment" rows="2" className="w-full border-b border-gray-200 py-3 focus:border-black outline-none text-sm transition-all bg-transparent resize-none"></textarea>
              
              <div className="pt-4 flex flex-col items-end gap-4">
                <button type="submit" className="group relative border border-gray-800 px-12 py-3 text-[10px] uppercase font-bold tracking-[0.2em] overflow-hidden transition-all">
                  <span className="relative z-10 group-hover:text-white">Inquire Now</span>
                  <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
                {/* Result Message */}
                <p className="text-[10px] uppercase tracking-widest text-gray-400">{result}</p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 5. STORE LOCATIONS */}
      <section className="bg-gray-50/50 py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <Image src="/blog_small.png" alt="Logo" width={30} height={30} className="mx-auto mb-4 opacity-60" />
            <h2 className="text-xl tracking-[0.4em] uppercase font-light text-gray-700">Our Stores</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { city: "Haryana", name: "Gurugram", addr: "F-9/5, DLF Phase-1, Main Golf Course Road, Gurugram, Haryana-122002" },
              { city: "New Delhi", name: "Raja Garden", addr: "22, Raja Garden, Opposite Pillar No. 379, Delhi-110015" },
              { city: "New Delhi", name: "Ashok Vihar", addr: "469, Shiv Market, Ashok Vihar, Delhi-110052" },
              { city: "New Delhi", name: "Jagatpuri", addr: "A-71/72, Jagatpuri, Delhi-110051" }
            ].map((store, idx) => (
              <div key={idx} className={`flex flex-col space-y-4 ${idx !== 0 ? 'md:border-l border-gray-200 md:pl-10' : ''}`}>
                <span className="text-[#C1B087] font-bold text-[10px] uppercase tracking-[0.2em]">{store.city}</span>
                <h3 className="text-lg font-light text-gray-900 tracking-wide">{store.name}</h3>
                <p className="text-[10px] text-gray-400 leading-relaxed tracking-[0.1em] uppercase">{store.addr}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;