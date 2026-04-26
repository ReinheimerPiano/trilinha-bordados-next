import Link from "next/link";
import { homeSpecialties } from "@/src/data/home";

export default function SpecialtiesSection() {
  return (
    <section className="section section-alt">
      <div className="wrap">
        <div className="section-header">
          <p className="section-label">O que fazemos</p>
          <h2>Três especialidades, um cuidado único</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {homeSpecialties.map((segment) => (
            <Link
              key={segment.id}
              href={segment.href}
              className="service-card no-underline"
            >
              <div className="service-img">
                <img
                  src={segment.image}
                  alt={segment.title}
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3
                  className="text-ink"
                  style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}
                >
                  {segment.title}
                </h3>
                <p
                  className="text-ink2"
                  style={{ fontSize: 14, lineHeight: 1.55, marginBottom: 16 }}
                >
                  {segment.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {segment.tags.map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
                <span
                  className="btn-outline mt-auto self-start"
                  style={{ padding: "8px 18px", fontSize: 13 }}
                >
                  Saiba mais →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
