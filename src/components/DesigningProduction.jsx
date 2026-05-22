"use client";
import React from 'react';
import Image from 'next/image';

const DesigningProduction = () => {
  const features = [
    {
      icon: "/i1.png",
      title: "INDUSTRY EXPERIENCE",
      text: "With 3 decades of expertise and knowledge in the industry, Muraliz can offer high-quality and durable products, along with exceptional customer service. This can help customers feel confident in their purchase and trust in the company's ability to provide top-notch products and services."
    },
    {
      icon: "/i2.jpg",
      title: "IN HOUSE PRODUCTION",
      text: "At Muraliz, we take pride in our state-of-the-art facility and team of skilled artisans who precisely craft exceptional stone and tile surfaces from concept to completion. By controlling every step of the process, we ensure uncompromising quality, precision, and beauty in every piece, setting the standard for excellence in the industry."
    },
    {
      icon: "/i3.png",
      title: "TAILORED SOLUTIONS",
      text: "Our team of skilled designers closely collaborates with clients, comprehending their exclusive needs and preferences. We provide customized design choices that cater to their individual tastes and specific requirements. Ensuring a truly personalized and satisfying experience."
    },
    {
      icon: "/i4.png",
      title: "SUPPLY CHAIN & STORAGE FACILITIES",
      text: "As a leading company, we take pride in our ability to manage ready stocks of imported and Indian tiles. This strategic approach enables us to uphold an effective and efficient supply chain, providing prompt and reliable services to our valued customers."
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-[1300px] mx-auto px-4">
        
        {/* Exact Heading from Image */}
        <div className="w-full text-center mb-12 md:mb-16">
          <h2 className="text-[22px] md:text-[28px] font-light tracking-[0.2em] text-[#5c677d] uppercase leading-tight">
            Muraliz TAKES PRIDE IN ITS DESIGNING <br className="hidden md:block" /> AND PRODUCTION CAPABILITIES
          </h2>
        </div>

        <div className="flex flex-wrap -mx-4 items-stretch">
          
          {/* Left Column: Image (col-lg-4 / 33.33%) */}
          <div className="w-full lg:w-1/3 px-4 mb-10 lg:mb-0">
            <div className="relative h-full min-h-[400px] md:min-h-[500px]">
              <Image
                src="/USPs-banner.jpeg"
                alt="Muraliz Designing"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
                priority
              />
            </div>
          </div>

          {/* Right Column: Text Grid (col-lg-8 / 66.66%) */}
          <div className="w-full lg:w-2/3 px-4">
            <div className="flex flex-wrap -mx-4 h-full">
              {features.map((item, index) => (
                <div key={index} className="w-full md:w-1/2 px-6 mb-12 flex flex-col">
                  
                  {/* Icon Section */}
                  <div className="mb-4">
                    <img 
                      src={item.icon} 
                      alt={item.title} 
                      className="w-8 h-8 md:w-10 md:h-10 object-contain grayscale opacity-80" 
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-[13px] md:text-[14px] font-bold tracking-[0.1em] text-[#333] mb-3 uppercase">
                      {item.title}
                    </h3>
                    <p className="text-[12.5px] md:text-[13.5px] text-[#666] leading-[1.8] font-normal text-justify">
                      {item.text}
                    </p>
                  </div>
                  
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DesigningProduction;