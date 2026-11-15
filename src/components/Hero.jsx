
export default function Hero() {
    return (
      <section
  id="home"
  className="relative mx-3 my-4 flex min-h-[600px] items-center justify-center overflow-hidden rounded-2xl bg-[#3F4B3C] px-5 py-24 text-center sm:mx-6 sm:my-6 sm:min-h-[700px] sm:rounded-3xl lg:mx-10"
>
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=2000&q=85')",
          }}
        />
  
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/45" />
  
        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl text-white">
          <p className="mb-5 font-body text-xs font-semibold uppercase tracking-[0.35em] text-[#E5C5BD] sm:text-sm">
            Welcome to Cafe Lunelle
          </p>
  
          <h1 className="mb-6 font-heading text-5xl font-medium leading-tight sm:text-6xl md:text-7xl lg:text-8xl">
            A Little Taste of
            <span className="block italic text-[#E5C5BD]">
              Something Special
            </span>
          </h1>
  
          <p className="mx-auto mb-9 max-w-2xl font-body text-sm leading-7 text-white/85 sm:text-base sm:leading-8">
            Discover a place where beautiful flavours, warm moments, and
            unforgettable experiences come together.
          </p>
  
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#menu"
              className="w-full border border-[#FAF9F6] bg-[#FAF9F6] px-9 py-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#3F4B3C] transition duration-300 hover:bg-transparent hover:text-white sm:w-auto"
            >
              Explore Our Menu
            </a>
  
            <a
              href="#about"
              className="w-full border border-white/70 px-9 py-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-white transition duration-300 hover:bg-white hover:text-[#3F4B3C] sm:w-auto"
            >
              Discover Our Story
            </a>
          </div>
        </div>
      </section>
    );
  }
  