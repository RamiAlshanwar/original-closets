import Image from "next/image";

type Props = { title: string; image: string };

export default function PageHero({ title, image }: Props) {
  return (
    <section className="relative h-[250px] md:h-[400px] flex items-center justify-center">
      <Image src={image} alt={title} fill priority className="object-cover" />
      <div className="absolute inset-0 bg-black/10" />
      <h1 className="relative text-white text-5xl md:text-7xl font-bold drop-shadow-[3px_3px_4px_rgba(0,0,0,0.6)]">
        {title}
      </h1>
    </section>
  );
}
