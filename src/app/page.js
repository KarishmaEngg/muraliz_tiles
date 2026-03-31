import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutSection from '@/components/AboutSection';
import ProcessSection from '@/components/ProcessSection';
import ClienteleSection from '@/components/ClienteleSection';
import OurClients from '@/components/OurClients';
import Testimonials from '@/components/Testimonials';
import BlogSection from '@/components/BlogSection';
import DesigningProduction from '@/components/DesigningProduction';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a]">
      {/* Navbar Overlay */}
      <div className="absolute top-0 left-0 w-full z-30">
        <Navbar />
      </div>
      
      {/* Hero Section */}
      <Hero />
      <AboutSection />
      <ProcessSection />
      <ClienteleSection />  
      <OurClients />
      <Testimonials />
      <DesigningProduction />
      
      <BlogSection />
      <Footer />

      {/* Aap yahan naye sections add kar sakte hain, jo automatic scroll honge */}
      <section className="py-20 px-6 text-white text-center">
        <h3 className="text-2xl font-light tracking-widest uppercase">Premium Tiles</h3>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm">
          Crafting beauty for your spaces with international quality standards.
        </p>
      </section>
    </main>
  );
}