import { homeSteps } from "@/src/data/home";
import { SITE } from "@/src/lib/site";
import { buildWhatsAppLink } from "@/src/lib/whatsapp";

export default function HowItWorks() {
  const catalogLink = buildWhatsAppLink({
    phone: SITE.whatsapp,
    context: "site",
  });

  return (
    <section className="section">
      <div className="wrap">
        <div className="section-header">
          <p className="section-label">Como funciona</p>
          <h2>Do contato à entrega em 4 passos</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {homeSteps.map((step) => (
            <div key={step.number} className="step-card">
              <div className="step-num">{step.number}</div>
              <h4
                className="text-ink"
                style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}
              >
                {step.title}
              </h4>
              <p
                className="text-ink2"
                style={{ fontSize: 13, lineHeight: 1.55 }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-7 flex flex-wrap items-center justify-between gap-5 rounded-[16px] bg-white p-6 shadow-card md:flex-nowrap md:p-7"
        >
          <div>
            <p
              className="text-ink"
              style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}
            >
              <span aria-hidden="true">🛍️ </span>
              Produtos prontos de catálogo
            </p>
            <p
              className="text-ink2"
              style={{ fontSize: 13 }}
            >
              Patches disponíveis agora na Shopee e em breve em outros marketplaces.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href={SITE.socials.shopee}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-teal"
              style={{ fontSize: 13, padding: "10px 20px" }}
            >
              Comprar na Shopee
            </a>
            <a
              href={catalogLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ fontSize: 13, padding: "9px 20px" }}
            >
              Ver catálogo no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
