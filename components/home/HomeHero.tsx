import WhatsAppCta from "@/components/WhatsAppCta";
import { SITE } from "@/src/lib/site";

type HomeHeroProps = {
  whatsappLink: string;
};

export default function HomeHero({ whatsappLink }: HomeHeroProps) {
  return (
    <section className="relative mt-0 overflow-hidden rounded-2xl border border-brand-teal/45 bg-gradient-to-br from-deep-purple via-deep-teal to-brand-dark p-6 shadow-glow md:p-10">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 -right-[10%] w-[62%] bg-cover bg-right opacity-20 blur-[1.5px] md:-right-[12%] md:opacity-25"
        style={{
          backgroundImage: "url('/images/bg-rigth-hero.png')",
          backgroundPosition: "right center",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/88 to-brand-dark/72"
      />
      <div className="relative z-10">
        <p className="mb-3 inline-flex rounded-full border border-brand-light/25 bg-brand-light/10 px-3 py-1 text-xs uppercase tracking-wider text-brand-light">
          Ateliê em {SITE.city} · Envio para todo o Brasil
        </p>
        <h1 className="headline">
          Trilinha Bordados — Patches, Bordado Computadorizado e Peças
          Personalizadas
        </h1>
        <p className="soft-text mt-4 max-w-3xl text-base md:text-lg">
          Patches prontos e kits na Shopee com envio para todo o Brasil.
          <br />
          Para bordado em jalecos, uniformes, polos, camisetas e moletons, faça
          orçamento rápido no WhatsApp.
        </p>
        <ul className="mt-4 space-y-1.5 text-sm text-brand-light/90 md:text-base">
          <li>• Patches: termocolante ou velcro • tamanhos P/M/G/GG</li>
          <li>• Serviço: bordado computadorizado (logo, brasão, nome, tags)</li>
          <li>• Personalizados: peças sob medida (camisetas, moletons e bastidores)</li>
        </ul>
        <div className="mt-5 flex flex-wrap gap-2">
          <a
            href={SITE.socials.shopee}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shopee"
          >
            Comprar patches na Shopee
          </a>
          <WhatsAppCta href={whatsappLink} label="Pedir orçamento no WhatsApp" />
        </div>
        <p className="mt-3 text-xs text-brand-light/75">
          Itens "em lançamento" podem ser reservados no WhatsApp antes de
          entrarem na Shopee.
        </p>
      </div>
    </section>
  );
}
