import type { Metadata } from "next";
import WhatsAppCta from "@/components/WhatsAppCta";
import { offeringsBySegment } from "@/src/data/offerings";
import { SITE } from "@/src/lib/site";
import { buildWhatsAppLink } from "@/src/lib/whatsapp";

export const metadata: Metadata = {
  title:
    "Bordado Afetivo Personalizado | Bastidores, Porta-Maternidade e Enxoval",
  description:
    "Bordados afetivos sob medida: porta-maternidade, porta-alianças, bastidores e peças únicas com significado.",
  alternates: { canonical: "/bordado-afetivo/" },
  openGraph: {
    title:
      "Bordado Afetivo Personalizado | Bastidores, Porta-Maternidade e Enxoval",
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
    <main className="space-y-8 py-2 md:py-4">
      <section className="rounded-2xl border border-brand-purple/45 bg-gradient-to-r from-deep-purple to-brand-dark p-6 md:p-8">
        <h1 className="headline">Bordado Afetivo - Computadorizado e Manual</h1>
        <p className="soft-text mt-4 max-w-3xl">
          Transformamos lembranças em bordados exclusivos com acabamento manual.
          Desenvolvemos peças afetivas para presentes, cerimônias e decoração,
          sempre com proposta personalizada.
        </p>
        <WhatsAppCta
          href={whatsappLink}
          label="Pedir orçamento no WhatsApp"
          className="mt-4"
        />
      </section>

      <section className="glass-panel space-y-4 p-6 md:p-8">
        <h2 className="section-title">Bordados Afetivos</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {manualServices.map((service) => (
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
              <h3 className="text-base font-semibold">{service.title}</h3>
              <p className="soft-text mt-2 text-sm">{service.description}</p>
              <ul className="mt-3 space-y-1 text-xs text-brand-light/85">
                <li>
                  <strong>Projeto:</strong> {service.what}
                </li>
                <li>
                  <strong>Peça base:</strong> {service.where}
                </li>
                <li>
                  <strong>Prazo médio:</strong> {service.leadTime}
                </li>
                <li>
                  <strong>Pedido mínimo:</strong> {service.minimumOrder}
                </li>
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
                <ul className="mt-3 space-y-1 text-xs text-brand-light/85">
                  <li>
                    <strong>Categoria:</strong> {item.tags.slice(0, 2).join(" · ")}
                  </li>
                  <li>
                    <strong>Canal:</strong> WhatsApp
                  </li>
                  <li>
                    <strong>Atendimento:</strong> Sob encomenda
                  </li>
                  <li>
                    <strong>Histórico:</strong> {item.displayOrders}
                  </li>
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
