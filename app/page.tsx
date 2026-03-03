import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import SocialProofSection from "@/components/SocialProofSection";
import GoogleMapsGallery from "@/components/GoogleMapsGallery";
import HomeHero from "@/components/home/HomeHero";
import ServiceSegmentsSection from "@/components/home/ServiceSegmentsSection";
import ReadyProductsSection from "@/components/home/ReadyProductsSection";
import ServicesSection from "@/components/home/MachineServicesSection";
import { homeServiceSegments, offeringsBySegment } from "@/src/data/offerings";
import { SITE } from "@/src/lib/site";
import { buildWhatsAppLink } from "@/src/lib/whatsapp";

export const metadata: Metadata = {
  title: "Trilinha Bordados | Bordado Computadorizado e Patches em Maringá",
  description:
    "Bordado computadorizado em jalecos, polos e uniformes em Maringá–PR. Patches bordados (termocolante/velcro) com envio para todo o Brasil.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Trilinha Bordados | Bordado Computadorizado e Patches em Maringá",
    description:
      "Bordado computadorizado em jalecos, polos e uniformes em Maringá–PR. Patches bordados (termocolante/velcro) com envio para todo o Brasil.",
    url: "/",
  },
};

const whatsappLink = buildWhatsAppLink({
  phone: SITE.whatsapp,
  context: "site",
});

export default function HomePage() {
  const produtosProntos = offeringsBySegment.patch.itens;
  const servicosBordado = [
    offeringsBySegment.computadorizado.servicos[0],
    offeringsBySegment.patch.servicos[0],
    offeringsBySegment.afetivo.servicos[0],
  ].filter((item): item is NonNullable<typeof item> => Boolean(item));

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: produtosProntos.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      url:
        item.shopeeUrl ||
        buildWhatsAppLink({
          phone: SITE.whatsapp,
          context: "produto",
          itemTitle: item.title,
        }),
    })),
  };

  return (
    <>
      <JsonLd data={itemList} />
      <main className="space-y-10 pb-2 md:pb-4">
        <HomeHero whatsappLink={whatsappLink} />

        <ServiceSegmentsSection segments={homeServiceSegments} />

        <SocialProofSection />

        <ServicesSection items={servicosBordado} />

        <ReadyProductsSection items={produtosProntos} />

        <GoogleMapsGallery />
      </main>
    </>
  );
}
