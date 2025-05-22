import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isTovaDomain = window.location.hostname.includes("tovafoods.in");

  const hasPurpleGradientHero =
    location.pathname === "/restaurant-partnership" ||
    location.pathname === "/horeca-supply" ||
    location.pathname === "/media";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Restaurant Partnership", href: "/restaurant-partnership" },
    { name: "Horeca Supply", href: "/horeca-supply" },
    { name: "Media", href: "/media" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

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
      : "text-gray-700 hover:text-dil-red";
  };

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
                  {navigation.map((item) => (
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
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={scrollToTop}
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
              onClick={scrollToTop}
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
