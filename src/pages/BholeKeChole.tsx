import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import BrandNavigation from "../components/BrandNavigation";
import BrandDiscoveryCarousel from "../components/BrandDiscoveryCarousel";
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

const BholeKeChole = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const menuScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Bhole ke Chole | Street Food, Pure Joy";
    
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
    // TOP 5 FEATURED ITEMS - Most Popular Street Food Items
    {
      name: "Chole Bhature",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/BKC/Chole Bhature.jpg",
      description: "Savor rich and aromatic pindi chole, slow-cooked with traditional spices to deliver deep, bold flavors, making it a true North Indian classic.",
      badge: "Bestseller",
    },
    {
      name: "Chole Kulche",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/BKC/Chole Kulche.jpg",
      description: "Savor the perfect pairing of soft Kulchas with our pindi chole, accompanied with carrot and chilli pickle, lachha onion masala",
      badge: "Popular",
    },
    {
      name: "Paneer Stuffed Chole Bhature",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/BKC/Paneer Stuffed Chole Bhature.jpg",
      description: "Savor the essence of North India with our Paneer Stuffed Chole Bhature, 2 soft and fluffy bhaturas filled with paneer, served with flavorful Pindi chole",
      badge: "Signature",
    },
    {
      name: "Mini Aloo Tikki Chaat",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/BKC/Mini Aloo Tikki Chaat.jpg",
      description: "Savor the blend of Mini Aloo Tikki and Ragda Chaat, featuring flavorful aloo tikki, ragda, sweet Imly, and green chutney. Garnished with chopped coriander and Dil spice mix",
      badge: "Street Special",
    },
    // {
    //   name: "Matar Kulche",
    //   image: "/BKC/Matar Kulche.jpg",
    //   description: "Bread kulches with ragda, served with chopped onion, tomato, Imly and green chutney",
    //   badge: "Traditional",
    // },
    // OTHER POPULAR STREET FOOD ITEMS
    {
      name: "Poori Chole Combo",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/BKC/Poori Chole Combo.png",
      description: "The Poori Chole Combo features fluffy Pooris paired with flavorful Chole, offering a classic and satisfying meal",
      badge: "Comfort Food",
    },
    {
      name: "Mini Ragda Chaat",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/BKC/Mini Ragda Chaat.jpg",
      description: "Savor the rich flavors of our Ragda topped with onion tomato mix, a hearty blend of spiced chickpeas, complemented with our special Dil Spice mix paired with Imli and mint chutney",
      badge: "Spicy",
    },
    {
      name: "Punjabi Aloo Samosa",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/BKC/Punjabi Aloo Samosa (2 pcs).jpg",
      description: "The all-season snack buddy! Punjabi style samosa with spices and green peas. Served with chutney",
      badge: "Classic",
    },
    {
      name: "Mini Dal Kachori",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/BKC/Mini Dal Kachori (3 pcs).jpg",
      description: "Mini freshly fried Rajasthani Dal kachori, served along with green and sweet Imly chutney",
      badge: "Regional",
    },
    {
      name: "Dahi Bhalla",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/BKC/Dahi Bhalla [2pc].jpg",
      description: "Soft Dahi Bhalle soaked in creamy yogurt, topped with tangy chutneys. A perfect sweet and savory delight!",
      badge: "Refreshing",
    },
    {
      name: "Gulab Jamun",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/BKC/Gulab Jamun (2Pc).jpg",
      description: "Soft, plump, with loads of syrup - Gulab Jamun just the way you like it. There is nothing else in our Gulab jamun than authenticity and love",
      badge: "Sweet Treat",
    },
    {
      name: "Masala Lemonade",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/BKC/Masala Lemonade.jpg",
      description: "A zesty twist on an old favorite. Our Hajmola Lemonade combines the tangy thrill of Hajmola with the refreshing zest of fresh lemons",
      badge: "Refreshing",
    },
  ];

  const testimonials = [
    {
      name: "Rohit Verma",
      location: "Delhi",
      text: "Bhole ke Chole brings the authentic street food experience home! The chole bhature is exactly like the street vendors!",
      initial: "R",
    },
    {
      name: "Kavita Singh",
      location: "Punjab",
      text: "Pure joy indeed! The flavors are spot on and bring back so many memories of street food adventures.",
      initial: "K",
    },
    {
      name: "Amit Sharma",
      location: "Mumbai",
      text: "The best chole I've had outside of Delhi. Authentic street food flavors delivered right to my door!",
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
    <div className="min-h-screen bg-background bhole-ke-chole-page scroll-snap-container">
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
                className="flex items-center gap-2 text-white/90 hover:text-primary/70 transition-colors duration-300 group"
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
              <Link to="/bhole-ke-chole" className="text-2xl text-white font-bold font-display">
                Bhole ke Chole
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("menu");
                }}
                className="text-white/90 hover:text-primary/70 transition-colors duration-300 font-medium"
              >
                Menu
              </a>
              <a
                href="#reviews"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("reviews");
                }}
                className="text-white/90 hover:text-primary/70 transition-colors duration-300 font-medium"
              >
                Reviews
              </a>
              <a
                href="#brands"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("brands");
                }}
                className="text-white/90 hover:text-primary/70 transition-colors duration-300 font-medium"
              >
                Other Brands
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="text-white/90 hover:text-primary/70 transition-colors duration-300 font-medium"
              >
                Contact
              </a>
              <a
                href="https://orders.dilfoods.in/?_gl=1*32xgw6*_ga*NDA1NTU0Mjc1LjE3MTYxMDgwNjU.*_ga_7CQ31SQHW5*MTc0MjExODExOC4xNS4wLjE3NDIxMTgxMTguMC4wLjA.*_ga_VCDE3GHY4J*MTc0MjExODExOC4xNS4wLjE3NDIxMTgxMTguMC4wLjA."
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 bg-secondary text-foreground font-semibold rounded-lg hover:bg-secondary/90 transition-all duration-300"
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
                className="flex items-center gap-2 text-white/90 hover:text-primary/70 transition-colors duration-300 font-medium py-2"
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
                className="block text-white/90 hover:text-primary/70 transition-colors duration-300 font-medium py-2"
              >
                Menu
              </a>
              <a
                href="#reviews"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("reviews");
                }}
                className="block text-white/90 hover:text-primary/70 transition-colors duration-300 font-medium py-2"
              >
                Reviews
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="block text-white/90 hover:text-primary/70 transition-colors duration-300 font-medium py-2"
              >
                Contact
              </a>
              <a
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("menu");
                }}
                className="block px-6 py-2.5 bg-secondary text-foreground font-semibold rounded-lg hover:bg-secondary/90 transition-all duration-300 text-center"
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
            src="https://dilwebsite.s3.ap-south-1.amazonaws.com/BKC/Bhole ke Chole Display image - Swiggy.JPG"
            alt="Street Food Feast - Bhole ke Chole"
            className="w-full h-full object-cover object-center"
          />
        </div>
        {/* Dark Gradient Overlay - using brand hero gradient */}
        <div className="absolute inset-0 z-[1] bg-gradient-hero"></div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-secondary text-lg md:text-xl tracking-[0.3em] uppercase mb-6 font-semibold">
              STREET FOOD, PURE JOY
            </p>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight font-display">
              <span className="text-white">Bhole ke</span>
              <span className="block text-secondary">Chole</span>
            </h1>
            
            <p className="text-white/95 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Fun, casual, and vibrant. Experience the authentic street food culture with our 
              signature chole dishes that bring pure joy to every bite.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("menu");
                }}
                className="px-8 py-4 bg-gradient-to-r from-secondary to-[#FF6B35] text-foreground font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
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
                  src="https://dilwebsite.s3.ap-south-1.amazonaws.com/BKC/Bhole ke Chole Display image - Swiggy.JPG"
                  alt="Street Food Culture - Bhole ke Chole"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-secondary text-foreground p-4 lg:p-5 rounded-xl shadow-strong max-w-[280px] z-10">
                <p className="text-lg lg:text-xl italic mb-1 font-semibold">"Street food, pure joy!"</p>
                <p className="text-xs opacity-80">— The Bhole ke Chole Way</p>
              </div>
            </div>
            <div>
              <span className="text-secondary text-sm tracking-[0.3em] uppercase font-semibold">Street Food Heritage</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mt-3 mb-6 leading-tight font-display">
                The Heart of
                <span className="block text-secondary">Street Food Culture</span>
              </h2>
              <div className="space-y-4 text-white/80 text-base md:text-lg leading-relaxed">
                <p>
                  <span className="text-white font-semibold">Bhole ke Chole</span> celebrates the vibrant world 
                  of Indian street food, where every bite tells a story of tradition, community, and the pure 
                  joy of authentic flavors served with love.
                </p>
                <p>
                  From the bustling lanes of Old Delhi to the vibrant markets of Amritsar, chole has been 
                  the king of street food for generations. We honor this legacy with bold flavors and 
                  passionate preparation that street vendors have perfected over decades.
                </p>
                <p>
                  Our secret lies in the perfect blend of aromatic spices and that authentic tanginess 
                  that street food lovers crave. Every dish captures the spirit of community, celebration, 
                  and pure food joy.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-6">
                <div>
                  <p className="text-3xl md:text-4xl text-secondary font-bold">20+</p>
                  <p className="text-xs md:text-sm text-white/70">Signature Dishes</p>
                </div>
                <div className="w-px h-10 bg-white/20"></div>
                <div>
                  <p className="text-3xl md:text-4xl text-secondary font-bold">12</p>
                  <p className="text-xs md:text-sm text-white/70">Secret Spices</p>
                </div>
                <div className="w-px h-10 bg-white/20"></div>
                <div>
                  <p className="text-3xl md:text-4xl text-secondary font-bold">∞</p>
                  <p className="text-xs md:text-sm text-white/70">Street Food Joy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center bg-background overflow-hidden scroll-snap-section">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-semibold">Our Journey</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-foreground font-bold mt-4 mb-6 leading-tight font-display">
              The Street Food
              <span className="block text-primary">Experience</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Bringing the vibrant energy and authentic flavors of street food culture to your home.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 hover:bg-card transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6 shadow-lg">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <span className="text-primary text-xs tracking-[0.2em] uppercase font-semibold">Street Authentic</span>
              <h3 className="text-2xl text-foreground font-bold mt-2 mb-4 font-display">Real Flavors</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our chole recipes are inspired by the best street vendors, bringing you authentic 
                flavors that capture the essence of street food culture.
              </p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 hover:bg-card transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6 shadow-lg">
                <Handshake className="w-7 h-7 text-white" />
              </div>
              <span className="text-primary text-xs tracking-[0.2em] uppercase font-semibold">Casual Vibes</span>
              <h3 className="text-2xl text-foreground font-bold mt-2 mb-4 font-display">Fun & Fresh</h3>
              <p className="text-muted-foreground leading-relaxed">
                Street food is about fun, casual dining. Every dish is prepared fresh and served 
                with the vibrant energy of street food culture.
              </p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 hover:bg-card transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6 shadow-lg">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <span className="text-primary text-xs tracking-[0.2em] uppercase font-semibold">Pure Joy</span>
              <h3 className="text-2xl text-foreground font-bold mt-2 mb-4 font-display">Happy Eating</h3>
              <p className="text-muted-foreground leading-relaxed">
                Food should bring joy! Our chole dishes are designed to make you smile and bring 
                back memories of street food adventures.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="min-h-screen flex items-center bg-background overflow-hidden scroll-snap-section">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-semibold">Our Menu</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-foreground font-bold mt-4 mb-6 leading-tight font-display">
              Taste the
              <span className="block text-primary">
                Street
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Each dish brings the vibrant flavors of street food to your table.
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
                      <div className="w-full h-full bg-gradient-to-br from-[#FF6B35] to-secondary flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">Chole</span>
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-secondary text-foreground text-xs font-semibold rounded-full shadow-md">
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
        <div className="container mx-auto px-6 py-16">
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
        <div className="container mx-auto px-6 py-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary rounded-full mb-6">
              <Instagram className="w-5 h-5 text-white" />
              <span className="font-semibold text-white">@bholekechole</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-foreground font-bold mb-4 font-display">Follow Our Culinary Journey</h2>
            <p className="text-muted-foreground">Behind-the-scenes, recipes, and food stories from our kitchen to yours.</p>
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
              href="https://instagram.com/bholekechole"
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

      {/* Brand Discovery Section */}
      <section id="brands" className="min-h-screen scroll-snap-section scroll-snap-align-start py-16 md:py-24">
        <div className="h-full flex items-center justify-center">
          <BrandDiscoveryCarousel currentBrandRoute="/bhole-ke-chole" />
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

export default BholeKeChole;
