import PackDecor from "@/components/brand/PackDecor";
import { googleMapsPhotos } from "@/src/data/googleMapsPhotos";
import { SITE } from "@/src/lib/site";

const googleMapsBusinessLink = "https://maps.app.goo.gl/GpvovgSf9HrHq4VBA";

export default function GoogleMapsGallery() {
  return (
    <section className="glass-panel relative space-y-4 p-6 md:p-8">
      <PackDecor />
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
          className="text-sm font-semibold text-accent hover:text-brand-teal"
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
            className="group overflow-hidden rounded-[1.4rem] rounded-br-none border-4 border-foreground bg-surface/92 shadow-[8px_8px_0px_0px_rgba(22,22,22,0.28)] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[10px_10px_0px_0px_rgba(22,22,22,0.33)] dark:shadow-[7px_7px_0px_0px_rgba(229,229,229,0.22)] dark:hover:shadow-[9px_9px_0px_0px_rgba(229,229,229,0.3)]"
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


