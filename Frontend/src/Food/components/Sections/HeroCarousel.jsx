// src/components/HeroCarousel.jsx
import { useState, useEffect } from "react";

import banner1 from "../../Assest/Banner1.jpg";
import banner2 from "../../Assest/Banner2.jpg";
import banner3 from "../../Assest/Banner3.webp";

const slides = [
  {
    id: 1,
    imageUrl: banner1,
    alt: "Food safety license registration",
    caption: "Apply for FSSAI Food License Online",
  },
  {
    id: 2,
    imageUrl: banner2,
    alt: "Food business compliance India",
    caption: "Start Your Food Business with FSSAI Registration",
  },
  {
    id: 3,
    imageUrl: banner3,
    alt: "FSSAI certification India",
    caption: "Get Your FSSAI License in Simple Steps",
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 sm:h-80 md:h-[500px] lg:h-[600px] overflow-hidden">

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.imageUrl}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-center justify-center">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center px-6 drop-shadow-2xl tracking-wide">
              {slide.caption}
            </h2>
          </div>
        </div>
      ))}

      {/* Bottom Notice Marquee */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-orange-400/70 via-white/40 to-green-500/70 text-white py-2.5 overflow-hidden shadow-lg z-20">
        <div className="marquee-container relative w-full">
          <div className="marquee inline-flex whitespace-nowrap text-sm sm:text-base font-semibold tracking-wide">
            <span className="mx-16">
              This is a private consultancy self-registration portal for FSSAI Registration and License. Portal fees are consultancy in nature.
            </span>
            <span className="mx-16">
              This is a private consultancy self-registration portal for FSSAI Registration and License. Portal fees are consultancy in nature.
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-14 sm:bottom-16 left-0 right-0 flex justify-center space-x-4 z-30">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "bg-white scale-125 shadow-lg ring-2 ring-white/80"
                : "bg-white/60 hover:bg-white/90"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}