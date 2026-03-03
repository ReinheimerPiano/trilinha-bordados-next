import shopeeStaticProducts from "@/src/data/shopeeProducts.static.json";
import { asset } from "@/src/lib/asset";

export type Segment = "computadorizado" | "patch" | "afetivo";
export type OfferKind = "servico" | "item";
export type AfetivoMode = "manual" | "computadorizado";
export type CatalogStatus = "na_shopee" | "em_breve_shopee";
export type CatalogCategory = "produtos_prontos" | "servicos_bordado";

type BaseCatalogItem = {
  id: string;
  title: string;
  description: string;
  status: CatalogStatus;
  orders: number;
  displayOrders: string;
  tags: string[];
  segment: Segment;
  image?: string;
};

export type ServiceCatalogItem = BaseCatalogItem & {
  kind: "servico";
  category: "servicos_bordado";
  afetivoMode?: AfetivoMode;
  what?: string;
  where?: string;
  leadTime?: string;
  minimumOrder?: string;
};

export type MachineServiceItem = ServiceCatalogItem & {
  segment: "computadorizado";
  what: string;
  where: string;
  leadTime: string;
  minimumOrder: string;
};

export type ProductCatalogItem = BaseCatalogItem & {
  kind: "item";
  category: "produtos_prontos";
  shopeeUrl?: string;
  price?: string;
  whatsappOnlyMessage?: string;
};

export type CatalogItem = ServiceCatalogItem | ProductCatalogItem;

export type HomeServiceSegment = {
  title: string;
  description: string;
  highlights: string[];
  href: string;
  cta: string;
  image: string;
};

export type SegmentOfferings = {
  servicos: ServiceCatalogItem[];
  itens: ProductCatalogItem[];
};

type ShopeeStatic = {
  title: string;
  price: string;
  orders: number;
  image: string;
  shopeeUrl: string;
};

function estimateOrders(orders: number): number {
  return orders < 5 ? 20 + orders : orders + 12;
}

function detectTags(title: string, orders: number): string[] {
  const text = title.toLowerCase();
  const tags: string[] = [];
  if (orders >= 4) tags.push("Mais vendidos");
  if (text.includes("patch")) tags.push("Patch");
  if (text.includes("motoclube")) tags.push("Motoclube");
  if (text.includes("nome")) tags.push("Personalizado");
  if (tags.length === 0) tags.push("Shopee");
  return tags.slice(0, 3);
}

function applyAssetPath<T extends { image?: string }>(items: T[]): void {
  items.forEach((item) => {
    if (item.image) {
      item.image = asset(item.image);
    }
  });
}

const patchItemsFromShopee: ProductCatalogItem[] = (shopeeStaticProducts as ShopeeStatic[]).map(
  (item, index) => {
    const orders = estimateOrders(item.orders);
    return {
      id: `shopee-${index + 1}`,
      title: item.title,
      description: "Produto disponível na Shopee com envio para todo o Brasil.",
      category: "produtos_prontos",
      status: "na_shopee",
      orders,
      displayOrders: `${orders}+`,
      tags: detectTags(item.title, item.orders),
      shopeeUrl: item.shopeeUrl,
      image: item.image,
      price: item.price,
      segment: "patch",
      kind: "item",
    };
  }
);

