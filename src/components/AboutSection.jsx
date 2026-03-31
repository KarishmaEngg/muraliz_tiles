import Image from 'next/image';

const AboutSection = () => {
  // Aap yahan apni images ke path daal sakte hain
  const images = [
    '/title-1.jpg',
    '/tile-2.png',
    '/tile.3.jpg',
    '/tile-4.jpg',
  ];

  return (
    <section className="bg-white py-16 md:py-24 px-6 md:px-[10%]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
        
        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2">
          <div className="mb-3">
            <h2 className="text-1xl md:text-4xl font-light tracking-[0.1em] text-gray-900 uppercase leading-tight">
              CRAFTING TIMELESS
            </h2>
            <h2 className="text-1xl md:text-4xl font-light tracking-[0.1em] text-gray-900 uppercase leading-tight">
              ELEGANCE FOR YOUR SPACES
            </h2>
            <div className="mt-2 w-full h-[1px] bg-gray-200"></div>
          </div>

          <div className="space-y-6 text-gray-600 font-light leading-relaxed text-sm md:text-base text-justify">
            <p>
              Welcome to Karishma Tiles & Stones, your one-stop destination for premium quality 
              surfaces that can bring your vision to life. Embrace a seamless journey towards 
              transforming your home or crafting a fresh environment as our extensive range 
              of tiles and stones becomes your canvas, enabling you to curate the ideal 
              foundation that reflects your unique style.
            </p>
            <p>
              We pride ourselves on offering a vast array of surface designs, sizes, and colors 
              to meet the needs and preferences of our customers. Whether you prefer classic 
              styles that exude timeless elegance or modern, cutting-edge designs that push 
              the boundaries of innovation, we have something for everyone.
            </p>
          </div>
        </div>

        {/* Right Side: Image Grid (2x2) */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 mt-2">
          {images.map((src, index) => (
            <div key={index} className="relative aspect-[3/3] overflow-hidden border border-gray-100 shadow-sm">
              <Image
                src={src}
                alt={`Tile Design ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;