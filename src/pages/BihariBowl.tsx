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

const BihariBowl = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const menuScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Bihari Bowl | Eastern Flavors, Authentic Taste";
    
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
      name: "Paneer Butter Masala [250ml]",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Bihari Bowl/Paneer butter masala.png",
      description: "Classic Paneer Butter Masala in a creamy gravy.",
      badge: "Rich & Creamy",
    },
    {
      name: "Kala Chana Ghugni [250ml]",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Bihari Bowl/Kala Channa Ghugni .png",
      description: "Kala Chana Ghugni is a flavorful dish of black chickpeas cooked with spices.",
      badge: "Traditional",
    },
    {
      name: "Suji Ka Halwa (150ml)",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Khichdi Bar/Suji Ka Halwa (150ml).jpg",
      description: "Our special homemade Suji Ka Halwa, filled with deliciousness and loaded with droplets of ghee. Every bite is a sweet pleasure, all in a completely desi style!",
      badge: "Sweet Treat",
    },
    {
      name: "Chura Fry with Peanuts (Poha Chiwada)",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Bihari Bowl/Chura badam.jpg",
      description: "A crispy mix of chura and roasted peanuts, lightly spiced for a tasty and light snack.",
      badge: "Crispy Snack",
    },
    {
      name: "Wasseypur Ki Thali [8cp]",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Bihari Bowl/wasseypur ki thali.jpg",
      description: "A hearty Bihari feast featuring Dal Tadka, Chokha, Ghughni, and more rich in tradition and taste.",
      badge: "Signature Thali",
    },
    {
      name: "Madhubhani Thali [8cp]",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Bihari Bowl/Madhubani Thali.jpg",
      description: "A Bihari delight with Tehri, Matar Gravy, Paneer, Ghughni, and more, plus sweet Thekua and Charauri for an authentic taste.",
      badge: "Royal Thali",
    },
    {
      name: "Bihari Tehri Combo",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Bihari Bowl/Bihari Tehri combo.png",
      description: "A tasty mix of Bihari Tehri, Aloo Tamatar Baingan Chokha, tangy salsa, Charauri, and onions for a rich, balanced meal.",
      badge: "Regional Special",
    },
    {
      name: "Dal Butter Chawal",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Bihari Bowl/dal butter chawal mix.jpg",
      description: "A creamy mix of buttery lentils served over steamed rice, offering a hearty and satisfying meal.",
      badge: "Comfort Special",
    },
    {
      name: "Matar Paneer [250ml]",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Bihari Bowl/Matar paneer.png",
      description: "Green peas and paneer cooked in a rich, spiced tomato gravy.",
      badge: "Nutritious",
    },
    {
      name: "Dal Bhaat Bhujiya Bowl",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Bihari Bowl/dal bhaat bhujiya combo.jpg",
      description: "Combines lentils, rice, and crispy bhujiya for a comforting meal.",
      badge: "Comfort Bowl",
    },
    {
      name: "Dal Bhaat Chokha Bowl",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Bihari Bowl/dal bhaat chokha combo.jpg",
      description: "A wholesome mix of lentils, rice, and spiced Potato & Brinjal mash, offering a balanced and flavorful meal.",
      badge: "Homestyle",
    },
    {
      name: "Homestyle Rajma Masala [250ml]",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Bihari Bowl/Rajma Masala.png",
      description: "Kidney beans cooked in a thick tomato gravy, a comforting North Indian flavors.",
      badge: "Popular",
    },
    {
      name: "Poori with Aloo Tamatar Sabji [4cp]",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Bihari Bowl/Poori Aloo Tamatar Sabji.png",
      description: "Fluffy, golden poori served with spiced potato and tomato curry for a hearty homestyle meal.",
      badge: "Classic Combo",
    },
    {
      name: "Dal Tadka [250ml]",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Bihari Bowl/Dal Tadka Edited.png",
      description: "Dal cooked until soft and seasoned with cumin, garlic, and spices.",
      badge: "Simple & Pure",
    },
    {
      name: "Aloo Baingan Chokha [250ml]",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Bihari Bowl/Aloo baingan chokha.png",
      description: "A mashed blend of potatoes and roasted brinjal with mild spices.",
      badge: "Rustic Special",
    },
    {
      name: "Aloo Tamatar Ki Sabzi [250ml]",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Bihari Bowl/Aloo tamatar sabji.png",
      description: "Homestyle Aloo Tamatar Ki Sabji cooked in a flavorful tomato-based gravy, offering a comforting and hearty meal.",
      badge: "Homestyle",
    },
    {
      name: "Bihari Style Kadhi Badi [250ml]",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Bihari Bowl/Bihari Kadhi badi.png",
      description: "A comforting bowl of Kadhi Badi, soft besan dumplings in a tangy, yogurt-based curry for a homestyle treat.",
      badge: "Traditional",
    },
    {
      name: "Aloo Bhujiya [250ml]",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Bihari Bowl/Aloo bhujiya.png",
      description: "A crunchy snack made with chickpea flour and potatoes.",
      badge: "Crispy Snack",
    },
    {
      name: "Aloo Matar [250ml]",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Bihari Bowl/Aloo matar.png",
      description: "Potatoes and green peas cooked in a spiced tomato-based curry.",
      badge: "Homestyle",
    },
    {
      name: "Bhaat [Steam Rice] [250ml]",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/Bihari Bowl/bhaat_ steamed rice.jpg",
      description: "Rice steamed to perfect fluffy white grains. Enjoyable with our special curries.",
      badge: "Simple & Pure",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Patna",
      text: "Bihari Bowl brings authentic Eastern flavors home! The litti chokha is exactly like my grandmother makes it!",
      initial: "R",
    },
    {
      name: "Priya Singh",
      location: "Bhagalpur",
      text: "Eastern flavors, authentic taste indeed! Every dish reminds me of home. Absolutely delicious!",
      initial: "P",
    },
    {
      name: "Amit Verma",
      location: "Muzaffarpur",
      text: "The Bihari kebab is outstanding! This is real regional cuisine at its finest. Highly recommended!",
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
    <div className="min-h-screen bg-background bihari-bowl-page scroll-snap-container">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#a11d21]/95 backdrop-blur-md shadow-lg" : "bg-black/20 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="flex items-center gap-2 text-white/90 hover:text-[#fad8a1] transition-colors duration-300 group"
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
              <Link to="/bihari-bowl" className="text-2xl text-white font-bold font-display">
                Bihari Bowl
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("menu");
                }}
                className="text-white/90 hover:text-[#fad8a1] transition-colors duration-300 font-medium"
              >
                Menu
              </a>
              <a
                href="#reviews"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("reviews");
                }}
                className="text-white/90 hover:text-[#fad8a1] transition-colors duration-300 font-medium"
              >
                Reviews
              </a>
              <a
                href="#brands"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("brands");
                }}
                className="text-white/90 hover:text-[#fad8a1] transition-colors duration-300 font-medium"
              >
                Other Brands
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="text-white/90 hover:text-[#fad8a1] transition-colors duration-300 font-medium"
              >
                Contact
              </a>
              <a
                href="https://orders.dilfoods.in/?_gl=1*32xgw6*_ga*NDA1NTU0Mjc1LjE3MTYxMDgwNjU.*_ga_7CQ31SQHW5*MTc0MjExODExOC4xNS4wLjE3NDIxMTgxMTguMC4wLjA.*_ga_VCDE3GHY4J*MTc0MjExODExOC4xNS4wLjE3NDIxMTgxMTguMC4wLjA."
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 bg-[#a11d21] text-white font-semibold rounded-lg hover:bg-[#a11d21]/90 transition-all duration-300"
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
                className="flex items-center gap-2 text-white/90 hover:text-[#fad8a1] transition-colors duration-300 font-medium py-2"
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
                className="block text-white/90 hover:text-[#fad8a1] transition-colors duration-300 font-medium py-2"
              >
                Menu
              </a>
              <a
                href="#reviews"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("reviews");
                }}
                className="block text-white/90 hover:text-[#fad8a1] transition-colors duration-300 font-medium py-2"
              >
                Reviews
              </a>
              <a
                href="#brands"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("brands");
                }}
                className="block text-white/90 hover:text-[#fad8a1] transition-colors duration-300 font-medium py-2"
              >
                Other Brands
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="block text-white/90 hover:text-[#fad8a1] transition-colors duration-300 font-medium py-2"
              >
                Contact
              </a>
              <a
                href="https://orders.dilfoods.in/?_gl=1*32xgw6*_ga*NDA1NTU0Mjc1LjE3MTYxMDgwNjU.*_ga_7CQ31SQHW5*MTc0MjExODExOC4xNS4wLjE3NDIxMTgxMTguMC4wLjA.*_ga_VCDE3GHY4J*MTc0MjExODExOC4xNS4wLjE3NDIxMTgxMTguMC4wLjA."
                target="_blank"
                rel="noreferrer"
                className="block px-6 py-2.5 bg-[#a11d21] text-white font-semibold rounded-lg hover:bg-[#a11d21]/90 transition-all duration-300 text-center"
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
            src="https://dilwebsite.s3.ap-south-1.amazonaws.com/Bihari Bowl/Madhubani Thali.jpg"
            alt="Traditional Madhubani Thali - Bihari Bowl"
            className="w-full h-full object-cover object-center"
          />
        </div>
        {/* Dark Gradient Overlay - using brand hero gradient */}
        <div className="absolute inset-0 z-[1] bg-gradient-hero"></div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#fad8a1] text-lg md:text-xl tracking-[0.3em] uppercase mb-6 font-semibold">
              EASTERN FLAVORS, AUTHENTIC TASTE
            </p>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight font-display">
              <span className="text-white">Bihari</span>
              <span className="block text-[#fad8a1]">Bowl</span>
            </h1>
            
            <p className="text-white/95 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
              Regional, earthy, and authentic. Experience the traditional flavors of Eastern India, 
              where every dish tells a story of heritage and tradition.
            </p>
            
            {/* Platform Availability in Hero */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-4 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg max-w-md w-full">
                <span className="text-white text-sm font-medium">Available only on</span>
                <div className="flex items-center gap-3 flex-1">
                  <a
                    href="https://www.swiggy.com/direct/brand/386506?source=swiggy-direct&subSource=instagram"
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
                    href="https://link.zomato.com/xqzv/rshare?id=8694480530563d3b"
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
                className="px-8 py-4 bg-gradient-to-r from-[#F9A825] to-[#6D4C41] text-white font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Explore Menu
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Heritage Section */}
      <section className="min-h-screen flex items-center bg-[#6D4C41] overflow-hidden scroll-snap-section">
        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-[#fad8a1]/20">
                <img
                  src="https://dilwebsite.s3.ap-south-1.amazonaws.com/Bihari Bowl/Madhubani Thali.jpg"
                  alt="Bihari Heritage - Madhubani Thali"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#6D4C41]/60 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-[#fad8a1] text-[#5b101a] p-4 lg:p-5 rounded-xl shadow-lg max-w-[280px] z-10">
                <p className="text-lg lg:text-xl italic mb-1 font-semibold">"Eastern flavors, authentic taste"</p>
                <p className="text-xs opacity-80">— The Bihari Bowl Promise</p>
              </div>
            </div>
            <div>
              <span className="text-[#fad8a1] text-sm tracking-[0.3em] uppercase font-semibold">Cultural Heritage</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mt-3 mb-6 leading-tight font-display">
                The Heart of
                <span className="block text-[#fad8a1]">Eastern India</span>
              </h2>
              <div className="space-y-4 text-white/80 text-base md:text-lg leading-relaxed">
                <p>
                  <span className="text-white font-semibold">Bihari Bowl</span> brings you the authentic, earthy flavors 
                  of Eastern India's rich culinary heritage. From the traditional Litti Chokha to hearty rajma and dal, 
                  every dish tells a story of generations-old recipes and time-honored cooking traditions.
                </p>
                <p>
                  Our kitchen honors the simple yet profound flavors that define Bihari cuisine—using wholesome ingredients, 
                  traditional spice blends, and cooking techniques that have been preserved through centuries. Each bowl 
                  represents the genuine taste of rural Bihar, where food is prepared with love and shared with warmth.
                </p>
                <p>
                  We celebrate the rustic charm and authentic flavors that make Eastern Indian cuisine so special. 
                  Every meal is a journey to the heartland of India, where traditional recipes meet modern convenience 
                  without compromising on taste or authenticity.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-6">
                <div>
                  <p className="text-3xl md:text-4xl text-[#fad8a1] font-bold">25+</p>
                  <p className="text-xs md:text-sm text-white/70">Traditional Items</p>
                </div>
                <div className="w-px h-10 bg-white/20"></div>
                <div>
                  <p className="text-3xl md:text-4xl text-[#fad8a1] font-bold">100%</p>
                  <p className="text-xs md:text-sm text-white/70">Authentic Recipes</p>
                </div>
                <div className="w-px h-10 bg-white/20"></div>
                <div>
                  <p className="text-3xl md:text-4xl text-[#fad8a1] font-bold">∞</p>
                  <p className="text-xs md:text-sm text-white/70">Heritage & Love</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center bg-[#fad8a1] overflow-hidden scroll-snap-section">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#a11d21] text-sm tracking-[0.3em] uppercase font-semibold">Our Journey</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#5b101a] font-bold mt-4 mb-6 leading-tight font-display">
              The Heritage of
              <span className="block text-[#6D4C41]">Eastern India</span>
            </h2>
            <p className="text-[#5b101a]/80 text-lg">
              Preserving the authentic flavors and traditional cooking methods of Bihari cuisine.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#fff6ea]/80 backdrop-blur-sm border border-[#a11d21]/20 rounded-2xl p-8 hover:bg-white transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-[#a11d21] flex items-center justify-center mb-6 shadow-lg">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <span className="text-[#a11d21] text-xs tracking-[0.2em] uppercase font-semibold">Regional Authentic</span>
              <h3 className="text-2xl text-[#5b101a] font-bold mt-2 mb-4 font-display">Traditional Recipes</h3>
              <p className="text-[#5b101a]/80 leading-relaxed">
                Our dishes are rooted in traditional Bihari recipes, using authentic spices and 
                cooking methods passed down through generations.
              </p>
            </div>
            <div className="bg-[#fff6ea]/80 backdrop-blur-sm border border-[#a11d21]/20 rounded-2xl p-8 hover:bg-white transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-[#a11d21] flex items-center justify-center mb-6 shadow-lg">
                <Handshake className="w-7 h-7 text-white" />
              </div>
              <span className="text-[#a11d21] text-xs tracking-[0.2em] uppercase font-semibold">Earthy Flavors</span>
              <h3 className="text-2xl text-[#5b101a] font-bold mt-2 mb-4 font-display">Authentic Taste</h3>
              <p className="text-[#5b101a]/80 leading-relaxed">
                Every dish captures the earthy, authentic flavors of Eastern India, bringing you 
                the true taste of regional cuisine.
              </p>
            </div>
            <div className="bg-[#fff6ea]/80 backdrop-blur-sm border border-[#a11d21]/20 rounded-2xl p-8 hover:bg-white transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-[#a11d21] flex items-center justify-center mb-6 shadow-lg">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <span className="text-[#a11d21] text-xs tracking-[0.2em] uppercase font-semibold">Heritage</span>
              <h3 className="text-2xl text-[#5b101a] font-bold mt-2 mb-4 font-display">Cultural Richness</h3>
              <p className="text-[#5b101a]/80 leading-relaxed">
                Bihari cuisine is rich in culture and tradition. Every dish is a celebration of 
                the heritage and flavors of Eastern India.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="min-h-screen flex items-center bg-[#fff6ea] overflow-hidden scroll-snap-section">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-[#a11d21] text-sm tracking-[0.3em] uppercase font-semibold">Our Menu</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#5b101a] font-bold mt-4 mb-6 leading-tight font-display">
              Taste the
              <span className="block text-[#6D4C41]">
                Heritage
              </span>
            </h2>
            <p className="text-[#5b101a]/70 text-lg">
              Each dish brings the authentic flavors of Eastern India to your table.
            </p>
          </div>
          
          {/* Platform Availability Banner */}
          <div className="flex justify-center mb-16">
            <div className="flex items-center gap-4 px-6 py-2 bg-gradient-to-r from-[#fad8a1]/60 to-[#a11d21]/20 backdrop-blur-sm rounded-xl border border-[#a11d21]/30 shadow-lg max-w-md w-full">
              <span className="text-[#5b101a] text-sm font-medium">Available only on</span>
              <div className="flex items-center gap-3 flex-1">
                <a
                  href="https://www.swiggy.com/direct/brand/386506?source=swiggy-direct&subSource=instagram"
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
                  href="https://link.zomato.com/xqzv/rshare?id=8694480530563d3b"
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
                  <div className="relative aspect-square rounded-2xl overflow-hidden mb-5 shadow-lg group-hover:shadow-xl transition-all duration-300 bg-[#fad8a1]">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#a11d21] to-[#5b101a] flex items-center justify-center">
                        <span className="text-[#fad8a1] text-2xl font-bold">Bihari</span>
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#a11d21] text-[#fad8a1] text-xs font-semibold rounded-full shadow-md">
                        {item.badge}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl text-[#5b101a] font-bold mb-2 group-hover:text-[#a11d21] transition-colors duration-300 font-display">
                    {item.name}
                  </h3>
                  <p className="text-[#5b101a]/70 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="min-h-screen flex items-center bg-white overflow-hidden scroll-snap-section">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#a11d21] text-sm tracking-[0.3em] uppercase font-semibold">Testimonials</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#5b101a] font-bold mt-4 mb-6 leading-tight font-display">
              What Our
              <span className="block text-[#6D4C41]">
                Customers Say
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#fff6ea] rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 relative border border-[#a11d21]/10"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-[#a11d21]/20" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#a11d21] text-[#a11d21]" />
                  ))}
                </div>
                <p className="text-[#5b101a] text-lg leading-relaxed mb-6">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#a11d21] flex items-center justify-center text-white font-bold">
                    {testimonial.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-[#5b101a]">{testimonial.name}</p>
                    <p className="text-sm text-[#5b101a]/60">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="social" className="min-h-screen flex items-center bg-white overflow-hidden scroll-snap-section">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#a11d21] rounded-full mb-6">
              <Instagram className="w-5 h-5 text-white" />
              <span className="font-semibold text-white">@biharibowl</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[#5b101a] font-bold mb-4 font-display">Follow Our Culinary Journey</h2>
            <p className="text-[#5b101a]/70">Behind-the-scenes, recipes, and eastern flavors from our kitchen to yours.</p>
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
                      <div className="absolute inset-0 bg-gradient-to-t from-[#5b101a]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-[#a11d21]/90 rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
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
              href="https://instagram.com/biharibowl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#5b101a] text-white font-semibold rounded-lg hover:bg-[#5b101a]/80 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Instagram className="w-5 h-5" />
              Follow Us on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Brand Discovery Section - Inline with Bihari Bowl Theme */}
      <section id="brands" className="min-h-screen scroll-snap-section scroll-snap-align-start py-16 md:py-24"
        style={{ background: 'linear-gradient(135deg, #FFF8E1 0%, #FFF3C4 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section - Bihari Bowl Theme */}
          <div className="text-center mb-12 px-4">
            <div className="relative">
              {/* Background Decoration with Bihari Bowl colors */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-r from-red-800/20 to-red-700/20 rounded-full blur-3xl opacity-40"></div>
              </div>
              
              <div className="relative">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-display text-red-800">
                  Explore Our Other
                  <span className="block text-red-700">
                    Culinary Brands
                  </span>
                </h2>
                
                <p className="text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed mb-8 text-gray-700">
                  Discover more delicious cuisines from our family of food brands, each crafted with 
                  <span className="font-semibold text-red-700"> passion</span> and 
                  <span className="font-semibold text-red-600"> authenticity</span>
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
                  name: "VEGERAMA",
                  logo: "/lovable-uploads/vegerama_new-Photoroom.png",
                  route: "/vegerama",
                  description: "Fresh, delicious vegetarian delights",
                  primaryColor: "#2E7D32",
                  secondaryColor: "#8BC34A",
                  logoBackground: "#E8F5E8",
                },
              ].map((brand) => (
                <Link
                  key={brand.route}
                  to={brand.route}
                  className="flex-shrink-0 group"
                >
                  {/* Bihari Bowl-themed Card Design */}
                  <div className="w-64 sm:w-72 md:w-64 h-52 sm:h-56 md:h-64 bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg border border-red-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group-hover:border-red-300 relative">
                    
                    {/* Brand Color Strip - Bihari Bowl themed */}
                    <div 
                      className="h-1 w-full opacity-70 group-hover:opacity-100 transition-opacity duration-300" 
                      style={{ 
                        background: `linear-gradient(90deg, ${brand.primaryColor}, ${brand.secondaryColor})` 
                      }}
                    />

                    {/* Main Content */}
                    <div className="flex flex-col items-center justify-center h-full p-6">
                      
                      {/* Logo Container with Bihari Bowl glow */}
                      <div className="relative mb-4">
                        <div className="absolute -inset-4 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500 bg-gradient-to-r from-red-800 to-red-700" />
                        
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

                      {/* Description with Bihari Bowl colors */}
                      <p className="text-gray-600 text-sm text-center leading-relaxed mb-4 px-3 min-h-[2rem] flex items-center justify-center transition-all duration-300 group-hover:text-gray-800 font-medium">
                        {brand.description}
                      </p>

                      {/* CTA Button - Bihari Bowl themed */}
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div 
                          className="px-6 py-2 rounded-full text-white font-medium text-sm shadow-lg transition-all duration-300 flex items-center gap-2"
                          style={{ 
                            background: `linear-gradient(135deg, #B71C1C, #D32F2F)` 
                          }}
                        >
                          <span>Explore</span>
                          <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>

                    {/* Corner Accent - Bihari Bowl themed */}
                    <div className="absolute top-3 right-3 w-2 h-2 rounded-full opacity-50 group-hover:opacity-80 transition-all duration-300 bg-red-600" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button - Bihari Bowl themed */}
          <div className="text-center mt-12 px-4">
            <div className="relative inline-block">
              <div className="absolute inset-0 rounded-2xl blur opacity-40 transition-opacity duration-300 bg-gradient-to-r from-red-800 to-red-700"></div>
              
              <Link
                to="/#brands"
                className="relative inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-red-800 to-red-700 text-white font-bold text-lg rounded-2xl transition-all duration-500 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 group"
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

export default BihariBowl;

