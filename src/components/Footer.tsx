import { Link } from "react-router-dom";
import { Linkedin, Instagram, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isTovafoodsDomain = window.location.hostname.includes("tovafoods.in");

  return (
    <footer className="bg-gradient-to-r from-[#1A1F2C] to-[#ea384c] pt-16 pb-8 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
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
                  className=" text-white font-light ml-1"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  A company of{" "}
                  <Link
                    to="https://dilfoods.in"
                    className="inline-block text-[#E81E3F]"
                  >
                    Dil Foods
                  </Link>
                </p>
              )}
            </div>

            <div className="mt-4">
              <h2 className="text-2xl font-bold mb-4">
                {isTovafoodsDomain
                  ? "Empowering food businesses with Tova"
                  : "Grow your restaurant business with Dil"}
              </h2>

              {!isTovafoodsDomain && (
                <Button
                  asChild
                  variant="default"
                  className="bg-gradient-yellow-orange text-dil-purple hover:bg-gradient-orange-yellow hover:shadow-md mt-2"
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
              <div className="flex space-x-4 mt-4">
                <a
                  href={
                    isTovafoodsDomain
                      ? "https://www.linkedin.com/company/tovafoods"
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
                    isTovafoodsDomain
                      ? "https://www.instagram.com/tovafoods.in/"
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
                    isTovafoodsDomain ? "tovafoods" : "dilfoods"
                  }.in`}
                  className="text-white hover:text-gradient-soft-yellow-orange transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            )}
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

              {!isTovafoodsDomain && (
                <li>
                  <Link
                    to={
                      isTovafoodsDomain
                        ? "/tova-partnership"
                        : "/restaurant-partnership"
                    }
                    onClick={scrollToTop}
                    className="text-white hover:text-gradient-soft-yellow-orange transition-colors"
                  >
                    {isTovafoodsDomain
                      ? "Tow Partnership"
                      : "Restaurant Partnership"}
                  </Link>
                </li>
              )}
              {!isTovafoodsDomain && (
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
              {!isTovafoodsDomain && (
                <>
                  <a
                    href="https://www.linkedin.com/company/dil-foods/jobs/"
                    target="_blank"
                    rel="noreferrer"
                    className="block text-gradient-yellow-orange hover:underline mt-2"
                  >
                    Careers at Dil Foods
                  </a>
                  <Link
                    to="/media?tab=blogs"
                    className="block text-gradient-yellow-orange hover:underline mt-2"
                  >
                    Read Our Blog
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mission */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Mission</h3>
              <p className="text-white/90">
                {isTovafoodsDomain
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
            {isTovafoodsDomain ? "Tova Foods" : "Dil Foods"}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
