import WhatsAppCta from "@/components/WhatsAppCta";
import PackDecor from "@/components/brand/PackDecor";
import { asset } from "@/src/lib/asset";
import { SITE } from "@/src/lib/site";

type HomeHeroProps = {
  whatsappLink: string;
};

export default function HomeHero({ whatsappLink }: HomeHeroProps) {
  return (
    <section className="hero-contained relative isolate overflow-hidden rounded-[2rem] px-6 py-14 md:py-20">
      <PackDecor accent="teal" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[10%] top-16 -z-10 h-24 w-24 animate-pulse rounded-full border-4 border-secondary/45 opacity-35"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[6%] top-28 -z-10 h-16 w-16 rotate-45 border-4 border-tertiary/60 opacity-35"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 left-[18%] -z-10 h-32 w-32 rounded-full bg-quaternary/20 blur-2xl"
      />

      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
        <div className="relative z-10">
          <div className="-rotate-2 mb-5 inline-block bg-tertiary px-4 py-1 text-xs font-bold uppercase tracking-wide text-foreground shadow-[4px_4px_0px_0px_#161616]">
            {SITE.city} · Bordado e Patches · Envio Brasil
          </div>

          <h1 className="headline text-[1.6rem] leading-tight md:text-[2.3rem] lg:text-[3rem]">
            Bordado Computadorizado, Patches e Afetivos para todas as ocasiões
          </h1>

          <p className="soft-text mt-5 max-w-xl text-base md:text-lg">
            <span>
              Solicite{" "}
              <strong>Serviços e Produtos Bordados pelo WhatsApp</strong>{" "}
            </span>
            <span>
              ou Compre <strong>Produtos Prontos na Shopee</strong>
            </span>
          </p>

          <ul className="mt-5 space-y-1.5 text-sm text-foreground/90 md:text-base">
            <li>- Computadorizado: uma infinidade de aplicaçoes e projetos</li>
            <li>- Patches: termocolante ou velcro (P/M/G/GG)</li>
            <li>
              - Afetivos: aquela lembrança especial para pessoas e momentos
              especiais
            </li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <WhatsAppCta
              href={whatsappLink}
              label="Pedir Orçamento no WhatsApp"
              className="h-14 px-8 text-base"
            />
            <a
              href={SITE.socials.shopee}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shopee h-14 px-8 text-base"
            >
              Ver Produtos na Shopee
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10 overflow-hidden rounded-[2.5rem] rounded-tl-none border-4 border-foreground bg-surface p-2 shadow-[12px_12px_0px_0px_rgba(85,170,109,0.55)]">
            <img
              src={asset("/images/bg-rigth-hero.png")}
              alt="Máquina de bordado em operação no ateliê"
              className="aspect-square w-full rounded-[2.2rem] rounded-tl-none object-cover grayscale transition-all duration-300 hover:grayscale-0"
              loading="eager"
            />
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-8 -right-8 -z-10 h-full w-full rounded-[2.5rem] rounded-br-none bg-accent/20"
          />
        </div>
      </div>
    </section>
  );
}
