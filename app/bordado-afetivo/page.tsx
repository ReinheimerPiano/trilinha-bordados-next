import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SegmentServicesGrid from "@/components/SegmentServicesGrid";
import SegmentGallery from "@/components/SegmentGallery";
import FaqSection from "@/components/FaqSection";
import CtaBanner from "@/components/CtaBanner";
import { offeringsBySegment } from "@/src/data/offerings";
import { homeAtelierGallery, homeFaqs } from "@/src/data/home";

export const metadata: Metadata = {
  title:
    "Bordado Afetivo Personalizado | Bastidores, Porta-Maternidade e Enxoval",
  description:
    "Bordados afetivos sob medida: porta-maternidade, porta-alianças, bastidores e peças únicas com significado.",
  alternates: { canonical: "/bordado-afetivo/" },
  openGraph: {
    title:
      "Bordado Afetivo Personalizado | Bastidores, Porta-Maternidade e Enxoval",
    description:
      "Bordados afetivos sob medida: porta-maternidade, porta-alianças, bastidores e peças únicas com significado.",
    url: "/bordado-afetivo/",
  },
};

export default function BordadoAfetivoPage() {
  const { servicos: manualServices } = offeringsBySegment.afetivo;

  return (
    <main>
      <PageHero
        label="Bordado Afetivo"
        title="Bordado afetivo, manual e computadorizado"
        description="Peças únicas feitas com carinho para presentear, decorar e marcar momentos especiais. Cada projeto tem proposta personalizada e acabamento delicado."
        tags={["Porta-maternidade", "Porta-alianças", "Bastidores", "Enxoval"]}
        whatsappMessage="Olá! Gostaria de saber mais sobre Bordado Afetivo."
      />

      <SegmentServicesGrid
        label="Projetos afetivos"
        title="Como podemos ajudar"
        services={manualServices}
        whatsappContext="servico"
        detailLabels={{
          what: "Projeto:",
          where: "Peça base:",
        }}
      />

      <SegmentGallery
        label="Inspiração"
        title="Peças afetivas que já produzimos"
        images={homeAtelierGallery.slice(0, 6)}
        alt
      />

      <FaqSection faqs={homeFaqs} />

      <CtaBanner
        title="Vamos eternizar seu momento?"
        description="Mande sua ideia pelo WhatsApp e desenhamos um projeto exclusivo para você."
        whatsappMessage="Olá! Gostaria de saber mais sobre Bordado Afetivo."
        alt
      />
    </main>
  );
}
