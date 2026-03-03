import type { Metadata } from "next";
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
  const { servicos: machineServices, itens } =
    offeringsBySegment.computadorizado;

  const whatsappLink = buildWhatsAppLink({
    phone: SITE.whatsapp,
    context: "servico",
    itemTitle: "Bordado computadorizado",
  });

  return (
    <main className="space-y-8 py-2 md:py-4">
      <section className="rounded-2xl border border-brand-light/20 bg-gradient-to-r from-deep-green to-deep-teal p-6 md:p-8">
        <h1 className="headline">Serviços de Bordado Computadorizado (máquina)</h1>
        <p className="soft-text mt-4 max-w-3xl">
          Foco em uniforme escolar e profissional, cama mesa e banho, enxoval de
          bebê, cozinha e peças pessoais. Atendemos peça unitária e também lotes
          com desconto por quantidade.
        </p>
        <WhatsAppCta
          href={whatsappLink}
          label="Pedir orçamento no WhatsApp"
          className="mt-4"
        />
      </section>

      <section className="glass-panel space-y-4 p-6 md:p-8">
        <h2 className="section-title">Serviços de Bordado Computadorizado (máquina)</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {machineServices.map((service) => (
            <article
              key={service.id}
              className="group rounded-xl border border-brand-light/15 bg-brand-light/5 p-4"
            >
              <div className="relative mb-3 aspect-[4/3] overflow-hidden rounded-lg border border-brand-light/10 bg-gradient-to-br from-deep-purple/60 to-deep-teal/60">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="mb-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="mr-2 rounded-full bg-brand-teal/20 px-2.5 py-1 text-xs font-semibold text-brand-light"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-base font-semibold">{service.title}</h3>
              <p className="soft-text mt-2 text-sm">{service.description}</p>
              <ul className="mt-3 space-y-1 text-xs text-brand-light/85">
                <li>
                  <strong>O que borda:</strong> {service.what}
                </li>
                <li>
                  <strong>Onde borda:</strong> {service.where}
                </li>
                <li>
                  <strong>Prazo médio:</strong> {service.leadTime}
                </li>
                <li>
                  <strong>Pedido mínimo:</strong> {service.minimumOrder}
                </li>
              </ul>
            </article>
          ))}
        </div>
      </section>

      {itens.length > 0 ? (
        <section className="glass-panel space-y-4 p-6 md:p-8">
          <h2 className="section-title">Itens do Segmento</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {itens.map((item) => (
              <article
                key={item.id}
                className="group rounded-xl border border-brand-light/15 bg-brand-light/5 p-4"
              >
                {item.image ? (
                  <div className="relative mb-3 aspect-[4/3] overflow-hidden rounded-lg border border-brand-light/10 bg-gradient-to-br from-deep-purple/60 to-deep-teal/60">
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
