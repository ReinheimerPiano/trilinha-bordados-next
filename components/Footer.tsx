import Image from "next/image";
import { asset } from "@/src/lib/asset";
import { SITE } from "@/src/lib/site";
import { buildWhatsAppLink } from "@/src/lib/whatsapp";

function ShopeeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M7 6h10l1.2 13H5.8L7 6Zm2.6-1A2.4 2.4 0 0 1 12 2.6 2.4 2.4 0 0 1 14.4 5h-1.5A.9.9 0 0 0 12 4.1.9.9 0 0 0 11.1 5H9.6Z"
      />
    </svg>
  );
}

function MarketplaceIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M2 9.5 4.2 5h15.6L22 9.5V20H2V9.5Zm4.1 0a2.4 2.4 0 0 0 4.6 0h2.6a2.4 2.4 0 0 0 4.6 0h2.2L18.8 7H5.2L3.9 9.5h2.2Z"
      />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const whatsappLink = buildWhatsAppLink({
    phone: SITE.whatsapp,
    context: "rodape",
  });
  const phoneCallLink = `tel:+${SITE.whatsapp}`;

  return (
    <footer className="mt-14 border-t-2 border-foreground/90">
      <div className="page-wrap py-8 text-sm text-foreground/85">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center justify-center gap-3 md:justify-start">
            <Image
              src={asset("/images/trilhinha_logo.svg")}
              alt="Logo Trilinha Bordados"
              width={28}
              height={28}
              className="block dark:hidden"
            />
            <Image
              src={asset("/images/trilhinha_logo_white-mix.svg")}
              alt="Logo Trilinha Bordados"
              width={28}
              height={28}
              className="hidden dark:block"
            />
            <div className="text-center md:text-left">
              <p className="font-brand text-base font-bold text-foreground">{SITE.name}</p>
              <p className="text-xs text-foreground/70">{SITE.city}/{SITE.state}</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-1 text-center md:items-end md:text-right">
            <a href={phoneCallLink} className="font-semibold text-foreground hover:text-accent">
              {SITE.phoneDisplay}
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-foreground/80 hover:text-accent"
            >
              Conversar no WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-5 rounded-[var(--radius-md)] border-2 border-foreground bg-surface/95 p-3 shadow-pop">
          <p className="mb-2 text-center text-xs font-semibold uppercase tracking-wide text-foreground/75">Canais de Venda</p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <a
              href={SITE.socials.shopee}
              target="_blank"
              rel="noopener noreferrer"
              className="badge gap-1 border-accent/35 bg-accent/10 text-foreground hover:bg-accent/20"
              aria-label="Shopee Seller"
            >
              <ShopeeIcon />
              Shopee Seller
            </a>
            <a
              href={SITE.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="badge gap-1 border-quaternary/50 bg-quaternary/20 text-foreground hover:bg-quaternary/35"
              aria-label="Facebook Marketplace"
            >
              <MarketplaceIcon />
              Facebook Marketplace
            </a>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-foreground/70">(c) {year} {SITE.name}</p>
      </div>
    </footer>
  );
}
