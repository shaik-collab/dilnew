import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsStrip from "../components/NewsStrip";
import CounterAnimation from "../components/CounterAnimation";
import SEO from "../components/SEO";
import {
  ArrowRight,
  Sparkles,
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

      {/* Hero Section — Split premium layout */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden bg-[#FDF9F2]"
      >
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          ></div>
          <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] rounded-full bg-[#E91E63]/[0.07] blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-[#c9a227]/[0.06] blur-3xl"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 lg:py-0 lg:min-h-screen lg:flex lg:items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">

            {/* LEFT — Content */}
            <div className="flex flex-col items-start text-left">

              {/* Headline */}
              <h1 className="font-display font-semibold tracking-tight leading-[1.05] text-[#1a1a1a] text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] mb-5 animate-fadeInUp">
                {/* India's Largest<br /> */}
                Empowering restaurants, <br/>
                <span className="text-[#E91E63]">Enriching Palates</span><br />
                
              </h1>

              {/* Sub */}
              <p
                className="text-base md:text-lg text-[#555555] leading-relaxed mb-8 max-w-xl animate-fadeInUp"
                style={{ animationDelay: "0.1s" }}
              >
                Turn your existing kitchen into a multi-brand revenue engine.<br />
                Same Staff. Same Kitchen. But more Orders, every day.
              </p>

              {/* Stat pills */}
              <div
                className="flex flex-wrap gap-2.5 mb-8 animate-fadeIn"
                style={{ animationDelay: "0.15s" }}
              >
                {[
                  { value: "10", label: "Brands" },
                  { value: "300+", label: "Outlets" },
                  { value: "6", label: "Cities" },
                  { value: "3M+", label: "Customers" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm"
                  >
                    <span className="text-sm font-bold text-[#1a1a1a]">{stat.value}</span>
                    <span className="text-xs text-[#888888]">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div
                className="flex flex-col sm:flex-row gap-3 mb-8 w-full sm:w-auto animate-fadeInUp"
                style={{ animationDelay: "0.2s" }}
              >
                <Link
                  to="/restaurant-partnership"
                  onClick={() => window.scrollTo(0, 0)}
                  className="group inline-flex items-center justify-center px-7 py-3.5 bg-[#E91E63] text-white rounded-full font-semibold shadow-lg shadow-[#E91E63]/30 hover:bg-[#C2185B] hover:shadow-xl hover:shadow-[#E91E63]/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Sparkles size={15} className="mr-2 text-[#FFD700]" />
                  Become a Partner
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    window.dispatchEvent(new CustomEvent("dilfoods:open-brands"));
                  }}
                  className="group inline-flex items-center justify-center px-7 py-3.5 bg-white text-[#1a1a1a] rounded-full font-medium border border-gray-200 hover:border-[#1a1a1a] hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
                >
                  Explore Brands
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Social proof avatars */}
              <div
                className="flex items-center gap-3 animate-fadeIn"
                style={{ animationDelay: "0.25s" }}
              >
                <div className="flex -space-x-2">
                  {["#E91E63", "#4B0076", "#c9a227", "#0891B2", "#2E7D32"].map((c, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full border-2 border-[#FDF9F2] flex items-center justify-center text-white text-[8px] font-bold"
                      style={{ background: c }}
                    >
                      {["K", "R", "S", "A", "M"][i]}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[#666666]">
                  Trusted by{" "}
                  <span className="font-semibold text-[#1a1a1a]">300+ restaurant kitchens</span>{" "}
                  across India
                </p>
              </div>

            </div>

            {/* RIGHT — Visual composition */}
            <div
              className="relative flex items-center justify-center h-[480px] sm:h-[560px] animate-fadeIn"
              style={{ animationDelay: "0.1s" }}
            >
              {/* Glow backdrop */}
              <div className="absolute inset-[5%] rounded-full bg-[#E91E63]/[0.08] blur-3xl"></div>
              <div className="absolute inset-[10%] rounded-full bg-[#c9a227]/[0.07] blur-3xl"></div>

              {/* Central brand grid card */}
              <div className="relative z-10 bg-white/85 backdrop-blur-md rounded-3xl p-5 shadow-2xl shadow-black/[0.12] border border-white w-[290px] sm:w-[320px]">
                {/* Card header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-[11px] font-bold text-[#1a1a1a] tracking-wider uppercase">Dil Foods Network</p>
                    <p className="text-[10px] text-[#888888] mt-0.5">10 brands • Live now</p>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 rounded-full border border-emerald-100">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-[9px] font-bold text-emerald-700 uppercase tracking-wider">Live</span>
                  </div>
                </div>

                {/* Brand logos 3×3 grid */}
                <div className="grid grid-cols-3 gap-2">
                  {brands.slice(0, 9).map((brand, i) => (
                    <Link
                      key={i}
                      to={brand.route}
                      onClick={() => window.scrollTo(0, 0)}
                      aria-label={`Visit ${brand.name} page`}
                      className="aspect-square bg-[#faf9f6] rounded-xl border border-gray-100 flex items-center justify-center p-2 hover:border-[#c9a227]/50 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </Link>
                  ))}
                </div>

                {/* Card footer */}
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[10px] text-[#888888]">Orders today</span>
                  <span className="text-[11px] font-bold text-emerald-600">+1,240 ↑</span>
                </div>
              </div>

              {/* Floating: New Order notification */}
              <div className="absolute top-[4%] right-[2%] z-20 bg-white rounded-2xl px-3.5 py-2.5 shadow-xl shadow-black/10 border border-gray-100/80 animate-float flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg,#E91E63,#C2185B)" }}>
                  <Smartphone size={14} className="text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#1a1a1a]">New Order!</p>
                  <p className="text-[9px] text-[#888888]">Bhole ke Chole</p>
                </div>
              </div>

              {/* Floating: Go Live in 8 Days */}
              {/* <div
                className="absolute bottom-[14%] right-[-2%] z-20 bg-white rounded-2xl px-3.5 py-2.5 shadow-xl shadow-black/10 border border-gray-100/80"
                style={{ animation: "float 4s ease-in-out infinite", animationDelay: "1s" }}
              >
                <p className="text-sm font-bold text-[#E91E63]">🔥 Go Live in 2 Weeks</p>
              </div> */}

              {/* Floating: Trending in Bangalore (moved into former Go Live slot) */}
              <div
                className="absolute bottom-[14%] right-[-2%] z-20 bg-white rounded-2xl px-3.5 py-2.5 shadow-xl shadow-black/10 border border-gray-100/80"
                style={{ animation: "float 4s ease-in-out infinite", animationDelay: "1s" }}
              >
                <p className="text-sm font-bold text-[#F97316]">🍲 Trending in Bangalore</p>
              </div>

              {/* Floating: Order growth dark pill */}
              <div
                className="absolute bottom-[8%] left-[2%] z-20 bg-[#1a1a1a] rounded-2xl px-3.5 py-2.5 shadow-xl shadow-black/20"
                style={{ animation: "float 4.5s ease-in-out infinite", animationDelay: "1.5s" }}
              >
                <p className="text-sm font-bold text-white">🚀 +148% Order Growth</p>
              </div>
            </div>

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

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-[#666666]">
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

          {/* Featured highlight — Shark Tank India */}
          <div className="flex justify-center mt-10">
            <div
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white border border-[#1565C0]/20 shadow-lg shadow-[#1565C0]/15"
              style={{
                background:
                  "linear-gradient(135deg, rgba(21,101,192,0.08), rgba(249,196,34,0.10))",
              }}
            >
              <Sparkles size={20} className="text-[#F9C422]" />
              <span className="text-base text-[#1a1a1a]">
                Featured &amp; secured deals on{" "}
                <span className="font-extrabold tracking-tight">
                  <span style={{ color: "#1565C0" }}>Shark Tank</span>{" "}
                  <span style={{ color: "#F9C422" }}>India</span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>


      {/* How Partnership Works */}
      <section id="how-it-works" className="py-16 md:py-28 bg-[#ececec] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-6">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-[#8a6d10] uppercase mb-3">
              For Restaurant Partners
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#1a1a1a] mb-3">
              How partnership <span className="text-[#E91E63]">works</span>
            </h2>
            <p className="text-sm text-gray-500 max-w-lg mx-auto">
              Same kitchen. Same staff. More orders. Up and running in 6 simple steps.
            </p>
          </div>

          {(() => {
            const steps = [
              { n: 1, icon: PhoneCall,     title: "Connect",            color: "#06B6D4" },
              { n: 2, icon: Search,        title: "Kitchen Assessment", color: "#3B82F6" },
              { n: 3, icon: Boxes,         title: "Brand Selection",    color: "#7C3AED" },
              { n: 4, icon: GraduationCap, title: "Training",           color: "#D946EF" },
              { n: 5, icon: Smartphone,    title: "Tech Setup",         color: "#F43F5E" },
              { n: 6, icon: Rocket,        title: "Go Live",            color: "#F59E0B" },
            ];

            /*
             * Individual snake design — each step's ribbon = (ring around its own circle)
             * + (S-curve connector to the next step), where the connector uses a per-segment
             * gradient (this step's color → next step's color). Adjacent segments meet
             * tangentially at the ring perimeter, so they read as one flowing snake.
             *
             * ViewBox: 1200 × 500. Container locks to 12:5 aspect so % positions of
             * absolutely-rendered DOM elements (icon spheres, labels) line up with the SVG.
             *
             * Ring centerline radius R = 55. Tangent offset T = R·cos(45°) ≈ 38.9.
             * Step centers alternate (cy 340 / 160) to match the existing zigzag layout.
             */
            const cx = [120, 312, 504, 696, 888, 1080];
            const cy = [340, 160, 340, 160, 340, 160];
            const R  = 55;
            const T  = R * 0.7071;

            const xPcts = cx.map((v) => (v / 1200) * 100);
            const yPcts = cy.map((v) => (v / 500) * 100);

            // Build per-step connector curves (i → i+1) with tangent endpoints on each ring.
            const curves = [];
            for (let i = 0; i < steps.length - 1; i++) {
              const iBelow = cy[i] === 340;
              const sx = cx[i] + T;
              const sy = iBelow ? cy[i] - T : cy[i] + T;
              const tx = cx[i + 1] - T;
              const ty = iBelow ? cy[i + 1] + T : cy[i + 1] - T;
              const midX = (sx + tx) / 2;
              const path = `M ${sx},${sy} C ${midX},${sy} ${midX},${ty} ${tx},${ty}`;
              curves.push({ path, sx, sy, tx, ty, from: steps[i].color, to: steps[i + 1].color });
            }

            // Label vertical offset from ring center, in % of container height.
            // Ring outer edge is at (R + halfStroke)/500 ≈ 13.2%. Add a small visual gap.
            const Y_LBL = 16;

            return (
              <>
                {/* ── Desktop: individual-snake infographic ── */}
                <div className="hidden lg:block relative w-full" style={{ aspectRatio: "12 / 5" }}>

                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 1200 500"
                    preserveAspectRatio="xMidYMid meet"
                    fill="none"
                  >
                    <defs>
                      {curves.map((c, i) => (
                        <linearGradient
                          key={`g-${i}`}
                          id={`seg-grad-${i}`}
                          gradientUnits="userSpaceOnUse"
                          x1={c.sx} y1={c.sy} x2={c.tx} y2={c.ty}
                        >
                          <stop offset="0%"   stopColor={c.from} />
                          <stop offset="100%" stopColor={c.to} />
                        </linearGradient>
                      ))}
                    </defs>

                    {/* Layer 1 — drop shadows (offset down) */}
                    <g transform="translate(0,8)">
                      {steps.map((s, i) => (
                        <circle key={`sh-r-${i}`} cx={cx[i]} cy={cy[i]} r={R}
                          stroke="rgba(0,0,0,0.18)" strokeWidth={28} />
                      ))}
                      {curves.map((c, i) => (
                        <path key={`sh-c-${i}`} d={c.path}
                          stroke="rgba(0,0,0,0.18)" strokeWidth={28} strokeLinecap="round" />
                      ))}
                    </g>

                    {/* Layer 2 — connector curves (drawn first so rings cap the ends) */}
                    {curves.map((c, i) => (
                      <path key={`m-c-${i}`} d={c.path}
                        stroke={`url(#seg-grad-${i})`} strokeWidth={22} strokeLinecap="round" />
                    ))}

                    {/* Layer 3 — colored rings (per-step) */}
                    {steps.map((s, i) => (
                      <circle key={`m-r-${i}`} cx={cx[i]} cy={cy[i]} r={R}
                        stroke={s.color} strokeWidth={22} />
                    ))}

                    {/* Layer 4 — specular highlight (subtle upward offset for top-edge sheen) */}
                    {steps.map((s, i) => (
                      <circle key={`hl-r-${i}`} cx={cx[i]} cy={cy[i] - 1.5} r={R}
                        stroke="rgba(255,255,255,0.4)" strokeWidth={7} />
                    ))}
                    {curves.map((c, i) => (
                      <path key={`hl-c-${i}`} d={c.path}
                        stroke="rgba(255,255,255,0.4)" strokeWidth={7} strokeLinecap="round"
                        transform="translate(0,-1.5)" />
                    ))}
                  </svg>

                  {/* White spheres + icons (HTML, scales with container) */}
                  {steps.map((step, idx) => {
                    const Icon = step.icon;
                    return (
                      <div
                        key={`sphere-${step.n}`}
                        className="absolute"
                        style={{
                          left: `${xPcts[idx]}%`,
                          top: `${yPcts[idx]}%`,
                          transform: "translate(-50%, -50%)",
                          width: "7.333%",
                          aspectRatio: "1 / 1",
                        }}
                      >
                        <div
                          className="w-full h-full rounded-full bg-white flex items-center justify-center"
                          style={{
                            boxShadow: [
                              "0 14px 45px rgba(0,0,0,0.22)",
                              "inset 0 -6px 14px rgba(0,0,0,0.09)",
                              "inset 0 4px 10px rgba(255,255,255,1)",
                            ].join(", "),
                          }}
                        >
                          <Icon size={32} style={{ color: step.color }} strokeWidth={1.3} />
                        </div>
                      </div>
                    );
                  })}

                  {/* Labels */}
                  {steps.map((step, idx) => {
                    const isAbove = idx % 2 !== 0;
                    const lbl = String(step.n).padStart(2, "0");
                    const labelTop = isAbove ? yPcts[idx] - Y_LBL : yPcts[idx] + Y_LBL;
                    return (
                      <div
                        key={`lbl-${step.n}`}
                        className="absolute text-center"
                        style={{
                          left: `${xPcts[idx]}%`,
                          top: `${labelTop}%`,
                          transform: isAbove ? "translate(-50%, -100%)" : "translate(-50%, 0%)",
                          width: "180px",
                        }}
                      >
                        <span
                          className="block text-[10px] font-extrabold tracking-[0.18em] uppercase mb-1"
                          style={{ color: step.color }}
                        >
                          Step {lbl}
                        </span>
                        <h3 className="text-[16px] font-bold text-[#1a1a1a] leading-tight">{step.title}</h3>
                      </div>
                    );
                  })}
                </div>

                {/* ── Mobile: left-side timeline ── */}
                <div className="lg:hidden mt-10 max-w-xs mx-auto">
                  {steps.map((step, idx) => {
                    const Icon = step.icon;
                    const lbl  = String(step.n).padStart(2, "0");
                    return (
                      <div key={step.n}>
                        <div className="flex items-center gap-4">
                          <div
                            className="flex-shrink-0 w-14 h-14 rounded-full bg-white flex items-center justify-center"
                            style={{
                              border: `4px solid ${step.color}`,
                              boxShadow: `0 8px 24px ${step.color}50`,
                            }}
                          >
                            <Icon size={20} style={{ color: step.color }} strokeWidth={1.4} />
                          </div>
                          <div>
                            <span className="block text-[9px] font-extrabold tracking-[0.18em] uppercase mb-0.5" style={{ color: step.color }}>
                              Step {lbl}
                            </span>
                            <h3 className="text-[15px] font-bold text-[#1a1a1a]">{step.title}</h3>
                          </div>
                        </div>
                        {idx < steps.length - 1 && (
                          <div
                            className="ml-7 my-1 w-px h-6 rounded-full"
                            style={{ background: `linear-gradient(to bottom, ${step.color}60, ${steps[idx + 1].color}40)` }}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </>
            );
          })()}

          {/* CTA */}
          <div className="text-center mt-14">
            <Link
              to="/restaurant-partnership"
              onClick={() => window.scrollTo(0, 0)}
              className="group inline-flex items-center justify-center px-7 py-3.5 bg-[#1a1a1a] text-white rounded-full font-semibold hover:bg-[#2d2d2d] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
            >
              Start Your Partnership Journey
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
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

