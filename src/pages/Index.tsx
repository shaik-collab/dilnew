import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsStrip from "../components/NewsStrip";
import CounterAnimation from "../components/CounterAnimation";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Star,
  ChevronDown,
  UtensilsCrossed,
  Handshake,
  PhoneCall,
  ClipboardCheck,
  Package,
  Rocket,
  TrendingUp,
} from "lucide-react";

const Index = () => {
  const brands = [
    {
      name: "Bhole ke Chole",
      logo: "/lovable-uploads/cdf67c56-7bd7-4023-af81-bf258fe60fe3.png",
      route: "/bhole-ke-chole",
      cuisine: "North Indian Street Food",
    },
    {
      name: "Aahar",
      logo: "/lovable-uploads/55d6ad50-361d-42cd-b556-c283b2ee23e4.png",
      route: "/aahar",
      cuisine: "Traditional Home-style",
    },
    {
      name: "Junglee Kitchen",
      logo: "/lovable-uploads/junglee logo.png",
      route: "/junglee-kitchen",
      cuisine: "North Indian Cuisine",
    },
    {
      name: "House Of Andhra",
      logo: "/lovable-uploads/1310a9da-ccbe-4fa6-bc06-51441a0872ba.png",
      route: "/house-of-andhra",
      cuisine: "Andhra Specialties",
    },
    {
      name: "Dil Punjabi Daily",
      logo: "/lovable-uploads/DIL_daily_new.png",
      route: "/dil-punjabi-daily",
      cuisine: "Punjabi Delights",
    },
    {
      name: "Khichdi Bar",
      logo: "/lovable-uploads/235a933c-2973-43db-8419-1bc689100f0a.png",
      route: "/khichdi-bar",
      cuisine: "Comfort Food",
    },
    {
      name: "The Chaat Cult",
      logo: "/lovable-uploads/tcc.png",
      route: "/the-chaat-cult",
      cuisine: "Indian Chaat",
    },
    {
      name: "VEGERAMA",
      logo: "/lovable-uploads/vegerama_new-Photoroom.png",
      route: "/vegerama",
      cuisine: "Pure Vegetarian",
    },
    {
      name: "Bihari Bowl",
      logo: "/lovable-uploads/bb_logo.png",
      route: "/bihari-bowl",
      cuisine: "Bihari Cuisine",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f6]">
      <Navbar />

      {/* Hero Section — Editorial parchment composition */}
      <section
        id="hero"
        className="relative min-h-[100svh] md:min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#FDF9F2]"
      >
        {/* Background kitchen image — soft blurred texture */}
        <img
          src="/lovable-uploads/kitchen.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover blur-[3px] scale-105"
        />

        {/* Parchment wash to keep the editorial feel intact */}
        <div className="absolute inset-0 bg-[#FDF9F2]/70"></div>

        {/* Decorative warm blobs */}
        <div className="pointer-events-none absolute -top-40 -left-40 w-[560px] h-[560px] rounded-full bg-[#B00020]/[0.06] blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-40 -right-40 w-[560px] h-[560px] rounded-full bg-[#c9a227]/[0.10] blur-3xl"></div>
        <div className="pointer-events-none absolute top-1/3 -right-24 w-[320px] h-[320px] rounded-full bg-[#4B0076]/[0.04] blur-3xl"></div>

        {/* Subtle dotted grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #c9a227 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        ></div>

        {/* Decorative ornamental SVG — top center */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute top-20 md:top-24 left-1/2 -translate-x-1/2 w-32 md:w-40 h-auto opacity-50"
          viewBox="0 0 200 40"
          fill="none"
        >
          <path
            d="M10 20 Q 50 0, 100 20 T 190 20"
            stroke="#c9a227"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <circle cx="100" cy="20" r="3" fill="#B00020" />
          <circle cx="60" cy="20" r="1.5" fill="#c9a227" />
          <circle cx="140" cy="20" r="1.5" fill="#c9a227" />
          <circle cx="30" cy="20" r="1" fill="#c9a227" opacity="0.6" />
          <circle cx="170" cy="20" r="1" fill="#c9a227" opacity="0.6" />
        </svg>

        {/* Floating decorative chips — desktop only */}
        <div className="hidden lg:block pointer-events-none absolute top-1/4 left-[8%] animate-float">
          <div className="w-14 h-14 rounded-2xl bg-white shadow-lg ring-1 ring-[#c9a227]/20 flex items-center justify-center rotate-[-8deg]">
            <UtensilsCrossed size={22} className="text-[#B00020]" />
          </div>
        </div>
        <div
          className="hidden lg:block pointer-events-none absolute top-1/3 right-[10%] animate-float"
          style={{ animationDelay: "1.2s" }}
        >
          <div className="w-14 h-14 rounded-2xl bg-white shadow-lg ring-1 ring-[#c9a227]/20 flex items-center justify-center rotate-[8deg]">
            <Star size={22} className="text-[#c9a227] fill-[#c9a227]" />
          </div>
        </div>
        <div
          className="hidden lg:block pointer-events-none absolute bottom-[22%] left-[12%] animate-float"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="w-12 h-12 rounded-full bg-[#FFF8E1] shadow-md ring-1 ring-[#c9a227]/30 flex items-center justify-center">
            <Sparkles size={18} className="text-[#c9a227]" />
          </div>
        </div>
        <div
          className="hidden lg:block pointer-events-none absolute bottom-[28%] right-[8%] animate-float"
          style={{ animationDelay: "1.8s" }}
        >
          <div className="w-12 h-12 rounded-full bg-[#FFF8E1] shadow-md ring-1 ring-[#c9a227]/30 flex items-center justify-center">
            <Handshake size={18} className="text-[#4B0076]" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-20 md:pt-40 md:pb-28">
          {/* Eyebrow tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#c9a227]/40 shadow-sm mb-8 animate-fadeIn">
            <Sparkles size={14} className="text-[#B00020]" />
            <span className="text-[11px] md:text-xs font-semibold tracking-[0.18em] text-[#1a1a1a] uppercase">
              India's #1 Virtual Brands Platform
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-semibold leading-[1.1] tracking-tight text-[#1a1a1a] text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-7 animate-fadeInUp">
            India's largest
            <br /> virtual brands chain
          </h1>

          {/* Subhead */}
          <p
            className="font-body text-base md:text-lg lg:text-xl text-[#1a1a1a] max-w-2xl mx-auto mb-10 leading-relaxed font-medium animate-fadeInUp"
            style={{ textShadow: "0 1px 2px rgba(255, 248, 230, 0.7)" }}
          >
            Crafting the era of delivery-first dining — bringing authentic
            regional flavours from kitchens across India to your doorstep.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12 animate-fadeInUp">
            <a
              href="https://orders.dilfoods.in/?_gl=1*32xgw6*_ga*NDA1NTU0Mjc1LjE3MTYxMDgwNjU.*_ga_7CQ31SQHW5*MTc0MjExODExOC4xNS4wLjE3NDIxMTgxMTguMC4wLjA.*_ga_VCDE3GHY4J*MTc0MjExODExOC4xNS4wLjE3NDIxMTgxMTguMC4wLjA."
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-[#1a1a1a] rounded-full font-semibold border border-[#1a1a1a] shadow-md hover:bg-[#1a1a1a] hover:text-white hover:-translate-y-0.5 transition-all duration-300"
            >
              Order Now
            </a>
            <Link
              to="/restaurant-partnership"
              onClick={() => window.scrollTo(0, 0)}
              className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#B00020] text-white rounded-full font-semibold shadow-xl shadow-[#B00020]/30 ring-2 ring-[#c9a227]/60 hover:bg-[#8a0019] hover:ring-[#c9a227] hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <Sparkles size={16} className="mr-2 text-[#FFD700]" />
              Become a Partner
              <ArrowRight
                size={18}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          {/* Trust strip */}
          <div className="flex justify-center animate-fadeIn">
            <div className="inline-flex flex-wrap items-center justify-center gap-x-5 gap-y-2 px-6 py-3 rounded-full bg-white/85 backdrop-blur-md border border-[#c9a227]/40 shadow-md text-[11px] md:text-xs font-semibold tracking-[0.15em] uppercase text-[#1a1a1a]">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-[#c9a227]" />
                FSSAI Certified
              </span>
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-[#c9a227]"></span>
              <span>ISO Compliant</span>
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-[#c9a227]"></span>
              <span className="inline-flex items-center gap-1.5">
                <Star size={14} className="text-[#c9a227] fill-[#c9a227]" />
                3M+ Foodies
              </span>
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-[#c9a227]"></span>
              <span>200+ Outlets</span>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <a
          href="#audience"
          className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-1 text-gray-400 hover:text-[#1a1a1a] transition-colors"
          aria-label="Scroll for more"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <ChevronDown size={18} className="animate-bounce-slow" />
        </a>
      </section>

      {/* Audience-selector strip */}
      <section
        id="audience"
        className="bg-[#faf9f6] border-y border-[#c9a227]/15"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
            {/* B2C card */}
            <a
              href="https://orders.dilfoods.in/?_gl=1*32xgw6*_ga*NDA1NTU0Mjc1LjE3MTYxMDgwNjU.*_ga_7CQ31SQHW5*MTc0MjExODExOC4xNS4wLjE3NDIxMTgxMTguMC4wLjA.*_ga_VCDE3GHY4J*MTc0MjExODExOC4xNS4wLjE3NDIxMTgxMTguMC4wLjA."
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 px-5 py-4 bg-white rounded-2xl border border-gray-100 hover:border-[#c9a227]/60 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FFF8E1] flex items-center justify-center flex-shrink-0">
                <UtensilsCrossed size={22} className="text-[#B00020]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-display text-lg font-semibold text-[#1a1a1a] leading-tight">
                  Hungry?
                </p>
                <p className="text-sm text-gray-600 mt-0.5 truncate">
                  Order from 10 brands across India
                  <span className="ml-1 text-[#B00020] font-medium underline-offset-4 group-hover:underline">
                    Order Now →
                  </span>
                </p>
              </div>
            </a>

            {/* B2B card */}
            <Link
              to="/restaurant-partnership"
              onClick={() => window.scrollTo(0, 0)}
              className="group flex items-center gap-4 px-5 py-4 bg-white rounded-2xl border border-gray-100 hover:border-[#c9a227]/60 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FFF8E1] flex items-center justify-center flex-shrink-0">
                <Handshake size={22} className="text-[#4B0076]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-display text-lg font-semibold text-[#1a1a1a] leading-tight">
                  Own a kitchen?
                </p>
                <p className="text-sm text-gray-600 mt-0.5 truncate">
                  Same kitchen, more orders.
                  <span className="ml-1 text-[#4B0076] font-medium underline-offset-4 group-hover:underline">
                    Partner with Dil →
                  </span>
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* News Strip */}
      <NewsStrip
        text="SAME KITCHEN! SAME STAFF! MORE ORDERS!!"
        bgColor="bg-gradient-to-r from-[#FFF8E1] via-[#FFEFC2] to-[#FFF8E1]"
        textColor="text-[#8a6d10]"
        speed="extremely-slow"
      />

      {/* Our Brands Section — calm 3x3 curated grid */}
      <section id="brands" className="py-20 md:py-28 bg-[#faf9f6] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <p className="text-[11px] md:text-xs font-semibold tracking-[0.2em] text-[#8a6d10] uppercase mb-3">
              Our Portfolio
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#1a1a1a] mb-4 leading-tight">
              Bringing India to <span className="text-[#B00020]">your plate</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Ten regional brands, one common goal — caring for the daily eating
              patterns of Indian consumers across geographies and cultures.
            </p>
          </div>

          {/* Curated grid — 4×2 logos, hover reveals cuisine */}
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
                    {/* Hover label — reserved height so layout never shifts. mt clears the 1.2x scaled logo */}
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

          {/* CTA */}
          <div className="text-center mt-14">
            <a
              href="https://orders.dilfoods.in/?_gl=1*32xgw6*_ga*NDA1NTU0Mjc1LjE3MTYxMDgwNjU.*_ga_7CQ31SQHW5*MTc0MjExODExOC4xNS4wLjE3NDIxMTgxMTguMC4wLjA.*_ga_VCDE3GHY4J*MTc0MjExODExOC4xNS4wLjE3NDIxMTgxMTguMC4wLjA."
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center px-7 py-3.5 bg-[#B00020] text-white rounded-full font-semibold shadow-lg shadow-[#B00020]/20 hover:bg-[#8a0019] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Order Now
              <ArrowRight
                size={18}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </a>
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
            <CounterAnimation end={200} label="Outlets" suffix="+" />
            <CounterAnimation end={5} label="Cities" />
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
              <span className="text-[#B00020]">works</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Same kitchen. Same staff. More orders. Get up and running with Dil
              Foods in 5 simple steps.
            </p>
          </div>

          {/* Flowchart - Desktop horizontal */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connector dotted line */}
              <div
                className="absolute top-10 left-[8%] right-[8%] h-px"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #d1d5db 50%, transparent 50%)",
                  backgroundSize: "12px 1px",
                  backgroundRepeat: "repeat-x",
                }}
              ></div>

              <div className="relative grid grid-cols-5 gap-4">
                {[
                  {
                    icon: PhoneCall,
                    step: "1",
                    title: "Connect with Us",
                    desc: "Reach out via the partner form. Our team gets in touch within 24 hours.",
                    color: "from-[#B00020] to-[#8a0019]",
                  },
                  {
                    icon: ClipboardCheck,
                    step: "2",
                    title: "Kitchen Assessment",
                    desc: "We evaluate your kitchen capacity, location and current operations — free of cost.",
                    color: "from-[#4B0076] to-[#3a005c]",
                  },
                  {
                    icon: Package,
                    step: "3",
                    title: "Brand Onboarding",
                    desc: "Pick the right Dil brands for your area. We supply ready-to-cook products & training.",
                    color: "from-[#c9a227] to-[#a8871f]",
                  },
                  {
                    icon: Rocket,
                    step: "4",
                    title: "Go Live",
                    desc: "Launch on Swiggy, Zomato & more. Start receiving orders from day one.",
                    color: "from-[#F97316] to-[#c25608]",
                  },
                  {
                    icon: TrendingUp,
                    step: "5",
                    title: "Grow Revenue",
                    desc: "Track performance, scale brands and unlock new revenue from your existing setup.",
                    color: "from-[#2E7D32] to-[#1b5e20]",
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
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#B00020] to-[#7a0016] flex items-center justify-center shadow-lg shadow-black/10 ring-4 ring-white group-hover:ring-[#c9a227]/40 group-hover:scale-110 transition-all duration-300">
                          <Icon size={30} className="text-white" />
                        </div>
                        {/* Step number badge */}
                        <div className="absolute -top-1 -right-1 w-9 h-9 rounded-full bg-white shadow-md ring-1 ring-gray-200 flex items-center justify-center">
                          <span className="text-sm font-bold text-[#8a6d10]">
                            {item.step}
                          </span>
                        </div>
                      </div>

                      {/* Card */}
                      <div className="bg-[#faf9f6] rounded-2xl p-5 w-full border border-gray-100 group-hover:border-[#c9a227]/40 group-hover:shadow-md transition-all duration-300">
                        <h3 className="font-display text-lg font-semibold text-[#1a1a1a] mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item.desc}
                        </p>
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
                title: "Connect with Us",
                desc: "Reach out via the partner form. Our team gets in touch within 24 hours.",
              },
              {
                icon: ClipboardCheck,
                step: "02",
                title: "Kitchen Assessment",
                desc: "We evaluate your kitchen capacity, location and current operations — free of cost.",
              },
              {
                icon: Package,
                step: "03",
                title: "Brand Onboarding",
                desc: "Pick the right Dil brands for your area. We supply ready-to-cook products & training.",
              },
              {
                icon: Rocket,
                step: "04",
                title: "Go Live",
                desc: "Launch on Swiggy, Zomato & more. Start receiving orders from day one.",
              },
              {
                icon: TrendingUp,
                step: "05",
                title: "Grow Revenue",
                desc: "Track performance, scale brands and unlock new revenue from your existing setup.",
              },
            ].map((item, idx, arr) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="relative">
                  <div className="flex gap-4 items-start">
                    {/* Icon column with vertical line */}
                    <div className="flex flex-col items-center">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#B00020] to-[#7a0016] flex items-center justify-center shadow-md ring-4 ring-white">
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
              <span className="text-[#B00020]">serve</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Currently live in 5 cities with plans to expand to 9 more
              locations soon
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <img
              src="/lovable-uploads/Indiamap.png"
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
                <span className="text-[#B00020]">Us</span>
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

