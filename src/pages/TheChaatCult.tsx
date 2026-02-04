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

const TheChaatCult = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const menuScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "The Chaat Cult | Tangy. Spicy. Addictive.";
    
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
      name: "Pani Puri",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/TCC/Pani Puri 004428.jpg",
      description: "Crisp puris filled with spicy potato mix and tangy flavored water, a refreshing and fun treat",
      badge: "Bestseller",
    },
    {
      name: "Samosa Chole Chaat",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/TCC/Samosa Chole Chaat  004340.jpg",
      description: "Golden-fried samosas crushed and layered with spicy chole, tangy chutneys, onions, and crunchy sev, a street-style delight in every bite",
      badge: "Signature",
    },
    {
      name: "Dahi Puri",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/TCC/Dahi puri 004485.jpg",
      description: "Crisp puris filled with potato, curd, and chutneys, a burst of sweet, spicy, and tangy flavors",
      badge: "Popular",
    },
    {
      name: "Ragda Papdi Chaat",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/TCC/Ragda Papdi Chaat top shot 004568.jpg",
      description: "Papdi topped with ragda, curd, chutneys, and sev, a mix of textures and bold flavors",
      badge: "Traditional",
    },
    {
      name: "Pav Bhaji",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/TCC/Pav bhaji 004733.jpg",
      description: "Butter Pav with bhaji, served with chopped onion and tomato",
      badge: "Mumbai Special",
    },
    {
      name: "Cheese Pav Bhaji",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/TCC/Cheese Pav bhaji 004737.jpg",
      description: "Piping hot gravy made up of mashed vegetables, tomatoes and onion topped with cheese, served with buttery pav and onions",
      badge: "Cheesy Favorite",
    },
    {
      name: "Samosa + Chai",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/TCC/Samosa+(2pc)++%2B+Chai+004099.jpg",
      description: "Golden-fried samosa served with flavorful chutneys, complemented by a warm cup of chai for a comforting break",
      badge: "Tea Time",
    },
    {
      name: "Samosa Pav + Chai",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/TCC/Samosa+Pav+%2B+Chai+004203.jpg",
      description: "Samosa tucked inside a soft pav, served with spicy green chutney and tangy imly chutney, a desi street-style favorite",
      badge: "Fusion Special",
    },
    {
      name: "Veg Chop",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/TCC/veg Chop 004163.jpg",
      description: "Four crispy Bengali-style vegetable chops made with beetroot, potato, and spices, earthy and flavorful",
      badge: "Bengali Style",
    },
    {
      name: "Peri Peri Veg Chop",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/TCC/Peri Peri Veg chop 004174.jpg",
      description: "Four veg chops infused with peri peri spice, a fiery twist on the classic Bengali favorite",
      badge: "Spicy Twist",
    },
    {
      name: "Veg Chop Pav + Chai",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/TCC/Veg+chop+pav+%2B+Chai+004267.jpg",
      description: "A veg chop placed in a pav, served with chutneys, crunchy, flavorful, and satisfying",
      badge: "Street Slider",
    },
    {
      name: "Litti Chokha Combo",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/TCC/Litti Chokha 004749.jpg",
      description: "Sattu-stuffed littis served with mashed spiced chokha made from roasted eggplant, potato, and tomato, a rustic and flavorful regional dish",
      badge: "Bihari Special",
    },
    {
      name: "Litti with Aloo Sabji",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/TCC/Litti+%2B+aloo+sabji+top+shot+004757.jpg",
      description: "Baked littis stuffed with spiced sattu, served with flavorful aloo sabji, a rustic and satisfying regional favorite",
      badge: "Traditional",
    },
    {
      name: "Kulcha Bhaji",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/TCC/Kulcha Bhaji 004783.jpg",
      description: "Soft bread kulches served with flavorful bhaji, a hearty and satisfying plate",
      badge: "Comfort Food",
    },
    {
      name: "Samosa Kadhi",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/TCC/Samosa+%2B+Kadi+004818.jpg",
      description: "A crispy samosa served mildly spiced kadhi, topped with fresh coriander, a unique and flavorful twist on traditional comfort food",
      badge: "Unique Combo",
    },
    {
      name: "Peri Peri Samosa + Chai",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/TCC/Peri+Peri+Samosa+%2B+Chai+004117.jpg",
      description: "Crispy samosas with a zesty peri peri twist, served with green chutney and tangy imly chutney sachets, a bold take on a classic snack",
      badge: "Spicy Special",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      text: "The Chaat Cult is absolutely addictive! The pani puri is tangy, spicy, and perfect. Can't stop ordering!",
      initial: "P",
    },
    {
      name: "Rohit Mehta",
      location: "Delhi",
      text: "Vibrant, tangy, and absolutely delicious! This is street food culture at its finest. Love it!",
      initial: "R",
    },
    {
      name: "Anjali Patel",
      location: "Ahmedabad",
      text: "The bhel puri is outstanding! Tangy, spicy, and addictive—exactly what chaat should be!",
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
    <div className="min-h-screen bg-background the-chaat-cult-page scroll-snap-container">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#089797]/95 backdrop-blur-md shadow-lg" : "bg-black/35 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="flex items-center gap-2 text-white/90 hover:text-[#e8e73e] transition-colors duration-300 group"
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
              <Link to="/the-chaat-cult" className="text-2xl text-white font-bold font-display">
                The Chaat Cult
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("menu");
                }}
                className="text-white/90 hover:text-[#e8e73e] transition-colors duration-300 font-medium"
              >
                Menu
              </a>
              <a
                href="#reviews"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("reviews");
                }}
                className="text-white/90 hover:text-[#e8e73e] transition-colors duration-300 font-medium"
              >
                Reviews
              </a>
              <a
                href="#brands"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("brands");
                }}
                className="text-white/90 hover:text-[#e8e73e] transition-colors duration-300 font-medium"
              >
                Other Brands
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="text-white/90 hover:text-[#e8e73e] transition-colors duration-300 font-medium"
              >
                Contact
              </a>
              <a
                href="https://orders.dilfoods.in/?_gl=1*32xgw6*_ga*NDA1NTU0Mjc1LjE3MTYxMDgwNjU.*_ga_7CQ31SQHW5*MTc0MjExODExOC4xNS4wLjE3NDIxMTgxMTguMC4wLjA.*_ga_VCDE3GHY4J*MTc0MjExODExOC4xNS4wLjE3NDIxMTgxMTguMC4wLjA."
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 bg-[#e8e73e] text-[#212121] font-semibold rounded-lg hover:bg-[#e8e73e]/90 transition-all duration-300"
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
                className="flex items-center gap-2 text-white/90 hover:text-[#e8e73e] transition-colors duration-300 font-medium py-2"
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
                  setIsMenuOpen(false);
                }}
                className="block text-white/90 hover:text-[#e8e73e] transition-colors duration-300 font-medium py-2"
              >
                Menu
              </a>
              <a
                href="#reviews"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("reviews");
                  setIsMenuOpen(false);
                }}
                className="block text-white/90 hover:text-[#e8e73e] transition-colors duration-300 font-medium py-2"
              >
                Reviews
              </a>
              <a
                href="#brands"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("brands");
                  setIsMenuOpen(false);
                }}
                className="block text-white/90 hover:text-[#e8e73e] transition-colors duration-300 font-medium py-2"
              >
                Other Brands
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                  setIsMenuOpen(false);
                }}
                className="block text-white/90 hover:text-[#e8e73e] transition-colors duration-300 font-medium py-2"
              >
                Contact
              </a>
              <a
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("menu");
                }}
                className="block px-6 py-2.5 bg-[#e8e73e] text-[#212121] font-semibold rounded-lg hover:bg-[#e8e73e]/90 transition-all duration-300 text-center"
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
            src="https://dilwebsite.s3.ap-south-1.amazonaws.com/TCC/The Chaat Cult Display image - Swiggy.png"
            alt="Street Food Feast - The Chaat Cult"
            className="w-full h-full object-cover object-center"
          />
        </div>
        {/* Dark Gradient Overlay - using brand hero gradient */}
        <div className="absolute inset-0 z-[1] bg-gradient-hero"></div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-white text-lg md:text-xl tracking-[0.3em] uppercase mb-6 font-semibold">
              TANGY. SPICY. ADDICTIVE.
            </p>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight font-display">
              <span className="text-white">The Chaat</span>
              <span className="block text-white">Cult</span>
            </h1>
            
            <p className="text-white/95 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
              Vibrant, tangy, and full of street food culture. Experience the addictive flavors 
              of authentic chaat that bring the streets to your plate.
            </p>
            
            {/* Platform Availability in Hero */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-4 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg max-w-md w-full">
                <span className="text-white text-sm font-medium">Available only on</span>
                <div className="flex items-center gap-3 flex-1">
                  <a
                    href="https://www.swiggy.com/direct/brand/351617?source=swiggy-direct&subSource=instagram"
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
                    href="https://link.zomato.com/xqzv/rshare?id=9155059830563237"
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
                className="px-8 py-4 bg-white text-[#212121] font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Explore Menu
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Heritage Section */}
      <section className="min-h-screen flex items-center bg-[#212121] overflow-hidden scroll-snap-section">
        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-[#e8e73e]/20">
                <img
                  src="https://dilwebsite.s3.ap-south-1.amazonaws.com/TCC/The Chaat Cult Display image - Swiggy.png"
                  alt="Street Food Heritage - The Chaat Cult"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#212121]/60 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-[#e8e73e] text-[#212121] p-4 lg:p-5 rounded-xl shadow-lg max-w-[280px] z-10">
                <p className="text-lg lg:text-xl italic mb-1 font-semibold">"Tangy. Spicy. Addictive."</p>
                <p className="text-xs opacity-80">— The Chaat Cult Way</p>
              </div>
            </div>
            <div>
              <span className="text-[#e8e73e] text-sm tracking-[0.3em] uppercase font-semibold">Street Heritage</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mt-3 mb-6 leading-tight font-display">
                The Soul of
                <span className="block text-[#089797]">Street Food</span>
              </h2>
              <div className="space-y-4 text-white/80 text-base md:text-lg leading-relaxed">
                <p>
                  <span className="text-white font-semibold">The Chaat Cult</span> celebrates the vibrant, tangy world 
                  of Indian street food culture. From crispy gol gappa to spicy bhel puri, every dish captures the 
                  authentic flavors and energetic spirit that make chaat so irresistibly addictive.
                </p>
                <p>
                  Our recipes are inspired by the legendary street vendors who've perfected these flavors over generations. 
                  We combine fresh ingredients, tangy chutneys, and aromatic spices to create that perfect balance of 
                  sweet, spicy, and tangy that defines authentic chaat culture.
                </p>
                <p>
                  Every bite is a celebration of street food's vibrant energy—the kind of food that brings people 
                  together, sparks conversations, and creates memories. We bring the authentic taste of India's bustling 
                  streets directly to your plate.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-6">
                <div>
                  <p className="text-3xl md:text-4xl text-[#e8e73e] font-bold">20+</p>
                  <p className="text-xs md:text-sm text-white/70">Chaat Varieties</p>
                </div>
                <div className="w-px h-10 bg-white/20"></div>
                <div>
                  <p className="text-3xl md:text-4xl text-[#089797] font-bold">100%</p>
                  <p className="text-xs md:text-sm text-white/70">Street Authentic</p>
                </div>
                <div className="w-px h-10 bg-white/20"></div>
                <div>
                  <p className="text-3xl md:text-4xl text-[#e8e73e] font-bold">∞</p>
                  <p className="text-xs md:text-sm text-white/70">Tangy Joy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center bg-white overflow-hidden scroll-snap-section">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#e8e73e] text-sm tracking-[0.3em] uppercase font-semibold">Our Journey</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#212121] font-bold mt-4 mb-6 leading-tight font-display">
              The Street Food
              <span className="block text-[#089797]">Culture</span>
            </h2>
            <p className="text-[#212121]/80 text-lg">
              Bringing the vibrant energy and tangy flavors of street food culture to your home.
            </p>
          </div>
            <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#fdfddf] backdrop-blur-sm border border-[#e8e73e]/20 rounded-2xl p-8 hover:bg-[#fdf9c4] transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-[#e8e73e] flex items-center justify-center mb-6 shadow-lg">
                <Sparkles className="w-7 h-7 text-[#212121]" />
              </div>
              <span className="text-[#e8e73e] text-xs tracking-[0.2em] uppercase font-semibold">Tangy Fresh</span>
              <h3 className="text-2xl text-[#212121] font-bold mt-2 mb-4 font-display">Vibrant Flavors</h3>
              <p className="text-[#212121]/80 leading-relaxed">
                Our chaat is all about tangy, fresh flavors that burst in your mouth. Every 
                bite is a celebration of street food culture.
              </p>
            </div>
            <div className="bg-[#e0f7f7] backdrop-blur-sm border border-[#089797]/20 rounded-2xl p-8 hover:bg-[#c8f1f1] transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-[#089797] flex items-center justify-center mb-6 shadow-lg">
                <Handshake className="w-7 h-7 text-white" />
              </div>
              <span className="text-[#089797] text-xs tracking-[0.2em] uppercase font-semibold">Street Authentic</span>
              <h3 className="text-2xl text-[#212121] font-bold mt-2 mb-4 font-display">Real Chaat</h3>
              <p className="text-[#212121]/80 leading-relaxed">
                Authentic recipes inspired by the best street vendors, bringing you the real 
                taste of chaat culture.
              </p>
            </div>
            <div className="bg-[#fff9de] backdrop-blur-sm border border-[#e8e73e]/20 rounded-2xl p-8 hover:bg-[#fff4bf] transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-[#e8e73e] flex items-center justify-center mb-6 shadow-lg">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <span className="text-[#e8e73e] text-xs tracking-[0.2em] uppercase font-semibold">Addictive</span>
              <h3 className="text-2xl text-[#212121] font-bold mt-2 mb-4 font-display">Pure Joy</h3>
              <p className="text-[#212121]/80 leading-relaxed">
                Chaat is addictive for a reason! Tangy, spicy, and absolutely delicious—every 
                bite brings pure joy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="min-h-screen flex items-center bg-white overflow-hidden scroll-snap-section">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-[#e8e73e] text-sm tracking-[0.3em] uppercase font-semibold">Our Menu</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#212121] font-bold mt-4 mb-6 leading-tight font-display">
              Taste the
              <span className="block text-[#089797]">
                Tangy
              </span>
            </h2>
            <p className="text-[#212121]/70 text-lg">
              Each dish brings the vibrant, tangy flavors of street food to your table.
            </p>
          </div>
          
          {/* Platform Availability Banner */}
          <div className="flex justify-center mb-16">
            <div className="flex items-center gap-4 px-6 py-2 bg-gradient-to-r from-[#e8e73e]/60 to-[#089797]/20 backdrop-blur-sm rounded-xl border border-[#e8e73e]/30 shadow-lg max-w-md w-full">
              <span className="text-[#212121] text-sm font-medium">Available only on</span>
              <div className="flex items-center gap-3 flex-1">
                <a
                  href="https://www.swiggy.com/direct/brand/351617?source=swiggy-direct&subSource=instagram"
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
                  href="https://link.zomato.com/xqzv/rshare?id=9155059830563237"
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
                    <div className="w-full h-full bg-gradient-to-br from-[#e8e73e] to-[#089797] flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">Chaat</span>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#089797] text-white text-xs font-semibold rounded-full shadow-md">
                      {item.badge}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl text-[#212121] font-bold mb-2 group-hover:text-[#089797] transition-colors duration-300 font-display">
                  {item.name}
                </h3>
                <p className="text-[#212121]/70 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="min-h-screen flex items-center bg-[#F1F8E9] overflow-hidden scroll-snap-section">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#e8e73e] text-sm tracking-[0.3em] uppercase font-semibold">Testimonials</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#212121] font-bold mt-4 mb-6 leading-tight font-display">
              What Our
              <span className="block text-[#089797]">
                Customers Say
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 relative border border-[#e8e73e]/10"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-[#e8e73e]/20" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#089797] text-[#089797]" />
                  ))}
                </div>
                <p className="text-[#212121] text-lg leading-relaxed mb-6">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#e8e73e] flex items-center justify-center text-[#212121] font-bold">
                    {testimonial.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-[#212121]">{testimonial.name}</p>
                    <p className="text-sm text-[#212121]/60">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram/Social Section */}
      <section id="social" className="min-h-screen py-16 md:py-24 bg-background scroll-snap-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#FF8C00] rounded-full mb-6">
              <Instagram className="w-5 h-5 text-white" />
              <span className="font-semibold text-white">@thechaatcult</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[#212121] font-bold mb-4 font-display">Follow Our Culinary Journey</h2>
            <p className="text-[#212121]/70">Behind-the-scenes, tangy street food recipes, and chaat culture from our kitchen to yours.</p>
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
                      <div className="absolute inset-0 bg-gradient-to-t from-[#212121]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-[#FF8C00]/90 rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
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
              href="https://instagram.com/thechaatcult"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#212121] text-white font-semibold rounded-lg hover:bg-[#212121]/80 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Instagram className="w-5 h-5" />
              Follow Us on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Brand Discovery Section - Inline with Chaat Cult Theme */}
      <section id="brands" className="min-h-screen scroll-snap-section scroll-snap-align-start py-16 md:py-24"
        style={{ background: 'linear-gradient(135deg, #E0F2F1 0%, #B2DFDB 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section - Chaat Cult Theme */}
          <div className="text-center mb-12 px-4">
            <div className="relative">
              {/* Background Decoration with Chaat colors */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-r from-teal-200 to-lime-200 rounded-full blur-3xl opacity-40"></div>
              </div>
              
              <div className="relative">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-display text-teal-700">
                  Explore Our Other
                  <span className="block text-lime-600">
                    Culinary Brands
                  </span>
                </h2>
                
                <p className="text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed mb-8 text-gray-700">
                  Discover more delicious cuisines from our family of food brands, each crafted with 
                  <span className="font-semibold text-teal-600"> passion</span> and 
                  <span className="font-semibold text-lime-600"> authenticity</span>
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
                  {/* Chaat Cult-themed Card Design */}
                  <div className="w-64 sm:w-72 md:w-64 h-52 sm:h-56 md:h-64 bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg border border-teal-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group-hover:border-teal-300 relative">
                    
                    {/* Brand Color Strip - Chaat themed */}
                    <div 
                      className="h-1 w-full opacity-70 group-hover:opacity-100 transition-opacity duration-300" 
                      style={{ 
                        background: `linear-gradient(90deg, ${brand.primaryColor}, ${brand.secondaryColor})` 
                      }}
                    />

                    {/* Main Content */}
                    <div className="flex flex-col items-center justify-center h-full p-6">
                      
                      {/* Logo Container with Chaat glow */}
                      <div className="relative mb-4">
                        <div className="absolute -inset-4 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500 bg-gradient-to-r from-teal-400 to-lime-400" />
                        
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

                      {/* Description with Chaat colors */}
                      <p className="text-gray-600 text-sm text-center leading-relaxed mb-4 px-3 min-h-[2rem] flex items-center justify-center transition-all duration-300 group-hover:text-gray-800 font-medium">
                        {brand.description}
                      </p>

                      {/* CTA Button - Chaat themed */}
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div 
                          className="px-6 py-2 rounded-full text-white font-medium text-sm shadow-lg transition-all duration-300 flex items-center gap-2"
                          style={{ 
                            background: `linear-gradient(135deg, #00897B, #CDDC39)` 
                          }}
                        >
                          <span>Explore</span>
                          <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>

                    {/* Corner Accent - Chaat themed */}
                    <div className="absolute top-3 right-3 w-2 h-2 rounded-full opacity-50 group-hover:opacity-80 transition-all duration-300 bg-teal-500" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button - Chaat themed */}
          <div className="text-center mt-12 px-4">
            <div className="relative inline-block">
              <div className="absolute inset-0 rounded-2xl blur opacity-40 transition-opacity duration-300 bg-gradient-to-r from-teal-600 to-lime-500"></div>
              
              <Link
                to="/#brands"
                className="relative inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-teal-600 to-lime-500 text-white font-bold text-lg rounded-2xl transition-all duration-500 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 group"
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

export default TheChaatCult;

