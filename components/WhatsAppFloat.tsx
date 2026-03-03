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
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-accent-green px-4 py-2 text-sm font-semibold text-brand-dark shadow-glow transition hover:brightness-95 active:scale-[0.98]"
    >
      <span className="text-base leading-none">💬</span>
      <span className="hidden sm:inline">Falar no WhatsApp</span>
    </a>
  );
}