export const computerizadoServices: MachineServiceItem[] = [
    {
    id: "srv-computadorizado-uniforme-profissional",
    title: "Personalização de uniforme profissional",
    description:
      "Padronização visual para equipes com nome, função e identificação por setor.",
    category: "servicos_bordado",
    status: "na_shopee",
    orders: 39,
    displayOrders: "39+",
    tags: ["Uniforme Profissional", "Nome e cargo", "Bordado"],
    what: "Nome + cargo/função e setor/unidade/equipe",
    where: "Peito, manga e costas",
    leadTime: "4 a 8 dias úteis",
    minimumOrder: "1 peça (desconto por quantidade)",
    image: "/images/products/Uniforme.jpg",
    segment: "computadorizado",
    kind: "servico",
  },
  {
    id: "srv-computadorizado-logo-uniformes",
    title: "Logo e identidade em uniformes",
    description:
      "Aplicação de logo para reforçar identidade visual em vestuário de trabalho.",
    category: "servicos_bordado",
    status: "na_shopee",
    orders: 36,
    displayOrders: "36+",
    tags: ["Uniforme Profissional", "Logo", "Bordado"],
    what: "Logo da empresa e variações de assinatura visual",
    where: "Peito, manga e costas",
    leadTime: "4 a 8 dias úteis",
    minimumOrder: "1 peça (desconto por quantidade)",
    image: "/images/products/Uniforme3.jpg",
    segment: "computadorizado",
    kind: "servico",
  },
  {
    id: "srv-computadorizado-jaleco-nome-curso",
    title: "Jaleco com nome e curso",
    description:
      "Composição completa para área acadêmica e profissional da saúde.",
    category: "servicos_bordado",
    status: "na_shopee",
    orders: 35,
    displayOrders: "35+",
    tags: ["Jaleco", "Nome e curso", "Bordado"],
    what: "Nome + curso (opcional de logo/brasão)",
    where: "Bolso, peito e manga",
    leadTime: "3 a 7 dias úteis",
    minimumOrder: "1 peça",
    image: "/images/products/jaleco-brasao-nome-curso-bolso.jpg",
    segment: "computadorizado",
    kind: "servico",
  },
  {
    id: "srv-computadorizado-escolar",
    title: "Identificação para uniforme escolar",
    description:
      "Nome, turma/série/período e nome + sobrenome bordados para peças escolares.",
    category: "servicos_bordado",
    status: "na_shopee",
    orders: 40,
    displayOrders: "40+",
    tags: ["Uniforme Escolar", "Nome", "Bordado"],
    what: "Nome, sobrenome, turma/série/período",
    where: "Peito, manga e costas",
    leadTime: "3 a 7 dias úteis",
    minimumOrder: "1 peça",
    image: "/images/products/mochilaEscolar.jpeg",
    segment: "computadorizado",
    kind: "servico",
  }, 
    {
    id: "srv-computadorizado-cozinha",
    title: "Bordado em itens de cozinha",
    description:
      "Peças utilitárias e decorativas para cozinha, confeitaria e eventos.",
    category: "servicos_bordado",
    status: "na_shopee",
    orders: 22,
    displayOrders: "22+",
    tags: ["Cozinha", "Avental", "Bordado"],
    what: "Nome, frase, logo e iniciais",
    where: "Avental, pano de prato, touca e jogo americano",
    leadTime: "3 a 7 dias úteis",
    minimumOrder: "1 peça",
    image: "/images/products/dolma.jpeg",
    segment: "computadorizado",
    kind: "servico",
  },
  {
    id: "srv-computadorizado-pecas-pessoais",
    title: "Bordado em peças pessoais",
    description:
      "Aplicação em vestuário e acessórios (conforme aceitação do tecido).",
    category: "servicos_bordado",
    status: "na_shopee",
    orders: 21,
    displayOrders: "21+",
    tags: ["Peças Pessoais", "Custom", "Bordado"],
    what: "Nome, iniciais e arte pequena",
    where: "Camisetas, moletons, bonés, bolsas e nécessaires",
    leadTime: "3 a 7 dias úteis",
    minimumOrder: "1 peça",
    image: "/images/products/camisetaPersonalizada.jpg",
    segment: "computadorizado",
    kind: "servico",
  },
    {
    id: "srv-computadorizado-enxoval-bebe",
    title: "Bordado para enxoval de bebê",
    description:
      "Personalização delicada para maternidade, presente e uso diário.",
    category: "servicos_bordado",
    status: "na_shopee",
    orders: 27,
    displayOrders: "27+",
    tags: ["Enxoval Bebê", "Maternidade", "Bordado"],
    what: "Nome do bebê + desenho simples",
    where: "Manta, fraldinhas, paninhos e toalhinha",
    leadTime: "4 a 8 dias úteis",
    minimumOrder: "1 peça",
    image: "/images/products/enxoval-bebe-personalizado-maquina.webp",
    segment: "computadorizado",
    kind: "servico",
  },
  {
    id: "srv-computadorizado-cama-mesa-banho",
    title: "Cama, mesa e banho",
    description:
      "Bordados personalizados para casa e presentes com acabamento elegante.",
    category: "servicos_bordado",
    status: "na_shopee",
    orders: 24,
    displayOrders: "24+",
    tags: ["Casa", "Monograma", "Bordado"],
    what: "Nome, iniciais e monograma",
    where: "Toalha, roupão, lençol, fronha e mesa",
    leadTime: "4 a 8 dias úteis",
    minimumOrder: "1 peça",
    image: "/images/products/enxoval-personalizado-maquina.webp",
    segment: "computadorizado",
    kind: "servico",
  },
  {
    id: "srv-computadorizado-brindes",
    title: "Brindes promocionais",
    description:
      "Personalização para ações de marca, eventos e kits corporativos.",
    category: "servicos_bordado",
    status: "na_shopee",
    orders: 28,
    displayOrders: "28+",
    tags: ["Brindes", "Promocional", "Bordado"],
    what: "Logo, nome da campanha e variações promocionais",
    where: "Ecobag, avental, nécessaires e peças têxteis",
    leadTime: "4 a 10 dias úteis",
    minimumOrder: "1 peça (desconto por quantidade)",
    image: "/images/products/aventais.jpeg",
    segment: "computadorizado",
    kind: "servico",
  },
];

