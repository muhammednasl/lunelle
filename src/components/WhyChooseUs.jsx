
import {
    Leaf,
    ChefHat,
    HeartHandshake,
    Sparkles,
  } from "lucide-react";
  
  const features = [
    {
      icon: Leaf,
      title: "Fresh Ingredients",
      description:
        "We believe great food begins with quality ingredients, carefully selected for every dish.",
    },
    {
      icon: ChefHat,
      title: "Expert Chefs",
      description:
        "Every creation reflects passion, creativity and attention to detail.",
    },
    {
      icon: HeartHandshake,
      title: "Warm Hospitality",
      description:
        "We welcome every guest with genuine care and a memorable experience.",
    },
    {
      icon: Sparkles,
      title: "Beautiful Ambience",
      description:
        "Enjoy delicious food in a comfortable and thoughtfully designed atmosphere.",
    },
  ];
  
  export default function WhyChooseUs() {
    return (
      <section className="bg-[#FAF9F6] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
  
          {/* Section Heading */}
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.3em] text-[#7C8B73]">
              The Lunelle Experience
            </p>
  
            <h2 className="font-heading text-4xl leading-tight text-[#3F4B3C] sm:text-5xl">
              Why Choose
              <span className="block italic text-[#7C8B73]">
                Cafe Lunelle?
              </span>
            </h2>
  
            <p className="mt-5 font-body text-sm leading-7 text-[#62685D] sm:text-base">
              It's the little things that make every visit special.
              Discover what makes the Cafe Lunelle experience unique.
            </p>
          </div>
  
          {/* Feature Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;
  
              return (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-[#D9AAA7]/40 bg-white px-7 py-10 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#7C8B73] hover:shadow-lg"
                >
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#F0EFE8] transition-colors duration-300 group-hover:bg-[#7C8B73]">
                    <Icon
                      size={29}
                      strokeWidth={1.5}
                      className="text-[#7C8B73] transition-colors duration-300 group-hover:text-white"
                    />
                  </div>
  
                  <h3 className="mb-4 font-heading text-2xl text-[#3F4B3C]">
                    {feature.title}
                  </h3>
  
                  <p className="font-body text-sm leading-7 text-[#77786F]">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
  