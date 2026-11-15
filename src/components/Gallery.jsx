
const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=85",
      alt: "Elegant restaurant dining",
    },
    {
      src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=85",
      alt: "Freshly brewed coffee",
    },
    {
      src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=85",
      alt: "Delicious dessert",
    },
    {
      src: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85",
      alt: "Freshly prepared pasta",
    },
    {
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85",
      alt: "Restaurant interior",
    },
  ];
  
  export default function Gallery() {
    return (
      <section
        id="gallery"
        className="overflow-hidden bg-[#F0EFE8] py-20 sm:py-24"
      >
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-2xl px-5 text-center">
          <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.3em] text-[#7C8B73]">
            Moments At Lunelle
          </p>
  
          <h2 className="font-heading text-4xl text-[#3F4B3C] sm:text-5xl">
            A Glimpse Into
            <span className="block italic text-[#7C8B73]">
              Our World
            </span>
          </h2>
  
          <p className="mt-5 font-body text-sm leading-7 text-[#62685D] sm:text-base">
            From delicious creations to beautiful spaces,
            discover the moments that make Cafe Lunelle special.
          </p>
        </div>
  
        {/* Infinite Sliding Gallery */}
        <div className="gallery-slider overflow-hidden">
          <div className="gallery-track flex w-max gap-5">
            {[...galleryImages, ...galleryImages].map((image, index) => (
              <div
                key={index}
                className="h-64 w-[280px] shrink-0 overflow-hidden rounded-2xl sm:h-80 sm:w-[380px] lg:h-96 lg:w-[460px]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  