export const patchServices: ServiceCatalogItem[] = [
  {
    id: "srv-patch-personalizado-aplicacao",
    title: "Patches bordados personalizados (8–15 cm)",
    category: "servicos_bordado",
    status: "na_shopee",
    orders: 48,
    displayOrders: "48+",
    tags: ["Patch", "Personalizado", "Bordado"],
    description: "Produção sob medida para logos, frases, igrejas, times e eventos.",
    what: "Logo, frase, brasão, emblema e arte personalizada",
    where: "Uniformes, coletes, mochilas, bonés e jalecos",
    leadTime: "3 a 7 dias úteis",
    minimumOrder: "1 peça (desconto por quantidade)",
    image: "/images/products/patches personalizados.jpg",
    segment: "patch",
    kind: "servico",
  },
  {
    id: "srv-patch-kits",
    title: "Kits de patches (coleções/temas)",
    category: "servicos_bordado",
    status: "na_shopee",
    orders: 45,
    displayOrders: "45+",
    tags: ["Patch", "Kits", "Coleções"],
    description:
      "Kits prontos e sob encomenda para empresas, igrejas, escoteiros e coleções temáticas.",
    what: "Kits por tema, coleção e identidade do grupo",
    where: "Colete, jaqueta, mochila e peças de coleção",
    leadTime: "4 a 8 dias úteis",
    minimumOrder: "Kit sob demanda",
    image: "/images/products/kit-patch-legendarios.jpg",
    segment: "patch",
    kind: "servico",
  },
  {
    id: "srv-patch-aplicacao-peca",
    title: "Aplicação de patch na peça",
    category: "servicos_bordado",
    status: "na_shopee",
    orders: 42,
    displayOrders: "42+",
    tags: ["Patch", "Aplicação", "Termocolante"],
    description:
      "Aplicação com termocolante, velcro (macho/fêmea) ou adesivo permanente.",
    what: "Termocolante, velcro macho/fêmea e adesivo permanente",
    where: "Aplicação direta na peça do cliente",
    leadTime: "2 a 5 dias úteis",
    minimumOrder: "1 peça",
    image: "/images/products/prensa-termica.png",
    segment: "patch",
    kind: "servico",
  },
  {
    id: "srv-patch-brasao-faculdade",
    title: "Patch de brasão/faculdade e identificação",
    category: "servicos_bordado",
    status: "na_shopee",
    orders: 37,
    displayOrders: "37+",
    tags: ["Patch", "Brasão", "Faculdade"],
    description:
      "Brasão de curso, logo de faculdade e identificação para uniforme e jaleco.",
    what: "Brasão de curso, logo e identificação",
    where: "Jaleco, camisa, uniforme acadêmico e profissional",
    leadTime: "3 a 7 dias úteis",
    minimumOrder: "1 peça",
    image: "/images/products/patch-brasao-curso.jpg",
    segment: "patch",
    kind: "servico",
  },
  {
    id: "srv-patch-motoclube",
    title: "Patches para motoclube e grupos de motociclistas",
    category: "servicos_bordado",
    status: "na_shopee",
    orders: 50,
    displayOrders: "50+",
    tags: ["Patch", "Motoclube", "Colete"],
    description:
      "Patches para colete, incluindo brasão de costas, tag de nome/cargo e kits personalizados.",
    what: "Brasão costas, tarja superior/inferior, nome e cargo",
    where: "Colete de motoclube e jaqueta",
    leadTime: "5 a 10 dias úteis",
    minimumOrder: "1 kit",
    image: "/images/products/kit-motoclube5-costas.jpeg",
    segment: "patch",
    kind: "servico",
  },
];

