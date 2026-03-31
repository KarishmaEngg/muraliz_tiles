import Image from 'next/image';

const LandingPage = () => {
  // Tiles images array


  return (
    <main className="min-h-screen bg-white">
      
      {/* --- HERO SECTION WITH VIDEO --- */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Video Container */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/hero-fallback.jpg" // Video load hone tak ye image dikhegi
            className="w-full h-full object-cover"
          >
            {/* Step: 
               1. Pinterest video download karein.
               2. Use 'hero-video.mp4' naam se 'public' folder mein save karein.
            */}
            <source src="/vdo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Subtle Overlay to make text pop */}
          <div className="absolute inset-0 bg-black/30 md:bg-black/20" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-6">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.6em] mb-4 text-white/90 font-light drop-shadow-md">
            Experience
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-extralight tracking-[0.2em] uppercase leading-tight text-white max-w-6xl drop-shadow-lg">
            The Magic of <br className="hidden md:block" /> Surfaces
          </h1>
          
          {/* Scroll Down Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-60">
            <div className="w-[1px] h-24 bg-gradient-to-b from-white to-transparent"></div>
          </div>
        </div>
      </section>

      

    </main>
  );
};

export default LandingPage;