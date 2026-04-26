import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SegmentServicesGrid from "@/components/SegmentServicesGrid";
import SegmentGallery from "@/components/SegmentGallery";
import FaqSection from "@/components/FaqSection";
import CtaBanner from "@/components/CtaBanner";
import { offeringsBySegment } from "@/src/data/offerings";
import { homeAtelierGallery, homeFaqs } from "@/src/data/home";

export const metadata: Metadata = {
  title: "Bordado Computadorizado em Maringá | Uniformes, Jalecos e Enxoval",
  description:
    "Serviços de bordado em uniforme escolar e profissional, cama mesa e banho, enxoval de bebê, cozinha e peças pessoais. Orçamento rápido.",
  alternates: { canonical: "/bordado-computadorizado/" },
  openGraph: {
    title: "Bordado Computadorizado em Maringá | Uniformes, Jalecos e Enxoval",
    description:
      "Serviços de bordado em uniforme escolar e profissional, cama mesa e banho, enxoval de bebê, cozinha e peças pessoais. Orçamento rápido.",
    url: "/bordado-computadorizado/",
  },
};

export default function BordadoComputadorizadoPage() {
  const { servicos: machineServices } = offeringsBySegment.computadorizado;

  return (
    <main>
      <PageHero
        label="Bordado Computadorizado"
        title="Bordado computadorizado para uniformes, jalecos e peças pessoais"
        description="Aplicação profissional em jalecos, polos, uniformes e peças corporativas. Padrão e durabilidade garantidos, com atendimento desde 1 peça."
        tags={["Jalecos", "Uniformes", "Polos", "Camisetas", "Moletons"]}
        whatsappMessage="Olá! Vim pelo site e quero orçamento para Bordado Computadorizado."
      />

      <SegmentServicesGrid
        label="O que oferecemos"
        title="Serviços de bordado computadorizado"
        services={machineServices}
        whatsappContext="servico"
      />

      <SegmentGallery
        label="Exemplos"
        title="Trabalhos recentes do ateliê"
        images={homeAtelierGallery.slice(0, 6)}
        alt
      />

      <FaqSection faqs={homeFaqs} />

      <CtaBanner
        title="Vamos criar juntos?"
        description="Mande sua ideia pelo WhatsApp e receba um orçamento rápido."
        whatsappMessage="Olá! Vim pelo site e quero orçamento para Bordado Computadorizado."
        buttonLabel="Pedir orçamento grátis"
        alt
      />
    </main>
  );
}
