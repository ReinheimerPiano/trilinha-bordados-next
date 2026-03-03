import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import WhatsAppCta from "@/components/WhatsAppCta";
import { offeringsBySegment } from "@/src/data/offerings";
import { SITE } from "@/src/lib/site";
import { buildWhatsAppLink } from "@/src/lib/whatsapp";

export const metadata: Metadata = {
  title: "Patches Bordados | Termocolante e Velcro | Trilinha",
  description:
    "Patch com sua logo (P/M/G/GG), kits para colete motoclube e coleções. Compre na Shopee ou peça personalizado.",
  alternates: { canonical: "/patches-bordados/" },
  openGraph: {
    title: "Patches Bordados | Termocolante e Velcro | Trilinha",
    description:
      "Patch com sua logo (P/M/G/GG), kits para colete motoclube e coleções. Compre na Shopee ou peça personalizado.",
    url: "/patches-bordados/",
  },
};

const whatsappLink = buildWhatsAppLink({
  phone: SITE.whatsapp,
  context: "patches",
});

export default function PatchesBordadosPage() {
  const { servicos: patchServices, itens: produtosProntos } =
    offeringsBySegment.patch;

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: produtosProntos.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      url:
        item.shopeeUrl ||
        buildWhatsAppLink({
          phone: SITE.whatsapp,
          context: "patches",
          itemTitle: item.title,
        }),
    })),
  };

  return (
    <>
      <JsonLd data={itemList} />
      <main className="space-y-8 py-2 md:py-4">
        <section className="rounded-2xl border border-brand-purple/55 bg-gradient-to-r from-deep-purple to-brand-dark p-6 md:p-8">
          <h1 className="headline">Patches Bordados — Produtos Prontos e Personalizados</h1>
          <p className="soft-text mt-4 max-w-3xl">
            Catálogo ordenado por número de pedidos. Itens que ainda não estão
            na Shopee aparecem com status de lançamento e reserva via WhatsApp.
          </p>
          <WhatsAppCta
            href={whatsappLink}
            label="Pedir orçamento no WhatsApp"
            className="mt-4"
          />
        </section>

        <section className="glass-panel space-y-4 p-6 md:p-8">
          <h2 className="section-title">Serviços de Patch Bordado</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {patchServices.map((service) => (
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
                    <strong>Aplicação:</strong> {service.what}
                  </li>
                  <li>
                    <strong>Uso indicado:</strong> {service.where}
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
                      context: "patches",
                      itemTitle: service.title,
                    })}
                    label="Solicitar pelo WhatsApp"
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="glass-panel space-y-4 p-6 md:p-8">
          <h2 className="section-title">Produtos Prontos e Lançamentos</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {produtosProntos.map((item) => (
              <article
                key={item.id}
                className="group rounded-xl border border-brand-light/15 bg-brand-light/5 p-5"
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
                <div className="mb-2 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-brand-purple/20 px-2.5 py-1 text-xs font-semibold text-brand-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="soft-text mt-2 text-sm">{item.description}</p>
                <ul className="mt-3 space-y-1 text-xs text-brand-light/85">
                  <li>
                    <strong>Categoria:</strong> {item.tags.slice(0, 2).join(" · ")}
                  </li>
                  <li>
                    <strong>Disponibilidade:</strong>{" "}
                    {item.status === "na_shopee"
                      ? "Pronta na Shopee"
                      : "Em lançamento"}
                  </li>
                  <li>
                    <strong>Canal:</strong>{" "}
                    {item.status === "na_shopee"
                      ? "Shopee e WhatsApp"
                      : "WhatsApp"}
                  </li>
                  <li>
                    <strong>Demanda:</strong> {item.displayOrders} histórico
                  </li>
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  <WhatsAppCta
                    href={buildWhatsAppLink({
                      phone: SITE.whatsapp,
                      context: "patches",
                      itemTitle: item.title,
                    })}
                    label="Reservar no WhatsApp"
                  />
                  {item.status === "na_shopee" ? (
                    <a
                      href={item.shopeeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-shopee"
                    >
                      Ver na Shopee
                    </a>
                  ) : (
                    <span className="inline-flex rounded-full border border-accent-purple px-2.5 py-1 text-xs font-semibold text-accent-purple">
                      Em breve na Shopee
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
