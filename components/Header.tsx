"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { asset } from "@/src/lib/asset";
import { SITE } from "@/src/lib/site";
import { buildWhatsAppLink } from "@/src/lib/whatsapp";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const links = [
  { href: "/bordado-computadorizado/", label: "Bordado Computadorizado" },
  { href: "/patches-bordados/", label: "Patches Bordados" },
  { href: "/bordado-afetivo/", label: "Bordado Afetivo" },
  { href: "/contato/", label: "Contato" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const whatsappLink = buildWhatsAppLink({
    phone: SITE.whatsapp,
    context: "site",
  });

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    pathname === href || pathname === href.replace(/\/$/, "");

  return (
    <header
      className="sticky top-0 z-[100] border-b border-cream3"
      style={{
        background: "rgba(247,244,238,0.92)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <div className="wrap flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-90"
          aria-label="Trilinha Bordados — início"
        >
          <Image
            src={asset("/images/logo.png")}
            alt="Logo Trilinha Bordados"
            width={40}
            height={40}
            priority
            className="h-10 w-10"
            style={{ mixBlendMode: "multiply" }}
          />
          <span className="font-display text-[18px] leading-[1.1] text-ink">
            Trilinha Bordados
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-lg px-3 py-1.5 text-[14px] font-medium transition-all ${
                  active
                    ? "text-teal-brand"
                    : "text-ink2 hover:text-teal-brand"
                }`}
                style={
                  active
                    ? { background: "var(--teal-l)" }
                    : undefined
                }
                onMouseEnter={(event) => {
                  if (!active) {
                    (event.currentTarget as HTMLAnchorElement).style.background =
                      "var(--teal-l)";
                  }
                }}
                onMouseLeave={(event) => {
                  if (!active) {
                    (event.currentTarget as HTMLAnchorElement).style.background =
                      "";
                  }
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa hidden lg:inline-flex"
            style={{ padding: "10px 20px", fontSize: 13 }}
          >
            <WhatsAppIcon size={16} />
            <span>WhatsApp</span>
          </a>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg lg:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="flex flex-col gap-[5px]">
              <span className="block h-[2px] w-[22px] rounded bg-ink" />
              <span className="block h-[2px] w-[22px] rounded bg-ink" />
              <span className="block h-[2px] w-[22px] rounded bg-ink" />
            </span>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div
          className="fixed inset-x-0 bottom-0 top-16 z-[99] flex flex-col gap-1 overflow-y-auto px-6 py-6 lg:hidden"
          style={{ background: "var(--cream)" }}
        >
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-cream3 py-3.5 text-[16px] font-medium text-ink"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa mt-4 justify-center"
            onClick={() => setMenuOpen(false)}
          >
            <WhatsAppIcon size={18} />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      ) : null}
    </header>
  );
}
