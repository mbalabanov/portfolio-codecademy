"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    src: "https://picsum.photos/seed/marin-hero1/1920/1080",
    alt: "Hero slide 1",
  },
  {
    src: "https://picsum.photos/seed/marin-hero2/1920/1080",
    alt: "Hero slide 2",
  },
  {
    src: "https://picsum.photos/seed/marin-hero3/1920/1080",
    alt: "Hero slide 3",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
        <h1 className="text-6xl font-black tracking-widest uppercase mb-4">
          Marin
        </h1>
        <p className="text-xl tracking-[0.3em] uppercase text-gray-300">
          Web Developer &mdash; Athens, Greece
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? "bg-white scale-125" : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
