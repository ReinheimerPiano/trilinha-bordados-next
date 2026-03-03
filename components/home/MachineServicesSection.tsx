import WhatsAppCta from "@/components/WhatsAppCta";
import type { ServiceCatalogItem } from "@/src/data/offerings";
import { SITE } from "@/src/lib/site";
import { buildWhatsAppLink } from "@/src/lib/whatsapp";

type MachineServicesSectionProps = {
  items: ServiceCatalogItem[];
};

export default function ServicesSection({
  items,
}: MachineServicesSectionProps) {
  return (
    <section className="glass-panel space-y-4 p-6 md:p-8">
      <h2 className="section-title">Serviços de Bordado em Destaque</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.title}
            className="group rounded-xl border border-brand-light/15 bg-deep-green/45 p-5"
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
                  className="rounded-full bg-brand-teal/20 px-2.5 py-1 text-xs font-semibold text-brand-light"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-base font-semibold">{item.title}</h3>
            <p className="soft-text mt-2 text-sm">{item.description}</p>
            <div className="mt-3 inline-flex items-center rounded-full border border-accent-green/40 bg-accent-green/10 px-2.5 py-1 text-xs font-semibold text-accent-green">
              {item.displayOrders} vendas
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <WhatsAppCta
                href={buildWhatsAppLink({
                  phone: SITE.whatsapp,
                  context: "servico",
                  itemTitle: item.title,
                })}
                label="Pedir orçamento no WhatsApp"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
