import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
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
} from "lucide-react";

const AllThingsFried = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "All Things Fried | Crispy. Golden. Perfect.";
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      name: "Crispy Fried Chicken",
      image: "",
      description: "Golden fried chicken with perfect crunch, juicy and flavorful",
      badge: "Bestseller",
    },
    {
      name: "Fried Samosas",
      image: "",
      description: "Crispy pastry filled with spiced potatoes, fried to perfection",
      badge: "Popular",
    },
    {
      name: "Golden Pakoras",
      image: "",
      description: "Mixed vegetable fritters, crispy on the outside and soft inside",
      badge: "Signature",
    },
  ];

  const testimonials = [
    {
      name: "Rahul Kapoor",
      location: "Delhi",
      text: "All Things Fried is exactly what it says! Everything is perfectly crispy and golden. The fried chicken is amazing!",
      initial: "R",
    },
    {
      name: "Sneha Reddy",
      location: "Hyderabad",
      text: "Bold, modern, and absolutely delicious! This is indulgent food done right. Can't get enough!",
      initial: "S",
    },
    {
      name: "Amit Kumar",
      location: "Mumbai",
      text: "The perfect place for fried food cravings. Everything is crispy, golden, and absolutely perfect!",
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
    <div className="min-h-screen bg-background all-things-fried-page scroll-snap-container">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#E91E63]/95 backdrop-blur-md shadow-lg" : "bg-black/20 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="flex items-center gap-2 text-white/90 hover:text-[#FFEB3B] transition-colors duration-300 group"
                title="Back to Dil Foods"
              >
                <img 
                  src="/lovable-uploads/60eb50d7-da70-4fee-a1ec-fd331878910f.png" 
                  alt="Dil Foods" 
                  className="h-5 w-auto group-hover:scale-110 transition-transform duration-300" 
                />
                <span className="hidden sm:inline text-sm font-medium">Home</span>
              </Link>
              <div className="h-6 w-px bg-white/30"></div>
              <Link to="/all-things-fried" className="text-2xl text-white font-bold font-display">
                All Things Fried
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("menu");
                }}
                className="text-white/90 hover:text-[#FFEB3B] transition-colors duration-300 font-medium"
              >
                Menu
              </a>
              <a
                href="#reviews"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("reviews");
                }}
                className="text-white/90 hover:text-[#FFEB3B] transition-colors duration-300 font-medium"
              >
                Reviews
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="text-white/90 hover:text-[#FFEB3B] transition-colors duration-300 font-medium"
              >
                Contact
              </a>
              <a
                href="https://orders.dilfoods.in/?_gl=1*32xgw6*_ga*NDA1NTU0Mjc1LjE3MTYxMDgwNjU.*_ga_7CQ31SQHW5*MTc0MjExODExOC4xNS4wLjE3NDIxMTgxMTguMC4wLjA.*_ga_VCDE3GHY4J*MTc0MjExODExOC4xNS4wLjE3NDIxMTgxMTguMC4wLjA."
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 bg-[#FFEB3B] text-[#212121] font-semibold rounded-lg hover:bg-[#FFEB3B]/90 transition-all duration-300"
              >
                Order Now
              </a>
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
                className="flex items-center gap-2 text-white/90 hover:text-[#FFEB3B] transition-colors duration-300 font-medium py-2"
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
                className="block text-white/90 hover:text-[#FFEB3B] transition-colors duration-300 font-medium py-2"
              >
                Menu
              </a>
              <a
                href="#reviews"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("reviews");
                }}
                className="block text-white/90 hover:text-[#FFEB3B] transition-colors duration-300 font-medium py-2"
              >
                Reviews
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="block text-white/90 hover:text-[#FFEB3B] transition-colors duration-300 font-medium py-2"
              >
                Contact
              </a>
              <a
                href="https://orders.dilfoods.in/?_gl=1*32xgw6*_ga*NDA1NTU0Mjc1LjE3MTYxMDgwNjU.*_ga_7CQ31SQHW5*MTc0MjExODExOC4xNS4wLjE3NDIxMTgxMTguMC4wLjA.*_ga_VCDE3GHY4J*MTc0MjExODExOC4xNS4wLjE3NDIxMTgxMTguMC4wLjA."
                target="_blank"
                rel="noreferrer"
                className="block px-6 py-2.5 bg-[#FFEB3B] text-[#212121] font-semibold rounded-lg hover:bg-[#FFEB3B]/90 transition-all duration-300 text-center"
              >
                Order Now
              </a>
            </div>
          )}
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-snap-section">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#212121] to-[#E91E63]"></div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#FFEB3B] text-lg md:text-xl tracking-[0.3em] uppercase mb-6 font-semibold">
              CRISPY. GOLDEN. PERFECT.
            </p>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight font-display">
              <span className="text-white">All Things</span>
              <span className="block text-[#FFEB3B]">Fried</span>
            </h1>
            
            <p className="text-white/95 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Bold, energetic, and indulgent. Experience the perfect crunch in every bite, 
              where crispy meets golden perfection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("menu");
                }}
                className="px-8 py-4 bg-gradient-to-r from-[#FFEB3B] to-[#E91E63] text-[#212121] font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Explore Menu
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center bg-[#212121] overflow-hidden scroll-snap-section">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#E91E63] text-sm tracking-[0.3em] uppercase font-semibold">Our Journey</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mt-4 mb-6 leading-tight font-display">
              The Art of
              <span className="block text-[#FFEB3B]">Perfect Fry</span>
            </h2>
            <p className="text-white/80 text-lg">
              Mastering the perfect fry—crispy, golden, and absolutely irresistible.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm border border-[#E91E63]/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-[#E91E63] flex items-center justify-center mb-6 shadow-lg">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <span className="text-[#FFEB3B] text-xs tracking-[0.2em] uppercase font-semibold">Perfect Crunch</span>
              <h3 className="text-2xl text-white font-bold mt-2 mb-4 font-display">Crispy Excellence</h3>
              <p className="text-white/80 leading-relaxed">
                Every item is fried to perfection, ensuring that perfect golden crunch that 
                makes every bite irresistible.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-[#E91E63]/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-[#E91E63] flex items-center justify-center mb-6 shadow-lg">
                <Handshake className="w-7 h-7 text-white" />
              </div>
              <span className="text-[#FFEB3B] text-xs tracking-[0.2em] uppercase font-semibold">Bold Flavors</span>
              <h3 className="text-2xl text-white font-bold mt-2 mb-4 font-display">Energetic Taste</h3>
              <p className="text-white/80 leading-relaxed">
                Bold, modern flavors that pack a punch. Every dish is designed to be fun, 
                indulgent, and absolutely delicious.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-[#E91E63]/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-[#E91E63] flex items-center justify-center mb-6 shadow-lg">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <span className="text-[#FFEB3B] text-xs tracking-[0.2em] uppercase font-semibold">Indulgent</span>
              <h3 className="text-2xl text-white font-bold mt-2 mb-4 font-display">Pure Joy</h3>
              <p className="text-white/80 leading-relaxed">
                Sometimes you just need something fried! We bring you the perfect indulgent 
                treats that make every moment special.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="min-h-screen flex items-center bg-[#212121] overflow-hidden scroll-snap-section">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#E91E63] text-sm tracking-[0.3em] uppercase font-semibold">Our Menu</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mt-4 mb-6 leading-tight font-display">
              Taste the
              <span className="block text-[#FFEB3B]">
                Crunch
              </span>
            </h2>
            <p className="text-white/70 text-lg">
              Each dish is perfectly fried to golden perfection.
            </p>
          </div>
          <div className="flex gap-6 overflow-x-auto scrollbar-hide px-6 pb-4 snap-x snap-mandatory">
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
                    <div className="w-full h-full bg-gradient-to-br from-[#E91E63] to-[#FFEB3B] flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">Fried</span>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#FFEB3B] text-[#212121] text-xs font-semibold rounded-full shadow-md">
                      {item.badge}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl text-white font-bold mb-2 group-hover:text-[#FFEB3B] transition-colors duration-300 font-display">
                  {item.name}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="min-h-screen flex items-center bg-[#FAFAFA] overflow-hidden scroll-snap-section">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#E91E63] text-sm tracking-[0.3em] uppercase font-semibold">Testimonials</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#212121] font-bold mt-4 mb-6 leading-tight font-display">
              What Our
              <span className="block text-[#E91E63]">
                Customers Say
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 relative border border-[#E91E63]/10"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-[#E91E63]/20" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FFEB3B] text-[#FFEB3B]" />
                  ))}
                </div>
                <p className="text-[#212121] text-lg leading-relaxed mb-6">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#E91E63] flex items-center justify-center text-white font-bold">
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

      <section id="contact" className="min-h-screen flex items-center bg-[#FAFAFA] overflow-hidden scroll-snap-section">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#D32F2F] rounded-full mb-6">
              <Instagram className="w-5 h-5 text-white" />
              <span className="font-semibold text-white">@allthingsfried</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[#212121] font-bold mb-4 font-display">Follow Our Culinary Journey</h2>
            <p className="text-[#212121]/70">Behind-the-scenes, recipes, and food stories from our kitchen to yours.</p>
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
                        <div className="bg-[#FF5722]/90 rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
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
              href="https://instagram.com/allthingsfried"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#212121] text-white font-semibold rounded-lg hover:bg-[#212121]/80 transition-all duration-300 shadow-md hover:shadow-lg"
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

export default AllThingsFried;

