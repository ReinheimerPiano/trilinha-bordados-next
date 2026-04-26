"use client";

import { useState } from "react";
import type { HomeFaq } from "@/src/data/home";

type FaqSectionProps = {
  faqs: HomeFaq[];
  label?: string;
  title?: string;
  className?: string;
};

export default function FaqSection({
  faqs,
  label = "Dúvidas frequentes",
  title = "Respondemos as principais perguntas",
  className = "section",
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={className}>
      <div className="wrap">
        <div className="section-header">
          <p className="section-label">{label}</p>
          <h2>{title}</h2>
        </div>

        <div
          className="mx-auto flex flex-col gap-2"
          style={{ maxWidth: 720 }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="faq-item">
                <button
                  type="button"
                  className="faq-q"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span className={`faq-icon${isOpen ? " open" : ""}`}>+</span>
                </button>
                <div className={`faq-a${isOpen ? " open" : ""}`}>
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
