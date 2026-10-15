import Image from "next/image";
import Link from "next/link";

type Props = { title: string; image: string; href: string };

export default function ServiceCard({ title, image, href }: Props) {
  return (
    <Link href={href} className="group relative block h-56 rounded-lg overflow-hidden shadow-md">
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition duration-300 group-hover:scale-105"
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="bg-navy/90 text-white font-semibold px-3 py-1 rounded-md">
          {title}
        </span>
      </span>
    </Link>
  );
}