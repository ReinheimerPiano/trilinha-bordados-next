import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/bordado-computadorizado/", label: "Bordado Computadorizado" },
  { href: "/patches-bordados/", label: "Patches Bordados" },
  { href: "/bordado-afetivo/", label: "Bordado Afetivo" },
  { href: "/links/", label: "Links" },
  { href: "/contato/", label: "Contato" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-light/20 bg-brand-dark/85 backdrop-blur-xl">
      <div className="page-wrap flex items-center justify-between gap-3 py-4">
        <Link href="/" className="group flex items-center gap-3.5 transition-transform duration-150 active:scale-[0.98]">
          <Image src="/images/trilhinha_logo_white-mix.svg" alt="Logo Trilinha Bordados" width={52} height={52} priority />
          <span className="font-brand text-brand-light transition-opacity duration-200 group-hover:opacity-90">
            <span className="block text-[1rem] leading-[0.84] sm:text-[1.12rem] md:text-[1.22rem]">Trilinha</span>
            <span className="block text-[1rem] leading-[0.84] sm:text-[1.12rem] md:text-[1.22rem]">Bordados</span>
          </span>
        </Link>

        <nav className="hidden items-center justify-end gap-2 text-sm md:flex">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative px-2 py-1 text-brand-light/85 transition-all duration-200 hover:text-brand-light active:scale-95"
            >
              <span>{item.label}</span>
              <span className="absolute inset-x-2 -bottom-0.5 h-px origin-left scale-x-0 bg-brand-teal transition-transform duration-200 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <details className="relative md:hidden">
          <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-brand-light/25 px-3 py-1.5 text-sm text-brand-light/90 transition hover:bg-brand-light/10">
            <span className="inline-flex flex-col gap-1">
              <span className="block h-0.5 w-4 bg-brand-light" />
              <span className="block h-0.5 w-4 bg-brand-light" />
              <span className="block h-0.5 w-4 bg-brand-light" />
            </span>
            Menu
          </summary>

          <div className="absolute right-0 mt-2 w-56 rounded-xl border border-brand-light/20 bg-brand-dark/95 p-2 shadow-glow">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-sm text-brand-light/90 transition hover:bg-brand-light/10 hover:text-brand-light"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </details>
      </div>
    </header>
  );
}
