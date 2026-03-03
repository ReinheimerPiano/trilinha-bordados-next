type WhatsAppContext =
  | "site"
  | "produto"
  | "servico"
  | "patches"
  | "contato"
  | "social-proof"
  | "rodape"
  | "float";

type BuildWhatsAppLinkInput = {
  phone: string;
  context: WhatsAppContext;
  itemTitle?: string;
};

function buildMessage(context: WhatsAppContext, itemTitle?: string): string {
  if (context === "produto" && itemTitle) {
    return `Olá! Vim pelo site da Trilinha Bordados e tenho interesse no produto "${itemTitle}". Pode me passar prazo e valor?`;
  }

  if (context === "servico" && itemTitle) {
    return `Olá! Vim pelo site da Trilinha Bordados e quero orçamento para o serviço "${itemTitle}". Pode me orientar sobre prazo e valores?`;
  }

  if (context === "patches" && itemTitle) {
    return `Olá! Vim pela página de patches da Trilinha e quero reservar "${itemTitle}". Pode me confirmar disponibilidade e prazo?`;
  }

  if (context === "contato") {
    return "Olá! Vim pela página de contato da Trilinha Bordados e gostaria de solicitar um orçamento.";
  }

  if (context === "social-proof") {
    return "Olá! Vi as avaliações da Trilinha Bordados e quero pedir um orçamento.";
  }

  if (context === "rodape") {
    return "Olá! Vim pelo site da Trilinha Bordados e gostaria de atendimento.";
  }

  if (context === "float") {
    return "Olá! Gostaria de falar com a Trilinha Bordados sobre um pedido.";
  }

  return "Olá! Vim pelo site da Trilinha Bordados e gostaria de solicitar um orçamento.";
}

export function buildWhatsAppLink({ phone, context, itemTitle }: BuildWhatsAppLinkInput): string {
  const text = buildMessage(context, itemTitle);
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

