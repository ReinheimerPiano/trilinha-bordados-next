import { asset } from "@/src/lib/asset";

export type HomeSpecialty = {
  id: "computadorizado" | "patches" | "afetivo";
  href: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
};

export type HomeFeaturedProduct = {
  id: string;
  title: string;
  description: string;
  image: string;
  sales: string;
  whatsappMessage: string;
};

export type HomeStep = {
  number: number;
  title: string;
  description: string;
};

export type HomeTestimonial = {
  text: string;
  name: string;
  role: string;
  initials: string;
};

export type HomeFaq = {
  question: string;
  answer: string;
};

export const homeSpecialties: HomeSpecialty[] = [
  {
    id: "computadorizado",
    href: "/bordado-computadorizado/",
    title: "Bordado Computadorizado",
    description:
      "Aplicação profissional em jalecos, polos, uniformes e peças corporativas. Padrão e durabilidade garantidos.",
    tags: ["Jalecos", "Uniformes", "Polos", "Camisetas", "Moletons"],
    image: asset("/images/products/jaleco-combrasao-com-patches-bordado-bolso.jpg"),
  },
  {
    id: "patches",
    href: "/patches-bordados/",
    title: "Patches Bordados",
    description:
      "Patches prontos e personalizados com termocolante, velcro ou costura. Entrega via Shopee para todo o Brasil.",
    tags: ["Termocolante", "Velcro", "Costura", "Motoclube", "Geek"],
    image: asset("/images/products/kit-motoclube5-costas.jpeg"),
  },
  {
    id: "afetivo",
    href: "/bordado-afetivo/",
    title: "Bordado Afetivo",
    description:
      "Peças únicas feitas com carinho para presentear, decorar e marcar momentos especiais.",
    tags: ["Porta-maternidade", "Porta-alianças", "Bastidores", "Enxoval"],
    image: asset("/images/products/enxoval-bebe-personalizado-maquina.webp"),
  },
];

export const homeStackedImages: string[] = [
  asset("/images/products/jaleco-combrasao-com-patches-bordado-bolso.jpg"),
  asset("/images/products/kit-motoclube5-costas.jpeg"),
  asset("/images/products/Uniforme.jpg"),
  asset("/images/products/camisetaPersonalizada.jpg"),
  asset("/images/products/enxoval-bebe-personalizado-maquina.webp"),
  asset("/images/products/porta-alianca.jpg"),
];

export const homeFeaturedProducts: HomeFeaturedProduct[] = [
  {
    id: "kit-motoclube",
    title: "Kit Motoclube Costas (5 itens)",
    description: "Conjunto completo para colete de motoclube.",
    image: asset("/images/products/kit-motoclube5-costas.jpeg"),
    sales: "50+",
    whatsappMessage:
      "Olá! Tenho interesse no Kit Motoclube Costas (5 itens). Pode me passar prazo e valor?",
  },
  {
    id: "tag-motoclube",
    title: "Tag Nome e Cargo para Motoclube",
    description: "Identificação bordada para colete.",
    image: asset("/images/products/tag-nome-cargo-motoclube.jpeg"),
    sales: "30+",
    whatsappMessage:
      "Olá! Tenho interesse na Tag nome e cargo para motoclube. Pode me passar valores?",
  },
  {
    id: "jaleco-brasao",
    title: "Jaleco com Brasão e Patches",
    description: "Personalização profissional para área da saúde.",
    image: asset("/images/products/jaleco-combrasao-com-patches-bordado-bolso.jpg"),
    sales: "39+",
    whatsappMessage:
      "Olá! Quero orçamento para jaleco com bordado e brasão.",
  },
  {
    id: "uniforme-personalizado",
    title: "Uniforme Personalizado",
    description: "Padronização para equipes com nome e função.",
    image: asset("/images/products/Uniforme.jpg"),
    sales: "39+",
    whatsappMessage: "Olá! Preciso de orçamento para uniformes personalizados.",
  },
  {
    id: "camiseta-personalizada",
    title: "Camiseta Personalizada",
    description: "Bordado em camisetas com logo ou frase.",
    image: asset("/images/products/camisetaPersonalizada.jpg"),
    sales: "28+",
    whatsappMessage: "Olá! Quero orçamento para camiseta personalizada bordada.",
  },
  {
    id: "porta-aliancas",
    title: "Porta-Alianças Bordado",
    description: "Peça afetiva artesanal para casamentos.",
    image: asset("/images/products/porta-alianca.jpg"),
    sales: "18+",
    whatsappMessage:
      "Olá! Me conta mais sobre o porta-alianças bordado, por favor.",
  },
];

