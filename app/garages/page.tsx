import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import CtaBand from "@/components/CtaBand";
import InfoCard from "@/components/InfoCard";
import FilterGallery from "@/components/FilterGallery";
import { garageAreas, garageFeatures } from "@/lib/data";

export const metadata: Metadata = {
  title: "Garage Cabinets | Original Closets",
  description:
    "Custom garage cabinets, wall storage and workbenches designed and installed in the GTA.",
};

export default function GaragesPage() {
  return (
    <>
      <PageHero title="GARAGES" image="/images/hero/garages.jpg" />

      <section className="max-w-5xl mx-auto px-4 py-12">
        <SectionTitle title="MAKE THE MOST OF YOUR GARAGE" />
        <p className="text-sm leading-relaxed -mt-4">
          Your garage is more than a place to park. We design and install custom
          cabinets, wall storage and workbenches that keep your tools, sports
          gear and seasonal items organized and off the floor. Every system is
          made to fit your space and built to last.
        </p>

        <div className="grid gap-4 md:grid-cols-3 mt-10">
          {garageAreas.map((g) => (
            <ServiceCard
              key={g.title}
              title={g.title}
              image={g.image}
              href="#gallery"
            />
          ))}
        </div>
      </section>

      <CtaBand />

      <section className="max-w-5xl mx-auto px-4 py-16">
        <SectionTitle title="FEATURES" />
        <div className="grid gap-6 md:grid-cols-3">
          {garageFeatures.map((f) => (
            <InfoCard
              key={f.title}
              title={f.title}
              image={f.image}
              text={f.text}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/contact"
            className="bg-teal text-white text-xs font-semibold px-6 py-2 rounded-full hover:opacity-90"
          >
            LEARN MORE
          </Link>
        </div>
      </section>

      <section
        id="gallery"
        className="max-w-5xl mx-auto px-4 pb-16 scroll-mt-4"
      >
        <SectionTitle title="GALLERY" />
        <FilterGallery categories={["Garage"]} />
      </section>
    </>
  );
}
