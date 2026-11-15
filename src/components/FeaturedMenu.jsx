
const menuItems = [
    {
      name: "Signature Breakfast",
      category: "Breakfast",
      description: "A delightful start to your day with fresh flavours.",
      image:
        "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Freshly Brewed Coffee",
      category: "Beverages",
      description: "Rich aroma and perfectly balanced coffee.",
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Artisan Dessert",
      category: "Desserts",
      description: "A sweet creation made for special moments.",
      image:
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Delicious Pasta",
      category: "Main Course",
      description: "A comforting classic with delicious flavours.",
      image:
        "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Fresh Garden Salad",
      category: "Healthy Choices",
      description: "Fresh ingredients coming together beautifully.",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Chocolate Delight",
      category: "Desserts",
      description: "A rich and indulgent treat for chocolate lovers.",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",
    },
  ];
  
  export default function FeaturedMenu() {
    return (
      <section
        id="menu"
        className="bg-[#F0EFE8] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
  
          {/* Heading */}
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.3em] text-[#7C8B73]">
              A Taste of Lunelle
            </p>
  
            <h2 className="font-heading text-4xl text-[#3F4B3C] sm:text-5xl">
              Our Featured
              <span className="block italic text-[#7C8B73]">
                Menu
              </span>
            </h2>
  
            <p className="mt-5 font-body text-sm leading-7 text-[#62685D] sm:text-base">
              Explore a selection of delightful creations, thoughtfully
              prepared to make every visit memorable.
            </p>
          </div>
  
          {/* Menu Cards */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {menuItems.map((item) => (
              <article
                key={item.name}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
  
                <div className="px-6 py-7 text-center">
                  <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#7C8B73]">
                    {item.category}
                  </p>
  
                  <h3 className="mb-3 font-heading text-2xl text-[#3F4B3C]">
                    {item.name}
                  </h3>
  
                  <p className="font-body text-sm leading-7 text-[#77786F]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
  
        </div>
      </section>
    );
  }
  