export const homeSteps: HomeStep[] = [
  {
    number: 1,
    title: "Fale conosco",
    description:
      "Mande uma mensagem no WhatsApp com sua ideia ou a peça que quer personalizar.",
  },
  {
    number: 2,
    title: "Orçamento rápido",
    description:
      "Enviamos prazo e valor em poucas horas, sem compromisso.",
  },
  {
    number: 3,
    title: "Aprovação",
    description:
      "Você aprova o design e o valor antes de qualquer produção.",
  },
  {
    number: 4,
    title: "Entrega",
    description:
      "Enviamos com Correios, Jadlog e outros parceiros. Patches prontos saem pela Shopee.",
  },
];

export const homeTestimonials: HomeTestimonial[] = [
  {
    text: "Qualidade impecável! O jaleco ficou exatamente como eu queria. Atendimento rápido e super atencioso.",
    name: "Camila R.",
    role: "Estudante de Medicina",
    initials: "CR",
  },
  {
    text: "Patches do meu motoclube ficaram perfeitos. Entrega rápida e acabamento profissional. Já encomendei mais!",
    name: "Marcos A.",
    role: "Cliente Shopee",
    initials: "MA",
  },
  {
    text: "Encomendei o porta-maternidade e fiquei encantada. Peça única, com muito carinho no acabamento.",
    name: "Fernanda L.",
    role: "Maringá/PR",
    initials: "FL",
  },
];

export const homeAtelierGallery: string[] = [
  asset("/images/maps-gallery/map-photo-01.jpg"),
  asset("/images/maps-gallery/map-photo-02.jpg"),
  asset("/images/maps-gallery/map-photo-03.jpg"),
  asset("/images/maps-gallery/map-photo-04.jpg"),
  asset("/images/maps-gallery/map-photo-05.jpg"),
  asset("/images/maps-gallery/map-photo-06.jpg"),
];

export const homeFaqs: HomeFaq[] = [
  {
    question: "Vocês atendem todo o Brasil?",
    answer:
      "Sim! Os patches prontos são vendidos pela Shopee com frete para todo o Brasil. Para serviços de bordado computadorizado, atendemos presencialmente em Maringá/PR, mas aceitamos peças enviadas de qualquer cidade.",
  },
  {
    question: "Como faço um orçamento?",
    answer:
      "É simples: clique no botão WhatsApp e nos mande uma foto da peça e o que deseja. Respondemos em poucas horas com prazo e valor.",
  },
  {
    question: "Qual o prazo de produção?",
    answer:
      "Patches prontos: enviados em 1-3 dias úteis via Shopee. Bordados personalizados e serviços: 5-10 dias úteis dependendo da quantidade e complexidade.",
  },
  {
    question: "Qual a quantidade mínima?",
    answer:
      "Para serviços de bordado, trabalhamos a partir de 1 peça. Para patches personalizados, consulte-nos pelo WhatsApp para kits pequenos e grandes lotes.",
  },
  {
    question: "Aceitam logo em diferentes formatos?",
    answer:
      "Sim! Aceitamos PNG, JPG, PDF, AI, CDR e SVG. Também digitalizamos logos manualmente a partir de imagens de boa qualidade.",
  },
];
