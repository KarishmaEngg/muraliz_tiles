import Image from 'next/image';

const ProcessSection = () => {
  const row1 = ['/p1.jpg', '/p2.jpg', '/p3.jpg', '/p4.jpg', '/p1.jpg', '/p2.jpg', '/p3.jpg', '/p4.jpg'];
  const row2 = ['/p5.jpg', '/p6.jpg', '/p7.jpg', '/p8.jpg', '/p5.jpg', '/p6.jpg', '/p7.jpg', '/p8.jpg'];

  return (
    <section className="bg-white py-16 overflow-hidden">
      {/* CSS for Animation - Isse alag config file ki zaroorat nahi padegi */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-left { animation: marqueeLeft 35s linear infinite; }
        .animate-right { animation: marqueeRight 35s linear infinite; }
      `}} />

      {/* Header Section */}
      <div className="text-center mb-12 px-6">
         <div className="flex justify-center mb-4 opacity-70">
            <Image src="/icon.png" alt="icon" width={35} height={35} />
         </div>
         <h2 className="text-lg md:text-2xl font-light tracking-[0.2em] text-gray-500 uppercase max-w-4xl mx-auto leading-relaxed">
            Handcrafted Designer Tiles That Engage <br /> Your Senses and Please Your Spaces.
         </h2>
      </div>

      {/* Row 1: Sliding Left */}
      <div className="flex overflow-hidden mb-6">
        <div className="flex animate-left whitespace-nowrap">
          {row1.map((src, index) => (
            <div key={index} className="relative w-[300px] md:w-[450px] aspect-[16/10] mx-2 flex-shrink-0">
              <Image src={src} alt="Process" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500 border border-gray-100" />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Sliding Right */}
      <div className="flex overflow-hidden">
        <div className="flex animate-right whitespace-nowrap">
          {row2.map((src, index) => (
            <div key={index} className="relative w-[300px] md:w-[450px] aspect-[16/10] mx-2 flex-shrink-0">
              <Image src={src} alt="Process" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500 border border-gray-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;