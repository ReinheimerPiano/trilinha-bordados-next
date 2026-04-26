import { homeFeaturedProducts } from "@/src/data/home";
import { SITE } from "@/src/lib/site";

function buildLink(message: string): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export default function FeaturedProducts() {
  return (
    <section className="section section-alt">
      <div className="wrap">
        <div className="section-header">
          <p className="section-label">Produtos & serviços</p>
          <h2>Mais pedidos pelos nossos clientes</h2>
        </div>

        <div
          className="grid gap-5"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}
        >
          {homeFeaturedProducts.map((product) => (
            <article key={product.id} className="product-card">
              <div className="product-img">
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h4
                  className="text-ink"
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    lineHeight: 1.35,
                    marginBottom: 6,
                  }}
                >
                  {product.title}
                </h4>
                <p
                  className="text-ink3"
                  style={{ fontSize: 13, marginBottom: 12 }}
                >
                  {product.description}
                </p>
                <div className="mb-4">
                  <span className="sales-badge">
                    <span aria-hidden="true">✓ </span>
                    {product.sales} vendas
                  </span>
                </div>
                <a
                  href={buildLink(product.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-teal mt-auto self-start"
                  style={{ fontSize: 13, padding: "9px 18px" }}
                >
                  Pedir orçamento
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
