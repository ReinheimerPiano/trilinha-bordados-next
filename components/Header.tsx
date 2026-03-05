"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { asset } from "@/src/lib/asset";

const links = [
  { href: "/bordado-computadorizado/", label: "Computadorizado" },
  { href: "/patches-bordados/", label: "Patch" },
  { href: "/bordado-afetivo/", label: "Afetivo" },
  { href: "/links/", label: "Links" },
  { href: "/contato/", label: "Contato" },
];

export default function Header() {
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);

  const closeMobileMenu = () => {
    mobileMenuRef.current?.removeAttribute("open");
  };

  return (
    <header className="sticky top-0 z-50 border-b-2 border-foreground/90 bg-background/90 backdrop-blur-xl">
      <div className="page-wrap flex items-center justify-between gap-3 py-4">
        <Link
          href="/"
          className="logo-flutter-group group flex items-center gap-3.5 transition-transform duration-150 active:scale-[0.98]"
        >
          <Image
            src={asset("/images/trilhinha_logo.svg")}
            alt="Logo Trilinha Bordados"
            width={68}
            height={68}
            priority
            className="logo-flutter logo-flutter-onload block dark:hidden"
          />
          <Image
            src={asset("/images/trilhinha_logo_white-mix.svg")}
            alt="Logo Trilinha Bordados"
            width={68}
            height={68}
            priority
            className="logo-flutter logo-flutter-onload hidden dark:block"
          />
          <span className="font-didot text-foreground transition-opacity duration-200 group-hover:opacity-90">
            <span className="block text-[1.32rem] leading-[0.84] sm:text-[1.34rem] md:text-[1.52rem]">
              Trilinha
            </span>
            <span className="block text-[1.32rem] leading-[0.84] sm:text-[1.34rem] md:text-[1.52rem]">
              Bordados
            </span>
          </span>
        </Link>

        <nav className="hidden items-center justify-end gap-2 text-base md:flex">
          {links.map((item) => {
            const active =
              pathname === item.href || pathname === item.href.slice(0, -1);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-1 transition-all duration-300 active:scale-95 ${
                  active
                    ? "text-deep-purple underline decoration-2 decoration-wavy underline-offset-4 dark:text-brand-purple"
                    : "text-foreground/85 hover:text-deep-purple hover:underline hover:decoration-2 hover:decoration-wavy hover:underline-offset-4 dark:hover:text-brand-purple"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <details ref={mobileMenuRef} className="static">
            <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border-2 border-foreground px-3 py-1.5 text-sm font-bold text-foreground transition hover:bg-tertiary/60">
              <span className="inline-flex flex-col gap-1">
                <span className="block h-0.5 w-4 bg-foreground" />
                <span className="block h-0.5 w-4 bg-foreground" />
                <span className="block h-0.5 w-4 bg-foreground" />
              </span>
              Menu
            </summary>

            <div className="absolute left-0 right-0 top-full z-50 w-full border-t-2 border-foreground bg-surface/95 p-3 shadow-pop">
              {links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="block rounded-[var(--radius-sm)] px-3 py-2 text-base text-foreground/90 transition hover:bg-background/70 hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-2 border-t-2 border-foreground/30 pt-2">
                <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-wide text-foreground/70">
                  Tema
                </p>
                <div className="px-1">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
