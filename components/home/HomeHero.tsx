import StackedCards from "@/components/home/StackedCards";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { homeStackedImages } from "@/src/data/home";
import { SITE } from "@/src/lib/site";

type HomeHeroProps = {
  whatsappLink: string;
};

export default function HomeHero({ whatsappLink }: HomeHeroProps) {
  return (
    <section
      className="relative isolate overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, var(--cream) 0%, var(--cream2) 100%)",
        padding: "80px 0 64px",
      }}
    >
      <div className="wrap grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <span
            className="mb-5 inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.08em]"
            style={{ background: "var(--green-l)", color: "var(--green)" }}
          >
            <span aria-hidden="true">🧵</span>
            De Maringá para todo o Brasil
          </span>

          <h1
            className="text-ink"
            style={{
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: 700,
              marginBottom: 20,
              textWrap: "pretty",
              lineHeight: 1.1,
            }}
          >
            Bordados que contam histórias, patches que marcam identidade
          </h1>

          <p
            className="text-ink2"
            style={{
              fontSize: 17,
              maxWidth: 480,
              marginBottom: 32,
              lineHeight: 1.65,
            }}
          >
            De bordado computadorizado em uniformes e patches ao bordado artesanal
            para seu momento ideal — a Trilinha entrega precisão e afeto em cada ponto.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa"
            >
              <WhatsAppIcon size={18} />
              Pedir orçamento grátis
            </a>
            <a
              href={SITE.socials.shopee}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <span aria-hidden="true">🛍️</span>
              Ver patches na Shopee
            </a>
          </div>

          <div
            className="mt-7 flex flex-wrap gap-6 border-t pt-6"
            style={{ borderColor: "var(--cream3)" }}
          >
            <div className="flex flex-col">
              <strong
                className="font-display text-teal-brand"
                style={{ fontSize: 28, fontWeight: 700 }}
              >
                250+
              </strong>
              <span className="text-ink3 text-[12px]">Vendas concluídas</span>
            </div>
            <div className="flex flex-col">
              <strong
                className="font-display text-teal-brand"
                style={{ fontSize: 28, fontWeight: 700 }}
              >
                5★
              </strong>
              <span className="text-ink3 text-[12px]">Avaliação média</span>
            </div>
            <div className="flex flex-col">
              <strong
                className="font-display text-teal-brand"
                style={{ fontSize: 28, fontWeight: 700 }}
              >
                4+
              </strong>
              <span className="text-ink3 text-[12px]">Anos de experiência</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <StackedCards images={homeStackedImages} />
        </div>
      </div>
    </section>
  );
}
