import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import ServicesSection from "@/components/ServicesSection";

export const metadata: Metadata = {
  title: "Contact Us | Original Closets",
  description: "Get a free consultation for custom closets and storage solutions in the GTA.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="CONTACT" image="/images/hero/contact.jpg" />

      <section className="max-w-6xl mx-auto px-4 py-12">
        <p className="text-navy mb-6">
          We are available to answer all your questions, please fill the form below and we will get
          back to you as soon as possible.
        </p>
        <ContactForm />

        <p className="text-navy text-center mt-8">
          Need a faster answer? Give us a call and you can speak to someone from our team right away
        </p>
        <a href="tel:1111111111" className="block text-center text-navy text-2xl font-semibold mt-2">
          (111) 111-1111
        </a>
      </section>

      <iframe
        title="Map"
        src="https://www.google.com/maps?q=Toronto,+ON&output=embed"
        className="w-full h-[300px] border-0"
        loading="lazy"
      />

      <ServicesSection />
    </>
  );
}