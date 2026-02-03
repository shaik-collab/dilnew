import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Sparkles, ChevronRight } from "lucide-react";

interface FloatingBrandSuggestionProps {
  className?: string;
}

const FloatingBrandSuggestion: React.FC<FloatingBrandSuggestionProps> = ({
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const location = useLocation();

  const allBrands = [
    {
      name: "Bhole ke Chole",
      logo: "/lovable-uploads/cdf67c56-7bd7-4023-af81-bf258fe60fe3.png",
      route: "/bhole-ke-chole",
      tagline: "Street Food Magic",
    },
    // Removed Aahar as requested
    {
      name: "The Junglee Kitchen",
      logo: "/lovable-uploads/junglee logo.png",
      route: "/junglee-kitchen",
      tagline: "Wild Flavors",
    },
    {
      name: "House Of Andhra",
      logo: "/lovable-uploads/1310a9da-ccbe-4fa6-bc06-51441a0872ba.png",
      route: "/house-of-andhra",
      tagline: "Spicy Traditions",
    },
    {
      name: "Dil Daily",
      logo: "/lovable-uploads/DIL_daily_new.png",
      route: "/dil-punjabi-daily",
      tagline: "Punjabi Comfort",
    },
    {
      name: "Khichdi Bar",
      logo: "/lovable-uploads/235a933c-2973-43db-8419-1bc689100f0a.png",
      route: "/khichdi-bar",
      tagline: "Comfort Bowls",
    },
    // Removed The Chaat Cult as requested
    {
      name: "VEGERAMA",
      logo: "/lovable-uploads/vegerama_new-Photoroom.png",
      route: "/vegerama",
      tagline: "Fresh & Green",
    },
    {
      name: "Bihari Bowl",
      logo: "/lovable-uploads/bb_logo.png",
      route: "/bihari-bowl",
      tagline: "Authentic Bihari",
    },
  ];

  // Filter out current brand and get 2 random suggestions
  const currentRoute = location.pathname;
  const otherBrands = allBrands.filter(brand => brand.route !== currentRoute);
  const [suggestedBrands] = useState(() => 
    otherBrands.sort(() => Math.random() - 0.5).slice(0, 2)
  );

  useEffect(() => {
    // Reset when route changes
    setIsDismissed(false);
    setIsVisible(false);

    // Show suggestion after 30 seconds if not dismissed
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true);
      }
    }, 30000);

    return () => clearTimeout(timer);
  }, [currentRoute, isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    // Remember dismissal for this session
    sessionStorage.setItem(`brand-suggestion-dismissed-${currentRoute}`, 'true');
  };

  // Check if already dismissed in this session
  useEffect(() => {
    const wasDismissed = sessionStorage.getItem(`brand-suggestion-dismissed-${currentRoute}`);
    if (wasDismissed) {
      setIsDismissed(true);
    }
  }, [currentRoute]);

  if (!isVisible || isDismissed || suggestedBrands.length === 0) {
    return null;
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 max-w-sm animate-slideInUp">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            {/* <Sparkles className="text-purple-600" size={20} /> */}
            <h3 className="font-bold text-gray-900">Try These Too!</h3>
          </div>
          <button
            onClick={handleDismiss}
            className="p-1 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <X size={16} />
          </button>
        </div>

        {/* Brand Suggestions */}
        <div className="space-y-3 mb-4">
          {suggestedBrands.map((brand) => (
            <Link
              key={brand.route}
              to={brand.route}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-purple-50 transition-all duration-200 group"
              onClick={handleDismiss}
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 text-sm group-hover:text-purple-600 transition-colors duration-200">
                  {brand.name}
                </h4>
                <p className="text-gray-500 text-xs">{brand.tagline}</p>
              </div>
              <ChevronRight className="text-gray-400 group-hover:text-purple-600 transition-colors duration-200" size={16} />
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center">
          <Link
            to="/#brands"
            className="text-sm text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200"
            onClick={handleDismiss}
          >
            View All Brands →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FloatingBrandSuggestion;
