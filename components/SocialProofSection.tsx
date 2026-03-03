"use client";

import { useMemo, useState } from "react";
import { SITE } from "@/src/lib/site";
import { socialProofSummary, socialProofTopics, socialReviews, type ReviewIntentFilter } from "@/src/data/socialProof";
import { buildWhatsAppLink } from "@/src/lib/whatsapp";
import WhatsAppCta from "@/components/WhatsAppCta";

type FilterOption = {
  id: "all" | ReviewIntentFilter;
  label: string;
};

const filters: FilterOption[] = [
  { id: "all", label: "Tudo" },
  { id: "bordado", label: "Bordado computadorizado" },
  { id: "patches", label: "Patches termocolante/velcro" },
  { id: "kits", label: "Kits" },
  { id: "atendimento", label: "Atendimento/Entrega" },
];

function stars(count: number) {
  return "★".repeat(Math.max(1, Math.min(5, count)));
}

export default function SocialProofSection() {
  const whatsappLink = buildWhatsAppLink({ phone: SITE.whatsapp, context: "social-proof" });
  const [activeFilter, setActiveFilter] = useState<FilterOption["id"]>("all");
  const showFilters = socialProofSummary.totalReviews >= 15;

  const orderedReviews = useMemo(() => {
    const filtered =
      activeFilter === "all" ? socialReviews : socialReviews.filter((review) => review.intents.includes(activeFilter));
    return [...filtered]
      .sort((a, b) => a.prioridade - b.prioridade)
      .sort((a, b) => (a.data < b.data ? 1 : -1))
      .slice(0, 9);
  }, [activeFilter]);

  return (
    <section className="space-y-5 rounded-2xl border border-brand-light/15 bg-brand-light/5 p-6 md:p-8">
      <div className="space-y-2">
        <h2 className="section-title">Avaliações de Clientes</h2>
        <p className="text-base font-semibold text-brand-light">{socialProofSummary.title}</p>
        <p className="soft-text text-sm md:text-base">{socialProofSummary.subtitle}</p>
        <p className="soft-text text-sm">{socialProofSummary.intro}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <article className="rounded-xl border border-brand-light/10 bg-brand-dark/35 p-4">
          <p className="text-sm text-brand-light/80">Resumo</p>
          <p className="mt-1 text-xl font-bold text-brand-light">
            ⭐ {socialProofSummary.rating.toFixed(1).replace(".", ",")} | {socialProofSummary.totalReviews} avaliações no Google
          </p>
          <p className="text-xs text-brand-light/65">Atualizado em: {socialProofSummary.updatedAt}</p>
        </article>
        <article className="rounded-xl border border-brand-light/10 bg-brand-dark/35 p-4">
          <p className="text-sm text-brand-light/80">Distribuição</p>
          <p className="mt-1 text-sm text-brand-light">5★: {socialProofSummary.reviewBreakdown[5]} avaliações</p>
          <p className="text-xs text-brand-light/65">Sem avaliações de 1★ a 4★.</p>
        </article>
        <article className="rounded-xl border border-brand-light/10 bg-brand-dark/35 p-4">
          <p className="text-sm text-brand-light/80">Tópicos mais citados</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {socialProofTopics.map((topic) => (
              <span key={topic.name} className="rounded-full border border-brand-light/15 px-2.5 py-1 text-xs text-brand-light/90">
                {topic.name} {topic.count}
              </span>
            ))}
          </div>
        </article>
      </div>

      {showFilters ? (
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                activeFilter === filter.id
                  ? "border-accent-teal bg-accent-teal/15 text-accent-teal"
                  : "border-brand-light/20 text-brand-light/85 hover:border-brand-teal/70"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      ) : null}

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {orderedReviews.map((review) => (
          <article key={review.id} className="rounded-xl border border-brand-light/10 bg-deep-green/45 p-4">
            {review.reviewPhotos?.[0] ? (
              <a href={review.link_da_fonte} target="_blank" rel="noopener noreferrer" className="mb-3 block">
                <img
                  src={review.reviewPhotos[0]}
                  alt={`Foto da avaliação de ${review.nome_publico}`}
                  className="h-40 w-full rounded-lg border border-brand-light/10 object-cover"
                  loading="lazy"
                />
              </a>
            ) : null}
            <div className="mb-2 flex items-center justify-between gap-2">
              <span className="rounded-full border border-brand-light/20 px-2.5 py-1 text-[11px] text-brand-light/90">{review.source}</span>
              <span className="text-xs font-semibold text-accent-green">{stars(review.nota)}</span>
            </div>
            <p className="text-sm font-semibold text-brand-light">{review.nome_publico}</p>
            <p className="text-xs text-brand-light/65">
              {review.cidade_uf ? `${review.cidade_uf} · ` : ""}
              {review.data}
            </p>
            <p className="mt-2 text-sm text-brand-light/90">{review.texto}</p>
            <div className="mt-3 inline-flex rounded-full bg-brand-purple/20 px-2.5 py-1 text-xs text-brand-light">{review.produto_servico}</div>
            <a href={review.link_da_fonte} target="_blank" rel="noopener noreferrer" className="mt-3 block text-xs font-semibold text-accent-teal">
              Ver fonte ({review.source}) →
            </a>
          </article>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 pt-1">
        <WhatsAppCta href={whatsappLink} label="Pedir orçamento no WhatsApp" />
        <a
          href={socialProofSummary.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-full border border-brand-light/40 px-4 py-2 text-sm font-semibold text-brand-light transition hover:bg-brand-light/10"
        >
          Ver mais avaliações no Google
        </a>
        <a
          href={socialProofSummary.shopeeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shopee"
        >
          Ver loja na Shopee
        </a>
      </div>
    </section>
  );
}
