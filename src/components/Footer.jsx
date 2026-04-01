"use client";
import React from "react";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 font-sans">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              MURALIZ
            </h2>

            <p className="text-sm text-white/80 leading-relaxed mb-6">
              Download our premium collection app and explore luxury tiles & stones.
            </p>

         

           
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-white">About</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/Our_Story">Our Story</Link></li>
              <li><Link href="/collections">Collections</Link></li>
              
            </ul>
          </div>

          {/* HELP */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/projects">Projects</Link></li>
            
            </ul>
          </div>

         {/* SUBSCRIBE */}
<div>
  <h3 className="text-lg font-semibold mb-4 text-white">
    Subscribe for updates
  </h3>

  
    <input
      type="email"
      placeholder="Enter Your Email"
      required
      className="w-full px-4 py-3 rounded bg-white text-black text-sm outline-none mb-3"
    />

    <button
      type="submit"
      className="w-full bg-white text-[#1F8A83] py-3 rounded font-semibold hover:bg-gray-100 transition"
    >
      Subscribe
    </button>
  

  <p className="text-xs text-white/70 mt-3">
    By subscribing you agree to our policy.
  </p>
</div>

        </div>

        {/* BOTTOM */}
        <div className="mt-10 pt-5 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-3">

          <p className="text-xs text-white/70">
            © 2026 MURALIZ. All Rights Reserved.
          </p>


        </div>

      </div>
    </footer>
  );
};

export default Footer;