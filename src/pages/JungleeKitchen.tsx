import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import BrandNavigation from "../components/BrandNavigation";
import FloatingBrandSuggestion from "../components/FloatingBrandSuggestion";
import {
  Sparkles,
  Handshake,
  Heart,
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Home,
} from "lucide-react";

const JungleeKitchen = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const menuScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "The Junglee Kitchen | Wild Indian Cuisine Curated with Passion";
    
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
    // TOP 5 FEATURED ITEMS - Most Popular Menu Items
    {
      name: "Butter Chicken (Murgh Makhanwala)",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/junglee-kitchen/Butter Chicken (Murgh Makhanwala).jpg",
      description: "Mouth watering chicken makhanwala made with chunks of boneless chickens cooked in a smooth buttery and creamy tomato gravy",
      badge: "Bestseller",
    },
    {
      name: "Butter Naan",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/junglee-kitchen/Butter Naan.jpg",
      description: "Fluffy naan bread brushed with melted butter, offering a soft and rich texture",
      badge: "Most Popular",
    },
    {
      name: "Dal Makhani",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/junglee-kitchen/Dal Makhani.jpg",
      description: "Creamy, buttery Dal Makhani made with slow-simmered lentils, and a swirl of fresh cream — indulgence in every bite",
      badge: "Signature",
    },
    {
      name: "Mutton Yakhni Pulao",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/junglee-kitchen/Mutton Yakhni Pulao.jpg",
      description: "Tender mutton yakhni pulao slow-cooked with aromatic spices and long-grain basmati biryani rice, crowned with Junglee's signature garnish",
      badge: "Chef's Special",
    },
    {
      name: "Rumali Roti",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/junglee-kitchen/Roomali Roti.jpg",
      description: "Indian Bread Made Of Refined Flour, Thin layer Roti, soft and light",
      badge: "Traditional",
    },
    // OTHER SPECIALTIES
    {
      name: "Mutton Rogan Josh",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/junglee-kitchen/Mutton Rogan Josh.jpg",
      description: "Aromatic and flavorful Indian delicacy showcasing tender mutton cooked to perfection in a rich, savory gravy offering a luxurious taste",
      badge: "Classic",
    },
    {
      name: "Chicken Kalmi Tangdi Kebab",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/junglee-kitchen/Chicken Kalmi Tangdi Kebab  - 8 Pcs.jpg",
      description: "A delightfully flavor-packed dish with succulent chicken legs, marinated in mouthwatering masalas and grilled to perfection",
      badge: "Signature",
    },
    {
      name: "Tandoori Chicken Tangdi Kebab",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/junglee-kitchen/Tandoori Chicken Tangdi Kebab - 8 pcs.jpg",
      description: "Indulge in our Murgh Tangdi Kebab where chicken leg pieces are marinated in our signature spiced yoghurt mix and cooked in the Tandoor for that tantalizing smoky aroma and taste",
      badge: "Popular",
    },
    {
      name: "Achari Chicken Tikka",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/junglee-kitchen/Achari Chicken Tikka.jpg",
      description: "Tangy and pickle-inspired Achari Chicken Tikka, bursting with flavors for all the Chatpat lovers",
      badge: "Spicy",
    },
    {
      name: "Mutton Keema Kebab",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/junglee-kitchen/Mutton Keema Kebab (6 pcs) .jpg",
      description: "A melt-in-mouth Mutton Galouti, delicately spiced and slow-cooked to perfection — rich, tender, and packed with royal flavors",
      badge: "Signature",
    },
    {
      name: "Mutton Achari Gosht",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/junglee-kitchen/Mutton Achari Gosht.jpg",
      description: "Mutton slow-cooked in rich, achari flavours which is also known as Martaban gravy, bursting with tangy depth and smoky warmth. Marinated overnight for intense flavor and melt-in-mouth tenderness",
      badge: "Spicy",
    },
    {
      name: "Peshawari Kadhai Tangdi Masala",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/junglee-kitchen/Peshawari Kadhai Tangdi Masala.jpg",
      description: "A rich and flavorful Peshawari chicken curry made with aromatic spices and tender Tangdi Kebabs. Perfectly spiced and full of bold, authentic taste",
      badge: "Regional",
    },
    {
      name: "Zafrani Chicken",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/junglee-kitchen/Zafrani Chicken .jpg",
      description: "A royal blend of tender angara chicken tikka simmered in rich zafrani gravy, finished with a hint of saffron for that luxurious, aromatic touch",
      badge: "Premium",
    },
    {
      name: "Zafrani Pulao with Bhatti Murgh",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/junglee-kitchen/Zafrani Pulao with Bhatti Murgh .jpg",
      description: "Smoky whole-leg Bhatti Murgh meets aromatic saffron and berry-studded pulao — finished with creamy raita for a rich, indulgent bite",
      badge: "Chef's Special",
    },
    {
      name: "Peshawari Karahi Paneer",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/junglee-kitchen/Peshawari Karahi Paneer.jpg",
      description: "A rich Peshawari-style paneer tossed with Angara spices, cooked in karahi gravy and finished with our signature Junglee Hero garnish. Bold, smoky, and irresistibly creamy",
      badge: "Vegetarian",
    },
    {
      name: "Rezala Malai Kofta",
      image: "https://dilwebsite.s3.ap-south-1.amazonaws.com/junglee-kitchen/Rezala Malai Kofta.jpg",
      description: "Royal malai-stuffed koftas simmered in rich Rezala gravy, finished with refined oil for a silky, luxurious bite that melts in your mouth",
      badge: "Vegetarian",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      text: "The butter chicken transported me straight to Delhi! Absolutely phenomenal flavors. The Junglee Kitchen has become our go-to for authentic Indian food.",
      initial: "P",
    },
    {
      name: "Rajesh Kumar",
      location: "Bangalore",
      text: "Finally, a cloud kitchen that doesn't compromise on quality. The biryani was layered to perfection. Each grain tells a story!",
      initial: "R",
    },
    {
      name: "Ananya Patel",
      location: "Pune",
      text: "As a vegetarian, I'm always looking for places that treat paneer dishes with care. The Paneer Tikka here is simply divine!",
      initial: "A",
    },
  ];

  // Instagram Posts Data Structure
  // To update: Add your Instagram reel/post thumbnails to /public/junglee-kitchen/instagram/ folder
  // Then update this array with the image filename and Instagram post URL
  // Example: { id: 1, thumbnail: "/junglee-kitchen/instagram/reel-1.jpg", url: "https://instagram.com/reel/ABC123" }
  const instagramPosts = [
    {
      id: 1,
      thumbnail: "https://dilwebsite.s3.ap-south-1.amazonaws.com/junglee-kitchen/instagram/post -1.jpg",
      url: "https://www.instagram.com/reel/DRcPHjeD4iG/?igsh=M3B3NTNkdXkwNW84",
    },
    {
      id: 2,
      thumbnail: "https://dilwebsite.s3.ap-south-1.amazonaws.com/junglee-kitchen/instagram/post - 2.jpg",
      url: "https://www.instagram.com/reel/DSkMlzKDXu3/?igsh=ZTYwOTJuN2syOHph",
    },
    {
      id: 3,
      thumbnail: "https://dilwebsite.s3.ap-south-1.amazonaws.com/junglee-kitchen/instagram/post-3.jpg",
      url: "https://www.instagram.com/reel/DS43r3Lj2Ni/?igsh=MTczcnNjY2s4aWFrcg==",
    },
    {
      id: 4,
      thumbnail: "https://dilwebsite.s3.ap-south-1.amazonaws.com/junglee-kitchen/instagram/post-4.jpg",
      url: "https://www.instagram.com/reel/DT4xnsAD6Cb/?igsh=MWtraWs1eDV2aTE1NA==",
    },
    // Add more posts as needed (6-12 recommended)
    // {
    //   id: 2,
    //   thumbnail: "/junglee-kitchen/instagram/reel-2.jpg",
    //   url: "https://instagram.com/reel/YOUR_REEL_ID",
    // },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background junglee-kitchen-page scroll-snap-container">
      {/* Custom Navbar for Junglee Kitchen */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-jungle-brown/95 backdrop-blur-md shadow-lg" : "bg-black/20 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Left side: Home button and Logo */}
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="flex items-center gap-2 text-jungle-beige/90 hover:text-jungle-gold transition-colors duration-300 group"
                title="Back to Dil Foods"
              >
                <img 
                  src="/lovable-uploads/60eb50d7-da70-4fee-a1ec-fd331878910f.png" 
                  alt="Dil Foods" 
                  className="h-5 w-auto group-hover:scale-110 transition-transform duration-300" 
                />
                {/* <span className="hidden sm:inline text-sm font-medium">Home</span> */}
              </Link>
              <div className="h-6 w-px bg-jungle-beige/30"></div>
              <Link to="/junglee-kitchen" className="text-2xl text-jungle-beige font-bold font-display">
                The Junglee Kitchen
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#story"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("story");
                }}
                className="text-jungle-beige/90 hover:text-jungle-gold transition-colors duration-300 font-medium"
              >
                Our Story
              </a>
              <a
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("menu");
                }}
                className="text-jungle-beige/90 hover:text-jungle-gold transition-colors duration-300 font-medium"
              >
                Menu
              </a>
              <a
                href="#reviews"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("reviews");
                }}
                className="text-jungle-beige/90 hover:text-jungle-gold transition-colors duration-300 font-medium"
              >
                Reviews
              </a>
              <a
                href="#brands"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("brands");
                }}
                className="text-jungle-beige/90 hover:text-jungle-gold transition-colors duration-300 font-medium"
              >
                Other Brands
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="text-jungle-beige/90 hover:text-jungle-gold transition-colors duration-300 font-medium"
              >
                Contact
              </a>
              <a
                href="https://orders.dilfoods.in/?_gl=1*32xgw6*_ga*NDA1NTU0Mjc1LjE3MTYxMDgwNjU.*_ga_7CQ31SQHW5*MTc0MjExODExOC4xNS4wLjE3NDIxMTgxMTguMC4wLjA.*_ga_VCDE3GHY4J*MTc0MjExODExOC4xNS4wLjE3NDIxMTgxMTguMC4wLjA."
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 bg-jungle-gold text-jungle-brown font-semibold rounded-lg hover:bg-jungle-gold/90 hover:shadow-glow transition-all duration-300"
              >
                Order Now
              </a>
              <BrandNavigation variant="light" />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center text-jungle-beige"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-6 space-y-4">
              <Link
                to="/"
                className="flex items-center gap-2 text-jungle-beige/90 hover:text-jungle-gold transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <img 
                  src="/lovable-uploads/60eb50d7-da70-4fee-a1ec-fd331878910f.png" 
                  alt="Dil Foods" 
                  className="h-4 w-auto" 
                />
                <span>Back to Home</span>
              </Link>
              <div className="h-px bg-jungle-beige/20 my-2"></div>
              <a
                href="#story"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("story");
                }}
                className="block text-jungle-beige/90 hover:text-jungle-gold transition-colors duration-300 font-medium py-2"
              >
                Our Story
              </a>
              <a
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("menu");
                }}
                className="block text-jungle-beige/90 hover:text-jungle-gold transition-colors duration-300 font-medium py-2"
              >
                Menu
              </a>
              <a
                href="#reviews"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("reviews");
                }}
                className="block text-jungle-beige/90 hover:text-jungle-gold transition-colors duration-300 font-medium py-2"
              >
                Reviews
              </a>
              <a
                href="#brands"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("brands");
                }}
                className="block text-jungle-beige/90 hover:text-jungle-gold transition-colors duration-300 font-medium py-2"
              >
                Other Brands
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="block text-jungle-beige/90 hover:text-jungle-gold transition-colors duration-300 font-medium py-2"
              >
                Contact
              </a>
              <a
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("menu");
                }}
                className="block px-6 py-2.5 bg-jungle-gold text-jungle-brown font-semibold rounded-lg hover:bg-jungle-gold/90 hover:shadow-glow transition-all duration-300 text-center"
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
            src="https://dilwebsite.s3.ap-south-1.amazonaws.com/junglee-kitchen/TJK Experience Box (Mutton) [Serves 2].jpg"
            alt="Traditional Indian Feast - The Junglee Kitchen"
            className="w-full h-full object-cover object-center"
          />
        </div>
        {/* Dark Gradient Overlay - matching Lovable design exactly */}
        <div className="absolute inset-0 z-[1] bg-gradient-hero"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Tagline */}
            <p className="text-jungle-gold text-lg md:text-xl tracking-[0.3em] uppercase mb-6 font-semibold">
              CURATED BY PASSION
            </p>
            
            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight font-display">
              <span className="text-white">The Junglee</span>
              <span className="block text-jungle-gold">Kitchen</span>
            </h1>
            
            {/* Description */}
            <p className="text-jungle-beige/95 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
              Where untamed flavors meet culinary artistry. Experience the wild side of Indian
              cuisine, curated with passion and served with soul.
            </p>
            
            {/* Platform Availability in Hero */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-4 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg max-w-md w-full">
                <span className="text-white text-sm font-medium">Available only on</span>
                <div className="flex items-center gap-3 flex-1">
                  <a
                    href="https://www.swiggy.com/city/bangalore/the-junglee-kitchen-anvi-pride-koramangala-rest1256957"
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
                    href="https://zomato.onelink.me/xqzv/7ei4gtxv?brand_id=1037&ref_id=5658"
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
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("menu");
                }}
                className="px-8 py-4 bg-gradient-to-r from-jungle-gold to-orange-400 text-jungle-brown font-semibold text-lg rounded-lg shadow-strong hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
              >
                Explore Menu
              </a>
              <a
                href="#story"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("story");
                }}
                className="px-8 py-4 border-2 border-white/60 text-white font-semibold text-lg rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Our Story
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="min-h-screen flex items-center bg-gradient-section overflow-hidden scroll-snap-section">
        <div className="container mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center max-w-7xl mx-auto">
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-md aspect-[3/3.5] rounded-2xl overflow-hidden shadow-strong bg-jungle-beige/30">
                <img
                  // src="https://dilwebsite.s3.ap-south-1.amazonaws.com/junglee-kitchen/Armaan Jain 1.png"
                  src="/junglee-kitchen/armaan jain1.png"
                  alt="Armaan Jain - Curator of The Junglee Kitchen"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jungle-dark/10 to-transparent"></div>
              </div>
              <div className="absolute -bottom-12 -right-3 lg:-bottom-14 lg:-right-4 bg-jungle-brown text-jungle-beige p-3 lg:p-4 rounded-xl shadow-strong max-w-[250px] z-10">
                <p className="text-lg lg:text-xl italic mb-1">"Food is my language of love"</p>
                <p className="text-xs opacity-80">— Armaan Jain</p>
              </div>
            </div>
            <div>
              <span className="text-jungle-gold text-sm tracking-[0.3em] uppercase font-semibold">Brand Origins</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-jungle-brown font-bold mt-3 mb-6 leading-tight font-display">
                Meet Our
                <span className="block text-jungle-gold">
                  Curator
                </span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
                <p>
                  <span className="text-foreground font-semibold">Armaan Jain</span> isn't just a food
                  enthusiast—he's a culinary storyteller. Growing up in the heart of India, surrounded
                  by the intoxicating aromas of his grandmother's kitchen, Armaan developed an
                  unshakeable bond with authentic Indian flavors.
                </p>
                <p>
                  His journey from a passionate home cook to the visionary behind The Junglee Kitchen
                  spans over a decade of exploration, experimentation, and an unwavering commitment
                  to preserving the soul of Indian cuisine while pushing its boundaries.
                </p>
                <p>
                  Every dish at The Junglee Kitchen carries Armaan's philosophy: food should be wild,
                  honest, and deeply satisfying. It should tell a story and create memories.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-6">
                <div>
                  <p className="text-3xl md:text-4xl text-jungle-gold font-bold">10+</p>
                  <p className="text-xs md:text-sm text-jungle-brown/70">Years of Passion</p>
                </div>
                <div className="w-px h-10 bg-jungle-brown/20"></div>
                <div>
                  <p className="text-3xl md:text-4xl text-jungle-gold font-bold">50+</p>
                  <p className="text-xs md:text-sm text-jungle-brown/70">Signature Recipes</p>
                </div>
                <div className="w-px h-10 bg-jungle-brown/20"></div>
                <div>
                  <p className="text-3xl md:text-4xl text-jungle-gold font-bold">1</p>
                  <p className="text-xs md:text-sm text-jungle-brown/70">Wild Vision</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="min-h-screen flex items-center bg-jungle-brown overflow-hidden scroll-snap-section">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-jungle-gold text-sm tracking-[0.3em] uppercase font-semibold">The Journey</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-jungle-beige font-bold mt-4 mb-6 leading-tight font-display">
              The Making of
              <span className="block text-jungle-gold">The Junglee Kitchen</span>
            </h2>
            <p className="text-jungle-beige/80 text-lg">
              Every great brand has a story. Ours is one of passion, partnership, and an unwavering
              promise to bring you the wild essence of Indian cuisine.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-jungle-beige/10 backdrop-blur-sm border border-jungle-beige/20 rounded-2xl p-8 hover:bg-jungle-beige/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-jungle-gold flex items-center justify-center mb-6 shadow-glow">
                <Sparkles className="w-7 h-7 text-jungle-brown" />
              </div>
              <span className="text-jungle-gold text-xs tracking-[0.2em] uppercase font-semibold">The Curation</span>
              <h3 className="text-2xl text-jungle-beige font-bold mt-2 mb-4 font-display">Crafting the Wild</h3>
              <p className="text-jungle-beige/80 leading-relaxed">
                Every recipe at The Junglee Kitchen is handpicked from the diverse culinary landscape
                of India. From the royal kitchens of Lucknow to the street corners of Delhi, we've
                curated dishes that represent the untamed spirit of Indian cuisine.
              </p>
            </div>
            <div className="bg-jungle-beige/10 backdrop-blur-sm border border-jungle-beige/20 rounded-2xl p-8 hover:bg-jungle-beige/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-jungle-gold flex items-center justify-center mb-6 shadow-glow">
                <Handshake className="w-7 h-7 text-jungle-brown" />
              </div>
              <span className="text-jungle-gold text-xs tracking-[0.2em] uppercase font-semibold">The Collaboration</span>
              <h3 className="text-2xl text-jungle-beige font-bold mt-2 mb-4 font-display">Partnering with Dil Foods</h3>
              <p className="text-jungle-beige/80 leading-relaxed">
                Our collaboration with Dil Foods brings The Junglee Kitchen to your doorstep with
                uncompromising quality. Dil Foods shares our passion for authentic flavors and has the
                infrastructure to ensure every meal reaches you as it was meant to be.
              </p>
            </div>
            <div className="bg-jungle-beige/10 backdrop-blur-sm border border-jungle-beige/20 rounded-2xl p-8 hover:bg-jungle-beige/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-jungle-gold flex items-center justify-center mb-6 shadow-glow">
                <Heart className="w-7 h-7 text-jungle-brown" />
              </div>
              <span className="text-jungle-gold text-xs tracking-[0.2em] uppercase font-semibold">The Promise</span>
              <h3 className="text-2xl text-jungle-beige font-bold mt-2 mb-4 font-display">Our Commitment to You</h3>
              <p className="text-jungle-beige/80 leading-relaxed">
                We promise you more than just food. We promise an experience—a journey through flavors
                that awaken your senses and transport you to the vibrant streets and royal courts of
                India. No preservatives, no shortcuts, no compromise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="min-h-screen flex items-center bg-gradient-section overflow-hidden scroll-snap-section">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-jungle-gold text-sm tracking-[0.3em] uppercase font-semibold">Our Menu</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-jungle-brown font-bold mt-4 mb-6 leading-tight font-display">
              Taste the
              <span className="block text-jungle-gold">
                Wild
              </span>
            </h2>
            <p className="text-jungle-brown/70 text-lg">
              Each dish is a carefully curated masterpiece, bringing the untamed flavors of India to
              your table.
            </p>
          </div>
          
          {/* Platform Availability Banner */}
          <div className="flex justify-center mb-16">
            <div className="flex items-center gap-4 px-6 py-2 bg-gradient-to-r from-jungle-beige/60 to-jungle-gold/20 backdrop-blur-sm rounded-xl border border-jungle-gold/30 shadow-lg max-w-md w-full">
              <span className="text-jungle-brown text-sm font-medium">Available only on</span>
              <div className="flex items-center gap-3 flex-1">
                <a
                  href="https://www.swiggy.com/city/bangalore/the-junglee-kitchen-anvi-pride-koramangala-rest1256957"
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
                  href="https://zomato.onelink.me/xqzv/7ei4gtxv?brand_id=1037&ref_id=5658"
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
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-5 shadow-food group-hover:shadow-strong transition-all duration-300 bg-jungle-beige">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-jungle-brown/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-jungle-gold text-jungle-brown text-xs font-semibold rounded-full shadow-soft">
                      {item.badge}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl text-jungle-brown font-bold mb-2 group-hover:text-jungle-gold transition-colors duration-300 font-display">
                  {item.name}
                </h3>
                <p className="text-jungle-brown/70 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="min-h-screen flex items-center bg-background overflow-hidden scroll-snap-section">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-jungle-gold text-sm tracking-[0.3em] uppercase font-semibold">Testimonials</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-jungle-brown font-bold mt-4 mb-6 leading-tight font-display">
              What Our
              <span className="block text-jungle-gold">
                Customers Say
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-jungle-beige rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 relative border border-jungle-brown/10"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-jungle-gold/20" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-jungle-gold text-jungle-gold" />
                  ))}
                </div>
                <p className="text-jungle-brown text-lg leading-relaxed mb-6">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-jungle-gold flex items-center justify-center text-jungle-brown font-bold">
                    {testimonial.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-jungle-brown">{testimonial.name}</p>
                    <p className="text-sm text-jungle-brown/60">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="social" className="min-h-screen flex items-center bg-background overflow-hidden scroll-snap-section">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-jungle-gold rounded-full mb-6">
              <Instagram className="w-5 h-5 text-jungle-brown" />
              <span className="font-semibold text-jungle-brown">@thejungleekitchen</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-jungle-brown font-bold mb-4 font-display">Follow Our Culinary Journey</h2>
            <p className="text-jungle-brown/70">Behind-the-scenes, recipes, and food stories from our kitchen to yours.</p>
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
                    <div className="relative h-[420px] md:h-[480px] rounded-2xl overflow-hidden shadow-food group-hover:shadow-strong transition-all duration-300 bg-jungle-beige">
                      <img
                        src={post.thumbnail}
                        alt={`Instagram post ${post.id}`}
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Instagram icon overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-jungle-brown/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-jungle-gold/90 rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                          <Instagram className="w-8 h-8 text-jungle-brown" />
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
              href="https://instagram.com/thejungleekitchen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-jungle-brown text-jungle-beige font-semibold rounded-lg hover:bg-jungle-brown-dark transition-all duration-300 shadow-medium hover:shadow-strong"
            >
              <Instagram className="w-5 h-5" />
              Follow Us on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Brand Discovery Section - Inline with Junglee Theme */}
      <section id="brands" className="min-h-screen scroll-snap-section scroll-snap-align-start py-16 md:py-24" 
        style={{ background: 'linear-gradient(135deg, hsl(42 35% 88%) 0%, hsl(42 30% 92%) 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section - Junglee Theme */}
          <div className="text-center mb-12 px-4">
            <div className="relative">
              {/* Background Decoration with Junglee colors */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-r from-amber-200 to-orange-200 rounded-full blur-3xl opacity-40"></div>
              </div>
              
              <div className="relative">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-display"
                  style={{ color: 'hsl(18 35% 28%)' }}>
                  Explore Our Other
                  <span className="block" style={{ color: 'hsl(18 40% 22%)' }}>
                    Culinary Brands
                  </span>
                </h2>
                
                <p className="text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed mb-8"
                  style={{ color: 'hsl(18 30% 35%)' }}>
                  Discover more delicious cuisines from our family of food brands, each crafted with 
                  <span className="font-semibold"> passion</span> and 
                  <span className="font-semibold"> authenticity</span>
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
                  {/* Junglee-themed Card Design */}
                  <div className="w-64 sm:w-72 md:w-64 h-52 sm:h-56 md:h-64 bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg border border-amber-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group-hover:border-amber-300 relative">
                    
                    {/* Brand Color Strip - Junglee themed */}
                    <div 
                      className="h-1 w-full opacity-70 group-hover:opacity-100 transition-opacity duration-300" 
                      style={{ 
                        background: `linear-gradient(90deg, ${brand.primaryColor}, ${brand.secondaryColor})` 
                      }}
                    />

                    {/* Main Content */}
                    <div className="flex flex-col items-center justify-center h-full p-6">
                      
                      {/* Logo Container with Junglee glow */}
                      <div className="relative mb-4">
                        <div 
                          className="absolute -inset-4 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500"
                          style={{ 
                            backgroundColor: 'hsl(38 85% 58%)'
                          }}
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

                      {/* Description with Junglee colors */}
                      <p className="text-sm text-center leading-relaxed mb-4 px-3 min-h-[2rem] flex items-center justify-center transition-all duration-300 font-medium"
                        style={{ color: 'hsl(18 30% 45%)' }}>
                        {brand.description}
                      </p>

                      {/* CTA Button - Junglee themed */}
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div 
                          className="px-6 py-2 rounded-full text-white font-medium text-sm shadow-lg transition-all duration-300 flex items-center gap-2"
                          style={{ 
                            background: `linear-gradient(135deg, hsl(18 35% 28%), hsl(38 85% 58%))` 
                          }}
                        >
                          <span>Explore</span>
                          <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>

                    {/* Corner Accent - Junglee themed */}
                    <div 
                      className="absolute top-3 right-3 w-2 h-2 rounded-full opacity-50 group-hover:opacity-80 transition-all duration-300"
                      style={{ backgroundColor: 'hsl(38 85% 58%)' }}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button - Junglee themed */}
          <div className="text-center mt-12 px-4">
            <div className="relative inline-block">
              <div className="absolute inset-0 rounded-2xl blur opacity-40 transition-opacity duration-300"
                style={{ background: 'linear-gradient(135deg, hsl(18 35% 28%), hsl(38 85% 58%))' }}></div>
              
              <Link
                to="/#brands"
                className="relative inline-flex items-center gap-4 px-10 py-5 font-bold text-lg rounded-2xl transition-all duration-500 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 group text-white"
                style={{ background: 'linear-gradient(135deg, hsl(18 35% 28%), hsl(38 85% 58%))' }}
              >
                <span>View All Brands</span>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
                  <ChevronRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
            
            <p className="text-sm mt-6 max-w-md mx-auto px-4"
              style={{ color: 'hsl(18 30% 45%)' }}>
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

export default JungleeKitchen;

