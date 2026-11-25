
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* About Hero */}
        <section className="mx-3 my-4 flex min-h-[380px] items-center justify-center rounded-2xl bg-[#3F4B3C] px-5 py-20 text-center sm:mx-6 sm:my-6 sm:min-h-[450px] sm:rounded-3xl lg:mx-10">
          <div className="max-w-3xl">
            <p className="mb-5 font-body text-xs font-semibold uppercase tracking-[0.3em] text-[#D9AAA7]">
              The Story Behind Cafe Lunelle
            </p>

            <h1 className="font-heading text-5xl leading-tight text-[#FAF9F6] sm:text-6xl lg:text-7xl">
              More Than Just a Cafe
            </h1>

            <p className="mx-auto mt-6 max-w-xl font-body text-sm leading-7 text-[#FAF9F6]/80 sm:text-base">
              A place where beautiful moments, delicious flavours,
              and warm hospitality come together.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section id="our-story" className="px-5 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* Image */}
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1000"
                alt="Warm and welcoming cafe interior"
                className="h-[350px] w-full object-cover sm:h-[480px]"
              />
            </div>

            {/* Text */}
            <div className="text-center lg:text-left">
              <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.3em] text-[#7C8B73]">
                Welcome to Cafe Lunelle
              </p>

              <h2 className="font-heading text-4xl leading-tight text-[#3F4B3C] sm:text-5xl">
                A Little Place,
                <br className="hidden sm:block" />
                A Lot of Love
              </h2>

              <p className="mt-7 font-body text-sm leading-8 text-[#3F4B3C]/75 sm:text-base">
                At Cafe Lunelle, we believe that a great cafe is more
                than just good food and coffee. It's about creating
                moments, bringing people together, and making every
                visit feel special.
              </p>

              <p className="mt-5 font-body text-sm leading-8 text-[#3F4B3C]/75 sm:text-base">
                From carefully prepared dishes to a welcoming
                atmosphere, every detail is designed to make you
                feel at home.
              </p>

              <p className="mt-7 font-heading text-2xl italic text-[#7C8B73]">
                Made with love, served with warmth.
              </p>
            </div>
          </div>
        </section>


{/* The Heart Behind Every Dish */}
<section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
  <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

    <div className="order-2 text-center lg:order-1 lg:text-left">
      <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.3em] text-[#7C8B73]">
        Passion on Every Plate
      </p>

      <h2 className="font-heading text-4xl leading-tight text-[#3F4B3C] sm:text-5xl">
        The Heart Behind Every Dish
      </h2>

      <p className="mt-6 font-body text-sm leading-8 text-[#3F4B3C]/75 sm:text-base">
        Behind every memorable meal is a passion for bringing
        flavours to life. At Cafe Lunelle, our chef believes that
        cooking is more than following a recipe. It is about
        creativity, patience, and putting care into every detail.
      </p>

      <p className="mt-5 font-body text-sm leading-8 text-[#3F4B3C]/75 sm:text-base">
        From choosing ingredients to the final presentation,
        every dish is prepared with the intention of making
        your experience special.
      </p>

      <p className="mt-7 font-heading text-2xl italic text-[#7C8B73]">
        Every plate tells a little story.
      </p>
    </div>

    <div className="order-1 overflow-hidden rounded-2xl lg:order-2">
      <img
        src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1000"
        alt="Chef preparing food in a restaurant kitchen"
        className="h-[350px] w-full object-cover sm:h-[480px]"
      />
    </div>
  </div>
</section>

{/* Ambience Section */}
<section className="bg-[#3F4B3C] px-5 py-20 text-center sm:px-8 sm:py-24 lg:px-12">
  <div className="mx-auto max-w-3xl">
    <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.3em] text-[#D9AAA7]">
      Feel the Atmosphere
    </p>

    <h2 className="font-heading text-4xl leading-tight text-[#FAF9F6] sm:text-5xl">
      An Ambience to Remember
    </h2>

    <p className="mt-7 font-body text-sm leading-8 text-[#FAF9F6]/75 sm:text-base">
      A welcoming space, thoughtful details, and an atmosphere
      that invites you to slow down. Cafe Lunelle is designed
      to be a little escape from the everyday rush.
    </p>

    <p className="mt-5 font-body text-sm leading-8 text-[#FAF9F6]/75 sm:text-base">
      Whether you are catching up with friends, spending time
      with family, enjoying a quiet coffee, or celebrating a
      special moment, we want every visit to feel comfortable
      and memorable.
    </p>
  </div>

  <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2">
    <img
      src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=900"
      alt="Beautiful cafe interior"
      className="h-64 w-full rounded-2xl object-cover sm:h-80"
    />

    <img
      src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=900"
      alt="Coffee and relaxing cafe atmosphere"
      className="h-64 w-full rounded-2xl object-cover sm:h-80"
    />
  </div>
</section>

{/* More Than a Meal */}
<section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
  <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

    <div className="overflow-hidden rounded-2xl">
      <img
        src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1000"
        alt="Friends sharing a meal together"
        className="h-[350px] w-full object-cover sm:h-[450px]"
      />
    </div>

    <div className="text-center lg:text-left">
      <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.3em] text-[#7C8B73]">
        Moments Worth Sharing
      </p>

      <h2 className="font-heading text-4xl leading-tight text-[#3F4B3C] sm:text-5xl">
        More Than Just a Meal
      </h2>

      <p className="mt-6 font-body text-sm leading-8 text-[#3F4B3C]/75 sm:text-base">
        Some of life's best memories happen around a table.
        A conversation that lasts for hours, a coffee shared
        with someone special, or a spontaneous get-together.
      </p>

      <p className="mt-5 font-body text-sm leading-8 text-[#3F4B3C]/75 sm:text-base">
        We want Cafe Lunelle to be part of those moments.
        Come for the food, stay for the atmosphere, and leave
        with a reason to come back.
      </p>
    </div>
  </div>
</section>

{/* What Makes Us Different */}
<section className="bg-[#F1F0E9] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
  <div className="mx-auto max-w-7xl">

    <div className="mx-auto mb-14 max-w-2xl text-center">
      <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.3em] text-[#7C8B73]">
        The Lunelle Touch
      </p>

      <h2 className="font-heading text-4xl text-[#3F4B3C] sm:text-5xl">
        Little Things, Big Feelings
      </h2>

      <p className="mt-5 font-body text-sm leading-7 text-[#3F4B3C]/70 sm:text-base">
        It's often the little details that turn an ordinary
        visit into something worth remembering.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

      {[
        {
          number: "01",
          title: "Thoughtful Flavours",
          description: "Food prepared with care, creativity, and attention to detail."
        },
        {
          number: "02",
          title: "A Welcoming Space",
          description: "A comfortable atmosphere where everyone can feel at home."
        },
        {
          number: "03",
          title: "Moments Together",
          description: "A place for conversations, celebrations, and everyday memories."
        },
        {
          number: "04",
          title: "The Personal Touch",
          description: "Warm service and small details that make every guest feel special."
        }
      ].map((item) => (
        <div
          key={item.number}
          className="rounded-2xl bg-[#FAF9F6] p-8 transition duration-300 hover:-translate-y-2 hover:shadow-lg"
        >
          <span className="font-heading text-3xl italic text-[#D9AAA7]">
            {item.number}
          </span>

          <h3 className="mt-5 font-heading text-2xl text-[#3F4B3C]">
            {item.title}
          </h3>

          <p className="mt-4 font-body text-sm leading-7 text-[#3F4B3C]/70">
            {item.description}
          </p>
        </div>
      ))}

    </div>
  </div>
</section>

{/* Final CTA */}
<section className="px-5 py-20 text-center sm:px-8 sm:py-24">
  <div className="mx-auto max-w-3xl">
    <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.3em] text-[#7C8B73]">
      Your Table Is Waiting
    </p>

    <h2 className="font-heading text-4xl leading-tight text-[#3F4B3C] sm:text-5xl">
      Come Create a Moment with Us
    </h2>

    <p className="mx-auto mt-5 max-w-xl font-body text-sm leading-7 text-[#3F4B3C]/70 sm:text-base">
      We'd love to welcome you to Cafe Lunelle.
      Discover good food, warm hospitality, and moments worth sharing.
    </p>

    <a
      href="/contact"
      className="mt-8 inline-flex rounded-full bg-[#3F4B3C] px-9 py-4 font-body text-sm font-semibold text-white transition hover:bg-[#7C8B73]"
    >
      Get in Touch
    </a>
  </div>
</section>

      </main>

      <Footer />
    </>
  );
}
