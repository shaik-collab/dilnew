import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileBrandsOpen, setMobileBrandsOpen] = useState(false);
  const [brandsOpen, setBrandsOpen] = useState(false);
  const brandsRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const isTovaDomain = window.location.hostname.includes("tovafoods.in");

  const hasPurpleGradientHero =
    location.pathname === "/horeca-supply" ||
    location.pathname === "/media";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Listen for programmatic "open Brands dropdown" event (e.g. from hero Order Now)
  useEffect(() => {
    const handleOpenBrands = () => setBrandsOpen(true);
    window.addEventListener("dilfoods:open-brands", handleOpenBrands);
    return () =>
      window.removeEventListener("dilfoods:open-brands", handleOpenBrands);
  }, []);

  // Click-outside + ESC closes the programmatically-opened dropdown
  useEffect(() => {
    if (!brandsOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (brandsRef.current && !brandsRef.current.contains(e.target as Node)) {
        setBrandsOpen(false);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setBrandsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [brandsOpen]);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Restaurant Partnership", href: "/restaurant-partnership" },
    { name: "Media", href: "/media" },
  ];

  const brandsList = [
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
      cuisine: "Homestyle Comfort",
    },
    {
      name: "Bihari Bowl",
      logo: "/lovable-uploads/bb_logo.png",
      route: "/bihari-bowl",
      cuisine: "Eastern Flavors",
    },
    {
      name: "Bhole ke Chole",
      logo: "/lovable-uploads/cdf67c56-7bd7-4023-af81-bf258fe60fe3.png",
      route: "/bhole-ke-chole",
      cuisine: "Street Food Done Right",
    },
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
      cuisine: "Pure Veg & Vrat-Friendly",
    },
    {
      name: "Aahar",
      logo: "/lovable-uploads/55d6ad50-361d-42cd-b556-c283b2ee23e4.png",
      route: "/aahar",
      cuisine: "South India's Rich Flavours",
    },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setMobileBrandsOpen(false);
  };

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const getTextColorClass = (isActive: boolean) => {
    if (!scrolled && hasPurpleGradientHero) {
      return isActive
        ? "text-orange-400 font-semibold"
        : "text-white hover:text-white/80";
    }
    return isActive
      ? "text-dil-red font-semibold"
      : "text-gray-800 hover:text-dil-red";
  };

  const isBrandsActive = brandsList.some((b) => location.pathname === b.route);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0" onClick={scrollToTop}>
              {location.pathname === "/horeca-supply" || isTovaDomain ? (
                <img
                  src="/lovable-uploads/tova_foods1.png"
                  alt="Tova Foods"
                  className="h-14 w-auto"
                />
              ) : (
                <img
                  src="/lovable-uploads/60eb50d7-da70-4fee-a1ec-fd331878910f.png"
                  alt="Dil Foods"
                  className="h-16 w-auto"
                />
              )}
            </Link>
          </div>

          {!isTovaDomain && (
            <>
              {/* Desktop Menu */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-4">
                  {/* Home */}
                  <Link
                    to="/"
                    onClick={scrollToTop}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${getTextColorClass(
                      location.pathname === "/"
                    )}`}
                  >
                    Home
                  </Link>

                  {/* Brands dropdown — hover OR programmatic-trigger */}
                  <div className="relative group" ref={brandsRef}>
                    <button
                      type="button"
                      onClick={() => setBrandsOpen((prev) => !prev)}
                      className={`inline-flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${getTextColorClass(
                        isBrandsActive
                      )}`}
                    >
                      Brands
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 group-hover:rotate-180 ${
                          brandsOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown panel — visible on hover, or when brandsOpen is true */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50 transition-all duration-200 ${
                        brandsOpen
                          ? "visible opacity-100 translate-y-0"
                          : "invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0"
                      }`}
                    >
                      <div className="w-[560px] bg-white rounded-2xl shadow-2xl ring-1 ring-black/5 p-3">
                        <div className="grid grid-cols-2 gap-1">
                          {brandsList.map((brand) => (
                            <Link
                              key={brand.route}
                              to={brand.route}
                              onClick={() => {
                                scrollToTop();
                                setBrandsOpen(false);
                              }}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#FDF9F2] transition-colors duration-150 group/item"
                            >
                              <div className="w-10 h-10 rounded-lg bg-[#FDF9F2] border border-[#1a1a1a]/5 flex items-center justify-center p-1.5 flex-shrink-0 group-hover/item:border-[#c9a227]/40 transition-colors">
                                <img
                                  src={brand.logo}
                                  alt={brand.name}
                                  className="max-w-full max-h-full object-contain"
                                />
                              </div>
                              <div className="min-w-0">
                                <p className="text-[13px] font-semibold text-[#1a1a1a] leading-tight truncate">
                                  {brand.name}
                                </p>
                                <p className="text-[11px] text-[#1a1a1a]/55 leading-tight truncate mt-0.5">
                                  {brand.cuisine}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Other nav items */}
                  {navigation.slice(1).map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={scrollToTop}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${getTextColorClass(
                        location.pathname === item.href
                      )}`}
                    >
                      {item.name}
                    </Link>
                  ))}

                  <Link
                    to="/restaurant-partnership"
                    onClick={scrollToTop}
                    className={`ml-3 px-6 py-2.5 rounded-md font-semibold transition-all duration-300 ${
                      !scrolled && hasPurpleGradientHero
                        ? "bg-white text-dil-purple hover:bg-white/90 shadow-md hover:shadow-lg border border-white/20 transform hover:-translate-y-0.5"
                        : "btn-primary shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    }`}
                  >
                    Partner With Dil
                  </Link>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={toggleMenu}
                  className={`inline-flex items-center justify-center p-2 rounded-md ${
                    !scrolled && hasPurpleGradientHero
                      ? "text-white hover:text-white/80"
                      : "text-gray-700 hover:text-dil-red"
                  } focus:outline-none`}
                >
                  <span className="sr-only">Open main menu</span>
                  {isOpen ? (
                    <X className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {!isTovaDomain && (
        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {/* Home */}
            <Link
              to="/"
              onClick={() => {
                scrollToTop();
                closeMenu();
              }}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === "/"
                  ? "text-dil-red font-semibold"
                  : "text-gray-700 hover:text-dil-red"
              }`}
            >
              Home
            </Link>

            {/* Brands accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileBrandsOpen(!mobileBrandsOpen)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium ${
                  isBrandsActive
                    ? "text-dil-red font-semibold"
                    : "text-gray-700 hover:text-dil-red"
                }`}
              >
                <span>Brands</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    mobileBrandsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileBrandsOpen && (
                <div className="mt-1 ml-2 pl-3 border-l border-gray-200 space-y-0.5">
                  {brandsList.map((brand) => (
                    <Link
                      key={brand.route}
                      to={brand.route}
                      onClick={() => {
                        scrollToTop();
                        closeMenu();
                      }}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-md text-sm text-gray-700 hover:text-dil-red hover:bg-[#FDF9F2]"
                    >
                      <div className="w-7 h-7 rounded-md bg-[#FDF9F2] border border-[#1a1a1a]/5 flex items-center justify-center p-1 flex-shrink-0">
                        <img
                          src={brand.logo}
                          alt={brand.name}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <span className="truncate">{brand.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other nav items */}
            {navigation.slice(1).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => {
                  scrollToTop();
                  closeMenu();
                }}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === item.href
                    ? "text-dil-red font-semibold"
                    : "text-gray-700 hover:text-dil-red"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <Link
              to="/restaurant-partnership"
              onClick={() => {
                scrollToTop();
                closeMenu();
              }}
              className="block w-full text-center mt-3 px-6 py-2.5 rounded-md font-semibold btn-primary shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Partner With Dil
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
