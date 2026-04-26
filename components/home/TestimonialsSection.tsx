import { homeTestimonials } from "@/src/data/home";

const googleMapsUrl = "https://maps.app.goo.gl/GpvovgSf9HrHq4VBA";

export default function TestimonialsSection() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-header">
          <p className="section-label">Depoimentos</p>
          <h2>O que dizem nossos clientes</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {homeTestimonials.map((review) => (
            <article
              key={review.name}
              className="flex flex-col gap-4 rounded-[20px] bg-white p-7 shadow-card"
            >
              <div
                className="text-teal-brand"
                style={{ fontSize: 18, letterSpacing: 3 }}
                aria-label={`Avaliação ${review.name}: 5 estrelas`}
              >
                ★★★★★
              </div>
              <p
                className="flex-1 text-ink2"
                style={{
                  fontSize: 15,
                  lineHeight: 1.65,
                  fontStyle: "italic",
                }}
              >
                “{review.text}”
              </p>
              <div
                className="flex items-center gap-3 border-t pt-4"
                style={{ borderColor: "var(--cream3)" }}
              >
                <div
                  aria-hidden="true"
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-[14px] font-bold"
                  style={{
                    background: "var(--teal-l)",
                    color: "var(--teal)",
                  }}
                >
                  {review.initials}
                </div>
                <div>
                  <strong
                    className="block text-ink"
                    style={{ fontSize: 14, fontWeight: 600 }}
                  >
                    {review.name}
                  </strong>
                  <span
                    className="text-ink3"
                    style={{ fontSize: 12 }}
                  >
                    {review.role}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-7 text-center">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Ver todas no Google →
          </a>
        </div>
      </div>
    </section>
  );
}
