"use client";

import { useMemo, useState } from "react";
import { SITE } from "@/src/lib/site";
import {
  socialProofSummary,
  socialProofTopics,
  socialReviews,
  type ReviewIntentFilter,
} from "@/src/data/socialProof";
import { buildWhatsAppLink } from "@/src/lib/whatsapp";
import WhatsAppCta from "@/components/WhatsAppCta";
import PackDecor from "@/components/brand/PackDecor";

type FilterOption = {
  id: "all" | ReviewIntentFilter;
  label: string;
};

const filters: FilterOption[] = [
  { id: "all", label: "Tudo" },
  { id: "bordado", label: "Serviços de Bordado" },
  { id: "patches", label: "Patches" },
  { id: "kits", label: "Kits" },
  { id: "atendimento", label: "Atendimento/Entrega" },
];

function stars(count: number) {
  return "*".repeat(Math.max(1, Math.min(5, count)));
}

export default function SocialProofSection() {
  const whatsappLink = buildWhatsAppLink({
    phone: SITE.whatsapp,
    context: "social-proof",
  });
  const [activeFilter, setActiveFilter] = useState<FilterOption["id"]>("all");
  const showFilters = socialProofSummary.totalReviews >= 15;

  const orderedReviews = useMemo(() => {
    const filtered =
      activeFilter === "all"
        ? socialReviews
        : socialReviews.filter((review) =>
            review.intents.includes(activeFilter),
          );
    return [...filtered]
      .sort((a, b) => a.prioridade - b.prioridade)
      .sort((a, b) => (a.data < b.data ? 1 : -1))
      .slice(0, 9);
  }, [activeFilter]);

  return (
    <section className="glass-panel relative space-y-5 p-6 md:p-8">
      <PackDecor />
      <div className="space-y-2">
        <h2 className="section-title">Avaliações de Clientes</h2>
        <p className="text-base font-semibold text-foreground">
          {socialProofSummary.title}
        </p>
        <p className="soft-text text-sm md:text-base">
          {socialProofSummary.subtitle}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <article className="card-surface p-4 md:col-span-2">
          <p className="text-sm text-foreground/80">Resumo</p>
          <p className="mt-1 text-xl font-bold text-foreground">
            {socialProofSummary.rating.toFixed(1).replace(".", ",")} Estrelas |{" "}
            {socialProofSummary.totalReviews} avaliações no Google
          </p>
          <p className="text-xs text-foreground/65">
            Atualizado em: {socialProofSummary.updatedAt}
          </p>
        </article>

        <article className="card-surface p-4">
          <p className="text-sm text-foreground/80">Tópicos mais citados</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {socialProofTopics.map((topic) => (
              <span key={topic.name} className="badge">
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
              className={`rounded-full border-2 px-3 py-1.5 text-xs font-semibold transition ${
                activeFilter === filter.id
                  ? "border-accent bg-accent/22 text-foreground"
                  : "border-border/20 text-foreground/85 hover:border-primary"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      ) : null}

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {orderedReviews.map((review) => (
          <article key={review.id} className="card-surface bg-surface/96 p-4">
            {review.reviewPhotos?.[0] ? (
              <a
                href={review.link_da_fonte}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-3 block"
              >
                <img
                  src={review.reviewPhotos[0]}
                  alt={`Foto da avaliação de ${review.nome_publico}`}
                  className="h-40 w-full rounded-[var(--radius-sm)] border border-foreground/30 object-cover"
                  loading="lazy"
                />
              </a>
            ) : null}
            <div className="mb-2 flex items-center justify-between gap-2">
              <span className="badge">{review.source}</span>
              <span className="text-xs font-semibold text-success">
                {stars(review.nota)}
              </span>
            </div>
            <p className="text-sm font-semibold text-foreground">
              {review.nome_publico}
            </p>
            <p className="text-xs text-foreground/65">
              {review.cidade_uf ? `${review.cidade_uf} · ` : ""}
              {review.data}
            </p>
            <p className="mt-2 text-sm text-foreground/90">{review.texto}</p>
            <div className="mt-3 inline-flex rounded-full bg-accent/22 px-2.5 py-1 text-xs text-foreground">
              {review.produto_servico}
            </div>
            <a
              href={review.link_da_fonte}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-xs font-semibold text-accent hover:text-violet"
            >
              Ver fonte ({review.source}) -&gt;
            </a>
          </article>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 pt-1">
        <a
          href={socialProofSummary.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
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
        <WhatsAppCta href={whatsappLink} label="Pedir orçamento no WhatsApp" />
      </div>
    </section>
  );
}
