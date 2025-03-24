import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsStrip from "../components/NewsStrip";
import CounterAnimation from "../components/CounterAnimation";
import BrandCard from "../components/BrandCard";
import CityMap from "../components/CityMap";
import LazyImage from "../components/LazyImage";
import { ArrowRight, ChevronRight, Heart } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const brands = [
    {
      name: "Aahar",
      logo: "/lovable-uploads/55d6ad50-361d-42cd-b556-c283b2ee23e4.png",
    },
    {
      name: "House Of Andhra",
      logo: "/lovable-uploads/1310a9da-ccbe-4fa6-bc06-51441a0872ba.png",
    },
    {
      name: "Dil Punjabi Daily",
      logo: "/lovable-uploads/dpd_logo.png",
    },
    {
      name: "Bhole ke Chole",
      logo: "/lovable-uploads/cdf67c56-7bd7-4023-af81-bf258fe60fe3.png",
    },
    {
      name: "Khichdi Bar",
      logo: "/lovable-uploads/235a933c-2973-43db-8419-1bc689100f0a.png",
    },
    {
      name: "Nagada",
      logo: "/lovable-uploads/b7f77f5d-c32a-4b73-9673-c4572c649bf4.png",
    },
    {
      name: "All Things Fried",
      logo: "/lovable-uploads/981bf596-8923-43ae-950d-88e254903acf.png",
    },
    {
      name: "The Chaat Cult",
      logo: "/lovable-uploads/tcc.png",
    },
    {
      name: "Bihari Bowl",
      logo: "/lovable-uploads/bb_logo.png",
    },
    {
      name: "VegeRAMA",
      logo: "/lovable-uploads/vegerama_logo.png",
    },
  ];

  const [showLovedByText, setShowLovedByText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLovedByText(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section
        id="hero"
        className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16 animate-fadeInUp">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-purple-red md:pb-1">
              India's largest truly virtual brands chain
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Turning every kitchen of India into a bigger profit hub and
              powering fast deliveries through our in-house production
            </p>
          </div>

          {/* Two Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto">
            <div className="bg-gradient-yellow-orange rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-dil-purple mb-3">
                  Restaurant Enabler
                </h3>
                <p className="text-dil-purple mb-6">
                  Helping kitchens earn more profit from their existing
                  infrastructure.
                </p>
                <div className="flex justify-between items-center">
                  <Link
                    to="/restaurant-partnership"
                    className="inline-flex items-center bg-dil-purple text-white px-5 py-2.5 rounded-md font-semibold hover:bg-dil-purple/90 transition-all duration-300 shadow-md hover:shadow-lg"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Learn More <ChevronRight size={20} className="ml-1" />
                  </Link>
                  <img
                    src="/lovable-uploads/restaurant_enabler.png"
                    alt="Restaurant Kitchen"
                    className="h-32 w-auto object-contain"
                    style={{
                      filter: "drop-shadow(0px 4px 8px rgba(0,0,0,0.2))",
                      border: "2px solid #4B0076",
                      borderRadius: "8px",
                      padding: "4px",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="bg-gradient-yellow-orange rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-dil-purple mb-3">
                  Food Qcom Enabler
                </h3>
                <p className="text-dil-purple mb-6">
                  Empowering quick commerce with our ready-to-cook and
                  ready-to-eat products.
                </p>
                <div className="flex justify-between items-center">
                  <Link
                    to="/horeca-supply"
                    className="inline-flex items-center bg-dil-purple text-white px-5 py-2.5 rounded-md font-semibold hover:bg-dil-purple/90 transition-all duration-300 shadow-md hover:shadow-lg"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Learn More <ChevronRight size={20} className="ml-1" />
                  </Link>
                  <img
                    src="/lovable-uploads/food_qcom_enabler.png"
                    alt="Quick Food Delivery"
                    className="h-32 w-auto object-contain"
                    style={{
                      filter: "drop-shadow(0px 4px 8px rgba(0,0,0,0.2))",
                      border: "2px solid #4B0076",
                      borderRadius: "8px",
                      padding: "4px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Earnings Section with News Strip */}
      <section id="earnings">
        <div className="bg-gradient-purple-red py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              India's largest Truly virtual Brands chain
            </h2>
            <p className="text-xl text-white/90 mb-6">
              Earn more from your existing kitchen
            </p>
            <Link
              to="/restaurant-partnership"
              className="inline-flex items-center bg-white text-dil-purple px-6 py-3 rounded-md font-semibold hover:bg-dil-yellow transition-all duration-300"
              onClick={() => window.scrollTo(0, 0)}
            >
              Learn more <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>

        <NewsStrip text="SAME KITCHEN! SAME STAFF! MORE ORDERS!!" />
      </section>

      {/* Our Brands Section */}
      <section id="brands" className="py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Brands</h2>
            <p className="text-xl md:text-2xl text-dil-purple font-semibold mb-4">
              Bringing India to your plate
            </p>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Common goal: caring for the daily eating patterns of Indian
              consumers from various geographies, cultures, and ethnicities!
            </p>
          </div>

          {/* Brand Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 max-w-5xl mx-auto">
            {brands.map((brand, index) => (
              <BrandCard
                key={index}
                logo={brand.logo}
                name={brand.name}
                color={index % 2 === 0 ? "yellow" : "purple"}
                link="https://orders.dilfoods.in/?_gl=1*32xgw6*_ga*NDA1NTU0Mjc1LjE3MTYxMDgwNjU.*_ga_7CQ31SQHW5*MTc0MjExODExOC4xNS4wLjE3NDIxMTgxMTguMC4wLjA.*_ga_VCDE3GHY4J*MTc0MjExODExOC4xNS4wLjE3NDIxMTgxMTguMC4wLjA."
              />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="https://orders.dilfoods.in/?_gl=1*32xgw6*_ga*NDA1NTU0Mjc1LjE3MTYxMDgwNjU.*_ga_7CQ31SQHW5*MTc0MjExODExOC4xNS4wLjE3NDIxMTgxMTguMC4wLjA.*_ga_VCDE3GHY4J*MTc0MjExODExOC4xNS4wLjE3NDIxMTgxMTguMC4wLjA."
              target="_blank"
              rel="noreferrer"
              className="btn-primary inline-flex items-center"
            >
              Order Now <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Fast Facts Section */}
      <section
        id="fast-facts"
        className="bg-gradient-purple-red py-16 md:py-20"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CounterAnimation end={10} label="Brands" />
            <CounterAnimation end={200} label="Outlets" suffix="+" />
            <CounterAnimation end={5} label="Cities" />
          </div>

          {/* Loved by 3 million+ foodies text that appears after counters animation */}
          <div
            className={`mt-8 text-center transition-opacity duration-500 ease-in-out ${
              showLovedByText ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-4xl font-bold text-white flex items-center justify-center gap-2">
              Loved by 3 million+ foodies
              <Heart className="fill-white text-white inline" size={24} />
            </p>
          </div>
        </div>
      </section>

      {/* Cities We Serve Section */}
      <section
        id="cities"
        className="py-0 md:py-0 relative h-[400px] md:h-[600px]"
      >
        {/* Content on top of the map */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-4 md:mt-16">
          <div className="text-center md-4 md:mb-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-purple-red">
              Cities we serve
            </h2>
            <p className="text-gray-600 bg-clip-text text-transparent bg-gradient-purple-red">
              Currently live in 5 cities with plans to expand to 9 more
              locations soon
            </p>
          </div>
        </div>

        {/* Background Map */}
        <div className="absolute inset-0 z-0">
          <img
            src="/lovable-uploads/Indiamap.png"
            alt="India Map"
            className="absolute top-1/2 left-1/2 h-[400px] md:h-[600px] object-cover opacity-80 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </section>

      {/* Quick Delivery Section */}
      <section id="quick-delivery" className="py-16 bg-gradient-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ride the Quick Delivery Wave with Dil Foods!
              </h2>
              <p className="text-white/90 text-lg mb-6">
                We supply ready-to-cook and ready-to-eat products that
                regenerate in 2 minutes — perfect for 10-minute deliveries!
              </p>
              <Link
                to="/horeca-supply"
                className="inline-flex items-center bg-white text-dil-red px-6 py-3 rounded-md font-semibold hover:bg-dil-yellow hover:text-dil-purple transition-all duration-300"
                onClick={() => window.scrollTo(0, 0)}
              >
                Explore More <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>

            <div className="md:w-1/2 flex justify-center gap-8">
              <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden animate-bounce-slow">
                <LazyImage
                  src="/lovable-uploads/ea9d967b-b147-40dd-88dc-473669db104c.png"
                  alt="Delicious Indian Rice Bowl"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden animate-bounce-slower">
                <LazyImage
                  src="/lovable-uploads/3069f6c5-b53f-47c8-9ee7-1c6a984d63b2.png"
                  alt="Gulab Jamun Dessert"
                  className="w-full h-full object-cover"
                  loadingClassName="w-full h-full bg-white/20 animate-pulse"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
