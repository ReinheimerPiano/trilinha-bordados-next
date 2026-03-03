export type ReviewSource = "Google" | "Shopee" | "WhatsApp";
export type ReviewCategory = "Bordado" | "Patch" | "Afetivo" | "Atendimento";
export type ReviewIntentFilter = "bordado" | "patches" | "kits" | "atendimento";

export type SocialReview = {
  id: string;
  source: ReviewSource;
  link_da_fonte: string;
  nome_publico: string;
  nota: number;
  texto: string;
  data: string;
  categoria: ReviewCategory;
  produto_servico: string;
  prioridade: 1 | 2 | 3;
  cidade_uf?: string;
  intents: ReviewIntentFilter[];
  reviewPhotos?: string[];
};

export const socialProofSummary = {
  title: "O que nossos clientes dizem",
  subtitle: "Avaliações reais sobre bordado computadorizado e patches (Maringá–PR e envio Brasil)",
  intro:
    "A Trilinha Bordados, em Maringá–PR, recebe avaliações destacando bordado computadorizado em jaleco, polo e uniforme, além de patch bordado termocolante e velcro.",
  rating: 5.0,
  totalReviews: 25,
  reviewBreakdown: {
    5: 25,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  },
  sourceLabel: "Google e Shopee",
  updatedAt: "março/2026",
  googleMapsUrl: "https://maps.app.goo.gl/GpvovgSf9HrHq4VBA",
  shopeeUrl: "https://shopee.com.br/trilinha.bordados",
};

export const socialProofTopics = [
  { name: "atendimento", count: 3 },
  { name: "resultado", count: 2 },
  { name: "presente", count: 2 },
  { name: "preço", count: 2 },
];

const shopeeReviews: SocialReview[] = [
  {
    id: "shopee-10kbusxq",
    source: "Shopee",
    link_da_fonte: socialProofSummary.shopeeUrl,
    nome_publico: "Cliente Shopee",
    nota: 5,
    texto: "Custo-benefício muito bom, qualidade muito boa e atendimento excelente.",
    data: "2026-03",
    categoria: "Patch",
    produto_servico: "Kit de patches bordados",
    prioridade: 2,
    intents: ["patches", "kits", "atendimento"],
  },
  {
    id: "shopee-974flm97ot",
    source: "Shopee",
    link_da_fonte: socialProofSummary.shopeeUrl,
    nome_publico: "Cliente Shopee",
    nota: 5,
    texto: "Acabamento lindo e impecável. Recomendo demais!",
    data: "2025-12",
    categoria: "Patch",
    produto_servico: "Patch bordado personalizado",
    prioridade: 2,
    intents: ["patches"],
  },
  {
    id: "shopee-wjohnnyf-tag",
    source: "Shopee",
    link_da_fonte: socialProofSummary.shopeeUrl,
    nome_publico: "Cliente Shopee",
    nota: 5,
    texto: "Material bem acabado e de qualidade.",
    data: "2025-09",
    categoria: "Patch",
    produto_servico: "Tag bordada personalizada",
    prioridade: 2,
    intents: ["patches"],
    reviewPhotos: [
      "https://cf.shopee.com.br/file/br-11134103-81z1k-megn5j49y7ltd5",
      "https://cf.shopee.com.br/file/br-11134103-81z1k-megn5j49zm6910",
    ],
  },
  {
    id: "shopee-wjohnnyf-thisisfine",
    source: "Shopee",
    link_da_fonte: socialProofSummary.shopeeUrl,
    nome_publico: "Cliente Shopee",
    nota: 5,
    texto: "Ótima qualidade, material resistente e envio rápido.",
    data: "2025-09",
    categoria: "Patch",
    produto_servico: "Patch This is Fine",
    prioridade: 2,
    intents: ["patches"],
    reviewPhotos: [
      "https://cf.shopee.com.br/file/br-11134103-81z1k-megn5j4a10qpd0",
      "https://cf.shopee.com.br/file/br-11134103-81z1k-megn5j4a2fb533",
      "https://cf.shopee.com.br/file/br-11134103-81z1k-megn5j4a3tvl30",
    ],
  },
];

