import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedBurgers from "@/components/FeaturedBurgers";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedBurgers />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
