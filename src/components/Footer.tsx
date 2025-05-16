import { Link } from "react-router-dom";
import { Linkedin, Instagram, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isTovfoodsDomain = window.location.hostname.includes("tovafoods.in");

  return (
    <footer className="bg-gradient-to-r from-[#1A1F2C] to-[#ea384c] pt-16 pb-8 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-block" onClick={scrollToTop}>
              <img
                src={
                  isTovfoodsDomain
                    ? "/lovable-uploads/tovfoods-logo.png"
                    : "/lovable-uploads/60eb50d7-da70-4fee-a1ec-fd331878910f.png"
                }
                alt={isTovfoodsDomain ? "Tova Foods" : "Dil Foods"}
                className="h-20 w-auto"
              />
            </Link>

            <div className="mt-4">
              <h2 className="text-2xl font-bold mb-4">
                {isTovfoodsDomain
                  ? "Empowering food businesses with Tov"
                  : "Grow your restaurant business with Dil"}
              </h2>
              <Button
                asChild
                variant="default"
                className="bg-gradient-yellow-orange text-dil-purple hover:bg-gradient-orange-yellow hover:shadow-md mt-2"
              >
                <Link
                  to={
                    isTovfoodsDomain
                      ? "/tov-partnership"
                      : "/restaurant-partnership"
                  }
                  onClick={scrollToTop}
                >
                  {isTovfoodsDomain ? "Partner with Tov" : "Get Started"}
                </Link>
              </Button>
            </div>

            <div className="flex space-x-4 mt-4">
              <a
                href={
                  isTovfoodsDomain
                    ? "https://www.linkedin.com/company/tovfoods"
                    : "https://www.linkedin.com/company/dilfoods"
                }
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-gradient-soft-yellow-orange transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={
                  isTovfoodsDomain
                    ? "https://www.instagram.com/tovfoods.in/"
                    : "https://www.instagram.com/dilfoods.in/"
                }
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-gradient-soft-yellow-orange transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href={`mailto:info@${
                  isTovfoodsDomain ? "tovfoods" : "dilfoods"
                }.in`}
                className="text-white hover:text-gradient-soft-yellow-orange transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  onClick={scrollToTop}
                  className="text-white hover:text-gradient-soft-yellow-orange transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={
                    isTovfoodsDomain
                      ? "/tov-partnership"
                      : "/restaurant-partnership"
                  }
                  onClick={scrollToTop}
                  className="text-white hover:text-gradient-soft-yellow-orange transition-colors"
                >
                  {isTovfoodsDomain
                    ? "Tow Partnership"
                    : "Restaurant Partnership"}
                </Link>
              </li>
              {!isTovfoodsDomain && (
                <>
                  <li>
                    <Link
                      to="/horeca-supply"
                      onClick={scrollToTop}
                      className="text-white hover:text-gradient-soft-yellow-orange transition-colors"
                    >
                      Horeca Supply
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/media"
                      onClick={scrollToTop}
                      className="text-white hover:text-gradient-soft-yellow-orange transition-colors"
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
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-white/90">
              51, 2, Chandapura - Anekal Rd
              <br />
              Sri Rama Layout, Anekal,
              <br />
              Naganaikanahalli, Karnataka 562106
            </address>
            <div className="mt-4">
              {!isTovfoodsDomain && (
                <>
                  <a
                    href="https://www.linkedin.com/company/dil-foods/jobs/"
                    target="_blank"
                    rel="noreferrer"
                    className="block text-gradient-yellow-orange hover:underline mt-2"
                  >
                    Careers at Dil Foods
                  </a>
                  <a
                    href="https://dilfoods.in/blog/"
                    target="_blank"
                    rel="noreferrer"
                    className="block text-gradient-yellow-orange hover:underline mt-2"
                  >
                    Read Our Blog
                  </a>
                </>
              )}
            </div>
          </div>

          {/* Mission */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Mission</h3>
              <p className="text-white/90">
                {isTovfoodsDomain
                  ? "Building smarter food supply systems for the modern kitchen."
                  : "Transforming restaurant businesses with innovative virtual brands and technology solutions."}
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <p className="text-white/80 text-center text-sm">
            &copy; {new Date().getFullYear()}{" "}
            {isTovfoodsDomain ? "Tow Foods" : "Dil Foods"}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
