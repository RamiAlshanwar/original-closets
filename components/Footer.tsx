import Year from "./Year";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  FiMapPin,
  FiPhone,
  FiSmartphone,
  FiMail,
  FiClock,
} from "react-icons/fi";

const services = [
  { name: "CLOSETS", href: "/closets" },
  { name: "HOME OFFICE", href: "/living-areas" },
  { name: "KITCHEN PANTRY", href: "/living-areas" },
  { name: "MURPHY BEDS", href: "/living-areas" },
  { name: "LAUNDRY ROOM", href: "/living-areas" },
  { name: "GARAGE CABINETS", href: "/garages" },
  { name: "CONTACT", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-3">
        {/* Logo + text */}
        <div>
          <Image
            src="/logo1.png"
            alt="Original Closets"
            width={240}
            height={70}
            className="h-16 w-auto brightness-0 invert"
          />
          <p className="mt-6 leading-relaxed">
            Original Closets specializes in custom storage solutions for every
            room in your home or garage.
          </p>
        </div>

        {/* Services */}
        <div className="text-center">
          <h3 className="font-semibold text-sm mb-4">OUR SERVICES</h3>
          <ul className="space-y-2 text-xs">
            {services.map((s) => (
              <li key={s.name}>
                <Link href={s.href} className="hover:text-teal">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div className="text-center">
          <h3 className="font-semibold text-sm mb-4">CONTACT INFORMATION</h3>
          <ul className="space-y-2">
            <li className="flex justify-center gap-2">
              <FiMapPin className="mt-1 shrink-0" /> Address here
            </li>
            <li className="flex justify-center items-center gap-2">
              <FiPhone /> Office: (111) 111-1111
            </li>
            <li className="flex justify-center items-center gap-2">
              <FiSmartphone /> Mobile: (111) 111-1111
            </li>
            <li className="flex justify-center items-center gap-2">
              <FiMail /> info@originalclosets.ca
            </li>
            <li className="flex justify-center items-center gap-2">
              <FiClock /> Monday to Friday: 9AM - 5PM
            </li>
          </ul>
          <div className="flex justify-center gap-4 mt-6">
            <a href="#" aria-label="Facebook">
              <FaFacebookSquare size={22} />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram size={22} />
            </a>
            <a href="#" aria-label="X">
              <FaXTwitter size={22} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 py-4 text-center text-xs">
        © <Year /> ALL RIGHTS RESERVED. ORIGINAL CLOSETS
      </div>
    </footer>
  );
}
