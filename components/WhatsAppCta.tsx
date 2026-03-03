type WhatsAppCtaProps = {
  href: string;
  label?: string;
  className?: string;
};

const baseClassName =
  "inline-flex rounded-full bg-accent-green px-4 py-2 text-sm font-semibold text-brand-dark transition hover:brightness-95 active:scale-[0.98]";

export default function WhatsAppCta({
  href,
  label = "Falar no WhatsApp",
  className = "",
}: WhatsAppCtaProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClassName} ${className}`.trim()}
    >
      {label}
    </a>
  );
}
