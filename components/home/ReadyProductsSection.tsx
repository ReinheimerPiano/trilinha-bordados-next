import Link from "next/link";
import WhatsAppCta from "@/components/WhatsAppCta";
import type { ProductCatalogItem } from "@/src/data/offerings";
import { SITE } from "@/src/lib/site";
import { buildWhatsAppLink } from "@/src/lib/whatsapp";

type ReadyProductsSectionProps = {
  items: ProductCatalogItem[];
};

export default function ReadyProductsSection({ items }: ReadyProductsSectionProps) {
  return (
    <section className="glass-panel space-y-4 p-6 md:p-8">
      <div className="flex items-center justify-between gap-3">
        <h2 className="section-title">Produtos prontos</h2>
        <Link
          href="/patches-bordados/"
          className="text-sm font-semibold text-accent-teal hover:text-brand-teal"
        >
          Ver todos os patches →
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.title}
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
            <div className="mt-3 flex w-fit items-center rounded-full border border-accent-green/40 bg-accent-green/10 px-2.5 py-1 text-xs font-semibold text-accent-green">
              {item.displayOrders} vendas
            </div>
            {item.status === "na_shopee" ? (
              <div className="mt-4">
                <a
                  href={item.shopeeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shopee"
                >
                  Comprar na Shopee agora
                </a>
              </div>
            ) : (
              <div className="mt-4 space-y-2">
                <p className="text-xs font-semibold text-brand-light/90">
                  {item.whatsappOnlyMessage}
                </p>
                <WhatsAppCta
                  href={buildWhatsAppLink({
                    phone: SITE.whatsapp,
                    context: "produto",
                    itemTitle: item.title,
                  })}
                  label="Falar no WhatsApp"
                />
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
