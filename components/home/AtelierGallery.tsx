import { homeAtelierGallery } from "@/src/data/home";

const googleMapsUrl = "https://maps.app.goo.gl/GpvovgSf9HrHq4VBA";

export default function AtelierGallery() {
  return (
    <section className="section section-alt">
      <div className="wrap">
        <div className="section-header">
          <p className="section-label">Fotos reais do ateliê</p>
          <h2>Conheça nosso espaço em Maringá</h2>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {homeAtelierGallery.map((image, index) => (
            <a
              key={image}
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-[14px]"
              style={{ aspectRatio: "4 / 3" }}
            >
              <img
                src={image}
                alt={`Foto do ateliê Trilinha Bordados ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
