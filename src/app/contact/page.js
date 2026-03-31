"use client";
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "8f8f57fe-b16c-4a93-8a90-82ede60f89fc");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully ✅");
        event.target.reset();
      } else {
        setResult("Something went wrong ❌");
      }
    } catch (error) {
      setResult("Network Error ❌");
    }
  };

  return (
    <main className="min-h-screen bg-white">

      {/* HERO SECTION */}
      <div className="relative h-[60vh] md:h-[70vh] w-full">

        {/* Navbar */}
        <div className="absolute top-0 left-0 w-full z-50">
          <Navbar />
        </div>

        {/* Background Image */}
        <Image
          src="/contact-banner.jpg"
          alt="Muraliz Premium Tiles"
          fill
          className="object-cover brightness-75"
          priority
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <Image
            src="/blog_small.png"
            alt="Logo"
            width={40}
            height={40}
            className="mb-4 opacity-90"
          />

          <h1 className="text-2xl md:text-3xl tracking-[0.4em] uppercase font-light">
            Contact Us
          </h1>

          <div className="w-16 h-[1px] bg-white/60 mt-6"></div>
        </div>
      </div>

      {/* CONTACT INFO */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-10 border-b border-gray-200 pb-12">

          <div>
            <h3 className="uppercase tracking-[0.3em] text-xs font-semibold mb-3">
              Talk
            </h3>
            <p className="text-sm text-gray-500">+91 98188XXXXX</p>
          </div>

          <div>
            <h3 className="uppercase tracking-[0.3em] text-xs font-semibold mb-3">
              Meet
            </h3>
            <p className="text-sm text-gray-500">
              Gurugram | Delhi
            </p>
          </div>

          <div>
            <h3 className="uppercase tracking-[0.3em] text-xs font-semibold mb-3">
              Write
            </h3>
            <p className="text-sm text-gray-500">
              muraliz@gmail.com
            </p>
          </div>

        </div>
      </section>

      {/* FORM SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="relative h-[600px] w-full">
            <Image
              src="/contact-header.jpg"
              alt="Contact"
              fill
              className="object-cover rounded"
            />
          </div>

          {/* FORM */}
          <div>
            <h2 className="text-2xl md:text-4xl font-light text-gray-800 mb-10 leading-snug">
              Let's have discussions <br />
              for <span className="italic border-b border-gray-400">your new wonder</span>
            </h2>

            <form onSubmit={onSubmit} className="space-y-6">

              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                className="w-full border-b border-gray-200 py-3 focus:border-black outline-none"
              />

              <input
                type="tel"
                name="phone"
                required
                placeholder="Phone"
                className="w-full border-b border-gray-200 py-3 focus:border-black outline-none"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className="w-full border-b border-gray-200 py-3 focus:border-black outline-none"
              />

              <textarea
                name="message"
                required
                placeholder="Message"
                rows="3"
                className="w-full border-b border-gray-200 py-3 focus:border-black outline-none resize-none"
              />

              <button
                type="submit"
                className="bg-black text-white px-10 py-3 text-xs uppercase tracking-widest hover:bg-gray-800 transition"
              >
                Inquire Now
              </button>

              <p className="text-sm text-gray-500">{result}</p>
            </form>
          </div>
        </div>
      </section>

      {/* STORES */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">
            <h2 className="text-xl tracking-[0.4em] uppercase font-light text-gray-700">
              Our Stores
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

            {[
              { city: "Haryana", name: "Gurugram" },
              { city: "Delhi", name: "Raja Garden" },
              { city: "Delhi", name: "Ashok Vihar" },
              { city: "Delhi", name: "Jagatpuri" },
            ].map((store, i) => (
              <div key={i}>
                <p className="text-xs text-gray-400 uppercase mb-2">
                  {store.city}
                </p>
                <h3 className="text-lg text-gray-800">
                  {store.name}
                </h3>
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