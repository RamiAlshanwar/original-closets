import SectionTitle from "./SectionTitle";
import ServiceCard from "./ServiceCard";
import { services } from "@/lib/data";

export default function ServicesSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <SectionTitle title="OUR SERVICES" subtitle="Explore our range of solutions for a well-organized home." />
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {services.map((s) => (
          <ServiceCard key={s.title} title={s.title} image={s.image} href={s.href} />
        ))}
      </div>
    </section>
  );
}