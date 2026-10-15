"use client";

import { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const t = testimonials[index];

  return (
    <section className="bg-light py-16">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <SectionTitle
          title="TESTIMONIALS"
          subtitle="Our trusted clients opinions"
        />

        <p className="-mt-4 text-sm text-navy">
          <FaQuoteLeft className="inline mr-2 mb-2 text-xs" />
          {t.text}
          <FaQuoteRight className="inline ml-2 mb-2 text-xs" />
        </p>
        <p className="mt-4 text-sm font-semibold text-navy">— {t.name}</p>

        <div className="flex justify-center gap-3 mt-6">
          <button
            onClick={() => setIndex((i) => (i - 1 + total) % total)}
            aria-label="Previous testimonial"
            className="bg-navy text-white rounded-full p-2 hover:opacity-90"
          >
            <FaChevronLeft size={12} />
          </button>
          <button
            onClick={() => setIndex((i) => (i + 1) % total)}
            aria-label="Next testimonial"
            className="bg-navy text-white rounded-full p-2 hover:opacity-90"
          >
            <FaChevronRight size={12} />
          </button>
        </div>
      </div>
    </section>
  );
}
