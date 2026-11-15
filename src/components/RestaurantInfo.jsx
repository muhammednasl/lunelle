
import { MapPin, Clock, Phone } from "lucide-react";

const information = [
  {
    icon: MapPin,
    title: "Visit Us",
    detail: "Discover Cafe Lunelle",
    subDetail: "Add your restaurant address here",
  },
  {
    icon: Clock,
    title: "Opening Hours",
    detail: "Monday – Sunday",
    subDetail: "Add your opening and closing times",
  },
  {
    icon: Phone,
    title: "Get in Touch",
    detail: "We'd love to hear from you",
    subDetail: "Add your contact number",
  },
];

export default function RestaurantInfo() {
  return (
    <section className="bg-[#FAF9F6] px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-[#D9AAA7]/50 md:grid-cols-3 md:divide-x md:divide-y-0">
        {information.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex flex-col items-center px-6 py-8 text-center"
            >
              <Icon size={27} strokeWidth={1.4} className="mb-4 text-[#7C8B73]" />

              <h3 className="mb-3 font-heading text-2xl text-[#3F4B3C]">
                {item.title}
              </h3>

              <p className="font-body text-sm font-semibold text-[#3F4B3C]">
                {item.detail}
              </p>

              <p className="mt-2 font-body text-sm text-[#7C8B73]">
                {item.subDetail}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
