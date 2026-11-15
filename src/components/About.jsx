
export default function About() {
    return (
      <>
        {/* About Cafe Lunelle */}
        <section
          id="about"
          className="bg-[#FAF9F6] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
  
            {/* Image */}
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85"
                alt="Elegant restaurant dining experience"
                className="h-[350px] w-full object-cover sm:h-[500px]"
              />
            </div>
  
            {/* Content */}
            <div className="text-center lg:text-left">
              <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.3em] text-[#7C8B73]">
                Our Story
              </p>
  
              <h2 className="mb-6 font-heading text-4xl leading-tight text-[#3F4B3C] sm:text-5xl">
                More Than Just
                <span className="block italic text-[#7C8B73]">
                  A Dining Experience
                </span>
              </h2>
  
              <p className="mb-5 font-body text-sm leading-8 text-[#62685D] sm:text-base">
                Welcome to Cafe Lunelle, a place where great food,
                beautiful moments and warm hospitality come together.
              </p>
  
              <p className="mb-8 font-body text-sm leading-8 text-[#62685D] sm:text-base">
                We believe every meal should be memorable. Our passion
                for quality ingredients, thoughtful preparation and
                welcoming experiences makes every visit special.
              </p>
  
              <a
                href="#menu"
                className="inline-block border border-[#7C8B73] px-8 py-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#3F4B3C] transition duration-300 hover:bg-[#7C8B73] hover:text-white"
              >
                Explore Our Menu
              </a>
            </div>
          </div>
        </section>
  
        {/* Meet Our Chef */}
        <section className="bg-[#F0EFE8] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
  
            {/* Chef Image */}
            <div className="order-1 overflow-hidden rounded-2xl lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=85"
                alt="Professional chef in the kitchen"
                className="h-[350px] w-full object-cover sm:h-[500px]"
              />
            </div>
  
            {/* Chef Content */}
            <div className="order-2 text-center lg:order-1 lg:text-left">
              <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.3em] text-[#7C8B73]">
                The Person Behind The Flavours
              </p>
  
              <h2 className="mb-6 font-heading text-4xl leading-tight text-[#3F4B3C] sm:text-5xl">
                Meet Our
                <span className="block italic text-[#7C8B73]">
                  Chef
                </span>
              </h2>
  
              <h3 className="mb-4 font-heading text-2xl text-[#3F4B3C]">
                Our Head Chef
              </h3>
  
              <p className="mb-5 font-body text-sm leading-8 text-[#62685D] sm:text-base">
                Every memorable dish begins with passion, creativity
                and attention to detail. Our chef brings these values
                into every creation at Cafe Lunelle.
              </p>
  
              <p className="font-body text-sm leading-8 text-[#62685D] sm:text-base">
                From selecting ingredients to the final presentation,
                every detail reflects our commitment to a wonderful
                dining experience.
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }
  