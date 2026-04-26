import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/src/lib/site";

export const metadata: Metadata = {
  title: "Links Oficiais | Trilinha Bordados",
  description: "Instagram, Facebook e Shopee oficiais da Trilinha Bordados.",
  alternates: { canonical: "/links/" },
  openGraph: {
    title: "Links Oficiais | Trilinha Bordados",
    description: "Instagram, Facebook e Shopee oficiais da Trilinha Bordados.",
    url: "/links/",
  },
};

const officialLinks = [
  {
    label: "Instagram",
    href: SITE.socials.instagram,
    description: "Portfólio, bastidores e novidades.",
    cta: "Ver Instagram oficial →",
    color: "#E1306C",
  },
  {
    label: "Facebook",
    href: SITE.socials.facebook,
    description: "Página oficial e atualizações.",
    cta: "Abrir Facebook oficial →",
    color: "#1877F2",
  },
  {
    label: "Shopee",
    href: SITE.socials.shopee,
    description: "Patches e kits com envio para todo o Brasil.",
    cta: "Comprar na Shopee →",
    color: "#EE4D2D",
  },
];

export default function LinksPage() {
  return (
    <main>
      <section
        className="relative isolate overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, var(--cream) 0%, var(--cream2) 100%)",
          padding: "64px 0 48px",
        }}
      >
        <div className="wrap">
          <p
            className="text-ink3"
            style={{ fontSize: 13, marginBottom: 16 }}
          >
            <Link href="/" className="hover:text-teal-brand">
              Início
            </Link>{" "}
            →{" "}
            <span className="text-teal-brand" style={{ fontWeight: 500 }}>
              Links oficiais
            </span>
          </p>
          <p className="section-label">Links oficiais</p>
          <h1
            className="text-ink"
            style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 700,
              margin: "8px 0 16px",
              maxWidth: 720,
              lineHeight: 1.15,
            }}
          >
            Links oficiais da Trilinha Bordados
          </h1>
          <p
            className="text-ink2"
            style={{ fontSize: 17, maxWidth: 600, lineHeight: 1.6 }}
          >
            Acesse nossos canais verificados para orçamentos de bordado e
            compra de patches bordados.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid gap-6 md:grid-cols-3">
          {officialLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="service-card no-underline"
            >
              <div className="flex flex-1 flex-col p-7">
                <span
                  className="mb-3 inline-flex w-fit rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    background: `${item.color}15`,
                    color: item.color,
                  }}
                >
                  {item.label}
                </span>
                <h2
                  className="text-ink"
                  style={{ fontSize: 22, fontWeight: 600, marginBottom: 10 }}
                >
                  {item.label}
                </h2>
                <p
                  className="text-ink2"
                  style={{ fontSize: 14, lineHeight: 1.55, marginBottom: 18 }}
                >
                  {item.description}
                </p>
                <span
                  className="mt-auto text-[14px] font-semibold"
                  style={{ color: item.color }}
                >
                  {item.cta}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div
          className="wrap text-center text-ink2"
          style={{ fontSize: 14 }}
        >
          Para sua segurança, estes são os únicos links oficiais da Trilinha
          Bordados.
        </div>
      </section>
    </main>
  );
}
