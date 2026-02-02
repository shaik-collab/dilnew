import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
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

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "The Junglee Kitchen | Wild Indian Cuisine Curated with Passion";
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
                <span className="hidden sm:inline text-sm font-medium">Home</span>
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
            <p className="text-jungle-beige/95 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Where untamed flavors meet culinary artistry. Experience the wild side of Indian
              cuisine, curated with passion and served with soul.
            </p>
            
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
              <div className="relative w-full max-w-lg aspect-[3/4] rounded-2xl overflow-hidden shadow-strong bg-jungle-beige/30">
                <img
                  src="https://dilwebsite.s3.ap-south-1.amazonaws.com/junglee-kitchen/Armaan Jain 1.png"
                  alt="Armaan Jain - Curator of The Junglee Kitchen"
                  className="w-full h-full object-contain object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jungle-dark/10 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-jungle-brown text-jungle-beige p-4 lg:p-5 rounded-xl shadow-strong max-w-[280px] z-10">
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
          <div className="text-center max-w-3xl mx-auto mb-16">
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
          <div className="flex gap-6 overflow-x-auto scrollbar-hide px-6 pb-4 snap-x snap-mandatory">
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
      <section id="contact" className="min-h-screen flex items-center bg-background overflow-hidden scroll-snap-section">
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

      <div className="scroll-snap-section">
        <Footer />
      </div>
    </div>
  );
};

export default JungleeKitchen;

