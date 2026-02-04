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

const HouseOfAndhra = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const menuScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "House Of Andhra | Where Spice Meets Soul";
    
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
    // VEGETARIAN ITEMS (11 items - 50%)
    {
      name: "Gutti Vankaya",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/HOA/Gutti Venkaya (Brinjal).jpg",
      description: "Traditional Andhra stuffed brinjal cooked with tangy tamarind and aromatic spices",
      badge: "Signature",
    },
    {
      name: "Andhra Style Paneer Ghee Rice Bowl",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/HOA/Andhra Style Paneer Ghee Rice Bowl.jpg",
      description: "Flavorful ghee rice bowl topped with spicy Andhra style paneer curry",
      badge: "Vegetarian",
    },
    {
      name: "Andhra Chilli Paneer",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/HOA/Andhra Chilli paneer.jpg",
      description: "Crispy paneer cooked with fiery Andhra chilies and traditional spices",
      badge: "Spicy",
    },
    {
      name: "Andhra Chilli Soya Chaap",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/HOA/Andhra Chilli Soya Chaap .jpg",
      description: "Tender soya chaap cooked with authentic Andhra spices and red chilies",
      badge: "Vegetarian",
    },
    {
      name: "Curd Rice",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/HOA/Curd Rice (500 ml).jpg",
      description: "Classic South Indian curd rice, creamy and comforting",
      badge: "Classic",
    },
    {
      name: "Ghee Podi Mini Idlis",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/HOA/Ghee Podi Mini Idlis (Tossed).jpg",
      description: "Mini idlis tossed in ghee and spicy podi powder, a perfect snack",
      badge: "Traditional",
    },
    {
      name: "Ghee Roast Mini Idlis",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/HOA/Ghee Roast Mini Idlis (Tossed).jpg",
      description: "Mini idlis roasted in ghee with aromatic spices, crispy and flavorful",
      badge: "Popular",
    },
    {
      name: "Vegetable Sambar Rice Bowl",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/HOA/Sambar Rice Bowl with Pepper Chicken .jpg",
      description: "Traditional sambar rice with mixed vegetables and authentic Andhra spices",
      badge: "Healthy",
    },
    {
      name: "Vegetarian Rasam Rice Bowl",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/HOA/Copy of Rasam Rice with Pepper Chicken.jpg",
      description: "Tangy rasam rice with traditional South Indian flavors, light and comforting",
      badge: "Light Meal",
    },
    {
      name: "Andhra Veg Curry Rice Bowl",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/HOA/Andhra Style Chicken Ghee Rice Bowl.jpg",
      description: "Aromatic ghee rice bowl topped with spicy Andhra style mixed vegetable curry",
      badge: "Vegetarian",
    },
    {
      name: "Paneer Ghee Rice",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/HOA/gunter chicken ghee rice-1.jpg",
      description: "Fragrant ghee rice topped with spicy Andhra paneer curry, rich and flavorful",
      badge: "Comfort Food",
    },
    
    // NON-VEGETARIAN ITEMS (11 items - 50%)
    {
      name: "Andhra Chilli Chicken",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/HOA/Andhra Chilli Chicken.jpg",
      description: "Fiery chicken cooked with authentic Andhra spices and red chilies",
      badge: "Bestseller",
    },
    {
      name: "HOA Special Chicken Curry",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/HOA/HOA Special Chicken Curry.jpg",
      description: "House special chicken curry with bold Andhra flavors and traditional spices",
      badge: "Signature",
    },
    {
      name: "Chicken Ghee Roast",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/HOA/Chicken ghee roast.jpg",
      description: "Succulent chicken roasted in ghee with aromatic spices and red chilies",
      badge: "Spicy",
    },
    {
      name: "Guntur Chicken Ghee Rice",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/HOA/gunter chicken ghee rice-1.jpg",
      description: "Fragrant ghee rice topped with spicy Guntur chicken, a perfect Andhra combination",
      badge: "Popular",
    },
    {
      name: "HOA Special Chicken Ghee Rice Bowl",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/HOA/HOA Special Chicken Ghee Rice Bowl.jpg",
      description: "House special ghee rice bowl with our signature chicken curry",
      badge: "Signature",
    },
    {
      name: "Andhra Style Egg Ghee Rice Bowl",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/HOA/Andhra Style Egg Ghee Rice Bowl .jpg",
      description: "Flavorful ghee rice bowl topped with spicy Andhra style egg curry",
      badge: "Egg Special",
    },
    {
      name: "HOA Special Egg Ghee Rice Bowl",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/HOA/HOA Special Egg Ghee Rice Bowl.jpg",
      description: "House special ghee rice bowl with our signature egg preparation",
      badge: "Popular",
    },
    {
      name: "Egg Pulusu Ghee Rice Bowl",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/HOA/Egg Pulusu Ghee Rice Bowl.jpg",
      description: "Aromatic ghee rice with tangy egg pulusu, a perfect balance of flavors",
      badge: "Traditional",
    },
    {
      name: "Curd Rice with Pepper Chicken",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/HOA/Curd Rice topped with Pepper Chicken.jpg",
      description: "Cooling curd rice topped with spicy pepper chicken, a perfect contrast",
      badge: "Classic",
    },
    {
      name: "Curd Rice with Guntur Chicken",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/HOA/Curd Rice with Guntur Chicken.jpg",
      description: "Traditional curd rice served with fiery Guntur chicken",
      badge: "Spicy",
    },
    {
      name: "Mini Idlis with Guntur Chicken",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/HOA/Mini Idlis with Guntur Chicken Curry.jpg",
      description: "Soft mini idlis served with authentic spicy Guntur chicken curry",
      badge: "Combo Special",
    },
  ];

  const testimonials = [
    {
      name: "Vikram Reddy",
      location: "Hyderabad",
      text: "Finally, authentic Andhra flavors! The spice level is perfect and brings back memories of home.",
      initial: "V",
    },
    {
      name: "Priya Nair",
      location: "Bangalore",
      text: "House Of Andhra delivers the bold, fiery flavors I've been craving. Absolutely delicious!",
      initial: "P",
    },
    {
      name: "Ramesh Kumar",
      location: "Chennai",
      text: "The gongura mutton is outstanding! This is real Andhra cuisine at its finest.",
      initial: "R",
    },
  ];

  const instagramPosts: Array<{ id: number; thumbnail: string; url: string }> = [
    {
      id: 1,
      thumbnail: "https://dilwebsite.s3.ap-south-1.amazonaws.com/HOA/instagram/post 1.jpg",
      url: "https://www.instagram.com/reel/C2HwrLZxg-V/?igsh=eWN3bmRzc3FsYWhs",
    },
    {
      id: 2,
      thumbnail: "https://dilwebsite.s3.ap-south-1.amazonaws.com/HOA/instagram/post 2.jpg",
      url: "https://www.instagram.com/reel/DTQMBimEx50/?igsh=MTJ2em9oa2tzaXJ4YQ==",
    },
    {
      id: 3,
      thumbnail: "https://dilwebsite.s3.ap-south-1.amazonaws.com/HOA/instagram/post 3.jpg",
      url: "https://www.instagram.com/reel/DSM15vgk0Gg/?igsh=bHBmcjVza2ZoZHZv",
    },
    {
      id: 4,
      thumbnail: "https://dilwebsite.s3.ap-south-1.amazonaws.com/HOA/instagram/post 4.jpg",
      url: "https://www.instagram.com/reel/CucJMeNtJtN/?igsh=MWllZ3ZqMzRnZThzaw==",
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background house-of-andhra-page scroll-snap-container">
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
                className="flex items-center gap-2 text-white/90 hover:text-secondary/80 transition-colors duration-300 group"
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
              <Link to="/house-of-andhra" className="text-2xl text-white font-bold font-display">
                House Of Andhra
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("menu");
                }}
                className="text-white/90 hover:text-secondary/80 transition-colors duration-300 font-medium"
              >
                Menu
              </a>
              <a
                href="#reviews"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("reviews");
                }}
                className="text-white/90 hover:text-secondary/80 transition-colors duration-300 font-medium"
              >
                Reviews
              </a>
              <a
                href="#brands"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("brands");
                }}
                className="text-white/90 hover:text-secondary/80 transition-colors duration-300 font-medium"
              >
                Other Brands
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="text-white/90 hover:text-secondary/80 transition-colors duration-300 font-medium"
              >
                Contact
              </a>
              <a
                href="https://orders.dilfoods.in/?_gl=1*32xgw6*_ga*NDA1NTU0Mjc1LjE3MTYxMDgwNjU.*_ga_7CQ31SQHW5*MTc0MjExODExOC4xNS4wLjE3NDIxMTgxMTguMC4wLjA.*_ga_VCDE3GHY4J*MTc0MjExODExOC4xNS4wLjE3NDIxMTgxMTguMC4wLjA."
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300"
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
                className="flex items-center gap-2 text-white/90 hover:text-secondary/80 transition-colors duration-300 font-medium py-2"
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
                className="block text-white/90 hover:text-secondary/80 transition-colors duration-300 font-medium py-2"
              >
                Menu
              </a>
              <a
                href="#reviews"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("reviews");
                }}
                className="block text-white/90 hover:text-secondary/80 transition-colors duration-300 font-medium py-2"
              >
                Reviews
              </a>
              <a
                href="#brands"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("brands");
                }}
                className="block text-white/90 hover:text-secondary/80 transition-colors duration-300 font-medium py-2"
              >
                Other Brands
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="block text-white/90 hover:text-secondary/80 transition-colors duration-300 font-medium py-2"
              >
                Contact
              </a>
              <a
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("menu");
                }}
                className="block px-6 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 text-center"
              >
                Order Now
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Food Flat Lay Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-snap-section">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://dilwebsite.s3.ap-south-1.amazonaws.com/HOA/House Of Andhra Display image - Swiggy.png"
            alt="Traditional Andhra Feast - House Of Andhra"
            className="w-full h-full object-cover object-center"
          />
        </div>
        {/* Dark Gradient Overlay - original gradient with improved text colors */}
        <div className="absolute inset-0 z-[1] bg-gradient-hero"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-accent text-lg md:text-xl tracking-[0.3em] uppercase mb-6 font-semibold drop-shadow-lg">
              WHERE SPICE MEETS SOUL
            </p>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight font-display drop-shadow-2xl">
              <span className="text-white">House Of</span>
              <span className="block text-accent">Andhra</span>
            </h1>
            
            <p className="text-white/95 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed drop-shadow-md">
              Experience the bold, fiery flavors of authentic Andhra cuisine. Where every dish 
              packs a punch and every bite tells a story of spice and tradition.
            </p>
            
            {/* Platform Availability in Hero */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-4 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg max-w-md w-full">
                <span className="text-white text-sm font-medium">Available only on</span>
                <div className="flex items-center gap-3 flex-1">
                  <a
                    href="https://www.swiggy.com/city/bangalore/house-of-andhra-immadihalli-whitefield-rest1206732"
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
                    href="https://zomato.onelink.me/xqzv/7ei4gtxv?brand_id=983&ref_id=5656"
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
                className="px-8 py-4 bg-gradient-to-r from-secondary to-primary text-white font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
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
                  src="https://dilwebsite.s3.ap-south-1.amazonaws.com/HOA/House Of Andhra Display image - Swiggy.png"
                  alt="Royal Andhra Heritage - House Of Andhra"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-accent text-foreground p-4 lg:p-5 rounded-xl shadow-strong max-w-[280px] z-10">
                <p className="text-lg lg:text-xl italic mb-1 font-semibold">"Fire, spice, and royal taste"</p>
                <p className="text-xs opacity-80">— The Andhra Legacy</p>
              </div>
            </div>
            <div>
              <span className="text-accent text-sm tracking-[0.3em] uppercase font-semibold">Royal Heritage</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mt-3 mb-6 leading-tight font-display">
                The Royal Legacy of
                <span className="block text-accent">Andhra Pradesh</span>
              </h2>
              <div className="space-y-4 text-white/80 text-base md:text-lg leading-relaxed">
                <p>
                  <span className="text-white font-semibold">House Of Andhra</span> brings you the bold, fiery 
                  flavors of Andhra Pradesh, where spice isn't just an ingredient—it's a way of life. Our cuisine 
                  reflects the royal heritage and vibrant culture of this remarkable region.
                </p>
                <p>
                  From the royal kitchens of the Nizams to the coastal villages of the Bay of Bengal, every recipe 
                  tells a story of tradition, passion, and the perfect balance of heat and flavor. We use authentic 
                  Guntur chilies, Kurnool spices, and time-honored cooking techniques.
                </p>
                <p>
                  Each dish is a celebration of Andhra's diverse culinary landscape—from tangy Gongura to fiery 
                  Pulusu, from aromatic biryanis to spicy curries that awaken every sense and create unforgettable 
                  dining experiences.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-6">
                <div>
                  <p className="text-3xl md:text-4xl text-accent font-bold">25+</p>
                  <p className="text-xs md:text-sm text-white/70">Royal Recipes</p>
                </div>
                <div className="w-px h-10 bg-white/20"></div>
                <div>
                  <p className="text-3xl md:text-4xl text-accent font-bold">8</p>
                  <p className="text-xs md:text-sm text-white/70">Signature Spices</p>
                </div>
                <div className="w-px h-10 bg-white/20"></div>
                <div>
                  <p className="text-3xl md:text-4xl text-accent font-bold">∞</p>
                  <p className="text-xs md:text-sm text-white/70">Andhra Fire</p>
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-primary font-bold mt-4 mb-6 leading-tight font-display">
              The Fire of
              <span className="block text-accent">Andhra</span>
            </h2>
            <p className="text-primary/80 text-lg">
              Bold flavors, authentic spices, and the fiery spirit of Andhra Pradesh in every dish.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 hover:bg-card transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6 shadow-lg">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <span className="text-primary text-xs tracking-[0.2em] uppercase font-semibold">Authentic Spices</span>
              <h3 className="text-2xl text-primary font-bold mt-2 mb-4 font-display">Bold Flavors</h3>
              <p className="text-primary/70 leading-relaxed">
                We use traditional Andhra spices and cooking techniques to bring you the authentic 
                fiery flavors that define this cuisine.
              </p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 hover:bg-card transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6 shadow-lg">
                <Handshake className="w-7 h-7 text-white" />
              </div>
              <span className="text-primary text-xs tracking-[0.2em] uppercase font-semibold">Regional Heritage</span>
              <h3 className="text-2xl text-primary font-bold mt-2 mb-4 font-display">Traditional Recipes</h3>
              <p className="text-primary/70 leading-relaxed">
                Our recipes are passed down through generations, preserving the authentic taste 
                and cooking methods of Andhra Pradesh.
              </p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 hover:bg-card transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6 shadow-lg">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <span className="text-primary text-xs tracking-[0.2em] uppercase font-semibold">Spice Mastery</span>
              <h3 className="text-2xl text-primary font-bold mt-2 mb-4 font-display">Perfect Heat</h3>
              <p className="text-primary/70 leading-relaxed">
                Every dish is carefully balanced to deliver the perfect level of heat, ensuring 
                bold flavors without overwhelming the palate.
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
                Fire
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Each dish is a celebration of bold spices and authentic Andhra flavors.
            </p>
          </div>
          
          {/* Platform Availability Banner */}
          <div className="flex justify-center mb-16">
            <div className="flex items-center gap-4 px-6 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm rounded-xl border border-primary/30 shadow-lg max-w-md w-full">
              <span className="text-foreground text-sm font-medium">Available only on</span>
              <div className="flex items-center gap-3 flex-1">
                <a
                  href="https://www.swiggy.com/city/bangalore/house-of-andhra-immadihalli-whitefield-rest1206732"
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
                  href="https://zomato.onelink.me/xqzv/7ei4gtxv?brand_id=983&ref_id=5656"
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
                    <div className="w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">Andhra</span>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full shadow-md">
                      {item.badge}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl text-foreground font-bold mb-2 group-hover:text-primary transition-colors duration-300 font-display">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
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
                className="bg-card rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 relative border border-primary/10"
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
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
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
              <span className="font-semibold text-white">@houseofandhra</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-foreground font-bold mb-4 font-display">Follow Our Culinary Journey</h2>
            <p className="text-muted-foreground">Behind-the-scenes, authentic Andhra recipes, and spice stories from our kitchen to yours.</p>
          </div>

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
          <div className="text-center mt-16 mb-12">
            <a
              href="https://www.instagram.com/houseofandhra?igsh=MWtxNWFmdHdubTVvdw=="
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

      {/* Brand Discovery Section - Inline with House of Andhra Theme */}
      <section id="brands" className="min-h-screen scroll-snap-section scroll-snap-align-start py-16 md:py-24"
        style={{ background: 'linear-gradient(135deg, #F8F6F5 0%, #F5F5DC 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section - House of Andhra Theme */}
          <div className="text-center mb-12 px-4">
            <div className="relative">
              {/* Background Decoration with HOA colors */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-r from-red-900/20 to-red-700/20 rounded-full blur-3xl opacity-40"></div>
              </div>
              
              <div className="relative">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-display text-red-900">
                  Explore Our Other
                  <span className="block text-red-800">
                    Culinary Brands
                  </span>
                </h2>
                
                <p className="text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed mb-8 text-gray-700">
                  Discover more delicious cuisines from our family of food brands, each crafted with 
                  <span className="font-semibold text-red-800"> passion</span> and 
                  <span className="font-semibold text-red-700"> authenticity</span>
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
                  {/* House of Andhra-themed Card Design */}
                  <div className="w-64 sm:w-72 md:w-64 h-52 sm:h-56 md:h-64 bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg border border-red-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group-hover:border-red-300 relative">
                    
                    {/* Brand Color Strip - HOA themed */}
                    <div 
                      className="h-1 w-full opacity-70 group-hover:opacity-100 transition-opacity duration-300" 
                      style={{ 
                        background: `linear-gradient(90deg, ${brand.primaryColor}, ${brand.secondaryColor})` 
                      }}
                    />

                    {/* Main Content */}
                    <div className="flex flex-col items-center justify-center h-full p-6">
                      
                      {/* Logo Container with HOA glow */}
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

                      {/* Description with HOA colors */}
                      <p className="text-gray-600 text-sm text-center leading-relaxed mb-4 px-3 min-h-[2rem] flex items-center justify-center transition-all duration-300 group-hover:text-gray-800 font-medium">
                        {brand.description}
                      </p>

                      {/* CTA Button - HOA themed */}
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div 
                          className="px-6 py-2 rounded-full text-white font-medium text-sm shadow-lg transition-all duration-300 flex items-center gap-2"
                          style={{ 
                            background: `linear-gradient(135deg, #8B1538, #AD1457)` 
                          }}
                        >
                          <span>Explore</span>
                          <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>

                    {/* Corner Accent - HOA themed */}
                    <div className="absolute top-3 right-3 w-2 h-2 rounded-full opacity-50 group-hover:opacity-80 transition-all duration-300 bg-red-700" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button - HOA themed */}
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

export default HouseOfAndhra;

