// src/components/Sections/HeroCarousel.jsx

import { useState, useEffect } from "react";
import banner1 from "../../Assest/Banner1.webp";
import banner2 from "../../Assest/Banner2.webp";
import banner3 from "../../Assest/Banner3.webp";

const slides = [
  {
    id: 1,
    imageUrl: banner1,
    alt: "GST Registration Online India",
    caption: "Apply for GST Registration Online",
    subCaption: "Simple • Fast • Reliable",
  },
  {
    id: 2,
    imageUrl: banner2,
    alt: "GST Number Apply in 3-7 Days",
    caption: "Get Your GST Number in Simple Steps",
    subCaption: "3-7 Working Days Processing",
  },
  {
    id: 3,
    imageUrl: banner3,
    alt: "GST Certificate India",
    caption: "100% Online GST Registration",
    subCaption: "Expert Assistance • PAN India Service",
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[380px] sm:h-[460px] md:h-[560px] lg:h-[620px] xl:h-[680px] overflow-hidden bg-black">
      
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentIndex 
              ? "opacity-100 scale-100" 
              : "opacity-0 scale-105"
          }`}
        >
          {/* Background Image - Optimized for all sizes */}
          <img
            src={slide.imageUrl}
            alt={slide.alt}
            className="absolute inset-0 w-full h-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
          />

          {/* Dark Gradient Overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center z-10">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight drop-shadow-2xl leading-tight max-w-5xl">
              {slide.caption}
            </h2>
            
            {slide.subCaption && (
              <p className="mt-4 text-white/90 text-lg sm:text-xl md:text-2xl font-medium tracking-wide drop-shadow-lg">
                {slide.subCaption}
              </p>
            )}
          </div>
        </div>
      ))}

      {/* Bottom Marquee Notice */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white py-3 overflow-hidden shadow-inner z-20">
        <div className="marquee whitespace-nowrap text-sm sm:text-base font-medium">
          <span className="inline-block px-12">
            This is a private consultancy portal for GST Registration. 
            Portal fees are consultancy charges only. • Government fees extra as applicable.
          </span>
          <span className="inline-block px-12">
            This is a private consultancy portal for GST Registration. 
            Portal fees are consultancy charges only. • Government fees extra as applicable.
          </span>
        </div>
      </div>

      {/* Navigation Dots - Improved */}
      <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 flex justify-center gap-3 z-30">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3.5 h-3.5 rounded-full transition-all duration-300 border-2 border-white/80 ${
              idx === currentIndex 
                ? "bg-white scale-125 shadow-lg" 
                : "bg-transparent hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}