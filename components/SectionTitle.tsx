type Props = { title: string; subtitle?: string };

export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-navy text-3xl font-semibold">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-sm uppercase tracking-wide">{subtitle}</p>
      )}
    </div>
  );
}
