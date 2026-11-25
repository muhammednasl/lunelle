
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MapPin, Phone, Clock } from "lucide-react";

export default function Contact() {
  return (
    <>
      <Navbar />

      <main className="bg-[#FAF9F6] px-4 py-16 sm:px-8 sm:py-20 lg:px-12">

        {/* Page Heading */}
        <div className="mx-auto mb-12 max-w-7xl text-center">
          <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.3em] text-[#7C8B73]">
            We'd Love to Hear From You
          </p>
          <h1 className="font-heading text-5xl text-[#3F4B3C] sm:text-6xl">
            Get in Touch
          </h1>
        </div>

        {/* Contact Layout */}
        <section className="mx-auto max-w-7xl rounded-3xl bg-white p-4 shadow-xl sm:p-8 lg:p-0">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Left Side - Map and Details */}
            <div className="relative min-h-[650px] lg:min-h-[650px]">

              {/* Map */}
              <div className="h-[350px] overflow-hidden rounded-2xl lg:h-full lg:rounded-l-3xl lg:rounded-r-none">
                <iframe
                  title="Cafe Lunelle Location"
                  src="https://www.google.com/maps?q=Dubai&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>

              {/* Our Details Card */}
              <div className="relative mx-3 -mt-16 rounded-2xl bg-[#FAF9F6] p-7 shadow-xl sm:mx-8 sm:p-9 lg:absolute lg:left-0 lg:top-1/2 lg:mx-0 lg:mt-0 lg:w-[75%] lg:-translate-x-1/3 lg:-translate-y-1/2">
                <h2 className="mb-8 font-heading text-3xl text-[#3F4B3C]">
                  Our Details
                </h2>

                <div className="space-y-7">

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <MapPin size={23} className="mt-1 shrink-0 text-[#7C8B73]" />
                    <div>
                      <h3 className="font-body text-base font-semibold text-[#3F4B3C]">
                        Location
                      </h3>
                      <p className="mt-1 font-body text-sm leading-6 text-gray-500">
                        Your Street Address,<br />
                        Your City,<br />
                        Your Country
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <Phone size={22} className="mt-1 shrink-0 text-[#7C8B73]" />
                    <div>
                      <h3 className="font-body text-base font-semibold text-[#3F4B3C]">
                        Phone
                      </h3>
                      <p className="mt-1 font-body text-sm text-gray-500">
                        +91 00000 00000
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <Clock size={23} className="mt-1 shrink-0 text-[#7C8B73]" />
                    <div>
                      <h3 className="font-body text-base font-semibold text-[#3F4B3C]">
                        Hours
                      </h3>
                      <p className="mt-1 font-body text-sm leading-6 text-gray-500">
                        Monday – Sunday<br />
                        9:00 AM – 10:00 PM
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="flex flex-col justify-center px-3 py-12 sm:px-8 lg:px-12 lg:py-16">

              <h2 className="mb-9 text-center font-heading text-3xl text-[#3F4B3C] lg:text-left sm:text-4xl">
                Have a Question?
              </h2>

              <form className="space-y-6">

                {/* Full Name */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#3F4B3C]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full rounded-lg border border-[#7C8B73]/30 bg-[#FAF9F6] px-4 py-4 text-sm outline-none transition focus:border-[#7C8B73]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#3F4B3C]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full rounded-lg border border-[#7C8B73]/30 bg-[#FAF9F6] px-4 py-4 text-sm outline-none transition focus:border-[#7C8B73]"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#3F4B3C]">
                    Comment or Message
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Write your message..."
                    className="w-full resize-none rounded-lg border border-[#7C8B73]/30 bg-[#FAF9F6] px-4 py-4 text-sm outline-none transition focus:border-[#7C8B73]"
                  />
                </div>

                {/* Submit */}
                <button
                  type="button"
                  className="w-full rounded-lg bg-[#3F4B3C] px-6 py-4 font-body text-sm font-semibold text-white transition hover:bg-[#7C8B73]"
                >
                  Send Message
                </button>

              </form>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
