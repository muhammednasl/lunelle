
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import RestaurantInfo from "../components/RestaurantInfo";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";        
import FeaturedMenu from "../components/FeaturedMenu";
import Gallery from "../components/Gallery";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <RestaurantInfo />
        <About />
        <WhyChooseUs />
        <FeaturedMenu />
        <Gallery />
        <Reviews />
        
      </main>

      <Footer />
    </>
  );
}
