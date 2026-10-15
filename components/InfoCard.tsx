import Image from "next/image";

type Props = { title: string; image: string; text: string };

export default function InfoCard({ title, image, text }: Props) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-navy font-semibold text-sm">{title}</h3>
        <div className="w-6 h-0.5 bg-navy mt-1 mb-3" />
        <p className="text-sm text-center leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
