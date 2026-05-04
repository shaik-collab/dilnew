import { Link } from "react-router-dom";
import { Linkedin, Instagram, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isTovafoodsDomain = window.location.hostname.includes("tovafoods.in");

  return (
    <footer className="bg-[#faf9f6] border-t border-gray-200 pt-16 pb-8 text-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-5">
            <div>
              <Link to="/" className="inline-block" onClick={scrollToTop}>
                <img
                  src={
                    isTovafoodsDomain
                      ? "/lovable-uploads/tova_foods1.png"
                      : "/lovable-uploads/60eb50d7-da70-4fee-a1ec-fd331878910f.png"
                  }
                  alt={isTovafoodsDomain ? "Tova Foods" : "Dil Foods"}
                  className="h-20 w-auto"
                />
              </Link>
              {isTovafoodsDomain && (
                <p
                  className="text-gray-600 font-light ml-1"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  A company of{" "}
                  <Link
                    to="https://dilfoods.in"
                    className="inline-block text-[#B00020]"
                  >
                    Dil Foods
                  </Link>
                </p>
              )}
            </div>

            <div className="mt-4">
              <h2 className="font-display text-xl md:text-2xl font-semibold text-[#1a1a1a] mb-5 leading-snug">
                {isTovafoodsDomain
                  ? "Empowering food businesses with Tova"
                  : "Grow your restaurant business with Dil"}
              </h2>

              {!isTovafoodsDomain && (
                <Button
                  asChild
                  variant="default"
                  className="bg-[#B00020] text-white hover:bg-[#8a0019] hover:shadow-md rounded-full px-6"
                >
                  <Link
                    to={
                      isTovafoodsDomain
                        ? "/tova-partnership"
                        : "/restaurant-partnership"
                    }
                    onClick={scrollToTop}
                  >
                    {isTovafoodsDomain ? "Partner with Tova" : "Get Started"}
                  </Link>
                </Button>
              )}
            </div>

            {!isTovafoodsDomain && (
              <div className="flex space-x-3 mt-6">
                <a
                  href="https://www.linkedin.com/company/dilfoods"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-[#B00020] hover:border-[#B00020] transition-colors"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="https://www.instagram.com/dilfoods.in/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-[#B00020] hover:border-[#B00020] transition-colors"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="mailto:info@dilfoods.in"
                  aria-label="Email"
                  className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-[#B00020] hover:border-[#B00020] transition-colors"
                >
                  <Mail size={16} />
                </a>
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold text-[#1a1a1a] mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  onClick={scrollToTop}
                  className="text-gray-600 hover:text-[#B00020] transition-colors"
                >
                  Home
                </Link>
              </li>

              {!isTovafoodsDomain && (
                <li>
                  <Link
                    to="/restaurant-partnership"
                    onClick={scrollToTop}
                    className="text-gray-600 hover:text-[#B00020] transition-colors"
                  >
                    Restaurant Partnership
                  </Link>
                </li>
              )}
              {!isTovafoodsDomain && (
                <>
                  <li>
                    <Link
                      to="/horeca-supply"
                      onClick={scrollToTop}
                      className="text-gray-600 hover:text-[#B00020] transition-colors"
                    >
                      Horeca Supply
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/media"
                      onClick={scrollToTop}
                      className="text-gray-600 hover:text-[#B00020] transition-colors"
                    >
                      Dil In News
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-semibold text-[#1a1a1a] mb-5">
              Contact Us
            </h3>
            <address className="not-italic text-gray-600 leading-relaxed">
              51, 2, Chandapura - Anekal Rd
              <br />
              Sri Rama Layout, Anekal,
              <br />
              Naganaikanahalli, Karnataka 562106
            </address>
            <div className="mt-4 space-y-2">
              {!isTovafoodsDomain && (
                <>
                  <a
                    href="https://www.linkedin.com/company/dil-foods/jobs/"
                    target="_blank"
                    rel="noreferrer"
                    className="block text-[#B00020] hover:underline underline-offset-4"
                  >
                    Careers at Dil Foods →
                  </a>
                  <Link
                    to="/media?tab=blogs"
                    className="block text-[#B00020] hover:underline underline-offset-4"
                  >
                    Read Our Blog →
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mission */}
          <div>
            <h3 className="text-base font-semibold text-[#1a1a1a] mb-5">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {isTovafoodsDomain
                ? "Building smarter food supply systems for the modern kitchen."
                : "Transforming restaurant businesses with innovative virtual brands and technology solutions."}
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 mt-14 pt-6">
          <p className="text-gray-500 text-center text-sm">
            &copy; {new Date().getFullYear()}{" "}
            {isTovafoodsDomain ? "Tova Foods" : "Dil Foods"}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
