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

const Aahar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Aahar | Pure Indian Flavors, Every Day";
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      name: "Steamed Idli (2 Pcs)",
      image: "/Aahar/Steamed_Idli_2_Pcs.jpg",
      description: "Soft and fluffy steamed idlis served with coconut chutney and sambar - the perfect South Indian comfort food",
      badge: "Bestseller",
    },
    {
      name: "Thatte Idli (1 Pc)",
      image: "/Aahar/Thatte_Idli_1_Pc.jpg",
      description: "Large, plate-sized Karnataka special idli, soft and spongy, served with traditional accompaniments",
      badge: "Signature",
    },
    {
      name: "Thatte Idli + Medu Vada Combo",
      image: "/Aahar/Thatte_Idli_1_Pcs_1_Medu_Vada.png",
      description: "Perfect combination of soft thatte idli with crispy medu vada, served with chutney and sambar",
      badge: "Popular",
    },
    {
      name: "Dip Idli with Sambhar (2 Pcs)",
      image: "/Aahar/Dip_Idli_Sambhar_2Pcs_Chutney_100_ML.png",
      description: "Soft idlis served with flavorful sambar for dipping and coconut chutney - a traditional South Indian delight",
      badge: "Traditional",
    },
    // {
    //   name: "Dip Vada Sambhar (1 Pc)",
    //   image: "/Aahar/Dip_Vada_Sambhar_1_Pc.jpg",
    //   description: "Crispy medu vada served with aromatic sambar for dipping - the perfect tea-time snack",
    //   badge: "Classic",
    // },
    {
      name: "Onion Uttapam",
      image: "/Aahar/Onion_Uttapam.jpg",
      description: "Thick, fluffy South Indian pancake topped with fresh onions and served with chutney and sambar",
      badge: "Popular",
    },
    {
      name: "Bisi Bele Bath (500 ML)",
      image: "/Aahar/Bisi_Bele_Bath_500_ML.jpg",
      description: "Karnataka's famous one-pot meal with rice, lentils, vegetables and aromatic spices - comfort in every spoonful",
      badge: "Specialty",
    },
    {
      name: "Lemon Rice with Chutney (500 ML)",
      image: "/Aahar/Lemon_Rice_500_ML_Chutney_100_ML.jpg",
      description: "Tangy and flavorful lemon rice tempered with curry leaves and spices, served with coconut chutney",
      badge: "Chef's Special",
    },
    {
      name: "Ghee Pongal (250 ML)",
      image: "/Aahar/Ghee_Pongal_250_ML.jpg",
      description: "Creamy and comforting rice and lentil dish cooked with ghee and spices - pure indulgence",
      badge: "Traditional",
    },
    // {
    //   name: "Rice of the Day (500 ML)",
    //   image: "/Aahar/Rice_Of_The_Day_500_ML.jpg",
    //   description: "Chef's daily special rice preparation with seasonal vegetables and authentic South Indian flavors",
    //   badge: "Daily Special",
    // },
  ];

  const testimonials = [
    {
      name: "Rahul Mehta",
      location: "Delhi",
      text: "Aahar brings authentic Indian flavors to my home every day. The dal tadka is exactly like my mother makes it!",
      initial: "R",
    },
    {
      name: "Sneha Reddy",
      location: "Hyderabad",
      text: "Pure Indian food at its best. Every dish tastes homemade and brings back childhood memories.",
      initial: "S",
    },
    {
      name: "Amit Kumar",
      location: "Mumbai",
      text: "Finally, a brand that understands what real Indian food should taste like. Highly recommended!",
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
    <div className="min-h-screen bg-background aahar-page scroll-snap-container">
      {/* Custom Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#E53935]/95 backdrop-blur-md shadow-lg" : "bg-black/20 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="flex items-center gap-2 text-white/90 hover:text-[#43A047] transition-colors duration-300 group"
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
              <Link to="/aahar" className="text-2xl text-white font-bold font-display">
                Aahar
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("menu");
                }}
                className="text-white/90 hover:text-[#43A047] transition-colors duration-300 font-medium"
              >
                Menu
              </a>
              <a
                href="#reviews"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("reviews");
                }}
                className="text-white/90 hover:text-[#43A047] transition-colors duration-300 font-medium"
              >
                Reviews
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="text-white/90 hover:text-[#43A047] transition-colors duration-300 font-medium"
              >
                Contact
              </a>
              <a
                href="https://orders.dilfoods.in/?_gl=1*32xgw6*_ga*NDA1NTU0Mjc1LjE3MTYxMDgwNjU.*_ga_7CQ31SQHW5*MTc0MjExODExOC4xNS4wLjE3NDIxMTgxMTguMC4wLjA.*_ga_VCDE3GHY4J*MTc0MjExODExOC4xNS4wLjE3NDIxMTgxMTguMC4wLjA."
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 bg-[#F4A460] text-[#3E2723] font-semibold rounded-lg hover:bg-[#F4A460]/90 transition-all duration-300"
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
                className="flex items-center gap-2 text-white/90 hover:text-[#43A047] transition-colors duration-300 font-medium py-2"
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
                className="block text-white/90 hover:text-[#43A047] transition-colors duration-300 font-medium py-2"
              >
                Menu
              </a>
              <a
                href="#reviews"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("reviews");
                }}
                className="block text-white/90 hover:text-[#43A047] transition-colors duration-300 font-medium py-2"
              >
                Reviews
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="block text-white/90 hover:text-[#43A047] transition-colors duration-300 font-medium py-2"
              >
                Contact
              </a>
              <a
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("menu");
                }}
                className="block px-6 py-2.5 bg-[#F4A460] text-[#3E2723] font-semibold rounded-lg hover:bg-[#F4A460]/90 transition-all duration-300 text-center"
              >
                Order Now
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-snap-section">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img
            src="/Aahar/Aahar Display image - Swiggy.png"
            alt="Traditional Indian Feast - Aahar"
            className="w-full h-full object-cover object-center"
          />
        </div>
        {/* Dark Gradient Overlay - using brand hero gradient */}
        <div className="absolute inset-0 z-[1] bg-gradient-hero"></div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#F4A460] text-lg md:text-xl tracking-[0.3em] uppercase mb-6 font-semibold">
              PURE INDIAN FLAVORS
            </p>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight font-display">
              <span className="text-white">Aahar</span>
            </h1>
            
            <p className="text-white/95 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Pure Indian Flavors, Every Day. Experience the warmth of traditional Indian cuisine, 
              crafted with love and served with authenticity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("menu");
                }}
                className="px-8 py-4 bg-gradient-to-r from-[#F4A460] to-[#C85A3A] text-[#3E2723] font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Explore Menu
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Heritage Section */}
      <section className="min-h-screen flex items-center bg-[#E53935] overflow-hidden scroll-snap-section">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden shadow-strong bg-[#F4A460]/20">
                <img
                  src="/Aahar/Aahar Display image - Swiggy.png"
                  alt="South Indian Heritage - Aahar"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#E53935]/60 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-[#F4A460] text-[#3E2723] p-4 lg:p-5 rounded-xl shadow-strong max-w-[280px] z-10">
                <p className="text-lg lg:text-xl italic mb-1 font-semibold">"Pure Indian flavors, every day"</p>
                <p className="text-xs opacity-80">— The Aahar Promise</p>
              </div>
            </div>
            <div>
              <span className="text-[#F4A460] text-sm tracking-[0.3em] uppercase font-semibold">Brand Heritage</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mt-3 mb-6 leading-tight font-display">
                The Soul of
                <span className="block text-[#F4A460]">South India</span>
              </h2>
              <div className="space-y-4 text-white/80 text-base md:text-lg leading-relaxed">
                <p>
                  <span className="text-white font-semibold">Aahar</span> represents more than just food—it 
                  embodies the timeless traditions, warm hospitality, and authentic flavors that have been 
                  the cornerstone of South Indian cuisine for generations.
                </p>
                <p>
                  Every recipe traces back to ancient South Indian culinary traditions. From the fermented 
                  batters of idli and dosa to the aromatic spice blends of sambar and rasam, we preserve 
                  the authentic techniques passed down through generations of home cooks.
                </p>
                <p>
                  We source the finest rice from Tamil Nadu's fertile plains, lentils from Karnataka's 
                  abundant harvests, and coconuts from Kerala's coastal groves. Each ingredient is carefully 
                  selected to ensure authenticity and superior taste.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-6">
                <div>
                  <p className="text-3xl md:text-4xl text-[#F4A460] font-bold">15+</p>
                  <p className="text-xs md:text-sm text-white/70">Authentic Dishes</p>
                </div>
                <div className="w-px h-10 bg-white/20"></div>
                <div>
                  <p className="text-3xl md:text-4xl text-[#F4A460] font-bold">4</p>
                  <p className="text-xs md:text-sm text-white/70">South Indian States</p>
                </div>
                <div className="w-px h-10 bg-white/20"></div>
                <div>
                  <p className="text-3xl md:text-4xl text-[#F4A460] font-bold">∞</p>
                  <p className="text-xs md:text-sm text-white/70">Love & Authenticity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="min-h-screen flex items-center bg-[#FFF8E7] overflow-hidden scroll-snap-section">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#E53935] text-sm tracking-[0.3em] uppercase font-semibold">Our Journey</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#3E2723] font-bold mt-4 mb-6 leading-tight font-display">
              The Essence of
              <span className="block text-[#E53935]">Aahar</span>
            </h2>
            <p className="text-[#3E2723]/80 text-lg">
              Every dish tells a story of tradition, warmth, and authentic Indian flavors that have been 
              passed down through generations.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm border border-[#C85A3A]/20 rounded-2xl p-8 hover:bg-white transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-[#E53935] flex items-center justify-center mb-6 shadow-lg">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <span className="text-[#E53935] text-xs tracking-[0.2em] uppercase font-semibold">Authentic Recipes</span>
              <h3 className="text-2xl text-[#3E2723] font-bold mt-2 mb-4 font-display">Traditional Flavors</h3>
              <p className="text-[#3E2723]/80 leading-relaxed">
                Every recipe at Aahar is rooted in traditional Indian cooking methods, using authentic 
                spices and techniques that bring out the true essence of each dish.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm border border-[#C85A3A]/20 rounded-2xl p-8 hover:bg-white transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-[#E53935] flex items-center justify-center mb-6 shadow-lg">
                <Handshake className="w-7 h-7 text-white" />
              </div>
              <span className="text-[#E53935] text-xs tracking-[0.2em] uppercase font-semibold">Quality Promise</span>
              <h3 className="text-2xl text-[#3E2723] font-bold mt-2 mb-4 font-display">Fresh Ingredients</h3>
              <p className="text-[#3E2723]/80 leading-relaxed">
                We source the finest ingredients and prepare each dish with care, ensuring that every 
                meal meets our high standards of quality and taste.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm border border-[#C85A3A]/20 rounded-2xl p-8 hover:bg-white transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-[#E53935] flex items-center justify-center mb-6 shadow-lg">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <span className="text-[#E53935] text-xs tracking-[0.2em] uppercase font-semibold">Daily Comfort</span>
              <h3 className="text-2xl text-[#3E2723] font-bold mt-2 mb-4 font-display">Home-Style Cooking</h3>
              <p className="text-[#3E2723]/80 leading-relaxed">
                Aahar brings the comfort of home-cooked meals to your table every day, with flavors 
                that remind you of family gatherings and cherished memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="min-h-screen flex items-center bg-[#FFF8E7] overflow-hidden scroll-snap-section">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#E53935] text-sm tracking-[0.3em] uppercase font-semibold">Our Menu</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#3E2723] font-bold mt-4 mb-6 leading-tight font-display">
              Taste the
              <span className="block text-[#E53935]">
                Tradition
              </span>
            </h2>
            <p className="text-[#3E2723]/70 text-lg">
              Each dish is crafted with traditional recipes and authentic Indian flavors.
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
                    <div className="w-full h-full bg-gradient-to-br from-[#C85A3A] to-[#F4A460] flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">Aahar</span>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#F4A460] text-[#3E2723] text-xs font-semibold rounded-full shadow-md">
                      {item.badge}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl text-[#3E2723] font-bold mb-2 group-hover:text-[#E53935] transition-colors duration-300 font-display">
                  {item.name}
                </h3>
                <p className="text-[#3E2723]/70 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="min-h-screen flex items-center bg-white overflow-hidden scroll-snap-section">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#E53935] text-sm tracking-[0.3em] uppercase font-semibold">Testimonials</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#3E2723] font-bold mt-4 mb-6 leading-tight font-display">
              What Our
              <span className="block text-[#E53935]">
                Customers Say
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#FFF8E7] rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 relative border border-[#C85A3A]/10"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-[#E53935]/20" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#F4A460] text-[#F4A460]" />
                  ))}
                </div>
                <p className="text-[#3E2723] text-lg leading-relaxed mb-6">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#E53935] flex items-center justify-center text-white font-bold">
                    {testimonial.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-[#3E2723]">{testimonial.name}</p>
                    <p className="text-sm text-[#3E2723]/60">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center bg-white overflow-hidden scroll-snap-section">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#8BC34A] rounded-full mb-6">
              <Instagram className="w-5 h-5 text-white" />
              <span className="font-semibold text-white">@aahar</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[#3E2723] font-bold mb-4 font-display">Follow Our Culinary Journey</h2>
            <p className="text-[#3E2723]/70">Behind-the-scenes, pure Indian recipes, and food stories from our kitchen to yours.</p>
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
                      <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-[#8BC34A]/90 rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
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
              href="https://instagram.com/aahar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#3E2723] text-white font-semibold rounded-lg hover:bg-[#3E2723]/80 transition-all duration-300 shadow-lg hover:shadow-xl"
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

export default Aahar;

