"use client";
import React from 'react';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#E5E7EB] pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="flex flex-wrap -mx-4">
          
          {/* Column 1: Brand */}
          <div className="w-full lg:w-4/12 px-4 mb-12 lg:mb-0">
            <h2 className="text-[20px] font-bold tracking-[0.25em] text-[#1a1a1a] mb-8 uppercase">
              MURALIZ
            </h2>
            <p className="text-[14px] text-[#777] leading-[1.8] font-light max-w-[320px]">
              With over 3 decades of excellence, we specialize in providing premium stone and tile surfaces that redefine luxury and durability for modern spaces.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="w-full sm:w-1/2 lg:w-2/12 px-4 mb-12 lg:mb-0">
            <h3 className="text-[12px] font-bold tracking-[0.2em] text-[#1a1a1a] mb-8 uppercase">
              Navigation
            </h3>
            <ul className="space-y-4">

              <li>
                <Link href="/" className="footer-link">Home</Link>
              </li>

              <li>
                <Link href="/Our_Story" className="footer-link">Our Story</Link>
              </li>

              <li>
                <Link href="/collections" className="footer-link">Products</Link>
              </li>

              

              <li>
                <Link href="/blog" className="footer-link">Blog</Link>
              </li>

              <li>
                <Link href="/contact" className="footer-link">Contact</Link>
              </li>

              <li>
                <Link href="/clientele" className="footer-link">Clientle</Link>
              </li>

            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="w-full sm:w-1/2 lg:w-6/12 px-4">
            <h3 className="text-[12px] font-bold tracking-[0.2em] text-[#1a1a1a] mb-8 uppercase">
              Get In Touch
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Address */}
              <div className="flex gap-4">
                <MapPin size={18} className="text-[#999] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[11px] font-bold tracking-wider text-[#333] uppercase mb-2">
                    Office
                  </h4>
                  <p className="text-[13px] text-[#777] leading-relaxed font-light">
                    Industrial Area,<br />
                    Moradabad, Uttar Pradesh - 244001
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">

                <div className="flex gap-4 items-center">
                  <Phone size={16} className="text-[#999]" />
                  <a href="tel:+919876543210" className="text-[13px] text-[#777] font-light hover:text-black">
                    +91 98765 43210
                  </a>
                </div>

                <div className="flex gap-4 items-center">
                  <Mail size={16} className="text-[#999]" />
                  <a href="mailto:info@muraliztiles.com" className="text-[13px] text-[#777] font-light hover:text-black">
                    info@muraliztiles.com
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-[10px] text-[#bbb] tracking-[0.2em] uppercase font-light">
            © 2026 MURALIZ TILES & STONES. ALL RIGHTS RESERVED.
          </p>

          <div className="flex gap-6 text-[10px] text-[#bbb]">
            <Link href="/privacy-policy" className="hover:text-black">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-black">Terms</Link>
          </div>

        </div>
      </div>

      {/* ✅ COMMON STYLE */}
      <style jsx>{`
        .footer-link {
          font-size: 13px;
          color: #777;
          font-weight: 300;
          transition: all 0.3s;
        }
        .footer-link:hover {
          color: black;
          padding-left: 8px;
        }
      `}</style>

    </footer>
  );
};

export default Footer;