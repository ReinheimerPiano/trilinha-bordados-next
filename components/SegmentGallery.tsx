type SegmentGalleryProps = {
  label?: string;
  title?: string;
  images: string[];
  alt?: boolean;
};

export default function SegmentGallery({
  label = "Exemplos",
  title = "Trabalhos recentes",
  images,
  alt = false,
}: SegmentGalleryProps) {
  return (
    <section className={alt ? "section section-alt" : "section"}>
      <div className="wrap">
        <div className="section-header">
          <p className="section-label">{label}</p>
          <h2>{title}</h2>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={image}
              className="overflow-hidden rounded-[14px]"
              style={{ aspectRatio: "4 / 3" }}
            >
              <img
                src={image}
                alt={`Exemplo ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
