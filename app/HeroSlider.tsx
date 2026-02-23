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
    }, 8000); // 8 seconds per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[85vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover w-full h-full"
          />
        </div>
      ))}

      {/* CTA buttons - always on top */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 z-50">
        {/* <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          Haji Hakim Ali
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-2xl">
          Authentic Sharaqpur Shareef Gulab Jamun Made with pure desi ghee & traditional recipe
        </p> */}
        <div className="flex gap-4">
          <button className="bg-[#2b060d] hover:bg-black px-6 py-3 rounded-full font-semibold transition">
            View Products
          </button>
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
