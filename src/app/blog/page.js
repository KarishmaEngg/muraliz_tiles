"use client";
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// ✅ 10 Blogs Data
const blogs = [
  {
    slug: "How-to-Select-Tiles-for-The-Living-Room",
    date: "27 November, 2024",
    title: "How to Select Tiles for The Living Room?",
    excerpt: "When you select tiles for the living room...",
    image: "/blog1.webp"
  },
  {
    slug: "innovative-natural-stone-flooring-ideas-for-contemporary-living-spaces",
    date: "26 October, 2024",
        title: "Innovative Natural Stone Flooring Ideas for Contemporary Living Spaces",
        excerpt: "If you need to select the right tile...",
    image: "/innovative.jpg"
  },
  {
    slug: "/enhancing-interior-spaces-with-natural-stone-wall",
    date: "12 Dec, 2023",
    title: "Enhancing Interior Spaces with Natural Stone Wall Cladding Tiles: A Timeless Elegance",
    excerpt: "The foundation of modern interiors...",
    image: "/enhancing.jpg"
  },
  {
    slug: "exploring-the-essential-characteristics-of-luxury-bathroom-tiles",
    date: "12 Dec, 2023",
    title: "Exploring the Essential Characteristics of Luxury Bathroom Tiles",
    excerpt: "When it comes to luxury bathroom tiles...",
    image: "/blog-8.jpg"
  },
  {
    slug: "choosing-the-right-tiles-for-your-bathroom",
    date: "12 Dec, 2023",
    title: "Luxury Bathroom Tiles",
    excerpt: "Crafting luxury bathrooms with tiles...",
    image: "/bathroom.jpg"
  },
  {
    slug: "the-beauty-of-natural-stone-tiles",
    date: "2 June, 2023",
    title: "The Beauty of Natural Stone Tiles",
    excerpt: "Natural stone tiles for timeless beauty...",
    image: "/natural.jpg"
  },
  {
    slug: "creating-a-statement-with-feature-tiles",
    date: "15 Feb, 2022",
    title: "Creating a Statement with Feature Tiles",
    excerpt: "Bathrooms need careful tile selection...",
    image: "/feature.jpg"
  },
  {
    slug: "the-benefits-of-porcelain-tiles",
    date: "5 March, 2022",
    title: "The Benefits of Porcelain Tiles",
    excerpt: "Porcelain tiles for durability and style...",
    image: "/porcelian.jpg"
  },

  {
    slug: "tile-cleaning-and-maintenance-tips",
    date: "10 May, 2022",
    title: "Tile Cleaning and Maintenance Tips",
    excerpt: "Keep your tiles looking their best...",
    image: "/clean.jpg"
  }
];

export default function BlogPage() {
  return (
    <>
      <Navbar />

      {/* 🔥 HERO IMAGE */}
      <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <Image
          src="/blog-hero.jpg"
          alt="Blog Banner"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-7xl font-serif tracking-widest">
            BLOG
          </h1>
        </div>
      </div>

      {/* BLOG SECTION */}
      <div className="bg-white py-20 px-[5%]">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl font-serif text-center mb-16 uppercase tracking-widest">
            Our Insights
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {blogs.map((blog) => (
              <Link href={`/blog/${blog.slug}`} key={blog.slug} className="group">

               {/* Curved Image Container */}
                             <div className="relative h-64 w-full mb-6 overflow-hidden rounded-tl-[80px] rounded-br-[80px] shadow-lg group">
                               <Image 
                                 src={blog.image} 
                                 alt={blog.title} 
                                 fill 
                                 className="object-cover transition-transform duration-500 group-hover:scale-110"
                               />
                             </div>

                <p className="text-[#b89b5e] text-xs font-bold mb-1">
                  {blog.date}
                </p>

                <h2 className="text-lg font-bold text-gray-800 group-hover:text-[#b89b5e] transition">
                  {blog.title}
                </h2>

                <p className="text-gray-500 text-sm mt-2 line-clamp-3">
                  {blog.excerpt}
                </p>

                <span className="inline-block mt-3 text-xs font-bold border-b border-[#b89b5e]">
                  READ MORE →
                </span>

              </Link>
            ))}
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}