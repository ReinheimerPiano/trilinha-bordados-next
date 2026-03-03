import { googleMapsPhotos } from "@/src/data/googleMapsPhotos";
import { SITE } from "@/src/lib/site";

const googleMapsBusinessLink = "https://maps.app.goo.gl/GpvovgSf9HrHq4VBA";

export default function GoogleMapsGallery() {
  return (
    <section className="space-y-4 rounded-2xl border border-brand-light/15 bg-brand-light/5 p-6 md:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="section-title">Fotos reais do ateliê</h2>
          <p className="soft-text mt-1 text-sm">
            Imagens publicadas no Google Maps da {SITE.name}, em {SITE.city}/{SITE.state}.
          </p>
        </div>
        <a
          href={googleMapsBusinessLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-full border border-brand-light/40 px-4 py-2 text-sm font-semibold text-brand-light transition hover:bg-brand-light/10"
        >
          Ver todas no Google
        </a>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
        {googleMapsPhotos.map((photoUrl, index) => (
          <a
            key={photoUrl}
            href={googleMapsBusinessLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group overflow-hidden rounded-lg border border-brand-light/10 bg-brand-dark/30"
          >
            <img
              src={photoUrl}
              alt={`Foto do ateliê Trilinha Bordados ${index + 1}`}
              loading="lazy"
              className="h-36 w-full object-cover object-center transition-transform duration-300 group-hover:scale-105 md:h-44"
            />
          </a>
        ))}
      </div>
    </section>
  );
}

