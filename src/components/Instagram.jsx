
import { Instagram as InstagramIcon, ArrowUpRight } from "lucide-react";

const instagramImages = [
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=700&q=85",
  "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=700&q=85",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=700&q=85",
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=85",
  "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=700&q=85",
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=700&q=85",
];

export default function Instagram() {
  return (
    <section className="bg-[#F0EFE8] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <InstagramIcon
            size={30}
            strokeWidth={1.5}
            className="mx-auto mb-5 text-[#7C8B73]"
          />

          <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.3em] text-[#7C8B73]">
            Follow Our Journey
          </p>

          <h2 className="font-heading text-4xl text-[#3F4B3C] sm:text-5xl">
            A Little More
            <span className="block italic text-[#7C8B73]">
              Lunelle On Instagram
            </span>
          </h2>

          <p className="mt-5 font-body text-sm leading-7 text-[#62685D] sm:text-base">
            Discover our food, beautiful moments and everything
            happening at Cafe Lunelle.
          </p>
        </div>

        {/* Instagram Images */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6">
          {instagramImages.map((image, index) => (
            <a
              key={index}
              href="#instagram"
              className="group relative aspect-square overflow-hidden rounded-xl"
              aria-label={`Instagram gallery image ${index + 1}`}
            >
              <img
                src={image}
                alt={`Cafe Lunelle Instagram inspiration ${index + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/35">
                <InstagramIcon
                  size={27}
                  className="scale-75 text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                />
              </div>
            </a>
          ))}
        </div>

        {/* Follow Button */}
        <div className="mt-12 text-center">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#7C8B73] px-8 py-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-white transition duration-300 hover:bg-[#3F4B3C]"
          >
            Follow Us On Instagram
            <ArrowUpRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}
