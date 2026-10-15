import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import {
  FaCanadianMapleLeaf,
  FaTools,
  FaRegCalendarCheck,
  FaRegThumbsUp,
  FaComments,
  FaPalette,
  FaCog,
} from "react-icons/fa";
import HeroSlider from "@/components/HeroSlider";
import Testimonials from "@/components/Testimonials";
import SectionTitle from "@/components/SectionTitle";
import CtaBand from "@/components/CtaBand";
import ServicesSection from "@/components/ServicesSection";
import InfoCard from "@/components/InfoCard";
import { closetTypes } from "@/lib/data";

const features = [
  { icon: FaCanadianMapleLeaf, label: "MADE IN CANADA" },
  { icon: FaTools, label: "100% CUSTOM DESIGN" },
  { icon: FaRegCalendarCheck, label: "ONE-DAY INSTALLATION" },
  { icon: FaRegThumbsUp, label: "SATISFACTION GUARANTEED" },
];

const steps = [
  {
    icon: FaComments,
    title: "CONSULTATION",
    text: "We will listen & discuss your needs to design your custom storage solution.",
  },
  {
    icon: FaPalette,
    title: "DESIGN",
    text: "This is when you get to choose the color, finishes, and features.",
  },
  {
    icon: FaCog,
    title: "MANUFACTURE",
    text: "We will make your design a reality by cutting and preparing the pieces at our local GTA facility.",
  },
  {
    icon: FaTools,
    title: "INSTALL",
    text: "Our team will come to your home and professionally install your new custom organization solution.",
  },
];

export default function Home() {
  return (
    <>
      {/* Temporary hero - becomes a slider in Step 6 */}
      <HeroSlider />

      {/* Why Original Closets */}
      <section className="max-w-5xl mx-auto px-4 py-12 text-center">
        <SectionTitle title="WHY ORIGINAL CLOSETS" />
        <p className="text-sm leading-relaxed -mt-4">
          Original Closets is a specialized carpentry company in Toronto with a
          focus on custom storage solutions for every room of your home or
          garage. We have more than 12 years experience in designing,
          manufacturing, and installing custom cabinets in your home or office
          at affordable prices. Our professionals will be pleased to offer
          creative ideas and services to assist you in designing your dream
          rooms! Give us a try, we guarantee you&apos;ll be pleased.
        </p>
        <p className="text-sm mt-4">
          We proudly serve the Greater Toronto Area (GTA) including the City of
          Toronto, Durham, Halton, Peel and York Regions.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {features.map((f) => (
            <div key={f.label} className="flex flex-col items-center gap-3">
              <f.icon size={48} className="text-navy" />
              <span className="text-xs">{f.label}</span>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />

      <ServicesSection />

      {/* Our Process */}
      <section className="bg-light py-16">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle
            title="OUR PROCESS"
            subtitle="We follow a simple & effective four-step process."
          />
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {steps.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-lg shadow-md p-6 text-center"
              >
                <s.icon size={24} className="text-navy mx-auto" />
                <h3 className="text-navy font-semibold mt-3">{s.title}</h3>
                <p className="text-sm mt-2 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Closets */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <SectionTitle
          title="CUSTOM CLOSETS"
          subtitle="Designed to fit your needs & budget"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {closetTypes.map((c) => (
            <InfoCard
              key={c.title}
              title={c.title}
              image={c.image}
              text={c.text}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/closets"
            className="bg-teal text-white text-xs font-semibold px-6 py-2 rounded-full hover:opacity-90"
          >
            LEARN MORE
          </Link>
        </div>
      </section>
      <Testimonials />
      <section className="max-w-6xl mx-auto px-4 py-16">
        <SectionTitle title="CONTACT US" />
        <ContactForm />
      </section>
    </>
  );
}
