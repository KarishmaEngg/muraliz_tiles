"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Testimonials = () => {
  const reviews = [
    { name: "Sonia Verma", text: "The quality and variety at Karishma Tiles are simply unmatched. Their team helped us pick the perfect stones for our villa. Highly recommended for premium finishes." },
    { name: "Pooja Khareta", text: "Amazing place for designer luxury Tiles and wall arts. We had been here on our interior designer's recommendation for our home. We had a great time viewing all collections." },
    { name: "Poorva Jairamani", text: "Perfect place for those who are looking for some out of the box tile collections. Plus star rating to their customer service. Karishma Tiles crafts the finest customized tiles." },
    { name: "Akriti Shah", text: "I was looking for Mosaics and I visited Karishma's new showroom in Gurugram, Golf course road. The showroom is very well designed and their range of mosaic designs are eye appealing." },
    { name: "Ria Nagpal", text: "I visited Their tiles showroom in raja garden, jagatpuri & Gurgaon. Karishma Tiles and Stones is the go-to for luxury in Delhi NCR. They have an exquisite collection." },
    { name: "Anjali Gupta", text: "Exceptional service and beautiful designs. They transformed my space with their unique stone collection. Very happy with the result!" }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-4">
        
        {/* Title Section */}
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-light tracking-[0.3em] text-gray-800 uppercase">
            Testimonials
          </h2>
          <div className="mt-5 w-24 h-[1px] bg-gray-200 mx-auto"></div>
        </div>

        {/* Main Wrapper: Arrows + Swiper in a Row */}
        <div className="flex items-center gap-2 md:gap-4">
          
          {/* Left Arrow */}
          <button className="test-prev text-4xl md:text-6xl font-thin text-gray-300 hover:text-gray-800 transition-all z-20 outline-none cursor-pointer flex-shrink-0">
            &#10216;
          </button>

          {/* Swiper Container */}
          <div className="flex-grow overflow-hidden px-2">
            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={25}
              slidesPerView={1}
              slidesPerGroup={1} // Ek baar mein 1 card slide (hide) hoga
              loop={true}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              navigation={{
                nextEl: '.test-next',
                prevEl: '.test-prev',
              }}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 25 },
                1280: { slidesPerView: 4, spaceBetween: 25 }, // Desktop par 4 cards
              }}
              className="!overflow-visible"
            >
              {reviews.map((item, index) => (
                <SwiperSlide key={index} className="pt-10 pb-10">
                  {/* Card Body */}
                  <div className="relative bg-[#F4F4F4] rounded-[20px] p-6 pt-14 text-center flex flex-col items-center h-full min-h-[380px] shadow-sm border border-transparent hover:border-gray-200 transition-all duration-300">
                    
                    {/* Name Badge */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[85%] bg-[#B3A682] text-white py-3 px-2 rounded-xl shadow-lg z-10">
                      <h3 className="text-xs md:text-sm font-medium tracking-widest uppercase truncate">
                        {item.name}
                      </h3>
                    </div>

                    {/* Review Text */}
                    <div className="flex-grow flex items-center justify-center">
                      <p className="text-gray-600 font-light leading-[1.8] text-sm md:text-[15px]">
                        {item.text}
                      </p>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mt-8">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-[#FFC107] text-xl">★</span>
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right Arrow */}
          <button className="test-next text-4xl md:text-6xl font-thin text-gray-300 hover:text-gray-800 transition-all z-20 outline-none cursor-pointer flex-shrink-0">
            &#10217;
          </button>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;