import type { ServiceCatalogItem } from "@/src/data/offerings";
import { SITE } from "@/src/lib/site";
import { buildWhatsAppLink } from "@/src/lib/whatsapp";

type SegmentServicesGridProps = {
  label?: string;
  title: string;
  services: ServiceCatalogItem[];
  whatsappContext?: "servico" | "patches";
  alt?: boolean;
  detailLabels?: {
    what?: string;
    where?: string;
    leadTime?: string;
    minimumOrder?: string;
  };
};

export default function SegmentServicesGrid({
  label = "Serviços",
  title,
  services,
  whatsappContext = "servico",
  alt = false,
  detailLabels,
}: SegmentServicesGridProps) {
  const labels = {
    what: detailLabels?.what ?? "O que borda:",
    where: detailLabels?.where ?? "Onde borda:",
    leadTime: detailLabels?.leadTime ?? "Prazo médio:",
    minimumOrder: detailLabels?.minimumOrder ?? "Pedido mínimo:",
  };

  return (
    <section className={alt ? "section section-alt" : "section"}>
      <div className="wrap">
        <div className="section-header">
          <p className="section-label">{label}</p>
          <h2>{title}</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.id} className="service-card">
              {service.image ? (
                <div className="service-img">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                  />
                </div>
              ) : null}
              <div className="flex flex-1 flex-col p-6">
                <h3
                  className="text-ink"
                  style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-ink2"
                  style={{ fontSize: 14, lineHeight: 1.55, marginBottom: 14 }}
                >
                  {service.description}
                </p>

                <div className="mb-3 flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                {service.what || service.where || service.leadTime || service.minimumOrder ? (
                  <ul
                    className="text-ink2"
                    style={{ fontSize: 13, lineHeight: 1.55, marginBottom: 16 }}
                  >
                    {service.what ? (
                      <li>
                        <strong className="text-ink">{labels.what} </strong>
                        {service.what}
                      </li>
                    ) : null}
                    {service.where ? (
                      <li>
                        <strong className="text-ink">{labels.where} </strong>
                        {service.where}
                      </li>
                    ) : null}
                    {service.leadTime ? (
                      <li>
                        <strong className="text-ink">{labels.leadTime} </strong>
                        {service.leadTime}
                      </li>
                    ) : null}
                    {service.minimumOrder ? (
                      <li>
                        <strong className="text-ink">{labels.minimumOrder} </strong>
                        {service.minimumOrder}
                      </li>
                    ) : null}
                  </ul>
                ) : null}

                <a
                  href={buildWhatsAppLink({
                    phone: SITE.whatsapp,
                    context: whatsappContext,
                    itemTitle: service.title,
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-teal mt-auto self-start"
                  style={{ fontSize: 13, padding: "9px 18px" }}
                >
                  Pedir pelo WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
