import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import BrandNavigation from "../components/BrandNavigation";
import FloatingBrandSuggestion from "../components/FloatingBrandSuggestion";
import {
  Sparkles,
  Handshake,
  Heart,
  Star,
  Quote,
  Instagram,
  Menu,
  X,
  Home,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const VegeRAMA = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const menuScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "VegeRAMA | Fresh. Green. Delicious.";
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check scroll position to show/hide arrows
  const checkScrollPosition = () => {
    if (menuScrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = menuScrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    if (menuScrollRef.current) {
      menuScrollRef.current.addEventListener('scroll', checkScrollPosition);
      return () => {
        if (menuScrollRef.current) {
          menuScrollRef.current.removeEventListener('scroll', checkScrollPosition);
        }
      };
    }
  }, []);

  const scrollLeft = () => {
    if (menuScrollRef.current) {
      menuScrollRef.current.scrollBy({
        left: -400,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (menuScrollRef.current) {
      menuScrollRef.current.scrollBy({
        left: 400,
        behavior: 'smooth'
      });
    }
  };

  const menuItems = [
    {
      name: "Dal Khichdi (No onion No garlic)",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Vegerama/Dal Khichdi (No onion No garlic).png",
      description: "Homestyle plain dal khichdi. Served with fresh curd, a simple, comforting meal.",
      badge: "Jain Special",
    },
    {
      name: "Dal Khichdi + Paneer Butter Masala Combo",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Vegerama/Dal Khichdi (No onion No garlic) with Paneer Butter Masala Combo.png",
      description: "A wholesome and satisfying meal featuring homestyle plain dal khichdi and creamy Jain-style butter paneer paired with fresh curd.",
      badge: "Bestseller",
    },
    {
      name: "Paneer Butter Masala Rice Bowl",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Vegerama/Paneer Butter Masala Rice Bowl.png",
      description: "Paneer Butter Masala served steamed rice bowl accompanied with Green chutney and Salad.",
      badge: "Popular",
    },
    {
      name: "Dal Makhani Rice Bowl",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Vegerama/Dal Makhani Rice Bowl.png",
      description: "Daily Dal Makhani rice bowl accompanied with Green chutney and Salad.",
      badge: "Creamy Delight",
    },
    {
      name: "Matar Paneer Rice Bowl",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Vegerama/Matar Paneer Rice Bowl.png",
      description: "A wholesome mix of soft paneer and green peas in a flavorful gravy over steamed rice, offering a hearty and balanced meal.",
      badge: "Nutritious",
    },
    {
      name: "Rajma Masala Rice Bowl",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Vegerama/Rajma Rice Bowl.png",
      description: "Homestyle rajma cooked in a tomato-onion masala, served with steamed rice, fresh salad, and green chutney.",
      badge: "Comfort Food",
    },
    {
      name: "Samosa Chole Chaat",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Vegerama/Samosa Chole Chaat.png",
      description: "Golden-fried samosas crushed and layered with spicy chole, tangy chutneys, onions, and crunchy sev, a street-style delight in every bite.",
      badge: "Chaat Special",
    },
    {
      name: "Samosa with Aloo Sabji",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Vegerama/Samosa with Aloo Sabzi.png",
      description: "Samosas with aloo tamatar sabzi, fresh onion tomato & salad, and green chutney.",
      badge: "Traditional",
    },
    {
      name: "Aloo Samosa [2pcs]",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Vegerama/Aloo Samosa [2pcs].png",
      description: "Golden, crispy samosas served with tangy green chutney, offering a perfect blend of crunch and flavor.",
      badge: "Street Snack",
    },
    {
      name: "Matar Kulche",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Vegerama/Matar Kulche.png",
      description: "Bread kulches with ragda, served with chopped onion, tomato, Imly and green chutney.",
      badge: "North Indian",
    },
    {
      name: "Dahi Bhalle [6pcs]",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Vegerama/Dahi Bhalle [6pcs].png",
      description: "Soft, flavorful Dahi Bhalle topped with tangy chutney and aromatic special spice mix for a refreshing treat.",
      badge: "Cooling Treat",
    },
    {
      name: "Ragada Kachori Chaat",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Vegerama/Ragada Kachori Chaat.png",
      description: "Crispy mini kachoris paired with flavorful ragda, tangy green chutney, imli chutney, and crunchy sev, offering a perfect mix of textures and flavors.",
      badge: "Tangy Chaat",
    },
    {
      name: "Mini Dal Kachori [5pcs]",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Vegerama/Dal Kachori [5pcs].png",
      description: "Freshly fried Rajasthani Dal kachori, served along with green and sweet Imly chutney.",
      badge: "Rajasthani Special",
    },
    {
      name: "Upwas Sabudana Vada [2pcs]",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Vegerama/Upwas Sabudana Vada [2pcs].png",
      description: "Crispy vada made from Sabudana, and roasted peanuts served with sweet curd. Made with SENDHA NAMAK.",
      badge: "Vrat Special",
    },
    {
      name: "Sabudana Khichdi",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Vegerama/Sabudana Khichdi (No onion No garlic).png",
      description: "Light and tasty Sabudana Khichdi, served with sweet curd. A perfect vrat-friendly meal for fasting days.",
      badge: "Fasting Food",
    },
    {
      name: "Maska Pav + Chai",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Vegerama/Maska+Pav+%2B++Chai+copy.png",
      description: "Buttery buns served with a cup of hot chai. A timeless Indian comfort pairing.",
      badge: "Tea Time",
    },
    {
      name: "Samosa + Chai Combo",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Vegerama/Samosa+%5B1pc%5D+%2B+Chai+%5B250ml%5D+copy.png",
      description: "Golden-fried samosa served with flavorful chutneys, complemented by a warm cup of chai for a comforting break.",
      badge: "Classic Combo",
    },
    {
      name: "Samosa Pav",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Vegerama/Samosa Pav.png",
      description: "A crispy samosa served inside a soft pav paired with tangy green chutney for a classic and satisfying bite.",
      badge: "Street Fusion",
    },
  ];

  const testimonials = [
    {
      name: "Meera Patel",
      location: "Mumbai",
      text: "VEGERAMA is a vegetarian's paradise! Fresh, green, and absolutely delicious. The power bowl is amazing!",
      initial: "M",
    },
    {
      name: "Anjali Desai",
      location: "Pune",
      text: "Fresh, healthy, and natural—exactly what I look for in vegetarian food. Highly recommended!",
      initial: "A",
    },
    {
      name: "Kavita Reddy",
      location: "Bangalore",
      text: "The fresh salad bowl is outstanding! This is how vegetarian food should be—vibrant and full of flavor!",
      initial: "K",
    },
  ];

  const instagramPosts: Array<{ id: number; thumbnail: string; url: string }> = [];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background vegerama-page scroll-snap-container">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#7CB342]/95 backdrop-blur-md shadow-lg" : "bg-black/20 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="flex items-center gap-2 text-white/90 hover:text-[#AED581] transition-colors duration-300 group"
                title="Back to Dil Foods"
              >
                <img 
                  src="/lovable-uploads/60eb50d7-da70-4fee-a1ec-fd331878910f.png" 
                  alt="Dil Foods" 
                  className="h-5 w-auto group-hover:scale-110 transition-transform duration-300" 
                />
                {/* <span className="hidden sm:inline text-sm font-medium">Home</span> */}
              </Link>
              <div className="h-6 w-px bg-white/30"></div>
              <Link to="/vegerama" className="text-2xl text-white font-bold font-display">
                VEGERAMA
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("menu");
                }}
                className="text-white/90 hover:text-[#AED581] transition-colors duration-300 font-medium"
              >
                Menu
              </a>
              <a
                href="#reviews"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("reviews");
                }}
                className="text-white/90 hover:text-[#AED581] transition-colors duration-300 font-medium"
              >
                Reviews
              </a>
              <a
                href="#brands"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("brands");
                }}
                className="text-white/90 hover:text-[#AED581] transition-colors duration-300 font-medium"
              >
                Other Brands
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="text-white/90 hover:text-[#AED581] transition-colors duration-300 font-medium"
              >
                Contact
              </a>
              <a
                href="https://orders.dilfoods.in/?_gl=1*32xgw6*_ga*NDA1NTU0Mjc1LjE3MTYxMDgwNjU.*_ga_7CQ31SQHW5*MTc0MjExODExOC4xNS4wLjE3NDIxMTgxMTguMC4wLjA.*_ga_VCDE3GHY4J*MTc0MjExODExOC4xNS4wLjE3NDIxMTgxMTguMC4wLjA."
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 bg-[#AED581] text-[#2E7D32] font-semibold rounded-lg hover:bg-[#AED581]/90 transition-all duration-300"
              >
                Order Now
              </a>
              <BrandNavigation variant="light" />
            </div>

            <button
              className="md:hidden w-10 h-10 flex items-center justify-center text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden pb-6 space-y-4">
              <Link
                to="/"
                className="flex items-center gap-2 text-white/90 hover:text-[#AED581] transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <img 
                  src="/lovable-uploads/60eb50d7-da70-4fee-a1ec-fd331878910f.png" 
                  alt="Dil Foods" 
                  className="h-4 w-auto" 
                />
                <span>Back to Home</span>
              </Link>
              <div className="h-px bg-white/20 my-2"></div>
              <a
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("menu");
                }}
                className="block text-white/90 hover:text-[#AED581] transition-colors duration-300 font-medium py-2"
              >
                Menu
              </a>
              <a
                href="#reviews"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("reviews");
                }}
                className="block text-white/90 hover:text-[#AED581] transition-colors duration-300 font-medium py-2"
              >
                Reviews
              </a>
              <a
                href="#brands"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("brands");
                }}
                className="block text-white/90 hover:text-[#AED581] transition-colors duration-300 font-medium py-2"
              >
                Other Brands
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="block text-white/90 hover:text-[#AED581] transition-colors duration-300 font-medium py-2"
              >
                Contact
              </a>
              <a
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("menu");
                }}
                className="block px-6 py-2.5 bg-[#AED581] text-[#2E7D32] font-semibold rounded-lg hover:bg-[#AED581]/90 transition-all duration-300 text-center"
              >
                Order Now
              </a>
            </div>
          )}
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-snap-section">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://dilwebsite.s3.ap-south-1.amazonaws.com/Vegerama/Vegerama Display image - Swiggy.png"
            alt="Fresh Vegetarian Feast - VegeRAMA"
            className="w-full h-full object-cover object-center"
          />
        </div>
        {/* Dark Gradient Overlay - using brand hero gradient */}
        <div className="absolute inset-0 z-[1] bg-gradient-hero"></div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#AED581] text-lg md:text-xl tracking-[0.3em] uppercase mb-6 font-semibold">
              FRESH. GREEN. DELICIOUS.
            </p>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight font-display">
              <span className="text-white">VEGERAMA</span>
              {/* <span className="block text-[#AED581]">RAMA</span> */}
            </h1>
            
            <p className="text-white/95 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
              Fresh, healthy, and natural. Experience the vibrant flavors of vegetarian cuisine, 
              where every dish celebrates the goodness of fresh, green ingredients.
            </p>
            
            {/* Platform Availability */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <div className="flex items-center gap-3 px-6 py-3 bg-[#2E7D32]/20 backdrop-blur-sm rounded-full border border-[#AED581]/30 hover:bg-[#2E7D32]/30 transition-all duration-300">
                <span className="text-white/90 text-sm font-medium">Available only on</span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://www.swiggy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold rounded-md transition-colors duration-200"
                  >
                    Swiggy
                  </a>
                  <span className="text-white/70">&</span>
                  <a
                    href="https://www.zomato.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-xs font-semibold rounded-md transition-colors duration-200"
                  >
                    Zomato
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("menu");
                }}
                className="px-8 py-4 bg-white text-[#2E7D32] font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Explore Menu
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Heritage Section */}
      <section className="min-h-screen flex items-center bg-[#2E7D32] overflow-hidden scroll-snap-section">
        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-[#AED581]/20">
                <img
                  src="https://dilwebsite.s3.ap-south-1.amazonaws.com/Vegerama/Vegerama Display image - Swiggy.png"
                  alt="Fresh Vegetarian Heritage - VegeRAMA"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2E7D32]/60 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-[#AED581] text-[#2E7D32] p-4 lg:p-5 rounded-xl shadow-lg max-w-[280px] z-10">
                <p className="text-lg lg:text-xl italic mb-1 font-semibold">"Fresh. Green. Delicious."</p>
                <p className="text-xs opacity-80">— The VEGERAMA Promise</p>
              </div>
            </div>
            <div>
              <span className="text-[#AED581] text-sm tracking-[0.3em] uppercase font-semibold">Green Heritage</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mt-3 mb-6 leading-tight font-display">
                The Soul of
                <span className="block text-[#AED581]">Fresh Living</span>
              </h2>
              <div className="space-y-4 text-white/80 text-base md:text-lg leading-relaxed">
                <p>
                  <span className="text-white font-semibold">VEGERAMA</span> celebrates the vibrant world of vegetarian cuisine, 
                  where fresh, green ingredients come together to create dishes that nourish both body and soul. 
                  Our mission is to showcase the incredible diversity and flavor potential of plant-based foods.
                </p>
                <p>
                  Every dish represents our commitment to using the freshest vegetables, aromatic spices, and time-tested 
                  cooking techniques. From crispy samosas to hearty rice bowls, we transform simple vegetables into 
                  extraordinary culinary experiences that prove vegetarian food can be vibrant, satisfying, and delicious.
                </p>
                <p>
                  We believe that vegetarian food should be a celebration—colorful, flavorful, and full of life. 
                  Each meal is crafted with care to honor the natural goodness of fresh ingredients while bringing 
                  joy to every bite.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-6">
                <div>
                  <p className="text-3xl md:text-4xl text-[#AED581] font-bold">18+</p>
                  <p className="text-xs md:text-sm text-white/70">Fresh Varieties</p>
                </div>
                <div className="w-px h-10 bg-white/20"></div>
                <div>
                  <p className="text-3xl md:text-4xl text-[#AED581] font-bold">100%</p>
                  <p className="text-xs md:text-sm text-white/70">Vegetarian</p>
                </div>
                <div className="w-px h-10 bg-white/20"></div>
                <div>
                  <p className="text-3xl md:text-4xl text-[#AED581] font-bold">∞</p>
                  <p className="text-xs md:text-sm text-white/70">Fresh & Natural</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center bg-[#F1F8E9] overflow-hidden scroll-snap-section">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#7CB342] text-sm tracking-[0.3em] uppercase font-semibold">Our Journey</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#2E7D32] font-bold mt-4 mb-6 leading-tight font-display">
              The Power of
              <span className="block text-[#7CB342]">Fresh & Green</span>
            </h2>
            <p className="text-[#2E7D32]/80 text-lg">
              Celebrating the natural goodness of fresh vegetables and plant-based ingredients.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm border border-[#7CB342]/20 rounded-2xl p-8 hover:bg-white transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-[#7CB342] flex items-center justify-center mb-6 shadow-lg">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <span className="text-[#7CB342] text-xs tracking-[0.2em] uppercase font-semibold">Fresh & Natural</span>
              <h3 className="text-2xl text-[#2E7D32] font-bold mt-2 mb-4 font-display">Organic Goodness</h3>
              <p className="text-[#2E7D32]/80 leading-relaxed">
                We use the freshest vegetables and organic ingredients to create dishes that 
                are not just delicious but also nourishing.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm border border-[#7CB342]/20 rounded-2xl p-8 hover:bg-white transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-[#7CB342] flex items-center justify-center mb-6 shadow-lg">
                <Handshake className="w-7 h-7 text-white" />
              </div>
              <span className="text-[#7CB342] text-xs tracking-[0.2em] uppercase font-semibold">Healthy Living</span>
              <h3 className="text-2xl text-[#2E7D32] font-bold mt-2 mb-4 font-display">Nourishing Meals</h3>
              <p className="text-[#2E7D32]/80 leading-relaxed">
                Every dish is designed to be healthy and nutritious, providing you with the 
                energy and vitality you need.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm border border-[#7CB342]/20 rounded-2xl p-8 hover:bg-white transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-[#7CB342] flex items-center justify-center mb-6 shadow-lg">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <span className="text-[#7CB342] text-xs tracking-[0.2em] uppercase font-semibold">Vibrant</span>
              <h3 className="text-2xl text-[#2E7D32] font-bold mt-2 mb-4 font-display">Colorful Flavors</h3>
              <p className="text-[#2E7D32]/80 leading-relaxed">
                Vegetarian food should be vibrant and full of life. Every dish is a celebration 
                of fresh, colorful ingredients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="min-h-screen flex items-center bg-[#F1F8E9] overflow-hidden scroll-snap-section">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#7CB342] text-sm tracking-[0.3em] uppercase font-semibold">Our Menu</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#2E7D32] font-bold mt-4 mb-6 leading-tight font-display">
              Taste the
              <span className="block text-[#7CB342]">
                Freshness
              </span>
            </h2>
            <p className="text-[#2E7D32]/70 text-lg">
              Each dish brings the vibrant, fresh flavors of vegetarian cuisine to your table.
            </p>
          </div>
          <div className="relative">
            {/* Left Arrow */}
            {canScrollLeft && (
              <button
                onClick={scrollLeft}
                className="absolute left-2 top-1/3 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-300 hover:scale-110"
                aria-label="Scroll left"
              >
                <ChevronLeft size={24} className="text-gray-700" />
              </button>
            )}

            {/* Right Arrow */}
            {canScrollRight && (
              <button
                onClick={scrollRight}
                className="absolute right-2 top-1/3 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-300 hover:scale-110"
                aria-label="Scroll right"
              >
                <ChevronRight size={24} className="text-gray-700" />
              </button>
            )}

            <div ref={menuScrollRef} className="flex gap-6 overflow-x-auto scrollbar-hide px-6 pb-4 snap-x snap-mandatory">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="shrink-0 w-[320px] md:w-[360px] snap-start group cursor-pointer"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-5 shadow-lg group-hover:shadow-xl transition-all duration-300 bg-white">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#4CAF50] to-[#81C784] flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">VEGERAMA</span>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#AED581] text-[#2E7D32] text-xs font-semibold rounded-full shadow-md">
                      {item.badge}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl text-[#2E7D32] font-bold mb-2 group-hover:text-[#7CB342] transition-colors duration-300 font-display">
                  {item.name}
                </h3>
                <p className="text-[#2E7D32]/70 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="min-h-screen flex items-center bg-white overflow-hidden scroll-snap-section">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#7CB342] text-sm tracking-[0.3em] uppercase font-semibold">Testimonials</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#2E7D32] font-bold mt-4 mb-6 leading-tight font-display">
              What Our
              <span className="block text-[#7CB342]">
                Customers Say
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#F1F8E9] rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 relative border border-[#4CAF50]/10"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-[#7CB342]/20" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#81C784] text-[#AED581]" />
                  ))}
                </div>
                <p className="text-[#2E7D32] text-lg leading-relaxed mb-6">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#7CB342] flex items-center justify-center text-white font-bold">
                    {testimonial.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-[#2E7D32]">{testimonial.name}</p>
                    <p className="text-sm text-[#2E7D32]/60">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center bg-white overflow-hidden scroll-snap-section">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#7CB342] rounded-full mb-6">
              <Instagram className="w-5 h-5 text-white" />
              <span className="font-semibold text-white">@vegetrama</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[#2E7D32] font-bold mb-4 font-display">Follow Our Culinary Journey</h2>
            <p className="text-[#2E7D32]/70">Behind-the-scenes, fresh recipes, and natural food stories from our kitchen to yours.</p>
          </div>

          {/* Instagram Gallery - Scrollable Thumbnail Grid */}
          {instagramPosts.length > 0 && (
            <div className="mb-12">
              <div className="flex gap-4 overflow-x-auto scrollbar-hide px-6 pb-4 snap-x snap-mandatory">
                {instagramPosts.map((post) => (
                  <a
                    key={post.id}
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 w-[280px] md:w-[320px] snap-start group cursor-pointer"
                  >
                    <div className="relative h-[420px] md:h-[480px] rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 bg-white">
                      <img
                        src={post.thumbnail}
                        alt={`Instagram post ${post.id}`}
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Instagram icon overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2E7D32]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-[#7CB342]/90 rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                          <Instagram className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Follow Button */}
          <div className="text-center mt-10">
            <a
              href="https://instagram.com/vegetrama"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#2E7D32] text-white font-semibold rounded-lg hover:bg-[#2E7D32]/80 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Instagram className="w-5 h-5" />
              Follow Us on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Brand Discovery Section - Inline with VegeRAMA Theme */}
      <section id="brands" className="min-h-screen scroll-snap-section scroll-snap-align-start py-16 md:py-24"
        style={{ background: 'linear-gradient(135deg, #E8F5E8 0%, #C8E6C9 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section - VegeRAMA Theme */}
          <div className="text-center mb-12 px-4">
            <div className="relative">
              {/* Background Decoration with VegeRAMA colors */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-r from-green-200 to-green-300 rounded-full blur-3xl opacity-40"></div>
              </div>
              
              <div className="relative">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-display text-green-800">
                  Explore Our Other
                  <span className="block text-green-700">
                    Culinary Brands
                  </span>
                </h2>
                
                <p className="text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed mb-8 text-gray-700">
                  Discover more delicious cuisines from our family of food brands, each crafted with 
                  <span className="font-semibold text-green-700"> passion</span> and 
                  <span className="font-semibold text-green-600"> authenticity</span>
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Brand Cards Container */}
            <div className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide pb-6 px-4">
              {[
                {
                  name: "Bhole ke Chole",
                  logo: "/lovable-uploads/cdf67c56-7bd7-4023-af81-bf258fe60fe3.png",
                  route: "/bhole-ke-chole",
                  description: "Authentic North Indian street food",
                  primaryColor: "#DC2A6B",
                  secondaryColor: "#E91E63",
                  logoBackground: "#FCE4EC",
                },
                {
                  name: "Aahar",
                  logo: "/lovable-uploads/55d6ad50-361d-42cd-b556-c283b2ee23e4.png",
                  route: "/aahar",
                  description: "Traditional South Indian homestyle meals",
                  primaryColor: "#F44336",
                  secondaryColor: "#4CAF50",
                  logoBackground: "#FFF3E0",
                },
                {
                  name: "The Junglee Kitchen",
                  logo: "/lovable-uploads/junglee logo.png",
                  route: "/junglee-kitchen",
                  description: "Wild flavors from nature's kitchen",
                  primaryColor: "#8D6E63",
                  secondaryColor: "#A1887F",
                  logoBackground: "#EBE3C0",
                },
                {
                  name: "House Of Andhra",
                  logo: "/lovable-uploads/1310a9da-ccbe-4fa6-bc06-51441a0872ba.png",
                  route: "/house-of-andhra",
                  description: "Authentic Andhra cuisine with bold spices",
                  primaryColor: "#8B1538",
                  secondaryColor: "#AD1457",
                  logoBackground: "#F8F6F5",
                },
                {
                  name: "Dil Daily",
                  logo: "/lovable-uploads/DIL_daily_new.png",
                  route: "/dil-punjabi-daily",
                  description: "Daily dose of Punjabi comfort food",
                  primaryColor: "#E91E63",
                  secondaryColor: "#26A69A",
                  logoBackground: "#FFFDE7",
                },
                {
                  name: "Khichdi Bar",
                  logo: "/lovable-uploads/235a933c-2973-43db-8419-1bc689100f0a.png",
                  route: "/khichdi-bar",
                  description: "Comfort in every bowl - healthy & delicious",
                  primaryColor: "#2E7D32",
                  secondaryColor: "#FF9800",
                  logoBackground: "#FDF6E8",
                },
                {
                  name: "The Chaat Cult",
                  logo: "/lovable-uploads/tcc.png",
                  route: "/the-chaat-cult",
                  description: "Tangy, spicy, addictive street chaat",
                  primaryColor: "#00897B",
                  secondaryColor: "#CDDC39",
                  logoBackground: "#E0F2F1",
                },
                {
                  name: "Bihari Bowl",
                  logo: "/lovable-uploads/bb_logo.png",
                  route: "/bihari-bowl",
                  description: "Authentic Bihari flavors in every bite",
                  primaryColor: "#B71C1C",
                  secondaryColor: "#D32F2F",
                  logoBackground: "#FFF8E1",
                },
              ].map((brand) => (
                <Link
                  key={brand.route}
                  to={brand.route}
                  className="flex-shrink-0 group"
                >
                  {/* VegeRAMA-themed Card Design */}
                  <div className="w-64 sm:w-72 md:w-64 h-52 sm:h-56 md:h-64 bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg border border-green-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group-hover:border-green-300 relative">
                    
                    {/* Brand Color Strip - VegeRAMA themed */}
                    <div 
                      className="h-1 w-full opacity-70 group-hover:opacity-100 transition-opacity duration-300" 
                      style={{ 
                        background: `linear-gradient(90deg, ${brand.primaryColor}, ${brand.secondaryColor})` 
                      }}
                    />

                    {/* Main Content */}
                    <div className="flex flex-col items-center justify-center h-full p-6">
                      
                      {/* Logo Container with VegeRAMA glow */}
                      <div className="relative mb-4">
                        <div className="absolute -inset-4 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500 bg-gradient-to-r from-green-700 to-green-500" />
                        
                        <div 
                          className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
                          style={{ 
                            backgroundColor: brand.logoBackground,
                          }}
                        >
                          <img
                            src={brand.logo}
                            alt={brand.name}
                            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                      </div>

                      {/* Description with VegeRAMA colors */}
                      <p className="text-gray-600 text-sm text-center leading-relaxed mb-4 px-3 min-h-[2rem] flex items-center justify-center transition-all duration-300 group-hover:text-gray-800 font-medium">
                        {brand.description}
                      </p>

                      {/* CTA Button - VegeRAMA themed */}
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div 
                          className="px-6 py-2 rounded-full text-white font-medium text-sm shadow-lg transition-all duration-300 flex items-center gap-2"
                          style={{ 
                            background: `linear-gradient(135deg, #2E7D32, #8BC34A)` 
                          }}
                        >
                          <span>Explore</span>
                          <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>

                    {/* Corner Accent - VegeRAMA themed */}
                    <div className="absolute top-3 right-3 w-2 h-2 rounded-full opacity-50 group-hover:opacity-80 transition-all duration-300 bg-green-600" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button - VegeRAMA themed */}
          <div className="text-center mt-12 px-4">
            <div className="relative inline-block">
              <div className="absolute inset-0 rounded-2xl blur opacity-40 transition-opacity duration-300 bg-gradient-to-r from-green-700 to-green-600"></div>
              
              <Link
                to="/#brands"
                className="relative inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-green-700 to-green-600 text-white font-bold text-lg rounded-2xl transition-all duration-500 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 group"
              >
                <span>View All Brands</span>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
                  <ChevronRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
            
            <p className="text-gray-600 text-sm mt-6 max-w-md mx-auto px-4">
              Experience the diverse flavors and authentic cuisines from our carefully curated brand collection
            </p>
          </div>
        </div>
      </section>

      <div id="contact" className="scroll-snap-section">
        <Footer />
      </div>

      {/* Floating Brand Suggestion - 30 second popup */}
      <FloatingBrandSuggestion />
    </div>
  );
};

export default VegeRAMA;