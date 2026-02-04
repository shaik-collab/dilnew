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

const DilPunjabiDaily = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const menuScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Dil Daily | Homestyle Comfort, Daily Delight";
    
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
      name: "Chole Bhature",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/DPD/Chole Bhature.jpg",
      description: "Pindi chole served with 2 fluffy Bhataras",
      badge: "Bestseller",
    },
    {
      name: "Dal Makhani & Paratha Combo",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/DPD/Dal Makhani & Paratha combo.jpg",
      description: "Indulge in the perfection of slow-cooked creamy black lentils paired with fresh Whole Wheat Paratha",
      badge: "Signature",
    },
    {
      name: "Butter Chicken & Paratha Combo",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/DPD/Butter Chicken & Paratha Combo.jpg",
      description: "Creamy tomato-based curry with tender chicken pieces served with fresh parathas, a North Indian classic",
      badge: "Popular",
    },
    {
      name: "Veg Homely Thali",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/DPD/Veg Homely Thali.jpg",
      description: "A complete meal with Dal tadka + Aloo Matar + Paneer butter masala + Paratha + Steamed rice + Salad with chutney + Gulab jamun",
      badge: "Chef's Special",
    },
    {
      name: "Aloo Matar & Paratha Combo",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/DPD/Aloo Matar & Paratha Combo.jpg",
      description: "Homestyle Matar Aloo made in a savory gravy served with Lachha Paratha + Salad + Chutney",
      badge: "Comfort Food",
    },
    {
      name: "Butter Chicken Rice Bowl",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/DPD/Butter Chicken Rice Bowl.jpg",
      description: "Daily Butter Chicken rice bowl accompanied with Green chutney and Salad",
      badge: "Bowl Special",
    },
    {
      name: "Aloo Matar Rice Bowl",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/DPD/Aloo Matar Rice Bowl.jpg",
      description: "Daily Aloo Matar rice bowl accompanied with Green chutney and Salad",
      badge: "Healthy Choice",
    },
    {
      name: "Spiced Chicken & Paratha Combo",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/DPD/Amritsari Chicken & Paratha Combo.jpg",
      description: "Authentic spiced chicken curry served with fresh whole wheat parathas and accompaniments",
      badge: "Regional Special",
    },
    {
      name: "Spiced Chicken Rice Bowl",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/DPD/Amritsari Chicken Rice Bowl.jpg",
      description: "Daily spiced chicken rice bowl accompanied with Green chutney and Salad",
      badge: "Traditional",
    },
    {
      name: "Palak Chicken & Paratha Combo",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/DPD/Palak Chicken & Paratha combo.jpg",
      description: "Nutritious spinach-based chicken curry served with fresh parathas for a wholesome meal",
      badge: "Healthy Special",
    },
    {
      name: "Palak Chicken Rice Bowl",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/DPD/Palak Chicken Rice Bowl.jpg",
      description: "Daily Palak Chicken rice bowl accompanied with Green chutney and Salad",
      badge: "Nutritious",
    },
    {
      name: "Atta Halwa",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/DPD/Atta Halwa (150ml).jpg",
      description: "Traditional wheat flour halwa, rich and sweet, perfect for dessert lovers",
      badge: "Sweet Treat",
    },
  ];

  const testimonials = [
    {
      name: "Harpreet Singh",
      location: "Delhi",
      text: "Homestyle Comfort, Daily Delight indeed! The butter chicken is exactly like home. Perfect flavors!",
      initial: "H",
    },
    {
      name: "Simran Kaur",
      location: "Mumbai",
      text: "Authentic North Indian food that reminds me of my grandmother's cooking. Absolutely delicious!",
      initial: "S",
    },
    {
      name: "Amanpreet",
      location: "Gurgaon",
      text: "The dal makhani is rich and creamy, just the way it should be. This is real comfort food!",
      initial: "A",
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
    <div className="min-h-screen bg-background dil-punjabi-daily-page scroll-snap-container">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-primary/95 backdrop-blur-md shadow-lg" : "bg-black/20 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="flex items-center gap-2 text-white/90 hover:text-secondary transition-colors duration-300 group"
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
              <Link to="/dil-punjabi-daily" className="text-2xl text-white font-bold font-display">
                Dil Daily
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("menu");
                }}
                className="text-white/90 hover:text-secondary transition-colors duration-300 font-medium"
              >
                Menu
              </a>
              <a
                href="#reviews"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("reviews");
                }}
                className="text-white/90 hover:text-secondary transition-colors duration-300 font-medium"
              >
                Reviews
              </a>
              <a
                href="#brands"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("brands");
                }}
                className="text-white/90 hover:text-secondary transition-colors duration-300 font-medium"
              >
                Other Brands
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="text-white/90 hover:text-secondary transition-colors duration-300 font-medium"
              >
                Contact
              </a>
              <a
                href="https://orders.dilfoods.in/?_gl=1*32xgw6*_ga*NDA1NTU0Mjc1LjE3MTYxMDgwNjU.*_ga_7CQ31SQHW5*MTc0MjExODExOC4xNS4wLjE3NDIxMTgxMTguMC4wLjA.*_ga_VCDE3GHY4J*MTc0MjExODExOC4xNS4wLjE3NDIxMTgxMTguMC4wLjA."
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300"
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
                className="flex items-center gap-2 text-white/90 hover:text-secondary transition-colors duration-300 font-medium py-2"
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
                className="block text-white/90 hover:text-secondary transition-colors duration-300 font-medium py-2"
              >
                Menu
              </a>
              <a
                href="#reviews"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("reviews");
                }}
                className="block text-white/90 hover:text-secondary transition-colors duration-300 font-medium py-2"
              >
                Reviews
              </a>
              <a
                href="#brands"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("brands");
                }}
                className="block text-white/90 hover:text-secondary transition-colors duration-300 font-medium py-2"
              >
                Other Brands
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="block text-white/90 hover:text-secondary transition-colors duration-300 font-medium py-2"
              >
                Contact
              </a>
              <a
                href="https://orders.dilfoods.in/?_gl=1*32xgw6*_ga*NDA1NTU0Mjc1LjE3MTYxMDgwNjU.*_ga_7CQ31SQHW5*MTc0MjExODExOC4xNS4wLjE3NDIxMTgxMTguMC4wLjA.*_ga_VCDE3GHY4J*MTc0MjExODExOC4xNS4wLjE3NDIxMTgxMTguMC4wLjA."
                target="_blank"
                rel="noreferrer"
                className="block px-6 py-2.5 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 text-center"
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
            src="https://dilwebsite.s3.ap-south-1.amazonaws.com/DPD/Dil Daily Display image - Swiggy.png"
            alt="Comfort Feast - Dil Daily"
            className="w-full h-full object-cover object-center"
          />
        </div>
        {/* Dark Gradient Overlay - using brand hero gradient */}
        <div className="absolute inset-0 z-[1] bg-gradient-hero"></div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-accent text-lg md:text-xl tracking-[0.3em] uppercase mb-6 font-semibold">
              HOMESTYLE COMFORT, DAILY DELIGHT
            </p>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight font-display">
              <span className="text-white">Dil Daily</span>
              {/* <span className="block text-accent">Daily</span> */}
            </h1>
            
            <p className="text-white/95 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
              Rich, hearty, and soul-warming. Experience the generous flavors of authentic North Indian 
              homestyle cuisine, served with love and tradition every day.
            </p>
            
            {/* Platform Availability */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <div className="flex items-center gap-3 px-6 py-3 bg-primary/20 backdrop-blur-sm rounded-full border border-accent/30 hover:bg-primary/30 transition-all duration-300">
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
                className="px-8 py-4 bg-gradient-to-r from-accent to-secondary text-accent-foreground font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Explore Menu
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Heritage Section */}
      <section className="min-h-screen flex items-center bg-primary overflow-hidden scroll-snap-section">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden shadow-strong bg-accent/20">
                <img
                  src="https://dilwebsite.s3.ap-south-1.amazonaws.com/DPD/Dil Daily Display image - Swiggy.png"
                  alt="Comfort Heritage - Dil Daily"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-accent text-accent-foreground p-4 lg:p-5 rounded-xl shadow-strong max-w-[280px] z-10">
                <p className="text-lg lg:text-xl italic mb-1 font-semibold">"Homestyle comfort, daily delight"</p>
                <p className="text-xs opacity-80">— The Dil Daily Way</p>
              </div>
            </div>
            <div>
              <span className="text-accent text-sm tracking-[0.3em] uppercase font-semibold">Comfort Heritage</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mt-3 mb-6 leading-tight font-display">
                The Warmth of
                <span className="block text-accent">Home</span>
              </h2>
              <div className="space-y-4 text-white/80 text-base md:text-lg leading-relaxed">
                <p>
                  <span className="text-white font-semibold">Dil Daily</span> brings you the generous spirit 
                  of homestyle cooking, where food isn't just nourishment—it's celebration, love, and community served on a plate. 
                  Our dishes reflect the vibrant culture of traditional North Indian comfort food.
                </p>
                <p>
                  From rich dal preparations to creamy gravies, every ingredient tells a story of abundance 
                  and hospitality. We prepare traditional recipes with the same warmth and generosity that defines 
                  homestyle culture—rich gravies, fresh breads, and heartwarming flavors.
                </p>
                <p>
                  Each meal is a celebration of life's simple pleasures. Whether it's the creamy dal makhani that 
                  simmers with patience or the buttery naan that brings families together, we serve the essence 
                  of comfort food's joyful, nourishing spirit.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-6">
                <div>
                  <p className="text-3xl md:text-4xl text-accent font-bold">18+</p>
                  <p className="text-xs md:text-sm text-white/70">Authentic Dishes</p>
                </div>
                <div className="w-px h-10 bg-white/20"></div>
                <div>
                  <p className="text-3xl md:text-4xl text-accent font-bold">5</p>
                  <p className="text-xs md:text-sm text-white/70">Star Comfort</p>
                </div>
                <div className="w-px h-10 bg-white/20"></div>
                <div>
                  <p className="text-3xl md:text-4xl text-accent font-bold">∞</p>
                  <p className="text-xs md:text-sm text-white/70">Homestyle Love</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center bg-background overflow-hidden scroll-snap-section">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-semibold">Our Journey</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-foreground font-bold mt-4 mb-6 leading-tight font-display">
              The Heart of
              <span className="block text-primary">Comfort</span>
            </h2>
            <p className="text-foreground/80 text-lg">
              Generous portions, rich flavors, and the warm hospitality of home cooking in every dish.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm border border-secondary/20 rounded-2xl p-8 hover:bg-white transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6 shadow-lg">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <span className="text-primary text-xs tracking-[0.2em] uppercase font-semibold">Rich Flavors</span>
              <h3 className="text-2xl text-foreground font-bold mt-2 mb-4 font-display">Hearty Meals</h3>
              <p className="text-foreground/80 leading-relaxed">
                Our dishes are rich, creamy, and full of flavor, just like traditional North Indian comfort cuisine 
                that's meant to be shared and enjoyed.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm border border-secondary/20 rounded-2xl p-8 hover:bg-white transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6 shadow-lg">
                <Handshake className="w-7 h-7 text-white" />
              </div>
              <span className="text-primary text-xs tracking-[0.2em] uppercase font-semibold">Daily Fresh</span>
              <h3 className="text-2xl text-foreground font-bold mt-2 mb-4 font-display">Fresh Preparation</h3>
              <p className="text-foreground/80 leading-relaxed">
                Every dish is prepared fresh daily using traditional methods, ensuring authentic 
                flavors and the highest quality.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm border border-secondary/20 rounded-2xl p-8 hover:bg-white transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6 shadow-lg">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <span className="text-primary text-xs tracking-[0.2em] uppercase font-semibold">Celebration</span>
              <h3 className="text-2xl text-foreground font-bold mt-2 mb-4 font-display">Festive Spirit</h3>
              <p className="text-foreground/80 leading-relaxed">
                Homestyle cooking is about celebration and togetherness. Every meal is a feast that 
                brings people together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="min-h-screen flex items-center bg-background overflow-hidden scroll-snap-section">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-semibold">Our Menu</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-foreground font-bold mt-4 mb-6 leading-tight font-display">
              Taste the
              <span className="block text-primary">
                Richness
              </span>
            </h2>
            <p className="text-foreground/70 text-lg">
              Each dish is a celebration of rich, hearty comfort food flavors.
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
                    <div className="w-full h-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">Daily</span>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full shadow-md">
                      {item.badge}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl text-foreground font-bold mb-2 group-hover:text-primary transition-colors duration-300 font-display">
                  {item.name}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="min-h-screen flex items-center bg-white overflow-hidden scroll-snap-section">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-semibold">Testimonials</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-foreground font-bold mt-4 mb-6 leading-tight font-display">
              What Our
              <span className="block text-primary">
                Customers Say
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 relative border border-secondary/10"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground text-lg leading-relaxed mb-6">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    {testimonial.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-foreground/60">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center bg-white overflow-hidden scroll-snap-section">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-accent rounded-full mb-6">
              <Instagram className="w-5 h-5 text-accent-foreground" />
              <span className="font-semibold text-accent-foreground">@dildaily</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-foreground font-bold mb-4 font-display">Follow Our Culinary Journey</h2>
            <p className="text-foreground/70">Behind-the-scenes, authentic comfort food recipes, and food stories from our kitchen to yours.</p>
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
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-accent/90 rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                          <Instagram className="w-8 h-8 text-accent-foreground" />
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
              href="https://instagram.com/dildaily"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-white font-semibold rounded-lg hover:bg-foreground/80 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Instagram className="w-5 h-5" />
              Follow Us on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Brand Discovery Section - Inline with Dil Daily Theme */}
      <section id="brands" className="min-h-screen scroll-snap-section scroll-snap-align-start py-16 md:py-24"
        style={{ background: 'linear-gradient(135deg, #FFFDE7 0%, #FFF8E1 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section - Dil Daily Theme */}
          <div className="text-center mb-12 px-4">
            <div className="relative">
              {/* Background Decoration with Dil colors */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-r from-pink-200 to-teal-200 rounded-full blur-3xl opacity-40"></div>
              </div>
              
              <div className="relative">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-display text-pink-600">
                  Explore Our Other
                  <span className="block text-teal-600">
                    Culinary Brands
                  </span>
                </h2>
                
                <p className="text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed mb-8 text-gray-700">
                  Discover more delicious cuisines from our family of food brands, each crafted with 
                  <span className="font-semibold text-pink-600"> passion</span> and 
                  <span className="font-semibold text-teal-600"> authenticity</span>
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
                  name: "VEGERAMA",
                  logo: "/lovable-uploads/vegerama_new-Photoroom.png",
                  route: "/vegerama",
                  description: "Fresh, delicious vegetarian delights",
                  primaryColor: "#2E7D32",
                  secondaryColor: "#8BC34A",
                  logoBackground: "#E8F5E8",
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
                  {/* Dil Daily-themed Card Design */}
                  <div className="w-64 sm:w-72 md:w-64 h-52 sm:h-56 md:h-64 bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg border border-pink-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group-hover:border-pink-300 relative">
                    
                    {/* Brand Color Strip - Dil Daily themed */}
                    <div 
                      className="h-1 w-full opacity-70 group-hover:opacity-100 transition-opacity duration-300" 
                      style={{ 
                        background: `linear-gradient(90deg, ${brand.primaryColor}, ${brand.secondaryColor})` 
                      }}
                    />

                    {/* Main Content */}
                    <div className="flex flex-col items-center justify-center h-full p-6">
                      
                      {/* Logo Container with Dil glow */}
                      <div className="relative mb-4">
                        <div 
                          className="absolute -inset-4 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500 bg-gradient-to-r from-pink-400 to-teal-400"
                        />
                        
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

                      {/* Description with Dil colors */}
                      <p className="text-gray-600 text-sm text-center leading-relaxed mb-4 px-3 min-h-[2rem] flex items-center justify-center transition-all duration-300 group-hover:text-gray-800 font-medium">
                        {brand.description}
                      </p>

                      {/* CTA Button - Dil Daily themed */}
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div 
                          className="px-6 py-2 rounded-full text-white font-medium text-sm shadow-lg transition-all duration-300 flex items-center gap-2"
                          style={{ 
                            background: `linear-gradient(135deg, #E91E63, #26A69A)` 
                          }}
                        >
                          <span>Explore</span>
                          <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>

                    {/* Corner Accent - Dil themed */}
                    <div className="absolute top-3 right-3 w-2 h-2 rounded-full opacity-50 group-hover:opacity-80 transition-all duration-300 bg-pink-400" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button - Dil Daily themed */}
          <div className="text-center mt-12 px-4">
            <div className="relative inline-block">
              <div className="absolute inset-0 rounded-2xl blur opacity-40 transition-opacity duration-300 bg-gradient-to-r from-pink-500 to-teal-500"></div>
              
              <Link
                to="/#brands"
                className="relative inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-pink-500 to-teal-500 text-white font-bold text-lg rounded-2xl transition-all duration-500 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 group"
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

export default DilPunjabiDaily;

