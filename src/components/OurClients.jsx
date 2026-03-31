"use client";
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

// Swiper base styles
import 'swiper/css';
import 'swiper/css/navigation';

const OurClients = () => {
  // c1 se c18 tak ke logos ka array
  const clientLogos = Array.from({ length: 18 }, (_, i) => `/o${i + 1}.png`);

  return (
    <section className="py-20 bg-white overflow-hidden">
      {/* 1. Main container: Wide horizontal padding hatadi hai taaki content fail sake */}
      <div className="w-full px-4 md:px-10 lg:px-16 mx-auto max-w-[1600px]">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-light tracking-[0.2em] text-gray-700 uppercase">
            Our Clients
          </h2>
          <div className="mt-4 w-16 h-[1px] bg-gray-300 mx-auto"></div>
        </div>

        {/* 2. Slider Wrapper: Logos ko tight row mein lane ke liye margins adjust kiye hain */}
        <div className="relative group px-12 md:px-16">
          
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30} // Logos ke beech ka gap kam kiya hai (compact feel ke liye)
            loop={true}
            centeredSlides={false}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '.custom-next-btn',
              prevEl: '.custom-prev-btn',
            }}
            // Responsive Settings: Compact look ke liye zyada logos desktop par
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 20 }, // Mobile
              640: { slidesPerView: 3, spaceBetween: 25 }, // Tablets
              1024: { slidesPerView: 5, spaceBetween: 30 }, // Small Desktop
              1280: { slidesPerView: 6, spaceBetween: 30 }, // Large Desktop (Original design jaisa)
            }}
            className="flex items-center"
          >
            {clientLogos.map((src, index) => (
              <SwiperSlide key={index} className="flex justify-center items-center py-4">
                {/* 3. Image Container: Compact row ke liye size perfect kiya hai */}
                <div className="relative w-full h-24 md:h-28 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
                  <Image
                    src={src}
                    alt={`Client Logo ${index + 1}`}
                    fill
                    className="object-contain p-1" // Ensures the logo fits perfectly
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* 4. Arrows: Positioning fix ki hai taaki ye container ke edge par rahein */}
          <button className="custom-prev-btn absolute left-0 top-1/2 -translate-y-1/2 text-4xl md:text-5xl font-extralight text-gray-400 hover:text-black transition-all z-20">
            &#10216;
          </button>

          <button className="custom-next-btn absolute right-0 top-1/2 -translate-y-1/2 text-4xl md:text-5xl font-extralight text-gray-400 hover:text-black transition-all z-20">
            &#10217;
          </button>

        </div>
      </div>
    </section>
  );
};

export default OurClients;