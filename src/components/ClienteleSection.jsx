"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const clienteleData = [
  {
    id: 1,
    title: "Projects",
    image: "https://www.celestile.com/images/cli2.jpg",
    shortDesc: "Our team's scrupulous vision for designs contributes to the creation of workspaces, inducing the space with inspiration, making a mark in the world.",
  },
  {
    id: 2,
    title: "Celebrities",
    image: "https://www.celestile.com/images/cli3.jpg",
    shortDesc: "From their reel life to creating their environment of real life, we have designed some chic yet cosy decor.",
  },
  {
    id: 3,
    title: "Hospitality",
    image: "https://www.celestile.com/images/cli1.jpg",
    shortDesc: "Creating world-class surface experiences for the hotel industry, defining luxury and elegance.",
  },
  {
    id: 4,
    title: "Residential",
    image: "https://www.celestile.com/images/cli3.jpg",
    shortDesc: "Crafting homes that tell a story of elegance and comfort.",
  }
];

const ClienteleSection = () => {
  const [activeCard, setActiveCard] = useState(null);
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer && !activeCard && !isHovered) {
          scrollContainer.scrollLeft += 1;

          if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
            scrollContainer.scrollLeft = 0;
          }
        }
      }, 20);
    };

    startScrolling();
    return () => clearInterval(scrollInterval);
  }, [activeCard, isHovered]);

  const handleCardClick = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <section className="bg-[#5a5a5a] py-24 px-6 md:px-[8%] relative overflow-hidden flex items-center min-h-[700px]">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('/blueprint-pattern.png')] bg-repeat"></div>

      <div className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center justify-between w-full gap-12 relative z-10">

        {/* Left */}
        <div className="w-full lg:w-[30%] text-white">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">Clientele</h2>
          <p className="text-xl italic font-light opacity-90 mb-6 border-l-2 border-[#b89b5e] pl-4">
            Believing spaces are a reflection of people,
          </p>
          <p className="text-base font-light leading-relaxed opacity-70 max-w-sm">
            Celes'tile leaves no stone unturned while fabricating any space with its threads of absolute panache.
          </p>

          <div className="flex gap-4 mt-10">
            <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/10">←</div>
            <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/10">→</div>
          </div>
        </div>

        {/* Right Slider */}
        <div
          className="w-full lg:w-[70%] overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-hidden whitespace-nowrap py-10 no-scrollbar"
          >
            {[...clienteleData, ...clienteleData].map((item, index) => {
              const uniqueId = `${item.id}-${index}`;
              const isActive = activeCard === uniqueId;

              return (
                <div
                  key={uniqueId}
                  onClick={() => handleCardClick(uniqueId)}
                  className="relative w-[280px] md:w-[380px] h-[500px] cursor-pointer flex-shrink-0"
                >
                  <div className="relative w-full h-full overflow-hidden shadow-2xl">
                    <img 
                      src={item.image}
                      alt={item.title}
                      // fill
                      className="object-cover"
                    />

                    {/* Default */}
                    <div className={`absolute bottom-0 left-0 right-0 bg-white/95 py-5 text-center transition-all duration-500 ${isActive ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
                      <h3 className="text-gray-900 font-bold uppercase tracking-[0.3em] text-xs">
                        {item.title}
                      </h3>
                    </div>

                    {/* Active */}
                    <div className={`absolute inset-0 flex items-center justify-center p-8 transition-all duration-500 bg-black/30 ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                      <div className="bg-white p-8 w-full shadow-2xl">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 uppercase">
                          {item.title}
                        </h3>
                        <p className="text-[13px] text-gray-600 mb-6 italic">
                          {item.shortDesc}
                        </p>

                        <Link href="/clientele" onClick={(e) => e.stopPropagation()}>
                          <span className="text-[#b89b5e] font-bold text-[11px] uppercase border-b-2 border-[#b89b5e] pb-1 cursor-pointer">
                            Learn More
                          </span>
                        </Link>

                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ClienteleSection;