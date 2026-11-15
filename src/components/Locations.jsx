
import { MapPin, Clock, Phone, ArrowUpRight } from "lucide-react";

export default function Locations() {
  return (
    <section
      id="locations"
      className="bg-[#FAF9F6] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.3em] text-[#7C8B73]">
            We'd Love To Welcome You
          </p>

          <h2 className="font-heading text-4xl text-[#3F4B3C] sm:text-5xl">
            Visit
            <span className="italic text-[#7C8B73]"> Cafe Lunelle</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl font-body text-sm leading-7 text-[#62685D] sm:text-base">
            Come visit us and enjoy good food, warm hospitality and
            beautiful moments.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-2xl bg-[#F0EFE8] lg:grid-cols-2">
          <div className="min-h-[300px] bg-[#D9AAA7] lg:min-h-[450px]">
            {/* Replace with your Google Maps embed later */}
            <div className="flex h-full min-h-[300px] items-center justify-center">
              <p className="font-body text-sm text-[#3F4B3C]">
                Google Maps will be added here
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center px-7 py-12 text-center sm:px-12 lg:px-16">
            <h3 className="mb-8 font-heading text-3xl text-[#3F4B3C]">
              Find Your Way To Us
            </h3>

            <div className="space-y-7">
              <div>
                <MapPin className="mx-auto mb-3 text-[#7C8B73]" size={25} />
                <h4 className="mb-2 font-body text-sm font-semibold text-[#3F4B3C]">
                  Our Location
                </h4>
                <p className="font-body text-sm text-[#77786F]">
                  Add your restaurant address
                </p>
              </div>

              <div>
                <Clock className="mx-auto mb-3 text-[#7C8B73]" size={25} />
                <h4 className="mb-2 font-body text-sm font-semibold text-[#3F4B3C]">
                  Opening Hours
                </h4>
                <p className="font-body text-sm text-[#77786F]">
                  Add your opening hours
                </p>
              </div>

              <div>
                <Phone className="mx-auto mb-3 text-[#7C8B73]" size={25} />
                <h4 className="mb-2 font-body text-sm font-semibold text-[#3F4B3C]">
                  Contact Us
                </h4>
                <p className="font-body text-sm text-[#77786F]">
                  Add your contact number
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="mx-auto mt-9 inline-flex items-center gap-2 bg-[#7C8B73] px-8 py-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#3F4B3C]"
            >
              Get In Touch <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
