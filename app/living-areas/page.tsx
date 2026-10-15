import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import CtaBand from "@/components/CtaBand";
import FilterGallery from "@/components/FilterGallery";
import { livingAreas } from "@/lib/data";

export const metadata: Metadata = {
  title: "Living Areas | Original Closets",
  description:
    "Custom home offices, kitchen pantries, laundry rooms and wall beds designed and installed in the GTA.",
};

export default function LivingAreasPage() {
  return (
    <>
      <PageHero title="LIVING AREAS" image="/images/hero/living-areas.jpg" />

      <section className="max-w-5xl mx-auto px-4 py-12">
        <SectionTitle title="ORGANIZE EVERY ROOM OF YOUR HOME" />
        <p className="text-sm leading-relaxed -mt-4">
          From a quiet home office to a busy laundry room, we design custom
          storage that fits your space, your style and your budget. Every piece
          is made to measure and installed by our team.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 mt-10">
          {livingAreas.map((a) => (
            <ServiceCard
              key={a.title}
              title={a.title}
              image={a.image}
              href="#gallery"
            />
          ))}
        </div>
      </section>

      <CtaBand />

      <section
        id="gallery"
        className="max-w-5xl mx-auto px-4 py-16 scroll-mt-4"
      >
        <SectionTitle title="GALLERY" />
        <FilterGallery
          categories={["Home Office", "Pantry", "Laundry", "Murphy Beds"]}
        />
      </section>
    </>
  );
}
