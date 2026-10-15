"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaFacebookSquare, FaInstagram, FaBars, FaTimes } from "react-icons/fa";

const links = [
  { name: "CLOSETS", href: "/closets" },
  { name: "LIVING AREAS", href: "/living-areas" },
  { name: "GARAGES", href: "/garages" },
  { name: "GALLERY", href: "/gallery" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top bar */}
        <div className="flex justify-end items-center gap-3 pt-3 text-sm text-navy">
          <a href="tel:1111111111">(111) 111-1111</a>
          <span className="text-gray-300">|</span>
          <Link href="/contact" className="hover:text-teal">
            Contact Us
          </Link>
          <a href="#" aria-label="Facebook">
            <FaFacebookSquare size={20} />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram size={20} />
          </a>
        </div>

        {/* Logo + menu */}
        <div className="flex justify-between items-center py-3">
          <Link href="/">
            <Image
              src="/logo1.png"
              alt="Original Closets"
              width={240}
              height={70}
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop menu */}
          <nav className="hidden md:flex gap-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide hover:text-teal ${
                  pathname === link.href ? "text-teal" : "text-navy"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile button */}
          <button
            className="md:hidden text-navy"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="md:hidden flex flex-col gap-4 pb-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={pathname === link.href ? "text-teal" : "text-navy"}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
