import { SITE } from "@/src/lib/site";
import { buildWhatsAppLink } from "@/src/lib/whatsapp";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function WhatsAppFloat() {
  const whatsappLink = buildWhatsAppLink({
    phone: SITE.whatsapp,
    context: "float",
  });

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Trilinha Bordados no WhatsApp"
      className="wa-float"
    >
      <WhatsAppIcon size={22} />
      <span className="hidden sm:inline">Falar no WhatsApp</span>
    </a>
  );
}
