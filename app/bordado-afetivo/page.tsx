import type { Metadata } from "next";
import PackDecor from "@/components/brand/PackDecor";
import WhatsAppCta from "@/components/WhatsAppCta";
import { offeringsBySegment } from "@/src/data/offerings";
import { SITE } from "@/src/lib/site";
import { buildWhatsAppLink } from "@/src/lib/whatsapp";

export const metadata: Metadata = {
  title: "Bordado Afetivo Personalizado | Bastidores, Porta-Maternidade e Enxoval",
  description:
    "Bordados afetivos sob medida: porta-maternidade, porta-alianças, bastidores e peças únicas com significado.",
  alternates: { canonical: "/bordado-afetivo/" },
  openGraph: {
    title: "Bordado Afetivo Personalizado | Bastidores, Porta-Maternidade e Enxoval",
    description:
      "Bordados afetivos sob medida: porta-maternidade, porta-alianças, bastidores e peças únicas com significado.",
    url: "/bordado-afetivo/",
  },
};

export default function BordadoAfetivoPage() {
  const { servicos: manualServices, itens } = offeringsBySegment.afetivo;

  const whatsappLink = buildWhatsAppLink({
    phone: SITE.whatsapp,
    context: "servico",
    itemTitle: "Bordado afetivo (manual ou computadorizado)",
  });

  return (
    <main className="py-2 md:py-4">
      <section className="relative isolate overflow-hidden px-6 py-16 md:py-24">
        <PackDecor />
        <div className="relative z-10 mx-auto !max-w-5xl rounded-[3rem] rounded-br-none border-4 border-foreground bg-secondary p-8 text-center shadow-[16px_16px_0px_0px_rgba(22,22,22,0.35)] dark:bg-deep-green dark:shadow-[12px_12px_0px_0px_rgba(229,229,229,0.24)] md:p-14">
          <h1 className="mb-5 font-brand text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
            Bordado Afetivo - Computadorizado e Manual
          </h1>
          <p className="mx-auto max-w-3xl text-base font-medium text-foreground/90 md:text-xl">
            Transformamos lembranças em bordados exclusivos com acabamento manual.
            Desenvolvemos peças afetivas para presentes, cerimônias e decoração,
            sempre com proposta personalizada.
          </p>
          <WhatsAppCta
            href={whatsappLink}
            label="Pedir orçamento no WhatsApp"
            className="mt-6"
          />
        </div>
      </section>

      <section className="glass-panel space-y-4 p-6 md:p-8">
        <h2 className="section-title">Bordados Afetivos</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {manualServices.map((service) => (
            <article key={service.id} className="group rounded-xl border-2 border-foreground/55 bg-surface/95 p-4">
              <div className="relative mb-3 aspect-[4/3] overflow-hidden rounded-lg border border-foreground/30 bg-gradient-to-br from-deep-purple/60 to-deep-teal/60">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="text-base font-semibold">{service.title}</h3>
              <p className="soft-text mt-2 text-sm">{service.description}</p>
              <ul className="mt-3 space-y-1 text-xs text-foreground/85">
                <li><strong>Projeto:</strong> {service.what}</li>
                <li><strong>Peça base:</strong> {service.where}</li>
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
                <ul className="mt-3 space-y-1 text-xs text-foreground/85">
                  <li><strong>Categoria:</strong> {item.tags.slice(0, 2).join(" · ")}</li>
                  <li><strong>Canal:</strong> WhatsApp</li>
                  <li><strong>Atendimento:</strong> Sob encomenda</li>
                  <li><strong>Histórico:</strong> {item.displayOrders}</li>
                </ul>
                <div className="mt-4">
                  <WhatsAppCta
                    href={buildWhatsAppLink({
                      phone: SITE.whatsapp,
                      context: "servico",
                      itemTitle: item.title,
                    })}
                    label="Solicitar pelo WhatsApp"
                  />
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}