export const afetivoServices: ServiceCatalogItem[] = [
  {
    id: "srv-afetivo-porta-maternidade-page",
    title: "Porta-maternidade bordado à mão",
    category: "servicos_bordado",
    status: "na_shopee",
    orders: 26,
    displayOrders: "26+",
    tags: ["Afetivo", "Manual", "Maternidade"],
    description:
      "Peça exclusiva para decorar o quarto do bebê com identidade afetiva.",
    what: "Nome, tema e elementos afetivos sob medida",
    where: "Quadro/bastidor para porta de maternidade",
    leadTime: "7 a 15 dias úteis",
    minimumOrder: "1 peça",
    image: "/images/products/porta-maternidade.jpg",
    segment: "afetivo",
    kind: "servico",
    afetivoMode: "manual",
  },
  {
    id: "srv-afetivo-porta-alianca",
    title: "Porta-alianças bordado à mão",
    category: "servicos_bordado",
    status: "na_shopee",
    orders: 18,
    displayOrders: "18+",
    tags: ["Afetivo", "Manual", "Casamento"],
    description:
      "Bordado artesanal para cerimônias com acabamento delicado e personalizado.",
    what: "Iniciais, data e desenho da cerimônia",
    where: "Porta-alianças em bastidor ou almofada",
    leadTime: "7 a 15 dias úteis",
    minimumOrder: "1 peça",
    image: "/images/products/porta-alianca.jpg",
    segment: "afetivo",
    kind: "servico",
    afetivoMode: "manual",
  },
  {
    id: "srv-afetivo-enxoval",
    title: "Enxoval afetivo e peças únicas",
    category: "servicos_bordado",
    status: "na_shopee",
    orders: 20,
    displayOrders: "20+",
    tags: ["Afetivo", "Manual", "Enxoval"],
    description: "Projeto sob medida para presentes e memórias com significado.",
    what: "Nome, frase e composição personalizada",
    where: "Enxoval e peças têxteis com valor afetivo",
    leadTime: "7 a 15 dias úteis",
    minimumOrder: "1 peça",
    image: "/images/products/enxoval-afetivo.webp",
    segment: "afetivo",
    kind: "servico",
    afetivoMode: "manual",
  },
  {
    id: "srv-afetivo-bastidores",
    title: "Bastidores decorativos personalizados",
    category: "servicos_bordado",
    status: "na_shopee",
    orders: 23,
    displayOrders: "23+",
    tags: ["Afetivo", "Computadorizado", "Bastidor"],
    description:
      "Composição de nomes, frases e elementos afetivos para presentear ou decorar.",
    what: "Nome, frase e arte personalizada",
    where: "Bastidor decorativo e peça de presente",
    leadTime: "5 a 10 dias úteis",
    minimumOrder: "1 peça",
    image: "/images/products/bastidores-decorativos-maquina.jpg",
    segment: "afetivo",
    kind: "servico",
    afetivoMode: "computadorizado",
  },
];

