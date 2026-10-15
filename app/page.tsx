import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import CtaBand from "@/components/CtaBand";

export default function Home() {
  return (
    <>
      <PageHero title="CLOSETS" image="/images/hero.jpg" />

      <section className="max-w-6xl mx-auto px-4 py-16">
        <SectionTitle
          title="OUR SERVICES"
          subtitle="Explore our range of solutions for a well-organized home."
        />
        <div className="grid gap-4 md:grid-cols-3">
          <ServiceCard
            title="CLOSETS"
            image="/images/closets.jpg"
            href="/closets"
          />
          <ServiceCard
            title="CLOSETS"
            image="/images/closets.jpg"
            href="/closets"
          />
          <ServiceCard
            title="CLOSETS"
            image="/images/closets.jpg"
            href="/closets"
          />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
