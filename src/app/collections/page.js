"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


// ── COLLECTIONS DATA ──────────────────────────────────────────────
const COLLECTIONS = [
  {
    id: "slabs-tiles",
    heading: "SLABS & TILES",
    tagline: "Revolutionizing the spaces with designer, lightweight surfaces.",
    description: "Our Slabs & Tiles redefine surface beauty — engineered for precision, crafted for permanence.",
    imageSide: "left", 
    heroSrc: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
    thumbSrc: "https://i.pinimg.com/736x/0a/1f/65/0a1f658c34271f4b4d1cd91f57515187.jpg",
  },
  {
    id: "handmade-tiles",
    heading: "HANDMADE TILES",
    tagline: "Traditional techniques passed down through generations.",
    description: "Karishma's Handmade Tiles are a true testament to artistry and craftsmanship.",
    imageSide: "right", 
    heroSrc: "https://karishmatiles.com/assets/images/Handmade-Tiles/Handmade-Tile.jpg",
    thumbSrc: "https://i.pinimg.com/736x/fd/95/82/fd9582726d25e46b6f4667906deb500c.jpg",
  },
  {
    id: "designer-tiles",
    heading: "DESIGNER TILES",
    tagline: "Where geometry meets material luxury.",
    description: "Combining metallic inlays, geometric patterns, and multi-material compositions.",
    imageSide: "left",
    heroSrc: "https://karishmatiles.com/assets/images/Designer-Tiles/Designer-Tile-big.jpg",
    thumbSrc: "https://media.istockphoto.com/id/2208218412/photo/man-choosing-tile-among-different-samples-in-store-closeup.webp?a=1&b=1&s=612x612&w=0&k=20&c=WO6I8zGbjZK-zM4TBg3i036-Vw5772L0N-ZZJSBIE7s=",
  },
  {
    id: "mosaic-collection",
    heading: "MOSAIC COLLECTION",
    tagline: "Infinite patterns, limitless expression.",
    description: "From classic arabesques to bold contemporary tessellations for every corner.",
    imageSide: "right",
    heroSrc: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070",
    thumbSrc: "https://plus.unsplash.com/premium_photo-1673119370210-1be6dc6e8850?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "stone-marble",
    heading: "STONE & MARBLE",
    tagline: "Natural magnificence, timeless presence.",
    description: "Quarried from the world's finest deposits to bring nature into your home.",
    imageSide: "left",
    heroSrc: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1000&q=85",
    thumbSrc: "https://images.unsplash.com/photo-1523350165414-082d792c4bcc?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "terracotta-series",
    heading: "TERRACOTTA SERIES",
    tagline: "Earthy warmth refined for modern living.",
    description: "Our Terracotta collection reimagines ancient materials for contemporary architecture.",
    imageSide: "right",
    heroSrc: "https://karishmatiles.com/assets/images/Customised-Mandirs/Customised-Mandir-big.jpg", 
    thumbSrc: "https://karishmatiles.com/assets/images/Marble-Inlays/Marble-Inlays-big.jpg",
  }
];

export default function CollectionsPage() {
  return (
    <>
    <Navbar />
    <div className="bg-white min-h-screen font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=Montserrat:wght@300;400;500&display=swap');
      `}</style>

     

      {/* ── HERO SECTION ── */}
      <section className="relative h-screen min-h-[560px] flex items-center justify-center overflow-hidden bg-[#0d0d0d]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,#1e1e1e_0%,#0d0d0d_55%,#080808_100%)]" />
        <div className="absolute top-0 right-0 w-[42%] h-full bg-gradient-to-br from-white/5 to-transparent" style={{ clipPath: 'polygon(55% 0%, 100% 0%, 100% 100%, 12% 100%)' }} />

        <div className="relative z-10 text-center text-white mt-20">
          <p className="text-[9px] tracking-[0.5em] uppercase opacity-40 mb-4 font-light">Karishma Surfaces</p>
          <h1 className="font-serif text-4xl md:text-7xl tracking-widest uppercase">Our Collections</h1>
        </div>
      </section>

      {/* ── DYNAMIC COLLECTIONS ── */}
      <main>
        {COLLECTIONS.map((col) => (
          <CollectionSection key={col.id} col={col} />
        ))}
      </main>

    </div>
    <Footer />
    </>
  );
}

// ── REUSABLE COLLECTION COMPONENT ──
function CollectionSection({ col }) {
  const isImageLeft = col.imageSide === "left";

  return (
    <section className="border-t border-[#e8e4e0] grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
      {/* PHOTO SIDE */}
      <div className={`overflow-hidden h-[400px] md:h-auto ${isImageLeft ? "order-1" : "order-1 md:order-2"}`}>
        <img src={col.heroSrc} alt={col.heading} className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
      </div>

      {/* CONTENT SIDE */}
      <div className={`bg-white flex flex-col items-center justify-center p-10 md:p-20 text-center gap-6 ${isImageLeft ? "order-2" : "order-2 md:order-1"}`}>
        <h2 className="font-serif text-xl md:text-3xl tracking-[0.3em] uppercase text-[#1a1a1a]">
          {col.heading}
        </h2>
        
        <div className="w-[180px] md:w-[220px] h-[150px] md:h-[185px] overflow-hidden shadow-sm">
          <img src={col.thumbSrc} alt="Detail" className="w-full h-full object-cover" />
        </div>

        <div className="max-w-[320px] space-y-4">
          <p className="text-[10px] md:text-xs font-light tracking-wide text-gray-600 leading-relaxed italic">"{col.tagline}"</p>
          <p className="text-[11px] md:text-[11.5px] font-light text-gray-400 leading-loose">{col.description}</p>
        </div>

        <ExploreButton id={col.id} />
      </div>
    </section>
  );
}

function ExploreButton({ id, label = "Explore" }) {
  const router = useRouter();
  const [hover, setHover] = useState(false);
  
  return (
    <button 
      onClick={() => router.push(`/collections/${id}`)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`mt-4 px-8 md:px-10 py-3 border border-black text-[9px] md:text-[10px] tracking-[0.4em] uppercase transition-all duration-300 ${hover ? 'bg-black text-white' : 'bg-transparent text-black'}`}
    >
      {label}
    </button>
  );
}