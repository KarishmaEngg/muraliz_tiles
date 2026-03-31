"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const blogData = [
  {
    date: "27 November, 2024",
    title: "How to Select Tiles for The Living Room?",
    description: "When you select tiles for the living room, there are many popular options. Porcelain and ceramic tiles are popular choices due to their durability, low maintenance, and versatility in design.",
    image: "/blog1.webp", // Replace with your image path
    link: "/blog/select-living-room-tiles"
  },
  {
    date: "26 October, 2024",
    title: "How to Identify Ceramic and Vitrified Tiles: A Complete Guide",
    description: "If you need to select the right tile for your home, you must be able to delve into how to identify ceramic and vitrified tiles.",
    image: "/blog2.webp",
    link: "/blog/identify-tiles-guide"
  },
  {
    date: "17 July, 2024",
    title: "An Ultimate Guide - What is A Ceramic Tile",
    description: "Most homes have ceramic tile flooring, homes you have spent perhaps decades in...",
    image: "/blog3.jpg",
    link: "/blog/what-is-ceramic-tile"
  },
  {
    date: "2 June, 2023",
    title: "Top 10 Tile Trends for Modern Homes",

    
    description: "As we enter a new era of interior design, tiles continue to be a popular choice for modern homes.",
    image: "/blog4.jpg",
    link: "/blog/top-10-tile-trends"
  }
];

const BlogSection = () => {
  return (
    <section className="bg-white py-20 px-[5%]">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light tracking-[0.2em] text-gray-500 uppercase">Blogs</h2>
          <div className="w-20 h-[1px] bg-gray-300 mx-auto mt-4"></div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogData.map((blog, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col"
            >
              {/* Curved Image Container */}
              <div className="relative h-64 w-full mb-6 overflow-hidden rounded-tl-[80px] rounded-br-[80px] shadow-lg group">
                <Image 
                  src={blog.image} 
                  alt={blog.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Date */}
              <p className="text-[#b89b5e] text-xs font-medium mb-3 border-b border-gray-200 pb-2 w-fit pr-4">
                {blog.date}
              </p>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-800 mb-4 leading-tight min-h-[3.5rem]">
                {blog.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-[13px] leading-relaxed mb-6 line-clamp-4">
                {blog.description}
              </p>

              {/* Read More Link */}
              <Link href="/blog" className="mt-auto group flex items-center gap-2 text-sm font-bold text-gray-800 uppercase tracking-widest border-b border-transparent hover:border-gray-800 w-fit transition-all pb-1">
                Read More 
                <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;