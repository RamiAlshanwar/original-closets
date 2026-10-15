import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import CtaBand from "@/components/CtaBand";
import InfoCard from "@/components/InfoCard";
import FilterGallery from "@/components/FilterGallery";
import { closetTypes, closetFeatures } from "@/lib/data";

export const metadata: Metadata = {
  title: "Custom Closets | Original Closets",
  description: "Custom walk-in closets, reach-in closets and wardrobes designed and installed in the GTA.",
};

export default function ClosetsPage() {
  return (
    <>
      <PageHero title="CLOSETS" image="/images/hero/closets.jpg" />

      <section className="max-w-5xl mx-auto px-4 py-12">
        <SectionTitle title="TRANSFORM YOUR BASIC BEDROOM CLOSET" />
        <p className="text-sm leading-relaxed -mt-4">
          We take pride in our work that is why we always deliver the highest quality to ensure we meet
          all your needs and exceed your expectations. During our free consultation session we collect
          all the important details to you to come up with a functional design that will maximize the
          space utilization while being stylish and fit seamlessly within your room décor.
        </p>

        <div className="grid gap-4 md:grid-cols-3 mt-10">
          {closetTypes.map((c) => (
            <ServiceCard key={c.title} title={c.title} image={c.image} href="#gallery" />
          ))}
        </div>
      </section>

      <CtaBand />

      <section className="max-w-5xl mx-auto px-4 py-16">
        <SectionTitle title="FEATURES" />
        <div className="grid gap-6 md:grid-cols-3">
          {closetFeatures.map((f) => (
            <InfoCard key={f.title} title={f.title} image={f.image} text={f.text} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/contact" className="bg-teal text-white text-xs font-semibold px-6 py-2 rounded-full hover:opacity-90">
            LEARN MORE
          </Link>
        </div>
      </section>

      <section id="gallery" className="max-w-5xl mx-auto px-4 pb-16 scroll-mt-4">
        <SectionTitle title="GALLERY" />
        <FilterGallery categories={["Walk-in", "Reach-in", "Wardrobe"]} />
      </section>
    </>
  );
}