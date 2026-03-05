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
    tone: "bg-accent/22 dark:bg-deep-purple/88",
    description: "Portfólio, bastidores e novidades.",
    cta: "Ver Instagram oficial ->",
  },
  {
    label: "Facebook",
    href: SITE.socials.facebook,
    tone: "bg-primary/22 dark:bg-deep-teal/88",
    description: "Página oficial e atualizações.",
    cta: "Abrir Facebook oficial ->",
  },
  {
    label: "Shopee",
    href: SITE.socials.shopee,
    tone: "bg-secondary/22 dark:bg-deep-green/88",
    description: "Patches e kits com envio para todo o Brasil.",
    cta: "Comprar na Shopee ->",
  },
];

export default function LinksPage() {
  return (
    <main className="py-2 md:py-4">
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
              className={`group rounded-[2rem] rounded-br-none border-4 border-foreground ${item.tone} p-5 shadow-[8px_8px_0px_0px_rgba(22,22,22,0.28)] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[10px_10px_0px_0px_rgba(22,22,22,0.33)] dark:shadow-[7px_7px_0px_0px_rgba(229,229,229,0.22)] dark:hover:shadow-[9px_9px_0px_0px_rgba(229,229,229,0.3)]`}
            >
              <h2 className="text-lg font-semibold text-foreground">{item.label}</h2>
              <p className="mt-2 text-sm text-foreground/90">
                {item.description}
              </p>
              <p className="mt-3 text-sm font-semibold text-deep-purple transition-colors group-hover:text-violet dark:text-brand-purple dark:group-hover:text-accent">
                {item.cta}
              </p>
            </a>
          ))}
        </div>
      </section>

      <section className="glass-panel p-4 md:p-5">
        <p className="text-sm text-foreground/85">
          Para sua segurança, estes são os únicos links oficiais da Trilinha
          Bordados.
        </p>
      </section>
    </main>
  );
}

