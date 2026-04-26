import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/src/lib/site";
import { buildWhatsAppLink } from "@/src/lib/whatsapp";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export const metadata: Metadata = {
  title: "Contato | Trilinha Bordados (Maringá-PR)",
  description:
    "Endereço, horário e orçamento via WhatsApp. Bordado computadorizado e patches em Maringá-PR.",
  alternates: { canonical: "/contato/" },
  openGraph: {
    title: "Contato | Trilinha Bordados (Maringá-PR)",
    description:
      "Endereço, horário e orçamento via WhatsApp. Bordado computadorizado e patches em Maringá-PR.",
    url: "/contato/",
  },
};

const contactWhatsapp =
  "Olá! Vim pela página de contato da Trilinha Bordados e gostaria de solicitar um orçamento.";

export default function ContatoPage() {
  const whatsappLink = buildWhatsAppLink({
    phone: SITE.whatsapp,
    context: "contato",
  });

  return (
    <main>
      <section
        className="relative isolate overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, var(--cream) 0%, var(--cream2) 100%)",
          padding: "64px 0 48px",
        }}
      >
        <div className="wrap">
          <p
            className="text-ink3"
            style={{ fontSize: 13, marginBottom: 16 }}
          >
            <Link href="/" className="hover:text-teal-brand">
              Início
            </Link>{" "}
            →{" "}
            <span className="text-teal-brand" style={{ fontWeight: 500 }}>
              Contato
            </span>
          </p>

          <p className="section-label">Fale conosco</p>

          <h1
            className="text-ink"
            style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 700,
              margin: "8px 0 16px",
              maxWidth: 720,
              lineHeight: 1.15,
            }}
          >
            Entre em contato
          </h1>

          <p
            className="text-ink2"
            style={{
              fontSize: 17,
              maxWidth: 600,
              lineHeight: 1.6,
            }}
          >
            Orçamento rápido sem compromisso. Respondemos pelo WhatsApp em
            poucas horas.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid items-start gap-12 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <ContactItem icon="📱" title="WhatsApp (principal)">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-brand"
                style={{ fontWeight: 500, fontSize: 14 }}
              >
                ({SITE.phoneDisplay.split(" ")[0]}){" "}
                {SITE.phoneDisplay.split(" ")[1]}
              </a>
              <p
                className="text-ink2"
                style={{ marginTop: 4, fontSize: 14 }}
              >
                Forma mais rápida de orçamento.
              </p>
            </ContactItem>

            <ContactItem icon="📍" title="Endereço">
              <p
                className="text-ink2"
                style={{ fontSize: 14, lineHeight: 1.55 }}
              >
                {SITE.address.street}
                <br />
                {SITE.address.city}/{SITE.address.region}
                <br />
                CEP {SITE.address.postalCode}
              </p>
            </ContactItem>

            <ContactItem icon="🕐" title="Horário de atendimento">
              <div className="flex flex-col gap-1.5">
                <HoursRow day="Segunda a Sexta" time="08h – 20h" />
                <HoursRow day="Sábado" time="08h – 13h" />
                <HoursRow day="Domingo" time="Fechado" />
              </div>
            </ContactItem>

            <ContactItem icon="🛍️" title="Canais de venda">
              <div className="flex flex-wrap gap-2">
                <a
                  href={SITE.socials.shopee}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ch-badge"
                  style={{ borderColor: "#EE4D2D", color: "#EE4D2D" }}
                >
                  Shopee
                </a>
                <a
                  href={SITE.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ch-badge"
                  style={{ borderColor: "#E1306C", color: "#E1306C" }}
                >
                  Instagram
                </a>
                <a
                  href={SITE.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ch-badge"
                  style={{ borderColor: "#1877F2", color: "#1877F2" }}
                >
                  Facebook
                </a>
              </div>
            </ContactItem>
          </div>

          <aside>
            <div
              className="cta-banner text-left"
              style={{ padding: "40px 36px", textAlign: "left" }}
            >
              <h2
                style={{ fontSize: 28, marginBottom: 12, color: "#fff" }}
              >
                Orçamento rápido
              </h2>
              <p style={{ marginBottom: 24, marginLeft: 0, marginRight: 0 }}>
                Clique abaixo e nos mande uma foto da peça. Respondemos com
                prazo e valor em poucas horas.
              </p>
              <a
                href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(contactWhatsapp)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa"
                style={{ background: "#fff", color: "var(--teal)" }}
              >
                <WhatsAppIcon size={18} />
                Abrir WhatsApp
              </a>
              <p
                className="text-white/80"
                style={{ fontSize: 13, marginTop: 18 }}
              >
                Segunda a Sexta, 8h–20h · Sábado 8h–13h
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

type ContactItemProps = {
  icon: string;
  title: string;
  children: React.ReactNode;
};

function ContactItem({ icon, title, children }: ContactItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div
        aria-hidden="true"
        className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[12px] text-[20px]"
        style={{ background: "var(--teal-l)" }}
      >
        {icon}
      </div>
      <div>
        <h4
          className="text-ink"
          style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}
        >
          {title}
        </h4>
        {children}
      </div>
    </div>
  );
}

type HoursRowProps = {
  day: string;
  time: string;
};

function HoursRow({ day, time }: HoursRowProps) {
  return (
    <div
      className="flex items-center justify-between text-ink2"
      style={{ fontSize: 14 }}
    >
      <span>{day}</span>
      <strong className="text-ink">{time}</strong>
    </div>
  );
}
