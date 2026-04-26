import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import SegmentServicesGrid from "@/components/SegmentServicesGrid";
import SegmentGallery from "@/components/SegmentGallery";
import FaqSection from "@/components/FaqSection";
import CtaBanner from "@/components/CtaBanner";
import { offeringsBySegment } from "@/src/data/offerings";
import { homeAtelierGallery, homeFaqs } from "@/src/data/home";
import { SITE } from "@/src/lib/site";
import { buildWhatsAppLink } from "@/src/lib/whatsapp";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export const metadata: Metadata = {
  title: "Patches Bordados | Termocolante e Velcro | Trilinha",
  description:
    "Patch com sua logo (P/M/G/GG), kits para colete motoclube e coleções. Compre na Shopee ou peça personalizado.",
  alternates: { canonical: "/patches-bordados/" },
  openGraph: {
    title: "Patches Bordados | Termocolante e Velcro | Trilinha",
    description:
      "Patch com sua logo (P/M/G/GG), kits para colete motoclube e coleções. Compre na Shopee ou peça personalizado.",
    url: "/patches-bordados/",
  },
};

export default function PatchesBordadosPage() {
  const { servicos: patchServices, itens: produtosProntos } =
    offeringsBySegment.patch;

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
          context: "patches",
          itemTitle: item.title,
        }),
    })),
  };

  return (
    <>
      <JsonLd data={itemList} />
      <main>
        <PageHero
          label="Patches Bordados"
          title="Patches bordados, prontos e personalizados"
          description="Patches com termocolante, velcro ou costura. Coleções, kits para motoclube e personalização sob medida com envio para todo o Brasil."
          tags={["Termocolante", "Velcro", "Costura", "Motoclube", "Geek"]}
          whatsappMessage="Olá! Tenho interesse em patches bordados. Pode me passar informações?"
          shopee
        />

        <SegmentServicesGrid
          label="Serviços de patch"
          title="O que produzimos em patches"
          services={patchServices}
          whatsappContext="patches"
          detailLabels={{
            what: "Aplicação:",
            where: "Uso indicado:",
          }}
        />

        <section className="section section-alt">
          <div className="wrap">
            <div className="section-header">
              <p className="section-label">Catálogo</p>
              <h2>Produtos prontos e lançamentos</h2>
            </div>

            <div
              className="grid gap-5"
              style={{
                gridTemplateColumns:
                  "repeat(auto-fill, minmax(280px, 1fr))",
              }}
            >
              {produtosProntos.map((item) => {
                const onShopee = item.status === "na_shopee";
                return (
                  <article key={item.id} className="product-card">
                    {item.image ? (
                      <div className="product-img">
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                        />
                      </div>
                    ) : null}
                    <div className="flex flex-1 flex-col p-5">
                      <h4
                        className="text-ink"
                        style={{
                          fontSize: 15,
                          fontWeight: 600,
                          lineHeight: 1.35,
                          marginBottom: 6,
                        }}
                      >
                        {item.title}
                      </h4>
                      <p
                        className="text-ink3"
                        style={{ fontSize: 13, marginBottom: 12 }}
                      >
                        {item.description}
                      </p>

                      <div className="mb-4">
                        <span className="sales-badge">
                          {onShopee
                            ? `Pronta na Shopee · ${item.displayOrders}`
                            : `Em lançamento · ${item.displayOrders}`}
                        </span>
                      </div>

                      <div className="mt-auto flex flex-wrap gap-2">
                        <a
                          href={buildWhatsAppLink({
                            phone: SITE.whatsapp,
                            context: "patches",
                            itemTitle: item.title,
                          })}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-wa"
                          style={{ fontSize: 13, padding: "9px 18px" }}
                        >
                          <WhatsAppIcon size={15} />
                          Reservar
                        </a>
                        {onShopee ? (
                          <a
                            href={item.shopeeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-shopee-redesign"
                            style={{ fontSize: 13, padding: "9px 18px" }}
                          >
                            Ver na Shopee
                          </a>
                        ) : (
                          <span
                            className="btn-outline"
                            style={{
                              fontSize: 13,
                              padding: "8px 16px",
                              cursor: "default",
                            }}
                          >
                            Em breve na Shopee
                          </span>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <SegmentGallery
          label="Galeria"
          title="Patches em produção"
          images={homeAtelierGallery.slice(0, 6)}
        />

        <FaqSection faqs={homeFaqs} />

        <CtaBanner
          title="Quer um patch personalizado?"
          description="Mande sua arte pelo WhatsApp e receba um orçamento rápido com prazo e valor."
          whatsappMessage="Olá! Tenho interesse em patches bordados. Pode me passar informações?"
          alt
        />
      </main>
    </>
  );
}
