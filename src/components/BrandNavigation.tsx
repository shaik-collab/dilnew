import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight, Grid3X3 } from "lucide-react";

interface Brand {
  name: string;
  logo: string;
  route: string;
  description: string;
}

const brands: Brand[] = [
  {
    name: "Bhole ke Chole",
    logo: "/lovable-uploads/cdf67c56-7bd7-4023-af81-bf258fe60fe3.png",
    route: "/bhole-ke-chole",
    description: "Authentic North Indian street food",
  },
  {
    name: "Aahar",
    logo: "/lovable-uploads/55d6ad50-361d-42cd-b556-c283b2ee23e4.png",
    route: "/aahar",
    description: "Traditional homestyle meals",
  },
  {
    name: "The Junglee Kitchen",
    logo: "/lovable-uploads/junglee logo.png",
    route: "/junglee-kitchen",
    description: "Wild flavors from nature",
  },
  {
    name: "House Of Andhra",
    logo: "/lovable-uploads/1310a9da-ccbe-4fa6-bc06-51441a0872ba.png",
    route: "/house-of-andhra",
    description: "Bold Andhra spices & cuisine",
  },
  {
    name: "Dil Daily",
    logo: "/lovable-uploads/DIL_daily_new.png",
    route: "/dil-punjabi-daily",
    description: "Homestyle comfort, daily delight",
  },
  {
    name: "Khichdi Bar",
    logo: "/lovable-uploads/235a933c-2973-43db-8419-1bc689100f0a.png",
    route: "/khichdi-bar",
    description: "Comfort in every bowl",
  },
  {
    name: "The Chaat Cult",
    logo: "/lovable-uploads/tcc.png",
    route: "/the-chaat-cult",
    description: "Tangy, spicy street chaat",
  },
  {
    name: "VEGERAMA",
    logo: "/lovable-uploads/vegerama_new-Photoroom.png",
    route: "/vegerama",
    description: "Fresh vegetarian delights",
  },
  {
    name: "Bihari Bowl",
    logo: "/lovable-uploads/bb_logo.png",
    route: "/bihari-bowl",
    description: "Authentic Bihari flavors",
  },
];

interface BrandNavigationProps {
  className?: string;
  variant?: "light" | "dark";
}

const BrandNavigation: React.FC<BrandNavigationProps> = ({ 
  className = "", 
  variant = "light" 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const currentRoute = location.pathname;
  const currentBrand = brands.find(brand => brand.route === currentRoute);
  const otherBrands = brands.filter(brand => brand.route !== currentRoute);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 200;
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
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen]);

  const textColor = variant === "light" ? "text-white" : "text-gray-800";
  const bgColor = variant === "light" ? "bg-white/10" : "bg-gray-100";
  const borderColor = variant === "light" ? "border-white/20" : "border-gray-200";
  const hoverBg = variant === "light" ? "hover:bg-white/20" : "hover:bg-gray-50";

  if (!currentBrand) return null;

  return (
    <div className={`relative ${className}`}>
      {/* Brand Switch Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg ${bgColor} ${textColor} ${hoverBg} transition-all duration-300 backdrop-blur-sm border ${borderColor}`}
        title="Switch Brand"
      >
        <Grid3X3 size={16} />
        <span className="text-sm font-medium hidden sm:inline">
          Other Brands
        </span>
        <span className="text-xs opacity-70">({otherBrands.length})</span>
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <>
          {/* Backdrop - Full Screen Overlay */}
          <div 
            className="fixed inset-0 bg-transparent z-40" 
            onClick={() => setIsOpen(false)}
            style={{ 
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: '100vw',
              height: '100vh'
            }}
          />
          
          {/* Brand Navigation Panel */}
          <div 
            className="absolute top-full right-0 mt-2 w-96 max-w-[95vw] bg-black/80 backdrop-blur-xl border border-white/30 rounded-xl shadow-2xl z-50 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg text-white">Switch to Brand</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-white/20 text-white hover:bg-opacity-20 transition-all duration-300"
                >
                  ×
                </button>
              </div>
              
              <div className="relative">
                {/* Scroll Left Button */}
                {canScrollLeft && (
                  <button
                    onClick={() => scroll("left")}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-black/60 text-white hover:bg-black/80 shadow-lg border border-white/30"
                  >
                    <ChevronLeft size={16} />
                  </button>
                )}

                {/* Scroll Right Button */}
                {canScrollRight && (
                  <button
                    onClick={() => scroll("right")}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-black/60 text-white hover:bg-black/80 shadow-lg border border-white/30"
                  >
                    <ChevronRight size={16} />
                  </button>
                )}

                {/* Brands Grid */}
                <div 
                  ref={scrollRef}
                  className="flex gap-4 overflow-x-auto scrollbar-hide pb-2"
                  style={{ 
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                  }}
                >
                  {otherBrands.map((brand) => (
                    <Link
                      key={brand.route}
                      to={brand.route}
                      onClick={() => setIsOpen(false)}
                      className="flex-shrink-0 group hover:bg-white/10 rounded-xl p-4 border border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-xl min-w-[120px] hover:border-white/50"
                      title={`Visit ${brand.name}`}
                    >
                      <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 ring-2 ring-white/30 group-hover:ring-white/50">
                        <img
                          src={brand.logo}
                          alt={brand.name}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <p className="text-xs font-medium text-center leading-tight text-white/90 group-hover:text-white transition-all duration-300">
                        {brand.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* View All Brands Link */}
              <div className="mt-6 pt-4 border-t border-white/30">
                <Link
                  to="/#brands"
                  onClick={() => setIsOpen(false)}
                  className="block text-center text-sm font-medium text-white opacity-90 hover:opacity-100 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-white/10"
                >
                  View All Brands →
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BrandNavigation;
