import type { Metadata } from "next";
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
    tone: "from-brand-purple/25 to-deep-purple",
    description: "Portfólio, bastidores e novidades.",
    cta: "Ver Instagram oficial →",
  },
  {
    label: "Facebook",
    href: SITE.socials.facebook,
    tone: "from-brand-teal/25 to-deep-teal",
    description: "Página oficial e atualizações.",
    cta: "Abrir Facebook oficial →",
  },
  {
    label: "Shopee",
    href: SITE.socials.shopee,
    tone: "from-brand-green/25 to-deep-green",
    description: "Patches e kits com envio para todo o Brasil.",
    cta: "Comprar na Shopee →",
  },
];

export default function LinksPage() {
  return (
    <main className="space-y-6 py-2 md:py-4">
      <section className="glass-panel p-6 md:p-8">
        <h1 className="headline">Links Oficiais da Trilinha Bordados</h1>
        <p className="soft-text mt-3">
          Acesse nossos canais verificados para orçamentos de bordado
          computadorizado e compra de patches bordados.
        </p>
      </section>

      <section className="glass-panel p-6 md:p-8">
        <div className="grid gap-4 md:grid-cols-3">
          {officialLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-xl border border-brand-light/20 bg-gradient-to-br ${item.tone} p-5 transition hover:border-accent-teal`}
            >
              <h2 className="text-lg font-semibold">{item.label}</h2>
              <p className="mt-2 text-sm text-brand-light/90">
                {item.description}
              </p>
              <p className="mt-3 text-sm font-semibold text-accent-teal">
                {item.cta}
              </p>
            </a>
          ))}
        </div>
      </section>

      <section className="glass-panel p-4 md:p-5">
        <p className="text-sm text-brand-light/85">
          Para sua segurança, estes são os únicos links oficiais da Trilinha
          Bordados.
        </p>
      </section>
    </main>
  );
}
