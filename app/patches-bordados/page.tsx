import type { Metadata } from "next";
import PackDecor from "@/components/brand/PackDecor";
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
  const { servicos: patchServices, itens: produtosProntos } = offeringsBySegment.patch;

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
      <main className="py-2 md:py-4">
        <section className="relative isolate overflow-hidden px-6 py-16 md:py-24">
          <PackDecor />
          <div className="relative z-10 mx-auto !max-w-5xl rounded-[3rem] rounded-br-none border-4 border-foreground bg-accent p-8 text-center shadow-[16px_16px_0px_0px_rgba(22,22,22,0.35)] dark:bg-deep-purple dark:shadow-[12px_12px_0px_0px_rgba(229,229,229,0.24)] md:p-14">
            <h1 className="mb-5 font-brand text-3xl font-extrabold leading-tight text-accentForeground md:text-5xl">
              Patches Bordados - Produtos Prontos e Personalizados
            </h1>
            <p className="mx-auto max-w-3xl text-base font-medium text-accentForeground/90 md:text-xl">
              Catálogo ordenado por número de pedidos. Itens que ainda não estão
              na Shopee aparecem com status de lançamento e reserva via WhatsApp.
            </p>
            <WhatsAppCta
              href={whatsappLink}
              label="Pedir orçamento no WhatsApp"
              className="mt-6"
            />
          </div>
        </section>

        <section className="glass-panel space-y-4 p-6 md:p-8">
          <h2 className="section-title">Serviços de Patch Bordado</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {patchServices.map((service) => (
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
                  <li><strong>Aplicação:</strong> {service.what}</li>
                  <li><strong>Uso indicado:</strong> {service.where}</li>
                  <li><strong>Prazo médio:</strong> {service.leadTime}</li>
                  <li><strong>Pedido mínimo:</strong> {service.minimumOrder}</li>
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
              <article key={item.id} className="group rounded-xl border-2 border-foreground/55 bg-surface/95 p-5">
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
                <div className="mb-2 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-brand-purple/20 px-2.5 py-1 text-xs font-semibold text-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="soft-text mt-2 text-sm">{item.description}</p>
                <ul className="mt-3 space-y-1 text-xs text-foreground/85">
                  <li><strong>Categoria:</strong> {item.tags.slice(0, 2).join(" · ")}</li>
                  <li>
                    <strong>Disponibilidade:</strong>{" "}
                    {item.status === "na_shopee" ? "Pronta na Shopee" : "Em lançamento"}
                  </li>
                  <li>
                    <strong>Canal:</strong>{" "}
                    {item.status === "na_shopee" ? "Shopee e WhatsApp" : "WhatsApp"}
                  </li>
                  <li><strong>Demanda:</strong> {item.displayOrders} histórico</li>
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
                    <a href={item.shopeeUrl} target="_blank" rel="noopener noreferrer" className="btn-shopee">
                      Ver na Shopee
                    </a>
                  ) : (
                    <span className="inline-flex rounded-full border border-accent px-2.5 py-1 text-xs font-semibold text-accent">
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



