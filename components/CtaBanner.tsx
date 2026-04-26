import { SITE } from "@/src/lib/site";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

type CtaBannerProps = {
  title?: string;
  description?: string;
  whatsappMessage?: string;
  buttonLabel?: string;
  alt?: boolean;
};

function buildLink(message: string): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export default function CtaBanner({
  title = "Pronto para personalizar sua peça?",
  description = "Orçamento grátis e sem compromisso. Respondemos em poucas horas.",
  whatsappMessage = "Olá! Vim pelo site da Trilinha Bordados e gostaria de um orçamento.",
  buttonLabel = "Falar no WhatsApp agora",
  alt = false,
}: CtaBannerProps) {
  return (
    <section className={alt ? "section section-alt" : "section"}>
      <div className="wrap">
        <div className="cta-banner">
          <h2>{title}</h2>
          <p>{description}</p>
          <a
            href={buildLink(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa"
            style={{ background: "#fff", color: "var(--teal)" }}
          >
            <WhatsAppIcon size={18} />
            {buttonLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
