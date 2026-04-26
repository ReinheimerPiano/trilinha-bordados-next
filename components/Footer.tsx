import Image from "next/image";
import Link from "next/link";
import { asset } from "@/src/lib/asset";
import { SITE } from "@/src/lib/site";
import { buildWhatsAppLink } from "@/src/lib/whatsapp";

const googleMapsUrl = "https://maps.app.goo.gl/GpvovgSf9HrHq4VBA";

const serviceLinks = [
  { href: "/bordado-computadorizado/", label: "Bordado Computadorizado" },
  { href: "/patches-bordados/", label: "Patches Bordados" },
  { href: "/bordado-afetivo/", label: "Bordado Afetivo" },
  { href: "/contato/", label: "Contato" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const whatsappLink = buildWhatsAppLink({
    phone: SITE.whatsapp,
    context: "rodape",
  });

  return (
    <footer
      className="text-white/85"
      style={{
        background: "var(--ink)",
        padding: "56px 0 32px",
      }}
    >
      <div className="wrap">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr] md:gap-12">
          <div>
            <Image
              src={asset("/images/trilhinha_logo_white.svg")}
              alt="Logo Trilinha Bordados"
              width={36}
              height={36}
              className="mb-3 h-9 w-9"
            />
            <p
              className="font-display text-white"
              style={{ fontSize: 20, marginBottom: 4 }}
            >
              {SITE.name}
            </p>
            <small
              className="block text-white/60"
              style={{ fontSize: 12 }}
            >
              Ateliê em {SITE.city}/{SITE.state} · Envio nacional
            </small>
            <p
              className="mt-4 text-white/60"
              style={{ fontSize: 14, lineHeight: 1.6 }}
            >
              Bordado computadorizado, patches e bordado afetivo feitos com
              precisão e carinho desde Maringá.
            </p>
          </div>

          <div>
            <h5
              className="text-white/50"
              style={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Serviços
            </h5>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/75 transition-colors hover:text-white"
                    style={{ fontSize: 14 }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5
              className="text-white/50"
              style={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Contato
            </h5>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/75 transition-colors hover:text-white"
                  style={{ fontSize: 14 }}
                >
                  ({SITE.phoneDisplay.split(" ")[0]}) {SITE.phoneDisplay.split(" ")[1]}
                </a>
              </li>
              <li>
                <a
                  href={SITE.socials.shopee}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/75 transition-colors hover:text-white"
                  style={{ fontSize: 14 }}
                >
                  Shopee
                </a>
              </li>
              <li>
                <a
                  href={SITE.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/75 transition-colors hover:text-white"
                  style={{ fontSize: 14 }}
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/75 transition-colors hover:text-white"
                  style={{ fontSize: 14 }}
                >
                  Ver no Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t pt-6 text-white/40"
          style={{
            borderColor: "rgba(255,255,255,0.1)",
            fontSize: 13,
          }}
        >
          <span>
            © {year} {SITE.name} · {SITE.city}/{SITE.state}
          </span>
          <span>Desenvolvido com carinho.</span>
        </div>
      </div>
    </footer>
  );
}
