import type { Metadata } from "next";
import WhatsAppCta from "@/components/WhatsAppCta";
import { SITE } from "@/src/lib/site";
import { buildWhatsAppLink } from "@/src/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contato | Trilinha Bordados (Maringá–PR)",
  description:
    "Endereço, horário e orçamento via WhatsApp. Bordado computadorizado e patches em Maringá–PR.",
  alternates: { canonical: "/contato/" },
  openGraph: {
    title: "Contato | Trilinha Bordados (Maringá–PR)",
    description:
      "Endereço, horário e orçamento via WhatsApp. Bordado computadorizado e patches em Maringá–PR.",
    url: "/contato/",
  },
};

export default function ContatoPage() {
  const whatsappLink = buildWhatsAppLink({
    phone: SITE.whatsapp,
    context: "contato",
  });

  const googleMapsBusinessLink = "https://maps.app.goo.gl/GpvovgSf9HrHq4VBA";
  const embedMapUrl =
    "https://maps.google.com/maps?width=600&height=400&hl=en&q=Trilinha%20Bordados&t=&z=13&ie=UTF8&iwloc=B&output=embed";

  return (
    <main className="space-y-8 py-2 md:py-4">
      <section className="rounded-2xl border border-brand-teal/45 bg-gradient-to-r from-deep-teal to-brand-dark p-6 md:p-8">
        <h1 className="headline">Contato</h1>
        <p className="soft-text mt-3">
          Orçamentos rápidos via WhatsApp com detalhes de tamanho, quantidade e
          prazo.
        </p>
      </section>

      <section className="glass-panel p-6 md:p-8">
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-xl border border-brand-light/15 bg-brand-light/5 p-5">
            <h2 className="text-lg font-semibold">Endereço</h2>
            <p className="soft-text mt-2 text-sm">
              {SITE.address.street}
              <br />
              {SITE.address.city} - {SITE.address.region}
            </p>
          </article>

          <article className="rounded-xl border border-brand-light/15 bg-brand-light/5 p-5">
            <h2 className="text-lg font-semibold">Atendimento</h2>
            <p className="soft-text mt-2 text-sm">
              Segunda a sexta, 08h às 20h.
            </p>
            <p className="soft-text mt-2 text-sm">Sábado, 08h às 13h.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <WhatsAppCta href={whatsappLink} label="Falar no WhatsApp" />
              <a
                href={googleMapsBusinessLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border border-brand-light/40 px-4 py-2 text-sm font-semibold text-brand-light transition hover:bg-brand-light/10"
              >
                Ver no Google Maps
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="glass-panel p-3 md:p-4">
        <h2 className="px-2 pb-3 text-lg font-semibold">
          Localização no Google Empresas
        </h2>
        <div className="embed-map-responsive overflow-hidden rounded-lg border border-brand-light/10">
          <div className="embed-map-container">
            <iframe
              title="Mapa da Trilinha Bordados"
              className="embed-map-frame"
              frameBorder={0}
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src={embedMapUrl}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
