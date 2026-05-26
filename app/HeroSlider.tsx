"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const slides = [
  { id: 1, src: "/hero1.jpg", alt: "Gulab Jamun Banner 1" },
  { id: 2, src: "/hero2.jpg", alt: "Gulab Jamun Banner 2" },
  { id: 3, src: "/hero3.jpg", alt: "Gulab Jamun Banner 3" },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">

      {/* RESPONSIVE HEIGHT */}
      <div className="relative w-full h-[40vh] sm:h-[55vh] md:h-[70vh] lg:h-[85vh]">

        {/* SLIDES */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        ))}

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/40 z-20" />

        {/* CONTENT */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 z-30">

          <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3">
            Haji Hakim Ali
          </h1>

          <p className="text-xs sm:text-base md:text-lg lg:text-xl text-gray-200 mb-5 max-w-2xl">
            Authentic Sharaqpur Shareef Gulab Jamun made with traditional recipe
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">

            <button className="bg-[#2b060d] hover:bg-black text-white px-5 py-3 rounded-full font-semibold transition">
              View Products
            </button>

            <a
              href="https://wa.me/923245050786"
              target="_blank"
              className="border border-white text-white px-5 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
            >
              Order on WhatsApp
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}