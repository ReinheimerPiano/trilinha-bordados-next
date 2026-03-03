import Link from "next/link";
import type { HomeServiceSegment } from "@/src/data/offerings";

type ServiceSegmentsSectionProps = {
  segments: HomeServiceSegment[];
};

export default function ServiceSegmentsSection({
  segments,
}: ServiceSegmentsSectionProps) {
  return (
    <section className="glass-panel space-y-4 p-6 md:p-8">
      <div className="flex items-center justify-between gap-3">
        <h2 className="section-title">Principais serviços por segmento</h2>
        <Link
          href="/links/"
          className="text-sm font-semibold text-accent-teal hover:text-brand-teal"
        >
          Ver canais oficiais →
        </Link>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {segments.map((segment) => (
          <article
            key={segment.title}
            className="group rounded-xl border border-brand-light/15 bg-deep-purple/35 p-5"
          >
            <div className="relative mb-3 aspect-[4/3] overflow-hidden rounded-lg border border-brand-light/10 bg-gradient-to-br from-deep-purple/60 to-deep-teal/60">
              <img
                src={segment.image}
                alt={segment.title}
                className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <h3 className="text-base font-semibold">{segment.title}</h3>
            <p className="soft-text mt-2 text-sm">{segment.description}</p>
            <ul className="mt-3 space-y-1 text-sm text-brand-light/85">
              {segment.highlights.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <Link
              href={segment.href}
              className="mt-4 inline-flex rounded-full border border-brand-light/40 px-4 py-2 text-sm font-semibold text-brand-light transition hover:bg-brand-light/10"
            >
              {segment.cta}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
