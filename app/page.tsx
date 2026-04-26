import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import HomeHero from "@/components/home/HomeHero";
import SpecialtiesSection from "@/components/home/SpecialtiesSection";
import HowItWorks from "@/components/home/HowItWorks";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import AtelierGallery from "@/components/home/AtelierGallery";
import FaqSection from "@/components/FaqSection";
import CtaBanner from "@/components/CtaBanner";
import { homeFaqs, homeFeaturedProducts } from "@/src/data/home";
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

const heroWhatsappLink = buildWhatsAppLink({
  phone: SITE.whatsapp,
  context: "site",
});

export default function HomePage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: homeFeaturedProducts.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: product.title,
      url: `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(product.whatsappMessage)}`,
    })),
  };

  return (
    <>
      <JsonLd data={itemList} />
      <main>
        <HomeHero whatsappLink={heroWhatsappLink} />
        <SpecialtiesSection />
        <HowItWorks />
        <FeaturedProducts />
        <TestimonialsSection />
        <AtelierGallery />
        <FaqSection faqs={homeFaqs} />
        <CtaBanner alt />
      </main>
    </>
  );
}
