"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export default function ClienteleSection() {
  const data = [
    {
      title: "Designer Wall",
      text: "We create statement designer walls that elevate interiors with artistic textures, premium finishes, and modern aesthetics.",
      img: "/designer-wall.jpg",
      link: "/clientele",
    },
    {
      title: "Pooja Room",
      text: "Our pooja room designs bring peace and positivity with elegant tiles, creating a divine and calming environment.",
      img: "/pooja-room.jpg",
      link: "/clientele",
    },
    {
      title: "Bed Back",
      text: "Transform your bedroom with luxurious bed back tile designs that add depth and elegance.",
      img: "/bed-back.jpg",
      link: "/clientele",
    },
    {
      title: "Garden",
      text: "Our garden tile solutions enhance outdoor spaces with durable, weather-resistant, and stylish designs.",
      img: "/garden.jpg",
      link: "/clientele",
    },
    {
      title: "Metal Art",
      text: "Our metal art tile designs bring a bold and contemporary touch to interiors, combining artistic patterns with metallic finishes that create a luxurious and eye-catching statement.",
      img: "/metal-art.jpg",
      link: "/clientele",
    },
    {
      title: "Luxurious Bathroom",
      text: "Transform your bathroom into a spa-like retreat with our luxurious tile designs, featuring elegant textures and premium finishes.",
      img: "/bathroom-1.jpg",
      link: "/clientele",
    },
  ];

  return (
    <section className="bg-[#e7cfc0] py-16 px-4">

      {/* Heading */}
      <h2 className="text-center text-4xl md:text-5xl font-serif tracking-[6px]">
        CLIENTELE
      </h2>

      {/* Divider */}
      <div className="flex justify-center items-center gap-3 mt-3 mb-10">
        <div className="w-14 h-[2px] bg-pink-400"></div>
        <span className="text-pink-500 text-xl">♡</span>
        <div className="w-14 h-[2px] bg-pink-400"></div>
      </div>

      {/* Swiper */}
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
        >
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl overflow-hidden shadow-lg">

                {/* LEFT IMAGE */}
                <Link href={item.link} className="relative w-full h-[250px] md:h-[400px]">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover hover:scale-105 transition duration-500"
                  />
                </Link>

                {/* RIGHT CONTENT */}
                <div className="p-6 md:p-10 flex flex-col justify-between">

                  <div>
                    {/* ⭐ STAR */}
                    <div className="text-yellow-400 text-lg mb-2">
                      ⭐⭐⭐⭐⭐
                    </div>

                    <p className="text-pink-500 text-sm font-semibold tracking-wider">
                      CLIENT EXPERIENCE
                    </p>

                    <h3 className="text-2xl font-bold my-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {item.text}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 border-t pt-4">
                    <Link href={item.link}>
                      <span className="text-pink-500 text-sm font-semibold cursor-pointer border-b border-pink-500 hover:opacity-80">
                        Explore More →
                      </span>
                    </Link>
                  </div>

                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}