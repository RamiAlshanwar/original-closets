import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import FilterGallery from "@/components/FilterGallery";

export const metadata: Metadata = {
  title: "Gallery | Original Closets",
  description:
    "See our custom closets, home offices, pantries, laundry rooms, murphy beds and garage projects.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero title="GALLERY" image="/images/hero/gallery.jpg" />
      <section className="max-w-6xl mx-auto px-4 py-12">
        <SectionTitle title="GALLERY" />
        <FilterGallery
          categories={[
            "Walk-in",
            "Reach-in",
            "Wardrobe",
            "Home Office",
            "Laundry",
            "Pantry",
            "Murphy Beds",
            "Garage",
          ]}
        />
      </section>
    </>
  );
}