const patchItemsManual: ProductCatalogItem[] = [
  {
    id: "item-patch-kit-motoclube",
    title: "Kit motoclube costas (5 itens)",
    description:
      "Conjunto completo para costas de colete de motoclube em patch bordado.",
    category: "produtos_prontos",
    status: "em_breve_shopee",
    orders: 50,
    displayOrders: "50+",
    tags: ["Motoclube", "Alta saída", "Kit costas"],
    whatsappOnlyMessage: "Em breve na Shopee · disponível agora via WhatsApp",
    image: "/images/products/kit-motoclube5-costas.jpeg",
    segment: "patch",
    kind: "item",
  },
  {
    id: "item-patch-tag-motoclube",
    title: "Tag nome e cargo para motoclube",
    description: "Tags bordadas para identificação de nome e cargo no colete.",
    category: "produtos_prontos",
    status: "em_breve_shopee",
    orders: 30,
    displayOrders: "30+",
    tags: ["Motoclube", "Nome e cargo", "Tag"],
    whatsappOnlyMessage: "Em breve na Shopee · disponível agora via WhatsApp",
    image: "/images/products/tag-nome-cargo-motoclube.jpeg",
    segment: "patch",
    kind: "item",
  },
];

export const offeringsBySegment: Record<Segment, SegmentOfferings> = {
  computadorizado: {
    servicos: computerizadoServices,
    itens: [],
  },
  patch: {
    servicos: patchServices,
    itens: [...patchItemsFromShopee, ...patchItemsManual].sort(
      (a, b) => b.orders - a.orders
    ),
  },
  afetivo: {
    servicos: afetivoServices,
    itens: [],
  },
};

export const homeServiceSegments: HomeServiceSegment[] = [
    {
    title: "Bordado Computadorizado",
    description:
      "Aplicação em jalecos, polos, uniformes e peças promocionais com padrão profissional.",
    highlights: ["Logo e identidade visual", "Nome + função/cargo", "Peças corporativas e eventos"],
    href: "/bordado-computadorizado/",
    cta: "Ver Bordado Computadorizado",
    image: "/images/products/jaleco-combrasao-com-patches-bordado-bolso.jpg",
  },
  {
    title: "Patches Bordados Personalizados",
    description:
      "Termocolante, velcro ou costura para logos, frases, kits e coleções.",
    highlights: ["Patches e kits prontos", "Personalizados 8–15 cm", "Compra online na Shopee"],
    href: "/patches-bordados/",
    cta: "Ver Patches Bordados",
    image: "/images/products/patches personalizados.jpg",
  },
  {
    title: "Bordado Afetivo (Manual e Computadorizado)",
    description:
      "Projetos sob medida com acabamento afetivo para presentes e peças únicas.",
    highlights: ["Porta-maternidade", "Porta-alianças", "Bastidores e enxoval afetivo"],
    href: "/bordado-afetivo/",
    cta: "Ver Bordado Afetivo",
    image: "/images/products/porta maternidade 2.jfif",
  },
];

applyAssetPath(patchItemsFromShopee);
applyAssetPath(computerizadoServices);
applyAssetPath(patchServices);
applyAssetPath(afetivoServices);
applyAssetPath(patchItemsManual);
applyAssetPath(homeServiceSegments);

export const allServices: ServiceCatalogItem[] = [
  ...offeringsBySegment.computadorizado.servicos,
  ...offeringsBySegment.patch.servicos,
  ...offeringsBySegment.afetivo.servicos,
].sort((a, b) => b.orders - a.orders);

export const allItems: ProductCatalogItem[] = [
  ...offeringsBySegment.computadorizado.itens,
  ...offeringsBySegment.patch.itens,
  ...offeringsBySegment.afetivo.itens,
].sort((a, b) => b.orders - a.orders);

export const catalogItems: CatalogItem[] = [...allServices, ...allItems].sort(
  (a, b) => b.orders - a.orders
);
