import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsStrip from "../components/NewsStrip";
import CounterAnimation from "../components/CounterAnimation";
import SEO from "../components/SEO";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Star,
  PhoneCall,
  Search,
  Boxes,
  GraduationCap,
  Smartphone,
  Rocket,
} from "lucide-react";

const Index = () => {
  const brands = [
    // Row 1
    {
      name: "Khichdi Bar",
      logo: "/lovable-uploads/235a933c-2973-43db-8419-1bc689100f0a.png",
      route: "/khichdi-bar",
      cuisine: "Comfort In Every Bowl",
    },
    {
      name: "Dil Punjabi Daily",
      logo: "/lovable-uploads/DIL_daily_new.png",
      route: "/dil-punjabi-daily",
      cuisine: "Homestyle Comfort, Wholesome Meals",
    },
    {
      name: "Bihari Bowl",
      logo: "/lovable-uploads/bb_logo.png",
      route: "/bihari-bowl",
      cuisine: "Eastern Flavors, Authentic Taste",
    },
    {
      name: "Bhole ke Chole",
      logo: "/lovable-uploads/cdf67c56-7bd7-4023-af81-bf258fe60fe3.png",
      route: "/bhole-ke-chole",
      cuisine: "Street Food, Done Right",
    },
    // Row 2
    {
      name: "House Of Andhra",
      logo: "/lovable-uploads/1310a9da-ccbe-4fa6-bc06-51441a0872ba.png",
      route: "/house-of-andhra",
      cuisine: "Where Spice Meets Soul",
    },
    {
      name: "The Chaat Cult",
      logo: "/lovable-uploads/tcc.png",
      route: "/the-chaat-cult",
      cuisine: "Tangy. Spicy. Addictive.",
    },
    {
      name: "Junglee Kitchen",
      logo: "/lovable-uploads/junglee logo.png",
      route: "/junglee-kitchen",
      cuisine: "Kapoor Khandaan Ka Khana",
    },
    {
      name: "VEGERAMA",
      logo: "/lovable-uploads/vegerama_new-Photoroom.png",
      route: "/vegerama",
      cuisine: "Pure Veg & Vrat-Friendly Meals",
    },
    {
      name: "Aahar",
      logo: "/lovable-uploads/55d6ad50-361d-42cd-b556-c283b2ee23e4.png",
      route: "/aahar",
      cuisine: "South India's Rich Flavours",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f6]">
      <SEO
        title="Dil Foods - India's Largest Virtual Brands Chain"
        description="10 regional virtual brands, 200+ outlets across 5 cities. Order authentic Indian flavours from Bhole ke Chole, Aahar, Junglee Kitchen, House of Andhra, Dil Daily, Khichdi Bar, The Chaat Cult, VEGERAMA, and Bihari Bowl — or partner your kitchen with Dil Foods."
        path="/"
      />
      <Navbar />

      {/* Hero Section — Brand-first composition */}
      <section
        id="hero"
        className="relative min-h-[88svh] md:min-h-[90vh] flex items-start md:items-center overflow-hidden bg-[#FDF9F2]"
      >
        {/* Soft ambient blooms */}
        <div className="pointer-events-none absolute top-0 left-1/3 w-[640px] h-[640px] rounded-full bg-[#E91E63]/[0.05] blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-32 -right-24 w-[520px] h-[520px] rounded-full bg-[#c9a227]/[0.08] blur-3xl"></div>

        {/* Subtle line grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-12 md:pt-24 md:pb-14">
          {/* Live eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#1a1a1a]/8 shadow-[0_1px_2px_rgba(0,0,0,0.04)] mb-6 animate-fadeIn">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] md:text-[11px] font-semibold tracking-[0.16em] text-[#1a1a1a]/70 uppercase">
              Crafting the era of Delivery-First Dining
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-semibold tracking-[-0.02em] leading-[1] text-[#1a1a1a] text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] mb-5 animate-fadeInUp">
            India's largest
            <br />
            <span className="text-[#E91E63]">virtual brands</span> chain.
          </h1>

          {/* Subhead */}
          <p
            className="text-sm md:text-base lg:text-lg text-[#1a1a1a]/65 max-w-2xl mx-auto leading-[1.55] mb-7 animate-fadeInUp"
            style={{ animationDelay: "0.08s" }}
          >
            Bringing authentic regional flavours from kitchens across India to your doorstep.{" "}
            {/* <span className="font-semibold text-[#1a1a1a]">10 brands</span> and{" "}
            <span className="font-semibold text-[#1a1a1a]">300+ kitchens</span>{" "}
            — delivered to your door, in one tap. */}
          </p>

          {/* Brand Showcase Strip — the unique visual element */}
          <div
            className="relative mb-8 animate-fadeIn group/strip"
            style={{ animationDelay: "0.16s" }}
          >
            {/* Edge fades */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 z-10 bg-gradient-to-r from-[#FDF9F2] to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 z-10 bg-gradient-to-l from-[#FDF9F2] to-transparent pointer-events-none"></div>

            <div className="overflow-hidden">
              <div className="flex gap-3 md:gap-4 animate-marquee-slow group-hover/strip:[animation-play-state:paused]">
                {[...brands, ...brands].map((brand, i) => (
                  <Link
                    key={i}
                    to={brand.route}
                    onClick={() => window.scrollTo(0, 0)}
                    className="group/card flex-shrink-0 w-[110px] md:w-[120px] aspect-square bg-white border border-[#1a1a1a]/8 rounded-2xl p-3 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] hover:border-[#c9a227]/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                  >
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-w-full max-h-full object-contain group-hover/card:scale-110 transition-transform duration-300"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8 animate-fadeInUp"
            style={{ animationDelay: "0.24s" }}
          >
            <button
              type="button"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                window.dispatchEvent(new CustomEvent("dilfoods:open-brands"));
              }}
              className="group w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 bg-[#1a1a1a] text-white rounded-full font-medium hover:bg-[#2d2d2d] hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
            >
              Order Now
              <ArrowRight
                size={16}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </button>
            <Link
              to="/restaurant-partnership"
              onClick={() => window.scrollTo(0, 0)}
              className="group w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 bg-[#E91E63] text-white rounded-full font-semibold shadow-lg shadow-[#E91E63]/30 ring-2 ring-[#c9a227]/50 hover:bg-[#C2185B] hover:ring-[#c9a227] hover:shadow-xl hover:shadow-[#E91E63]/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              <Sparkles size={15} className="mr-2 text-[#FFD700]" />
              Become a Partner
              <ArrowRight
                size={16}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          {/* Trust pill — credentials & recognition (different from stats section below) */}
          <div
            className="flex justify-center animate-fadeIn"
            style={{ animationDelay: "0.32s" }}
          >
            <div className="inline-flex flex-wrap items-center justify-center gap-x-5 gap-y-2 px-6 py-3 rounded-full bg-white/85 backdrop-blur-md border border-[#c9a227]/40 shadow-md text-[11px] md:text-xs font-semibold tracking-[0.15em] uppercase text-[#1a1a1a]">
              {/* <span className="inline-flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-[#c9a227]" />
                FSSAI Certified
              </span>
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-[#c9a227]"></span>
              <span>ISO Compliant</span> */}
              <span className="inline-flex items-center gap-1.5">
                <Star size={14} className="text-[#c9a227] fill-[#c9a227]" />
                Featured on Shark Tank India
              </span>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <a
          href="#brands"
          className="hidden md:flex absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-1 text-[#1a1a1a]/30 hover:text-[#1a1a1a] transition-colors"
          aria-label="Scroll for more"
        >
          {/* <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <ChevronDown size={16} className="animate-bounce-slow" /> */}
        </a>
      </section>

      {/* News Strip */}
      <NewsStrip
        text="SAME KITCHEN! SAME STAFF! MORE ORDERS!!"
        bgColor="bg-gradient-to-r from-[#FFF8E1] via-[#FFEFC2] to-[#FFF8E1]"
        textColor="text-[#8a6d10]"
        speed="extremely-slow"
      />

      {/* Our Brands Section — commented out: brands are now showcased in the hero strip */}
      {/* <section id="brands" className="py-20 md:py-28 bg-[#faf9f6] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <p className="text-[11px] md:text-xs font-semibold tracking-[0.2em] text-[#8a6d10] uppercase mb-3">
              Our Portfolio
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#1a1a1a] mb-4 leading-tight">
              Bringing India to <span className="text-[#E91E63]">your plate</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Ten regional brands, one common goal — caring for the daily eating
              patterns of Indian consumers across geographies and cultures.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-1 md:gap-x-6 md:gap-y-2 max-w-6xl mx-auto">
            {brands
              .filter((brand) => brand.name !== "Aahar")
              .map((brand, index) => {
                const linkProps = brand.route
                  ? { to: brand.route, onClick: () => window.scrollTo(0, 0) }
                  : null;
                const inner = (
                  <div className="group flex flex-col items-center text-center">
                    <div className="w-32 h-32 md:w-44 md:h-44 lg:w-48 lg:h-48 rounded-full bg-white border border-gray-200 group-hover:border-[#c9a227] shadow-sm group-hover:shadow-xl group-hover:scale-[1.2] transition-all duration-300 flex items-center justify-center p-5 md:p-6">
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div className="h-5 mt-5 md:mt-6 flex items-center justify-center">
                      <p className="text-xs md:text-sm text-[#8a6d10] font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {brand.cuisine}
                      </p>
                    </div>
                  </div>
                );
                return linkProps ? (
                  <Link key={index} {...linkProps}>
                    {inner}
                  </Link>
                ) : (
                  <a
                    key={index}
                    href="https://orders.dilfoods.in/?_gl=1*32xgw6*_ga*NDA1NTU0Mjc1LjE3MTYxMDgwNjU.*_ga_7CQ31SQHW5*MTc0MjExODExOC4xNS4wLjE3NDIxMTgxMTguMC4wLjA.*_ga_VCDE3GHY4J*MTc0MjExODExOC4xNS4wLjE3NDIxMTgxMTguMC4wLjA."
                    target="_blank"
                    rel="noreferrer"
                  >
                    {inner}
                  </a>
                );
              })}
          </div>

        </div>
      </section> */}

      {/* Order Platforms Strip — Available on your favourite apps */}
      <section className="py-14 md:py-16 bg-white border-y border-[#c9a227]/15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-[11px] md:text-xs font-semibold tracking-[0.2em] text-[#8a6d10] uppercase mb-2">
              Available On
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-[#1a1a1a]">
              Order Dil brands on your favourite app
            </h2>
            {/* <p className="text-sm text-gray-500 mt-2">
              Tap a brand above to see ordering options
            </p> */}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {[
              { name: "Swiggy", color: "#FC8019" },
              { name: "Zomato", color: "#E23744" },
              { name: "Magicpin", color: "#E91E63" },
            ].map((p) => (
              <div
                key={p.name}
                className="flex items-center justify-center min-w-[160px] md:min-w-[180px] px-6 py-4 bg-[#faf9f6] rounded-2xl border border-gray-100"
              >
                <span
                  className="font-display text-xl md:text-2xl font-bold tracking-tight"
                  style={{ color: p.color }}
                >
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats & Trust Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[11px] md:text-xs font-semibold tracking-[0.2em] text-[#8a6d10] uppercase mb-3">
              Our Reach
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#1a1a1a] mb-3">
              Trusted by millions
            </h2>
            <p className="text-base text-[#666666]">
              Loved by 3 million+ foodies across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <CounterAnimation end={10} label="Brands" />
            <CounterAnimation end={300} label="Outlets" suffix="+" />
            <CounterAnimation end={6} label="Cities" />
          </div>

          <div className="flex justify-center gap-8 text-sm text-[#666666]">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#c9a227] rounded-full"></div>
              FSSAI Certified
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#c9a227] rounded-full"></div>
              ISO Compliant
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#c9a227] rounded-full"></div>
              Hygiene First
            </span>
          </div>
        </div>
      </section>


      {/* How Partnership Works - Flowchart Section */}
      <section id="how-it-works" className="py-16 md:py-24 bg-white relative overflow-hidden">
        {/* subtle decorative gradient */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-[#FFF8E1] to-transparent opacity-60 blur-2xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 md:mb-20">
            <p className="text-[11px] md:text-xs font-semibold tracking-[0.2em] text-[#8a6d10] uppercase mb-3">
              For Restaurant Partners
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#1a1a1a] mb-4 leading-tight">
              How partnership{" "}
              <span className="text-[#E91E63]">works</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Same kitchen. Same staff. More orders. Get up and running with Dil
              Foods in 6 simple steps.
            </p>
          </div>

          {/* Flowchart - Desktop horizontal */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connector dotted line */}
              <div
                className="absolute top-8 left-[8%] right-[8%] h-px"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #d1d5db 50%, transparent 50%)",
                  backgroundSize: "12px 1px",
                  backgroundRepeat: "repeat-x",
                }}
              ></div>

              <div className="relative grid grid-cols-6 gap-3">
                {[
                  {
                    icon: PhoneCall,
                    step: "1",
                    title: "Connect",
                    desc: "Fill the enquiry form. We contact you within 24 hours to understand your business and requirements.",
                    from: "#E91E63",
                    to: "#C2185B",
                  },
                  {
                    icon: Search,
                    step: "2",
                    title: "Kitchen Assessment",
                    desc: "We assess your kitchen space and capabilities, including storage, freezer capacity.",
                    from: "#4B0076",
                    to: "#3a005c",
                  },
                  {
                    icon: Boxes,
                    step: "3",
                    title: "Brand Additions",
                    desc: "Based on your kitchen capabilities, utilization and geography, we select brands for you.",
                    from: "#c9a227",
                    to: "#a8871f",
                  },
                  {
                    icon: GraduationCap,
                    step: "4",
                    title: "Training",
                    desc: "Our chefs visit your restaurant in person and train your team on a simple 3-step flow.",
                    // flow: ["Assemble", "Heat", "Dispatch"],
                    from: "#0891B2",
                    to: "#0E7490",
                  },
                  {
                    icon: Smartphone,
                    step: "5",
                    title: "Tech",
                    desc: "We onboard your assigned brands on Swiggy, Zomato and more — your outlet goes live with our brands.",
                    from: "#F97316",
                    to: "#c25608",
                  },
                  {
                    icon: Rocket,
                    step: "6",
                    title: "Go Live",
                    desc: "New orders start flowing on all platforms. Same kitchen, same staff — more revenue every month.",
                    from: "#2E7D32",
                    to: "#1b5e20",
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="relative flex flex-col items-center text-center group"
                    >
                      {/* Icon circle */}
                      <div className="relative z-10 mb-5">
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg shadow-black/10 ring-4 ring-white group-hover:ring-[#c9a227]/40 group-hover:scale-110 transition-all duration-300"
                          style={{ background: `linear-gradient(to bottom right, ${item.from}, ${item.to})` }}
                        >
                          <Icon size={24} className="text-white" />
                        </div>
                        {/* Step number badge */}
                        <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-white shadow-md ring-1 ring-gray-200 flex items-center justify-center">
                          <span className="text-xs font-bold text-[#8a6d10]">
                            {item.step}
                          </span>
                        </div>
                      </div>

                      {/* Card */}
                      <div className="bg-[#faf9f6] rounded-2xl p-4 w-full border border-gray-100 group-hover:border-[#c9a227]/40 group-hover:shadow-md transition-all duration-300">
                        <h3 className="font-display text-base font-semibold text-[#1a1a1a] mb-2 leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {item.desc}
                        </p>
                        {"flow" in item && item.flow && (
                          <div className="mt-2.5 flex items-center justify-center gap-1.5 text-[10px] font-normal uppercase tracking-wider text-[#1a1a1a] whitespace-nowrap">
                            {item.flow.map((s, i, arr) => (
                              <span key={i} className="flex items-center gap-1.5">
                                {s}
                                {i < arr.length - 1 && (
                                  <span className="text-[#c9a227]">→</span>
                                )}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Flowchart - Mobile/Tablet vertical */}
          <div className="lg:hidden space-y-4 max-w-md mx-auto">
            {[
              {
                icon: PhoneCall,
                step: "01",
                title: "Connect",
                desc: "You fill the enquiry form on this website. We contact you within 24 hours to understand your business and requirements.",
                from: "#E91E63",
                to: "#C2185B",
              },
              {
                icon: Search,
                step: "02",
                title: "Kitchen Assessment",
                desc: "We assess your kitchen space and capabilities, including storage, freezer capacity and other things.",
                from: "#4B0076",
                to: "#3a005c",
              },
              {
                icon: Boxes,
                step: "03",
                title: "Brand Additions",
                desc: "Based on your kitchen capabilities, utilization and geography, we select brands for you.",
                from: "#c9a227",
                to: "#a8871f",
              },
              {
                icon: GraduationCap,
                step: "04",
                title: "Training",
                desc: "Our chefs visit your restaurant in person and train your team on a simple 3-step flow.",
                flow: ["Assemble", "Heat", "Dispatch"],
                from: "#0891B2",
                to: "#0E7490",
              },
              {
                icon: Smartphone,
                step: "05",
                title: "Tech",
                desc: "We onboard your assigned brands on Swiggy, Zomato and more — your outlet goes live with our brands.",
                from: "#F97316",
                to: "#c25608",
              },
              {
                icon: Rocket,
                step: "06",
                title: "Go Live",
                desc: "New orders start flowing in across every platform. Same kitchen, same staff — more revenue every month.",
                from: "#2E7D32",
                to: "#1b5e20",
              },
            ].map((item, idx, arr) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="relative">
                  <div className="flex gap-4 items-start">
                    {/* Icon column with vertical line */}
                    <div className="flex flex-col items-center">
                      <div className="relative">
                        <div
                          className="w-14 h-14 rounded-full flex items-center justify-center shadow-md ring-4 ring-white"
                          style={{ background: `linear-gradient(to bottom right, ${item.from}, ${item.to})` }}
                        >
                          <Icon size={22} className="text-white" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-white shadow ring-1 ring-gray-200 flex items-center justify-center">
                          <span className="text-sm font-bold text-[#8a6d10]">
                            {item.step}
                          </span>
                        </div>
                      </div>
                      {idx < arr.length - 1 && (
                        <div
                          className="w-px flex-1 mt-2 mb-2 min-h-[40px]"
                          style={{
                            backgroundImage:
                              "linear-gradient(to bottom, #d1d5db 50%, transparent 50%)",
                            backgroundSize: "1px 8px",
                            backgroundRepeat: "repeat-y",
                          }}
                        ></div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-[#faf9f6] rounded-xl p-4 border border-gray-100 mb-2">
                      <h3 className="font-display text-base font-semibold text-[#1a1a1a] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                      {"flow" in item && item.flow && (
                        <div className="mt-2.5 flex items-center gap-2 text-[11px] font-normal uppercase tracking-wider text-[#1a1a1a] whitespace-nowrap">
                          {item.flow.map((s, i, arr) => (
                            <span key={i} className="flex items-center gap-2">
                              {s}
                              {i < arr.length - 1 && (
                                <span className="text-[#c9a227]">→</span>
                              )}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link
              to="/restaurant-partnership"
              onClick={() => window.scrollTo(0, 0)}
              className="group inline-flex items-center justify-center px-7 py-3.5 bg-[#1a1a1a] text-white rounded-full font-semibold hover:bg-[#2d2d2d] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
            >
              Start Your Partnership Journey
              <ArrowRight
                size={18}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Cities We Serve Section */}
      <section id="cities" className="py-20 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[11px] md:text-xs font-semibold tracking-[0.2em] text-[#8a6d10] uppercase mb-3">
              Where We Serve
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-3 text-[#1a1a1a]">
              Cities we{" "}
              <span className="text-[#E91E63]">serve</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Currently live in 6 cities with plans to expand to 9 more
              locations soon
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <img
              src="/lovable-uploads/Asset 2.png"
              alt="India Map"
              className="h-[300px] md:h-[500px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* Partner With Us Section (B2B) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[11px] md:text-xs font-semibold tracking-[0.2em] text-[#8a6d10] uppercase mb-3">
                Join Our Network
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#1a1a1a] mb-4 leading-tight">
                Partner With{" "}
                <span className="text-[#E91E63]">Us</span>
              </h2>
              <p className="text-base text-[#666666] mb-6">
                Turn your existing kitchen into a profit hub. Same kitchen, same staff, more orders.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#c9a227] rounded-full flex-shrink-0 mt-0.5"></div>
                  <span className="text-sm text-[#666666]">Zero infrastructure investment</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#c9a227] rounded-full flex-shrink-0 mt-0.5"></div>
                  <span className="text-sm text-[#666666]">Ready-to-cook products supplied</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#c9a227] rounded-full flex-shrink-0 mt-0.5"></div>
                  <span className="text-sm text-[#666666]">Increased revenue from existing setup</span>
                </li>
              </ul>
              <Link
                to="/restaurant-partnership"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center justify-center px-6 py-3 bg-[#1a1a1a] text-white rounded-lg font-medium hover:bg-[#2d2d2d] transition-all duration-300"
              >
                Become a Partner <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-black/10 ring-1 ring-black/5">
              <img
                src="/lovable-uploads/partner_us1.png"
                alt="Restaurant Partnership"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Index;

