
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    role: "Happy Customer",
    review:
      "A beautiful place with a lovely atmosphere. The food was delicious and the overall experience was wonderful.",
  },
  {
    name: "Daniel R.",
    role: "Regular Customer",
    review:
      "Absolutely loved the experience! Great flavours, welcoming staff and a beautiful ambience.",
  },
  {
    name: "Emily K.",
    role: "Happy Customer",
    review:
      "One of those places you want to visit again. Everything felt special, from the food to the hospitality.",
  },
];

function StarRating() {
  return (
    <div className="flex justify-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={16}
          fill="#C9A66B"
          stroke="#C9A66B"
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="bg-[#FAF9F6] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.3em] text-[#7C8B73]">
            Words From Our Guests
          </p>

          <h2 className="font-heading text-4xl text-[#3F4B3C] sm:text-5xl">
            Stories That
            <span className="block italic text-[#7C8B73]">
              Make Us Smile
            </span>
          </h2>

          <p className="mt-5 font-body text-sm leading-7 text-[#62685D] sm:text-base">
            Every visit creates a memory. Here's what our guests
            have to say about their Cafe Lunelle experience.
          </p>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="rounded-2xl border border-[#D9AAA7]/40 bg-white px-7 py-9 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg sm:px-9"
            >
              <Quote
                size={34}
                strokeWidth={1.3}
                className="mx-auto mb-6 text-[#D9AAA7]"
              />

              <StarRating />

              <p className="my-7 font-body text-sm leading-8 text-[#62685D]">
                "{review.review}"
              </p>

              <div className="mx-auto mb-5 h-px w-12 bg-[#D9AAA7]" />

              <h3 className="font-heading text-xl text-[#3F4B3C]">
                {review.name}
              </h3>

              <p className="mt-2 font-body text-xs uppercase tracking-wider text-[#7C8B73]">
                {review.role}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
