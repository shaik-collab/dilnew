import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsStrip from "../components/NewsStrip";
import CounterAnimation from "../components/CounterAnimation";
import BrandCard from "../components/BrandCard";
import { ArrowRight, Heart, ChevronRight } from "lucide-react";

const Index = () => {
  const [showLovedByText, setShowLovedByText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLovedByText(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const brands = [
    {
      name: "Bhole ke Chole",
      logo: "/lovable-uploads/cdf67c56-7bd7-4023-af81-bf258fe60fe3.png",
      route: "/bhole-ke-chole",
      cuisine: "North Indian Street Food",
    },
    {
      name: "Aahar",
      logo: "/lovable-uploads/55d6ad50-361d-42cd-b556-c283b2ee23e4.png",
      route: "/aahar",
      cuisine: "Traditional Home-style",
    },
    {
      name: "Junglee Kitchen",
      logo: "/lovable-uploads/junglee logo.png",
      route: "/junglee-kitchen",
      cuisine: "North Indian Cuisine",
    },
    {
      name: "House Of Andhra",
      logo: "/lovable-uploads/1310a9da-ccbe-4fa6-bc06-51441a0872ba.png",
      route: "/house-of-andhra",
      cuisine: "Andhra Specialties",
    },
    {
      name: "Dil Punjabi Daily",
      logo: "/lovable-uploads/DIL_daily_new.png",
      route: "/dil-punjabi-daily",
      cuisine: "Punjabi Delights",
    },
    {
      name: "Khichdi Bar",
      logo: "/lovable-uploads/235a933c-2973-43db-8419-1bc689100f0a.png",
      route: "/khichdi-bar",
      cuisine: "Comfort Food",
    },
    {
      name: "The Chaat Cult",
      logo: "/lovable-uploads/tcc.png",
      route: "/the-chaat-cult",
      cuisine: "Indian Chaat",
    },
    {
      name: "VEGERAMA",
      logo: "/lovable-uploads/vegerama_new-Photoroom.png",
      route: "/vegerama",
      cuisine: "Pure Vegetarian",
    },
    {
      name: "Bihari Bowl",
      logo: "/lovable-uploads/bb_logo.png",
      route: "/bihari-bowl",
      cuisine: "Bihari Cuisine",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f6]">
      <Navbar />

      {/* Hero Section */}
      <section
        id="hero"
        className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Section - Text Content */}
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] leading-tight mb-6">
                India's largest  virtual Brands chain
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 max-w-xl mb-8">
                Crafting the era of delivery-first dining.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#B00020] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-gray-600 font-normal">Authentic regional cuisines from across India</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#B00020] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-gray-600 font-normal">Delivery-first dining experience</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#B00020] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-gray-600 font-normal">Restaurant partner platform</p>
                </div>
              </div>
              <div className="mt-8">
                <a
                  href="https://orders.dilfoods.in/?_gl=1*32xgw6*_ga*NDA1NTU0Mjc1LjE3MTYxMDgwNjU.*_ga_7CQ31SQHW5*MTc0MjExODExOC4xNS4wLjE3NDIxMTgxMTguMC4wLjA.*_ga_VCDE3GHY4J*MTc0MjExODExOC4xNS4wLjE3NDIxMTgxMTguMC4wLjA."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-[#B00020] text-white rounded-md font-semibold hover:bg-opacity-90 transition-all duration-300"
                >
                  Order Now <ArrowRight size={18} className="ml-2" />
                </a>
              </div>
            </div>

            {/* Right Section - Image */}
            <div className="flex justify-center items-center">
              <img
                src="/lovable-uploads/homepage.png"
                alt="Delivery-first dining"
                className="w-full h-80 md:h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* News Strip */}
      <div className="mt-8">
        <NewsStrip 
          text="SAME KITCHEN! SAME STAFF! MORE ORDERS!!" 
          bgColor="bg-gray-100"
          textColor="text-gray-800"
          speed="extremely-slow"
        />
      </div>

      {/* Our Brands Section */}
      <section id="brands" className="py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Brands</h2>
            <p className="text-xl md:text-2xl text-[#4B0076] font-semibold mb-4">
              Bringing India to your plate
            </p>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Common goal: caring for the daily eating patterns of Indian
              consumers from various geographies, cultures, and ethnicities!
            </p>
          </div>

          {/* Brand Logos Enhanced Wave Pattern */}
          {/* Mobile: Grid layout for better visibility of all brands */}
          <div className="block sm:hidden">
            <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto px-4">
              {brands.map((brand, index) => (
                <div 
                  key={index} 
                  className="w-16 h-16 mx-auto transition-all duration-500 ease-in-out hover:scale-110 group cursor-pointer"
                  style={{
                    filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.15))',
                    animationDelay: `${index * 200}ms`,
                    animationDuration: '4s'
                  }}
                >
                  <div className="relative">
                    {index % 2 === 0 && (
                      <div className="absolute inset-0 rounded-full blur-sm opacity-20 transition-all duration-500 group-hover:opacity-80 group-hover:blur-md bg-gradient-to-r from-[#FFD700] to-[#F97316]"></div>
                    )}
                    
                    <BrandCard
                      logo={brand.logo}
                      name={brand.name}
                      color={index % 2 === 0 ? "yellow" : "transparent"}
                      link={
                        brand.route
                          ? brand.route
                          : "https://orders.dilfoods.in/?_gl=1*32xgw6*_ga*NDA1NTU0Mjc1LjE3MTYxMDgwNjU.*_ga_7CQ31SQHW5*MTc0MjExODExOC4xNS4wLjE3NDIxMTgxMTguMC4wLjA.*_ga_VCDE3GHY4J*MTc0MjExODExOC4xNS4wLjE3NDIxMTgxMTguMC4wLjA."
                      }
                      internalRoute={!!brand.route}
                      className={`relative z-10 ${index % 2 === 1 ? 'bg-gradient-to-br from-orange-300 to-orange-400 border border-orange-400' : ''}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop/Tablet: Original wave pattern */}
          <div className="hidden sm:flex justify-center items-start gap-3 md:gap-4 lg:gap-6 max-w-full mx-auto px-2 md:px-4">
            {brands.map((brand, index) => (
              <div 
                key={index} 
                className={`w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex-shrink-0 transition-all duration-500 ease-in-out hover:scale-150 hover:rotate-6 hover:z-20 group cursor-pointer ${
                  index % 2 === 1 ? 'mt-6 md:mt-10 lg:mt-12' : 'mt-0'
                }`}
                style={{
                  filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.15))',
                  animationDelay: `${index * 200}ms`,
                  animationDuration: '4s'
                }}
              >
                <div className="relative">
                  {index % 2 === 0 && (
                    <div className="absolute inset-0 rounded-full blur-sm opacity-20 transition-all duration-500 group-hover:opacity-80 group-hover:blur-md bg-gradient-to-r from-[#FFD700] to-[#F97316]"></div>
                  )}
                  
                  <BrandCard
                    logo={brand.logo}
                    name={brand.name}
                    color={index % 2 === 0 ? "yellow" : "transparent"}
                    link={
                      brand.route
                        ? brand.route
                        : "https://orders.dilfoods.in/?_gl=1*32xgw6*_ga*NDA1NTU0Mjc1LjE3MTYxMDgwNjU.*_ga_7CQ31SQHW5*MTc0MjExODExOC4xNS4wLjE3NDIxMTgxMTguMC4wLjA.*_ga_VCDE3GHY4J*MTc0MjExODExOC4xNS4wLjE3NDIxMTgxMTguMC4wLjA."
                    }
                    internalRoute={!!brand.route}
                    className={`relative z-10 ${index % 2 === 1 ? 'bg-gradient-to-br from-orange-300 to-orange-400 border border-orange-400' : ''}`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="https://orders.dilfoods.in/?_gl=1*32xgw6*_ga*NDA1NTU0Mjc1LjE3MTYxMDgwNjU.*_ga_7CQ31SQHW5*MTc0MjExODExOC4xNS4wLjE3NDIxMTgxMTguMC4wLjA.*_ga_VCDE3GHY4J*MTc0MjExODExOC4xNS4wLjE3NDIxMTgxMTguMC4wLjA."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-6 py-3 bg-[#B00020] text-white rounded-md font-semibold hover:bg-opacity-90 transition-all duration-300"
            >
              Order Now <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Stats & Trust Section */}
      <section className="py-16 bg-[#faf9f6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
              Trusted by millions
            </h2>
            <p className="text-base text-[#666666]">
              Loved by 3 million+ foodies across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <CounterAnimation end={10} label="Brands" />
            <CounterAnimation end={200} label="Outlets" suffix="+" />
            <CounterAnimation end={5} label="Cities" />
          </div>

          <div className="flex justify-center gap-8 text-sm text-[#666666]">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#c9a227] rounded-full"></div>
              FSSAI Certified
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#c9a227] rounded-full"></div>
              ISO Compliant
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#c9a227] rounded-full"></div>
              Hygiene First
            </span>
          </div>
        </div>
      </section>


      {/* Cities We Serve Section */}
      <section
        id="cities"
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#1a1a1a]">
              Cities we serve
            </h2>
            <p className="text-gray-600">
              Currently live in 5 cities with plans to expand to 9 more
              locations soon
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <img
              src="/lovable-uploads/Indiamap.png"
              alt="India Map"
              className="h-[300px] md:h-[500px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* Partner With Us Section (B2B) */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
                Partner With Us
              </h2>
              <p className="text-base text-[#666666] mb-6">
                Turn your existing kitchen into a profit hub. Same kitchen, same staff, more orders.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#c9a227] rounded-full flex-shrink-0 mt-0.5"></div>
                  <span className="text-sm text-[#666666]">Zero infrastructure investment</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#c9a227] rounded-full flex-shrink-0 mt-0.5"></div>
                  <span className="text-sm text-[#666666]">Ready-to-cook products supplied</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#c9a227] rounded-full flex-shrink-0 mt-0.5"></div>
                  <span className="text-sm text-[#666666]">Increased revenue from existing setup</span>
                </li>
              </ul>
              <Link
                to="/restaurant-partnership"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center justify-center px-6 py-3 bg-[#1a1a1a] text-white rounded-lg font-medium hover:bg-[#2d2d2d] transition-all duration-300"
              >
                Become a Partner <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
            <div className="bg-[#faf9f6] rounded-lg p-8 flex items-center justify-center">
              <img
                src="/lovable-uploads/restaurant_enabler.png"
                alt="Restaurant Partnership"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Index;

