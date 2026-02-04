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

const KhichdiBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const menuScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Khichdi Bar | Comfort in Every Bowl";
    
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
      name: "Plain Dal Khichdi",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Khichdi Bar/Plain Dal Khichdi.jpg",
      description: "Classic comfort food with rice and lentils. Served with ghee, chili garlic chutney, curd, and farsan. Lightly seasoned and soothing, great for any time of day.",
      badge: "Bestseller",
    },
    {
      name: "Simple Vegetable Khichdi",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Khichdi Bar/Simple Vegetable Khichdi.jpg",
      description: "A healthy mix of rice, lentils, and vegetables. Served with ghee, chili garlic chutney, curd, and farsan. Simple, nutritious, and perfect for a balanced meal.",
      badge: "Popular",
    },
    {
      name: "Butter Garlic Khichdi",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Khichdi Bar/Butter Garlic Khichdi.jpg",
      description: "A creamy, buttery khichdi with a hint of garlic that will remind you of ghar ka khana. Served with ghee, chili garlic chutney, curd, and farsan for a wholesome experience.",
      badge: "Signature",
    },
    {
      name: "Rajasthani Dal Papad Khichdi",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Khichdi Bar/Rajasthani Dal Papad .jpg",
      description: "Savor the bold flavors of Rajasthan in this spiced khichdi blended with papad. Served with ghee, chutney, curd, and farsan for a hearty, regional delight.",
      badge: "Regional Special",
    },
    {
      name: "Peri-Peri Khichdi",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Khichdi Bar/Peri Peri .jpg",
      description: "A fiery twist on comfort food this zesty peri-peri flavored khichdi is bold, flavorful, and satisfying. Served with ghee, chutney, curd, and farsan for a balanced meal with a spicy edge.",
      badge: "Spicy Special",
    },
    {
      name: "Punjabi Kadhi Pakoda Khichdi",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Khichdi Bar/Punjabi Kadhi Pakoda Khichdi - High Protein.jpg",
      description: "Creamy, tangy Punjabi kadhi with crispy pakodas, blended into comforting rice khichdi. Served with ghee, chutney, curd, and farsan, rich in flavor and deeply satisfying.",
      badge: "High Protein",
    },
    {
      name: "Butter Garlic Palak Khichdi",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Khichdi Bar/Butter Garlic Palak Khichdi.jpg",
      description: "Creamy, buttery khichdi with a hint of garlic your comfort food, elevated. Served with ghee, chutney, curd, and palak for a flavorful meal that feels just like home.",
      badge: "Healthy Choice",
    },
    {
      name: "Classic Curd Rice",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Khichdi Bar/Classic Curd Rice.jpg",
      description: "Wholesome meal of creamy curd rice, tempered with mustard seeds, curry leaves, Hing and red chilly. Offering a cooling balance to a spicy meal.",
      badge: "South Indian",
    },
    {
      name: "Pepper Rasam Rice Mix",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Khichdi Bar/Pepper Rasam Rice Mix.jpg",
      description: "Savour our tangy Pepper Rasam mixed with steamed rice, served with ghee, chutney and Sev. It's a soul-soothing meal, perfect for any time of the day.",
      badge: "Traditional",
    },
    {
      name: "Kadhi Pakoda Rice Meal",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Khichdi Bar/Kadhi Pakoda Rice Meal.jpg",
      description: "Flavorful Punjabi kadhi with crispy onion pakodas, served alongside steamed rice, chutney, curd, chatpata sev, and a ghee sachet. A tangy twist on a traditional favorite.",
      badge: "Comfort Special",
    },
    {
      name: "Suji Ka Halwa",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Khichdi Bar/Suji Ka Halwa (150ml).jpg",
      description: "Our special homemade Suji Ka Halwa, filled with deliciousness and loaded with droplets of ghee. Every bite is a sweet pleasure, all in a completely desi style!",
      badge: "Sweet Treat",
    },
    {
      name: "Gulab Jamun",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Khichdi Bar/Gulab jamun.jpg",
      description: "Soft, plump, with loads of syrup - Gulab Jamun just the way you like it. There is nothing else in our Gulab jamun than authenticity and love.",
      badge: "Classic Sweet",
    },
  ];

  const testimonials = [
    {
      name: "Neha Patel",
      location: "Ahmedabad",
      text: "Khichdi Bar brings comfort food to a whole new level. The classic khichdi is exactly what I need after a long day!",
      initial: "N",
    },
    {
      name: "Raj Mehta",
      location: "Mumbai",
      text: "Simple, wholesome, and absolutely delicious. This is comfort food done right!",
      initial: "R",
    },
    {
      name: "Priya Desai",
      location: "Pune",
      text: "The masala khichdi is my go-to comfort meal. It's nourishing and satisfying every time.",
      initial: "P",
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
    <div className="min-h-screen bg-background khichdi-bar-page scroll-snap-container">
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
              <Link to="/khichdi-bar" className="text-2xl text-white font-bold font-display">
                Khichdi Bar
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
                className="px-6 py-2.5 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary/90 transition-all duration-300"
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
                className="block px-6 py-2.5 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary/90 transition-all duration-300 text-center"
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
            src="https://dilwebsite.s3.ap-south-1.amazonaws.com/Khichdi Bar/Rajasthani Dal Papad .jpg"
            alt="Comfort Food Feast - Khichdi Bar"
            className="w-full h-full object-cover object-center"
          />
        </div>
        {/* Dark Gradient Overlay - using brand hero gradient */}
        <div className="absolute inset-0 z-[1] bg-gradient-hero"></div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-secondary text-lg md:text-xl tracking-[0.3em] uppercase mb-6 font-semibold">
              COMFORT IN EVERY BOWL
            </p>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight font-display">
              <span className="text-white">Khichdi</span>
              <span className="block text-secondary">Bar</span>
            </h1>
            
            <p className="text-white/95 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
              Simple, wholesome, and nourishing. Experience the comfort of traditional khichdi, 
              crafted with care and served with love.
            </p>
            
            {/* Platform Availability in Hero */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-4 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg max-w-md w-full">
                <span className="text-white text-sm font-medium">Available only on</span>
                <div className="flex items-center gap-3 flex-1">
                  <a
                    href="https://www.swiggy.com/direct/brand/442032?source=swiggy-direct&subSource=instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-1 bg-white hover:bg-gray-50 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center flex-1 justify-center h-8"
                  >
                    <img
                      src="/swiggy_logo.jpg"
                      alt="Swiggy"
                      className="h-6 w-full object-cover rounded-sm"
                    />
                  </a>
                  <a
                    href="https://link.zomato.com/xqzv/rshare?id=8694507230563fe4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-1 bg-white hover:bg-gray-50 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center flex-1 justify-center h-8"
                  >
                    <img
                      src="/Zomato-logo.png"
                      alt="Zomato"
                      className="h-6 w-full object-cover rounded-sm"
                    />
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
                className="px-8 py-4 bg-gradient-accent text-foreground font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
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
              <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden shadow-strong bg-secondary/20">
                <img
                  src="https://dilwebsite.s3.ap-south-1.amazonaws.com/Khichdi Bar/Rajasthani Dal Papad .jpg"
                  alt="Comfort Heritage - Khichdi Bar"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-secondary text-foreground p-4 lg:p-5 rounded-xl shadow-strong max-w-[280px] z-10">
                <p className="text-lg lg:text-xl italic mb-1 font-semibold">"Comfort in every bowl"</p>
                <p className="text-xs opacity-80">— The Khichdi Bar Promise</p>
              </div>
            </div>
            <div>
              <span className="text-secondary text-sm tracking-[0.3em] uppercase font-semibold">Comfort Heritage</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mt-3 mb-6 leading-tight font-display">
                The Simple Joy of
                <span className="block text-secondary">Wholesome Comfort</span>
              </h2>
              <div className="space-y-4 text-white/80 text-base md:text-lg leading-relaxed">
                <p>
                  <span className="text-white font-semibold">Khichdi Bar</span> celebrates the simple, nourishing 
                  comfort of khichdi—India's ultimate comfort food that transcends regions, generations, and occasions. 
                  Our mission is to honor this humble yet profound dish with the respect it deserves.
                </p>
                <p>
                  Made with wholesome rice, lentils, and gentle spices, khichdi represents the essence of mindful 
                  eating. It's the food that mothers prepare for their children, that comforts the sick, and that 
                  brings families together around simple, shared moments of nourishment.
                </p>
                <p>
                  Every bowl tells a story of health, healing, and home. We prepare our khichdi with the same 
                  care and intention that has made this dish beloved across India—simple ingredients transformed 
                  into something greater than the sum of its parts.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-6">
                <div>
                  <p className="text-3xl md:text-4xl text-secondary font-bold">10+</p>
                  <p className="text-xs md:text-sm text-white/70">Comfort Varieties</p>
                </div>
                <div className="w-px h-10 bg-white/20"></div>
                <div>
                  <p className="text-3xl md:text-4xl text-secondary font-bold">3</p>
                  <p className="text-xs md:text-sm text-white/70">Simple Ingredients</p>
                </div>
                <div className="w-px h-10 bg-white/20"></div>
                <div>
                  <p className="text-3xl md:text-4xl text-secondary font-bold">∞</p>
                  <p className="text-xs md:text-sm text-white/70">Comfort & Care</p>
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
              The Comfort of
              <span className="block text-primary">Simplicity</span>
            </h2>
            <p className="text-foreground/80 text-lg">
              Simple food, profound comfort. Every bowl is a reminder that the best things in life are simple.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 hover:bg-white transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6 shadow-lg">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <span className="text-primary text-xs tracking-[0.2em] uppercase font-semibold">Simple & Pure</span>
              <h3 className="text-2xl text-foreground font-bold mt-2 mb-4 font-display">Wholesome Goodness</h3>
              <p className="text-foreground/80 leading-relaxed">
                Our khichdi is made with simple, wholesome ingredients that nourish your body 
                and comfort your soul.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 hover:bg-white transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6 shadow-lg">
                <Handshake className="w-7 h-7 text-white" />
              </div>
              <span className="text-primary text-xs tracking-[0.2em] uppercase font-semibold">Comfort Food</span>
              <h3 className="text-2xl text-foreground font-bold mt-2 mb-4 font-display">Nourishing Meals</h3>
              <p className="text-foreground/80 leading-relaxed">
                Every bowl is prepared with care, ensuring that you get the comfort and nourishment 
                you need, whenever you need it.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 hover:bg-white transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6 shadow-lg">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <span className="text-primary text-xs tracking-[0.2em] uppercase font-semibold">Every Day</span>
              <h3 className="text-2xl text-foreground font-bold mt-2 mb-4 font-display">Daily Comfort</h3>
              <p className="text-foreground/80 leading-relaxed">
                Khichdi is more than food—it's comfort, it's home, it's the simple joy of a 
                nourishing meal that makes everything better.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="min-h-screen flex items-center bg-background overflow-hidden scroll-snap-section">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-semibold">Our Menu</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-foreground font-bold mt-4 mb-6 leading-tight font-display">
              Taste the
              <span className="block text-primary">
                Comfort
              </span>
            </h2>
            <p className="text-foreground/70 text-lg">
              Each bowl brings simple, wholesome comfort to your table.
            </p>
          </div>
          
          {/* Platform Availability Banner */}
          <div className="flex justify-center mb-16">
            <div className="flex items-center gap-4 px-6 py-2 bg-gradient-to-r from-secondary/20 to-primary/20 backdrop-blur-sm rounded-xl border border-secondary/30 shadow-lg max-w-md w-full">
              <span className="text-foreground text-sm font-medium">Available only on</span>
              <div className="flex items-center gap-3 flex-1">
                <a
                  href="https://www.swiggy.com/direct/brand/442032?source=swiggy-direct&subSource=instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-1 bg-white hover:bg-gray-50 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center flex-1 justify-center h-8"
                >
                  <img
                    src="/swiggy_logo.jpg"
                    alt="Swiggy"
                    className="h-6 w-full object-cover rounded-sm"
                  />
                </a>
                <a
                  href="https://link.zomato.com/xqzv/rshare?id=8694507230563fe4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-1 bg-white hover:bg-gray-50 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center flex-1 justify-center h-8"
                >
                  <img
                    src="/Zomato-logo.png"
                    alt="Zomato"
                    className="h-6 w-full object-cover rounded-sm"
                  />
                </a>
              </div>
            </div>
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
                      <div className="w-full h-full bg-gradient-accent flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">Khichdi</span>
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-secondary text-white text-xs font-semibold rounded-full shadow-md">
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
                className="bg-background rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 relative border border-primary/10"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
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
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary rounded-full mb-6">
              <Instagram className="w-5 h-5 text-white" />
              <span className="font-semibold text-white">@khichdibar</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-foreground font-bold mb-4 font-display">Follow Our Culinary Journey</h2>
            <p className="text-foreground/70">Behind-the-scenes, recipes, and comfort food stories from our kitchen to yours.</p>
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
                        <div className="bg-primary/90 rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
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
              href="https://instagram.com/khichdibar"
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

      {/* Brand Discovery Section - Inline with Khichdi Bar Theme */}
      <section id="brands" className="min-h-screen scroll-snap-section scroll-snap-align-start py-16 md:py-24"
        style={{ background: 'linear-gradient(135deg, #FDF6E8 0%, #F5F5DC 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section - Khichdi Bar Theme */}
          <div className="text-center mb-12 px-4">
            <div className="relative">
              {/* Background Decoration with Khichdi colors */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-r from-green-200 to-orange-200 rounded-full blur-3xl opacity-40"></div>
              </div>
              
              <div className="relative">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-display text-green-700">
                  Explore Our Other
                  <span className="block text-orange-600">
                    Culinary Brands
                  </span>
                </h2>
                
                <p className="text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed mb-8 text-gray-700">
                  Discover more delicious cuisines from our family of food brands, each crafted with 
                  <span className="font-semibold text-green-600"> passion</span> and 
                  <span className="font-semibold text-orange-600"> authenticity</span>
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
                  {/* Khichdi Bar-themed Card Design */}
                  <div className="w-64 sm:w-72 md:w-64 h-52 sm:h-56 md:h-64 bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg border border-green-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group-hover:border-green-300 relative">
                    
                    {/* Brand Color Strip - Khichdi themed */}
                    <div 
                      className="h-1 w-full opacity-70 group-hover:opacity-100 transition-opacity duration-300" 
                      style={{ 
                        background: `linear-gradient(90deg, ${brand.primaryColor}, ${brand.secondaryColor})` 
                      }}
                    />

                    {/* Main Content */}
                    <div className="flex flex-col items-center justify-center h-full p-6">
                      
                      {/* Logo Container with Khichdi glow */}
                      <div className="relative mb-4">
                        <div className="absolute -inset-4 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500 bg-gradient-to-r from-green-400 to-orange-400" />
                        
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

                      {/* Description with Khichdi colors */}
                      <p className="text-gray-600 text-sm text-center leading-relaxed mb-4 px-3 min-h-[2rem] flex items-center justify-center transition-all duration-300 group-hover:text-gray-800 font-medium">
                        {brand.description}
                      </p>

                      {/* CTA Button - Khichdi themed */}
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div 
                          className="px-6 py-2 rounded-full text-white font-medium text-sm shadow-lg transition-all duration-300 flex items-center gap-2"
                          style={{ 
                            background: `linear-gradient(135deg, #2E7D32, #FF9800)` 
                          }}
                        >
                          <span>Explore</span>
                          <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>

                    {/* Corner Accent - Khichdi themed */}
                    <div className="absolute top-3 right-3 w-2 h-2 rounded-full opacity-50 group-hover:opacity-80 transition-all duration-300 bg-green-500" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button - Khichdi themed */}
          <div className="text-center mt-12 px-4">
            <div className="relative inline-block">
              <div className="absolute inset-0 rounded-2xl blur opacity-40 transition-opacity duration-300 bg-gradient-to-r from-green-600 to-orange-500"></div>
              
              <Link
                to="/#brands"
                className="relative inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-green-600 to-orange-500 text-white font-bold text-lg rounded-2xl transition-all duration-500 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 group"
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

export default KhichdiBar;

