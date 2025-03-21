
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Mail } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  // Function to scroll to top of page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gradient-to-r from-[#1A1F2C] to-[#ea384c] pt-16 pb-8 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="inline-block" onClick={scrollToTop}>
              <img 
                src="/lovable-uploads/60eb50d7-da70-4fee-a1ec-fd331878910f.png" 
                alt="Dil Foods" 
                className="h-20 w-auto" 
              />
            </Link>
            <div className="mt-4">
              <h2 className="text-2xl font-bold mb-4">Grow your restaurant business with Dil</h2>
              <Button 
                asChild
                variant="default" 
                className="bg-gradient-yellow-orange text-dil-purple hover:bg-gradient-orange-yellow hover:shadow-md mt-2"
              >
                <Link to="/restaurant-partnership" onClick={scrollToTop}>Get Started</Link>
              </Button>
            </div>
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://www.linkedin.com/company/dilfoods" 
                target="_blank" 
                rel="noreferrer" 
                className="text-white hover:text-gradient-soft-yellow-orange transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://www.instagram.com/dilfoods.in/" 
                target="_blank" 
                rel="noreferrer" 
                className="text-white hover:text-gradient-soft-yellow-orange transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="mailto:info@dilfoods.in" 
                className="text-white hover:text-gradient-soft-yellow-orange transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white hover:text-gradient-soft-yellow-orange transition-colors" onClick={scrollToTop}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/restaurant-partnership" className="text-white hover:text-gradient-soft-yellow-orange transition-colors" onClick={scrollToTop}>
                  Restaurant Partnership
                </Link>
              </li>
              <li>
                <Link to="/horeca-supply" className="text-white hover:text-gradient-soft-yellow-orange transition-colors" onClick={scrollToTop}>
                  Horeca Supply
                </Link>
              </li>
              <li>
                <Link to="/media" className="text-white hover:text-gradient-soft-yellow-orange transition-colors" onClick={scrollToTop}>
                  Dil In News
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-white/90">
              Incubex HSR20 2nd Floor,<br />
              HSR Layout, Bangalore
            </address>
            <div className="mt-4">
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
            </div>
          </div>
          
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Mission</h3>
              <p className="text-white/90">
                Transforming restaurant businesses with innovative virtual brands and technology solutions.
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8">
          <p className="text-white/80 text-center text-sm">
            &copy; {new Date().getFullYear()} Dil Foods. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
