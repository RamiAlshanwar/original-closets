import Link from "next/link";

export default function CtaBand() {
  return (
    <section className="bg-light py-12">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8">
        <h2 className="text-navy text-2xl md:text-3xl font-semibold text-center leading-snug md:pr-12 md:border-r md:border-navy/40">
          CUSTOM DESIGNED TO
          <br />
          FIT YOUR NEEDS &amp; BUDGET
        </h2>
        <Link
          href="/contact"
          className="bg-teal text-white text-xs font-semibold px-6 py-2 rounded-full hover:opacity-90"
        >
          CONTACT US
        </Link>
      </div>
    </section>
  );
}