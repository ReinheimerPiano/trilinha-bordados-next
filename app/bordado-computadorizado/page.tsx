import type { Metadata } from "next";
import PackDecor from "@/components/brand/PackDecor";
import WhatsAppCta from "@/components/WhatsAppCta";
import { offeringsBySegment } from "@/src/data/offerings";
import { SITE } from "@/src/lib/site";
import { buildWhatsAppLink } from "@/src/lib/whatsapp";

export const metadata: Metadata = {
  title: "Bordado Computadorizado em Maringá | Uniformes, Jalecos e Enxoval",
  description:
    "Serviços de bordado em uniforme escolar e profissional, cama mesa e banho, enxoval de bebê, cozinha e peças pessoais. Orçamento rápido.",
  alternates: { canonical: "/bordado-computadorizado/" },
  openGraph: {
    title: "Bordado Computadorizado em Maringá | Uniformes, Jalecos e Enxoval",
    description:
      "Serviços de bordado em uniforme escolar e profissional, cama mesa e banho, enxoval de bebê, cozinha e peças pessoais. Orçamento rápido.",
    url: "/bordado-computadorizado/",
  },
};

export default function BordadoComputadorizadoPage() {
  const { servicos: machineServices, itens } = offeringsBySegment.computadorizado;

  const whatsappLink = buildWhatsAppLink({
    phone: SITE.whatsapp,
    context: "servico",
    itemTitle: "Bordado computadorizado",
  });

  return (
    <main className="py-2 md:py-4">
      <section className="relative isolate overflow-hidden px-6 py-16 md:py-24">
        <PackDecor accent="teal" />
        <div className="relative z-10 mx-auto !max-w-5xl rounded-[3rem] rounded-br-none border-4 border-foreground bg-primary p-8 text-center shadow-[16px_16px_0px_0px_rgba(22,22,22,0.35)] dark:bg-deep-teal dark:shadow-[12px_12px_0px_0px_rgba(229,229,229,0.24)] md:p-14">
          <h1 className="mb-5 font-brand text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
            Serviços de Bordado Computadorizado (máquina)
          </h1>
          <p className="mx-auto max-w-3xl text-base font-medium text-foreground/90 md:text-xl">
            Foco em uniforme escolar e profissional, cama mesa e banho, enxoval de
            bebê, cozinha e peças pessoais. Atendemos peça unitária e também lotes
            com desconto por quantidade.
          </p>
          <WhatsAppCta
            href={whatsappLink}
            label="Pedir orçamento no WhatsApp"
            className="mt-6"
          />
        </div>
      </section>

      <section className="glass-panel space-y-4 p-6 md:p-8">
        <h2 className="section-title">Serviços de Bordado Computadorizado (máquina)</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {machineServices.map((service) => (
            <article key={service.id} className="group rounded-xl border-2 border-foreground/55 bg-surface/95 p-4">
              <div className="relative mb-3 aspect-[4/3] overflow-hidden rounded-lg border border-foreground/30 bg-gradient-to-br from-deep-purple/60 to-deep-teal/60">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="mb-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="mr-2 rounded-full bg-brand-teal/20 px-2.5 py-1 text-xs font-semibold text-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-base font-semibold">{service.title}</h3>
              <p className="soft-text mt-2 text-sm">{service.description}</p>
              <ul className="mt-3 space-y-1 text-xs text-foreground/85">
                <li><strong>O que borda:</strong> {service.what}</li>
                <li><strong>Onde borda:</strong> {service.where}</li>
                <li><strong>Prazo médio:</strong> {service.leadTime}</li>
                <li><strong>Pedido mínimo:</strong> {service.minimumOrder}</li>
              </ul>
              <div className="mt-4">
                <WhatsAppCta
                  href={buildWhatsAppLink({
                    phone: SITE.whatsapp,
                    context: "servico",
                    itemTitle: service.title,
                  })}
                  label="Solicitar pelo WhatsApp"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      {itens.length > 0 ? (
        <section className="glass-panel space-y-4 p-6 md:p-8">
          <h2 className="section-title">Itens do Segmento</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {itens.map((item) => (
              <article key={item.id} className="group rounded-xl border-2 border-foreground/55 bg-surface/95 p-4">
                {item.image ? (
                  <div className="relative mb-3 aspect-[4/3] overflow-hidden rounded-lg border border-foreground/30 bg-gradient-to-br from-deep-purple/60 to-deep-teal/60">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ) : null}
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="soft-text mt-2 text-sm">{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}