export const socialReviews: SocialReview[] = [
  {
    id: "google-enyel",
    source: "Google",
    link_da_fonte: socialProofSummary.googleMapsUrl,
    nome_publico: "Enyel M.",
    nota: 5,
    texto:
      "Excelente empresa de bordados! Trabalho bem feito, com ótima qualidade e atenção aos detalhes. Atendimento rápido e profissional.",
    data: "2026-02",
    categoria: "Atendimento",
    produto_servico: "Bordado personalizado",
    prioridade: 1,
    cidade_uf: "Maringá–PR",
    intents: ["atendimento", "bordado"],
  },
  {
    id: "google-gustavo",
    source: "Google",
    link_da_fonte: socialProofSummary.googleMapsUrl,
    nome_publico: "Gustavo I.",
    nota: 5,
    texto: "Ótimo atendimento. Encomendei patches bordados, todos entregues dentro do prazo e com ótima qualidade.",
    data: "2025-10",
    categoria: "Patch",
    produto_servico: "Patch bordado",
    prioridade: 1,
    cidade_uf: "Maringá–PR",
    intents: ["patches", "atendimento"],
  },
  {
    id: "google-anna",
    source: "Google",
    link_da_fonte: socialProofSummary.googleMapsUrl,
    nome_publico: "Anna T.",
    nota: 5,
    texto: "Os bordados mais lindos que já vi e o melhor atendimento de todos! Amo a Trilinha.",
    data: "2025-08",
    categoria: "Afetivo",
    produto_servico: "Bastidor bordado para presente",
    prioridade: 3,
    cidade_uf: "Maringá–PR",
    intents: ["atendimento"],
    reviewPhotos: [
      "https://lh3.googleusercontent.com/geougc-cs/ABOP9pugsG_ADygG6844AB2pfiCDS7c5lRkhUgdEW9s2NUbYcuC7lTamUSalaaZPxsEavF9e74-qfyZighZFvR0ghg0tyBoUJqY_0NFv_ym6_xc3t2X2Cgr2trN-CNGIypBwJ4KEkv9JoOD5HnZP=w600-h450-p",
      "https://lh3.googleusercontent.com/geougc-cs/ABOP9puN2sAbtB2FxbiCHffWHoKg4Zig5pUaUEW1uYGMRXylr2_C-1GtST6YtCkFM8MknWHGXJKM7aLuj4gdH0-F344pMuAPIvy-JzXHLQFSwtCBPjqusSLCSKVddUdqWZ0wysvzLC4CibDZt28=w600-h450-p",
    ],
  },
  {
    id: "google-isabela",
    source: "Google",
    link_da_fonte: socialProofSummary.googleMapsUrl,
    nome_publico: "Isabela P.",
    nota: 5,
    texto:
      "Mesmo tendo feito a encomenda em cima da hora, recebi todo o apoio necessário e o resultado superou minhas expectativas.",
    data: "2025-10",
    categoria: "Bordado",
    produto_servico: "Bordado em bastidor",
    prioridade: 2,
    cidade_uf: "Maringá–PR",
    intents: ["bordado", "atendimento"],
  },
  {
    id: "google-yngred",
    source: "Google",
    link_da_fonte: socialProofSummary.googleMapsUrl,
    nome_publico: "Yngred G.",
    nota: 5,
    texto: "O bordado da Trilinha é lindo e o atendimento sensacional. Ficamos apaixonados no resultado.",
    data: "2025-08",
    categoria: "Bordado",
    produto_servico: "Bordado personalizado",
    prioridade: 2,
    cidade_uf: "Maringá–PR",
    intents: ["bordado", "atendimento"],
    reviewPhotos: [
      "https://lh3.googleusercontent.com/geougc-cs/ABOP9puchExMUtZSFGwVt2lc2Dk2qd_lFcIHC6q3QUO-1iDlrvhNbE4__1XpIWLiDHfZseUt4YyIOrmQ1nH89E-tLUbIcZUSVTcNPUuFXrGh9_8kt7EK3EcaSiDExqn21P0ohHowajUMzJ7ygO3h=w600-h450-p",
    ],
  },
  {
    id: "google-alana",
    source: "Google",
    link_da_fonte: socialProofSummary.googleMapsUrl,
    nome_publico: "Alana B.",
    nota: 5,
    texto: "Fui muito bem atendida, minha encomenda ficou linda e exatamente como eu queria!",
    data: "2025-10",
    categoria: "Bordado",
    produto_servico: "Bordado em jaleco",
    prioridade: 2,
    cidade_uf: "Maringá–PR",
    intents: ["bordado", "atendimento"],
  },
  {
    id: "google-luciana",
    source: "Google",
    link_da_fonte: socialProofSummary.googleMapsUrl,
    nome_publico: "Luciana M.",
    nota: 5,
    texto: "Adorei o trabalho que eles fizeram pra mim. Perfeito.",
    data: "2025-11",
    categoria: "Bordado",
    produto_servico: "Bordado personalizado",
    prioridade: 2,
    cidade_uf: "Maringá–PR",
    intents: ["bordado"],
  },
  {
    id: "google-flavia",
    source: "Google",
    link_da_fonte: socialProofSummary.googleMapsUrl,
    nome_publico: "Flavia M.",
    nota: 5,
    texto: "Bordados impecáveis! A Luana entendeu o que eu estava buscando, fez esboços e o resultado ficou incrível.",
    data: "2025-08",
    categoria: "Afetivo",
    produto_servico: "Bastidor para presente",
    prioridade: 3,
    cidade_uf: "Maringá–PR",
    intents: ["atendimento"],
  },
  ...shopeeReviews,
];
