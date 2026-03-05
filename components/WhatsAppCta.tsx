type WhatsAppCtaProps = {
  href: string;
  label?: string;
  className?: string;
};

const baseClassName = "btn-whatsapp";

export default function WhatsAppCta({ href, label = "Falar no WhatsApp", className = "" }: WhatsAppCtaProps) {
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
