import Link from "next/link";
import type { HomeServiceSegment } from "@/src/data/offerings";

type ServiceSegmentsSectionProps = {
  segments: HomeServiceSegment[];
};

export default function ServiceSegmentsSection({
  segments,
}: ServiceSegmentsSectionProps) {
  return (
    <section className="glass-panel !mt-0 space-y-4 p-6 md:p-8">
      <div className="flex items-center justify-between gap-3">
        <h2 className="section-title">Principais serviços por segmento</h2>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {segments.map((segment) => (
          <article
            key={segment.title}
            className="group rounded-xl border-2 border-foreground/55 bg-surface/94 p-5"
          >
            <div className="relative mb-3 aspect-[4/3] overflow-hidden rounded-lg border border-foreground/30 bg-gradient-to-br from-deep-purple/60 to-deep-teal/60">
              <img
                src={segment.image}
                alt={segment.title}
                className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <h3 className="text-base font-semibold">{segment.title}</h3>
            <p className="soft-text mt-2 text-sm">{segment.description}</p>
            <ul className="mt-3 space-y-1 text-sm text-foreground/85">
              {segment.highlights.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
            <Link
              href={segment.href}
              className="mt-4 inline-flex rounded-full border border-border/30 px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-surface/70"
            >
              {segment.cta}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
