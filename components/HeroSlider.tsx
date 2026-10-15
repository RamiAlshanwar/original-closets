"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { heroSlides } from "@/lib/data";

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const total = heroSlides.length;

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  // Auto-play every 5 seconds (timer restarts after a click)
  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % total), 5000);
    return () => clearInterval(timer);
  }, [index, total]);

  const slide = heroSlides[index];

  return (
    <section className="relative h-[300px] md:h-[450px] overflow-hidden">
      {heroSlides.map((s, i) => (
        <Image
          key={s.title}
          src={s.image}
          alt={s.title}
          fill
          priority={i === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 flex items-center justify-center">
        <Link
          href={slide.href}
          className="bg-navy/90 text-white font-semibold px-4 py-2 rounded-md"
        >
          {slide.title}
        </Link>
      </div>

      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-500/70 hover:bg-gray-600 text-white rounded-full p-2"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-500/70 hover:bg-gray-600 text-white rounded-full p-2"
      >
        <FaChevronRight />
      </button>
    </section>
  );
}
