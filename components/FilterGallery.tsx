"use client";

import Image from "next/image";
import { useState } from "react";
import { galleryImages } from "@/lib/data";

type Props = { categories: string[] };

export default function FilterGallery({ categories }: Props) {
  const [active, setActive] = useState("All");

  const images = galleryImages.filter((img) =>
    active === "All" ? categories.includes(img.category) : img.category === active
  );

  return (
    <div>
      {/* Tabs */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex flex-wrap justify-center bg-navy">
          {["All", ...categories].map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-6 py-2 text-sm text-white transition ${
                active === c ? "bg-teal" : "hover:bg-white/10"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Images */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {images.map((img) => (
          <div key={img.src} className="relative aspect-[6/5] rounded-md overflow-hidden shadow">
            <Image
              src={img.src}
              alt={`${img.category} project`}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}