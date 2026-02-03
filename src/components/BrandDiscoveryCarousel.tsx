import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

interface Brand {
  name: string;
  logo: string;
  route: string;
  description: string;
  primaryColor: string;
  secondaryColor: string;
  logoBackground: string;
}

interface BrandDiscoveryCarouselProps {
  currentBrandRoute: string;
  className?: string;
}

const BrandDiscoveryCarousel: React.FC<BrandDiscoveryCarouselProps> = ({
  currentBrandRoute,
  className = "",
}) => {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  const allBrands = [
    {
      name: "Bhole ke Chole",
      logo: "/lovable-uploads/cdf67c56-7bd7-4023-af81-bf258fe60fe3.png",
      route: "/bhole-ke-chole",
      description: "Authentic North Indian street food",
      primaryColor: "#DC2A6B", // Bright pink from actual logo
      secondaryColor: "#E91E63",
      logoBackground: "#FCE4EC",
    },
    {
      name: "Aahar",
      logo: "/lovable-uploads/55d6ad50-361d-42cd-b556-c283b2ee23e4.png",
      route: "/aahar",
      description: "Traditional South Indian homestyle meals",
      primaryColor: "#F44336", // Red from "Aa" in logo
      secondaryColor: "#4CAF50", // Green from "har" in logo  
      logoBackground: "#FFF3E0",
    },
    {
      name: "The Junglee Kitchen",
      logo: "/lovable-uploads/junglee logo.png",
      route: "/junglee-kitchen",
      description: "Wild flavors from nature's kitchen",
      primaryColor: "#8D6E63", // Brown from actual logo text
      secondaryColor: "#A1887F",
      logoBackground: "#EBE3C0", // Beige
    },
    {
      name: "House Of Andhra",
      logo: "/lovable-uploads/1310a9da-ccbe-4fa6-bc06-51441a0872ba.png",
      route: "/house-of-andhra",
      description: "Authentic Andhra cuisine with bold spices",
      primaryColor: "#8B1538", // Deep maroon from actual logo
      secondaryColor: "#AD1457",
      logoBackground: "#F8F6F5", // Bone White
    },
    {
      name: "Dil Daily",
      logo: "/lovable-uploads/DIL_daily_new.png",
      route: "/dil-punjabi-daily",
      description: "Daily dose of Punjabi comfort food",
      primaryColor: "#E91E63", // Pink from "Dil" in logo
      secondaryColor: "#26A69A", // Teal from "DAILY" in logo
      logoBackground: "#FFFDE7", // Light Yellow
    },
    {
      name: "Khichdi Bar",
      logo: "/lovable-uploads/235a933c-2973-43db-8419-1bc689100f0a.png",
      route: "/khichdi-bar",
      description: "Comfort in every bowl - healthy & delicious",
      primaryColor: "#2E7D32", // Dark green from "khichdi" in logo
      secondaryColor: "#FF9800", // Orange from "Bar" in logo
      logoBackground: "#FDF6E8", // Light Cream
    },
    {
      name: "The Chaat Cult",
      logo: "/lovable-uploads/tcc.png",
      route: "/the-chaat-cult",
      description: "Tangy, spicy, addictive street chaat",
      primaryColor: "#00897B", // Teal from logo background
      secondaryColor: "#CDDC39", // Yellow-green from logo text
      logoBackground: "#E0F2F1",
    },
    {
      name: "VEGERAMA",
      logo: "/lovable-uploads/vegerama_new-Photoroom.png",
      route: "/vegerama",
      description: "Fresh, delicious vegetarian delights",
      primaryColor: "#2E7D32", // Dark green from "VEGER" 
      secondaryColor: "#8BC34A", // Light green from "AMA"
      logoBackground: "#E8F5E8",
    },
    {
      name: "Bihari Bowl",
      logo: "/lovable-uploads/bb_logo.png",
      route: "/bihari-bowl",
      description: "Authentic Bihari flavors in every bite",
      primaryColor: "#B71C1C", // Deep red from actual logo
      secondaryColor: "#D32F2F",
      logoBackground: "#FFF8E1",
    },
  ];

  // Filter out current brand
  const otherBrands = allBrands.filter(brand => brand.route !== currentBrandRoute);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 480 ? 240 : window.innerWidth < 640 ? 280 : 320; // Better mobile scroll
      const targetScrollLeft = 
        direction === "left" 
          ? scrollRef.current.scrollLeft - scrollAmount
          : scrollRef.current.scrollLeft + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: targetScrollLeft,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    checkScrollPosition();
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", checkScrollPosition);
      return () => scrollElement.removeEventListener("scroll", checkScrollPosition);
    }
  }, []);

  return (
    <section className={`py-12 bg-gradient-to-br from-gray-50 via-white to-gray-50 ${className}`} style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 brand-carousel-content">
        {/* Enhanced Header Section */}
          <div className="text-center mb-8 px-4">
            <div className="relative">
              {/* Background Decoration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full blur-3xl opacity-30"></div>
              </div>
              
              <div className="relative">
                {/* <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold rounded-full mb-6 shadow-lg">
                  Family of Brands
                </span> */}
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-display">
                  Explore Our Other
                  <span className="block bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text text-transparent">
                    Culinary Brands
                  </span>
                </h2>
                
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                  Discover more delicious cuisines from our family of food brands, each crafted with 
                  <span className="font-semibold text-gray-800"> passion</span> and 
                  <span className="font-semibold text-gray-800"> authenticity</span>
                </p>
              </div>
            </div>
          </div>

        <div className="relative">
          {/* Scroll Left Button */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-4 rounded-full bg-white shadow-2xl border border-gray-100 text-gray-700 hover:text-gray-900 hover:shadow-3xl transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
            </button>
          )}

          {/* Scroll Right Button */}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-4 rounded-full bg-white shadow-2xl border border-gray-100 text-gray-700 hover:text-gray-900 hover:shadow-3xl transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={20} className="sm:w-6 sm:h-6" />
            </button>
          )}

          {/* Brand Cards Container */}
          <div 
            ref={scrollRef}
            className="flex gap-3 sm:gap-6 md:gap-8 overflow-x-auto scrollbar-hide pb-6 px-2 sm:px-8 md:px-12"
            style={{ 
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              scrollBehavior: "smooth"
            }}
          >
            {otherBrands.map((brand) => (
              <Link
                key={brand.route}
                to={brand.route}
                className="flex-shrink-0 group"
              >
                {/* Clean Minimalist Card Design - Mobile Optimized */}
                <div className="w-64 sm:w-72 md:w-64 h-52 sm:h-56 md:h-64 bg-white rounded-3xl shadow-md border border-gray-100/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group-hover:border-gray-200 relative">
                  
                  {/* Subtle Brand Color Strip */}
                  <div 
                    className="h-1 w-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" 
                    style={{ 
                      background: `linear-gradient(90deg, ${brand.primaryColor}, ${brand.secondaryColor})` 
                    }}
                  />

                  {/* Main Content - Logo Focused */}
                  <div className="flex flex-col items-center justify-center h-full p-4 sm:p-6 md:p-8">
                    
                    {/* Logo Container */}
                    <div className="relative mb-2 sm:mb-3 md:mb-4">
                      {/* Subtle Glow Effect */}
                      <div 
                        className="absolute -inset-4 rounded-3xl blur-lg opacity-0 group-hover:opacity-20 transition-all duration-500"
                        style={{ 
                          backgroundColor: brand.primaryColor 
                        }}
                      />
                      
                      {/* Logo Background */}
                      <div 
                        className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-2xl flex items-center justify-center shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
                        style={{ 
                          backgroundColor: brand.logoBackground,
                        }}
                      >
                        <img
                          src={brand.logo}
                          alt={brand.name}
                          className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>

                    {/* Short Description - Always visible */}
                    <p className="text-gray-600 text-xs sm:text-sm text-center leading-relaxed mb-2 sm:mb-3 md:mb-4 px-1 sm:px-2 md:px-3 min-h-[1.5rem] sm:min-h-[2rem] md:min-h-[2.5rem] flex items-center justify-center transition-all duration-300 group-hover:text-gray-800 font-medium">
                      {brand.description}
                    </p>

                    {/* Simple CTA - Only visible on hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div 
                        className="px-4 py-2 md:px-6 rounded-full text-white font-medium text-xs sm:text-sm shadow-lg transition-all duration-300 flex items-center gap-2"
                        style={{ 
                          background: `linear-gradient(135deg, ${brand.primaryColor}, ${brand.secondaryColor})` 
                        }}
                      >
                        <span>Explore</span>
                        <ArrowRight size={14} className="sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>

                  {/* Minimal Corner Accent */}
                  <div 
                    className="absolute top-3 right-3 w-2 h-2 rounded-full opacity-40 group-hover:opacity-70 transition-all duration-300"
                    style={{ backgroundColor: brand.primaryColor }}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-8 sm:mt-12 px-4">
          <div className="relative inline-block">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            
            <Link
              to="/#brands"
              className="relative inline-flex items-center gap-2 sm:gap-4 px-6 py-3 sm:px-10 sm:py-5 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-bold text-sm sm:text-lg rounded-2xl hover:from-gray-800 hover:to-gray-900 transition-all duration-500 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 group"
            >
              {/* Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Button Content */}
              <div className="relative flex items-center gap-2 sm:gap-4">
                <span>View All Brands</span>
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
                  <ChevronRight size={14} className="sm:w-[18px] sm:h-[18px] transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out rounded-2xl"></div>
            </Link>
          </div>
          
          {/* Additional Info */}
          <p className="text-gray-500 text-xs sm:text-sm mt-4 sm:mt-6 max-w-sm sm:max-w-md mx-auto px-4">
            Experience the diverse flavors and authentic cuisines from our carefully curated brand collection
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandDiscoveryCarousel;