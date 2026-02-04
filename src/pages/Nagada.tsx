import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import BrandNavigation from "../components/BrandNavigation";
import FloatingBrandSuggestion from "../components/BrandNavigation";
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

const Nagada = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Nagada | Traditional Tastes, Timeless";
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      name: "Traditional Thali",
      image: "",
      description: "Complete meal with regional specialties, a celebration of traditional flavors",
      badge: "Bestseller",
    },
    {
      name: "Festival Special",
      image: "",
      description: "Special dishes prepared for celebrations, bringing cultural heritage to your plate",
      badge: "Signature",
    },
    {
      name: "Regional Delicacy",
      image: "",
      description: "Authentic regional dish with traditional spices and cooking methods",
      badge: "Popular",
    },
  ];

  const testimonials = [
    {
      name: "Anjali Iyer",
      location: "Chennai",
      text: "Nagada brings the elegance of traditional cuisine to modern dining. The thali is a masterpiece!",
      initial: "A",
    },
    {
      name: "Vikram Menon",
      location: "Kerala",
      text: "Traditional tastes, timeless indeed! Every dish is a celebration of our cultural heritage.",
      initial: "V",
    },
    {
      name: "Meera Nair",
      location: "Bangalore",
      text: "The festival special dishes are outstanding. This is how traditional food should taste!",
      initial: "M",
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
    <div className="min-h-screen bg-background nagada-page scroll-snap-container">
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
              <Link to="/nagada" className="text-2xl text-white font-bold font-display">
                Nagada
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
            src="https://dilwebsite.s3.ap-south-1.amazonaws.com/Nagada/Butter Chicken Roll.jpg"
            alt="Traditional Feast - Nagada"
            className="w-full h-full object-cover object-center"
          />
        </div>
        {/* Dark Gradient Overlay - using brand hero gradient */}
        <div className="absolute inset-0 z-[1] bg-gradient-hero"></div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-secondary text-lg md:text-xl tracking-[0.3em] uppercase mb-6 font-semibold">
              TRADITIONAL TASTES, TIMELESS
            </p>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight font-display">
              <span className="text-white">Nagada</span>
            </h1>
            
            <p className="text-white/95 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
              Traditional, elegant, and culturally rich. Experience the heritage of regional cuisine, 
              where every dish tells a story of tradition and celebration.
            </p>
            
            {/* Platform Availability */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <div className="flex items-center gap-3 px-6 py-3 bg-primary/20 backdrop-blur-sm rounded-full border border-secondary/30 hover:bg-primary/30 transition-all duration-300">
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
              <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden shadow-strong bg-secondary/20">
                <img
                  src="/lovable-uploads/Nagadalogo.png"
                  alt="Premium Heritage - Nagada"
                  className="w-full h-full object-contain object-center bg-white"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-secondary text-foreground p-4 lg:p-5 rounded-xl shadow-strong max-w-[280px] z-10">
                <p className="text-lg lg:text-xl italic mb-1 font-semibold">"Timeless taste, premium quality"</p>
                <p className="text-xs opacity-80">— The Nagada Promise</p>
              </div>
            </div>
            <div>
              <span className="text-secondary text-sm tracking-[0.3em] uppercase font-semibold">Premium Heritage</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mt-3 mb-6 leading-tight font-display">
                The Golden Standard of
                <span className="block text-secondary">Culinary Excellence</span>
              </h2>
              <div className="space-y-4 text-white/80 text-base md:text-lg leading-relaxed">
                <p>
                  <span className="text-white font-semibold">Nagada</span> represents the pinnacle of culinary 
                  craftsmanship, where traditional recipes meet premium quality. Our brand stands for excellence, 
                  authenticity, and the golden standard of taste that discerning food lovers appreciate.
                </p>
                <p>
                  Every dish is meticulously crafted using the finest ingredients and time-honored techniques. 
                  We believe that great food is an art form—one that requires patience, skill, and an unwavering 
                  commitment to quality that never compromises.
                </p>
                <p>
                  From select spices to premium cuts, every element is chosen with care. Our culinary philosophy 
                  centers on creating memorable dining experiences that celebrate the rich heritage of traditional 
                  cooking while meeting modern expectations of excellence.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-6">
                <div>
                  <p className="text-3xl md:text-4xl text-secondary font-bold">12+</p>
                  <p className="text-xs md:text-sm text-white/70">Premium Dishes</p>
                </div>
                <div className="w-px h-10 bg-white/20"></div>
                <div>
                  <p className="text-3xl md:text-4xl text-secondary font-bold">5★</p>
                  <p className="text-xs md:text-sm text-white/70">Quality Standard</p>
                </div>
                <div className="w-px h-10 bg-white/20"></div>
                <div>
                  <p className="text-3xl md:text-4xl text-secondary font-bold">∞</p>
                  <p className="text-xs md:text-sm text-white/70">Excellence</p>
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
              The Heritage of
              <span className="block text-primary">Tradition</span>
            </h2>
            <p className="text-foreground/80 text-lg">
              Preserving cultural heritage through authentic recipes and traditional cooking methods.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 hover:bg-white transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6 shadow-lg">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <span className="text-primary text-xs tracking-[0.2em] uppercase font-semibold">Cultural Heritage</span>
              <h3 className="text-2xl text-foreground font-bold mt-2 mb-4 font-display">Traditional Recipes</h3>
              <p className="text-foreground/80 leading-relaxed">
                Our dishes are rooted in traditional recipes that have been passed down through 
                generations, preserving the authentic flavors of regional cuisine.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 hover:bg-white transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6 shadow-lg">
                <Handshake className="w-7 h-7 text-white" />
              </div>
              <span className="text-primary text-xs tracking-[0.2em] uppercase font-semibold">Elegant Dining</span>
              <h3 className="text-2xl text-foreground font-bold mt-2 mb-4 font-display">Celebration Food</h3>
              <p className="text-foreground/80 leading-relaxed">
                Every dish is prepared with the elegance and care that traditional cuisine deserves, 
                making every meal a celebration.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 hover:bg-white transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6 shadow-lg">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <span className="text-primary text-xs tracking-[0.2em] uppercase font-semibold">Timeless</span>
              <h3 className="text-2xl text-foreground font-bold mt-2 mb-4 font-display">Enduring Flavors</h3>
              <p className="text-foreground/80 leading-relaxed">
                Traditional tastes that stand the test of time, bringing the sophistication and 
                depth of regional cuisine to every plate.
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
                Tradition
              </span>
            </h2>
            <p className="text-foreground/70 text-lg">
              Each dish is a celebration of traditional flavors and cultural heritage.
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
                    <div className="w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">Nagada</span>
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
                <p className="text-foreground/70 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
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
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-secondary rounded-full mb-6">
              <Instagram className="w-5 h-5 text-foreground" />
              <span className="font-semibold text-foreground">@nagada</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-foreground font-bold mb-4 font-display">Follow Our Culinary Journey</h2>
            <p className="text-foreground/70">Behind-the-scenes, traditional recipes, and timeless food stories from our kitchen to yours.</p>
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
                        <div className="bg-secondary/90 rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                          <Instagram className="w-8 h-8 text-foreground" />
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
              href="https://instagram.com/nagada"
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

      <div className="scroll-snap-section">
        <Footer />
      </div>
    </div>
  );
};

export default Nagada;

