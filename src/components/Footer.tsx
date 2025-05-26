import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    if (path.startsWith('#')) {
      // If it's a hash link, navigate to homepage first if not already there
      if (window.location.pathname !== '/') {
        navigate('/');
        // Add a small delay to allow navigation to complete before scrolling
        setTimeout(() => {
          const element = document.querySelector(path);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        // If already on homepage, just scroll to the section
        const element = document.querySelector(path);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If it's a route path, use navigate
      navigate(path);
    }
  };

  return (
    <footer className="bg-coffee-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ABOUT US</h3>
            <p className="text-gray-300 mb-4">
              Brews Academy is a premier specialty coffee training academy dedicated to developing skilled baristas for the coffee industry.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">USEFUL LINKS</h3>
            <ul className="space-y-2">
              <li><button onClick={() => handleNavigation('#home')} className="text-gray-300 hover:text-gold transition-colors">Home</button></li>
              <li><button onClick={() => handleNavigation('#course')} className="text-gray-300 hover:text-gold transition-colors">Courses</button></li>
              <li><button onClick={() => handleNavigation('#benefits')} className="text-gray-300 hover:text-gold transition-colors">What You'll Learn</button></li>
              <li><button onClick={() => handleNavigation('#pricing')} className="text-gray-300 hover:text-gold transition-colors">Pricing</button></li>
              <li><button onClick={() => handleNavigation('#team')} className="text-gray-300 hover:text-gold transition-colors">Our Team</button></li>
              <li><button onClick={() => handleNavigation('#testimonials')} className="text-gray-300 hover:text-gold transition-colors">Testimonials</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">OUR COURSES</h3>
            <ul className="space-y-2">
              <li><button onClick={() => handleNavigation('/courses/barista')} className="text-gray-300 hover:text-gold transition-colors text-left">Barista Fundamentals</button></li>
              <li><button onClick={() => handleNavigation('/courses/roastery')} className="text-gray-300 hover:text-gold transition-colors text-left">Coffee Roasting</button></li>
              <li><button onClick={() => handleNavigation('/courses/barista')} className="text-gray-300 hover:text-gold transition-colors text-left">Espresso Techniques</button></li>
              <li><button onClick={() => handleNavigation('/courses/barista')} className="text-gray-300 hover:text-gold transition-colors text-left">Brewing Methods</button></li>
              <li><button onClick={() => handleNavigation('/courses/barista')} className="text-gray-300 hover:text-gold transition-colors text-left">Coffee Shop Management</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">CONTACT US</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gold mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Al Baraha, Dubai, UAE</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gold mr-2 flex-shrink-0" />
                <a href="tel:+971507763533" className="text-gray-300 hover:text-gold transition-colors">+971507763533</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gold mr-2 flex-shrink-0" />
                <span className="text-gray-300">info@brewmasters.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Brews Academy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
