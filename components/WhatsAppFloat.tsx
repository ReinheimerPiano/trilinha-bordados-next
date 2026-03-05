import { SITE } from "@/src/lib/site";
import { buildWhatsAppLink } from "@/src/lib/whatsapp";

export default function WhatsAppFloat() {
  const whatsappLink = buildWhatsAppLink({ phone: SITE.whatsapp, context: "float" });

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Trilinha Bordados no WhatsApp"
      className="btn-whatsapp fixed bottom-5 right-5 z-50 gap-2 px-4 py-2 text-sm font-semibold"
    >
      <span className="inline-flex h-5 w-5 items-center justify-center text-[12px] leading-none">💬</span>
      <span className="hidden sm:inline">Falar no WhatsApp</span>
    </a>
  );
}
