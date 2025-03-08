
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-coffee-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ABOUT US</h3>
            <p className="text-gray-300 mb-4">
              Brew Masters is a premier specialty coffee training academy dedicated to developing skilled baristas for the coffee industry.
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
              <li><a href="#home" className="text-gray-300 hover:text-gold transition-colors">Home</a></li>
              <li><a href="#course" className="text-gray-300 hover:text-gold transition-colors">Courses</a></li>
              <li><a href="#benefits" className="text-gray-300 hover:text-gold transition-colors">What You'll Learn</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-gold transition-colors">Pricing</a></li>
              <li><a href="#team" className="text-gray-300 hover:text-gold transition-colors">Our Team</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-gold transition-colors">Testimonials</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">OUR COURSES</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-gold transition-colors">Barista Fundamentals</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold transition-colors">Latte Art Mastery</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold transition-colors">Espresso Techniques</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold transition-colors">Brewing Methods</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold transition-colors">Coffee Shop Management</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">CONTACT US</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gold mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">123 Coffee Street, Brewville, BV 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gold mr-2 flex-shrink-0" />
                <span className="text-gray-300">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gold mr-2 flex-shrink-0" />
                <span className="text-gray-300">info@brewmasters.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Brew Masters. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
