import Link from "next/link";
import { SITE } from "@/src/lib/site";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

type PageHeroProps = {
  label: string;
  title: string;
  description: string;
  tags?: string[];
  whatsappMessage: string;
  shopee?: boolean;
};

function buildLink(message: string): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export default function PageHero({
  label,
  title,
  description,
  tags = [],
  whatsappMessage,
  shopee = false,
}: PageHeroProps) {
  return (
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
            {label}
          </span>
        </p>

        <p className="section-label">{label}</p>

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
          {title}
        </h1>

        <p
          className="text-ink2"
          style={{
            fontSize: 17,
            maxWidth: 600,
            marginBottom: 28,
            lineHeight: 1.6,
          }}
        >
          {description}
        </p>

        {tags.length > 0 ? (
          <div className="mb-7 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="tag-pill">
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        <div className="flex flex-wrap gap-3">
          <a
            href={buildLink(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa"
          >
            <WhatsAppIcon size={18} />
            Pedir orçamento grátis
          </a>
          {shopee ? (
            <a
              href={SITE.socials.shopee}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <span aria-hidden="true">🛍️</span>
              Ver na Shopee
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
