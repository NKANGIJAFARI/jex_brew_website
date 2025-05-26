import { Menu, PhoneCall, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    
    // Close mobile menu when link is clicked
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white bg-opacity-95 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-0">
        <div className="flex items-center">
          <div 
            className="text-2xl font-bold text-coffee-dark flex items-center gap-2 cursor-pointer"
            onClick={() => handleNavigation('/')}
          >
            {/* <img src="/assets/logo.png" alt="Brews Academy Logo" className="h-10" /> */}
            <span>Brews Academy</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            <button onClick={() => handleNavigation('#home')} className="font-medium hover:text-gold transition-colors">Home</button>
            <button onClick={() => handleNavigation('#course')} className="font-medium hover:text-gold transition-colors">Courses</button>
            <button onClick={() => handleNavigation('#benefits')} className="font-medium hover:text-gold transition-colors">Benefits</button>
            <button onClick={() => handleNavigation('#pricing')} className="font-medium hover:text-gold transition-colors">Pricing</button>
            <button onClick={() => handleNavigation('#team')} className="font-medium hover:text-gold transition-colors">Team</button>
            <button onClick={() => handleNavigation('#testimonials')} className="font-medium hover:text-gold transition-colors">Testimonials</button>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+11234567890" className="flex items-center gap-1 text-sm text-coffee hover:text-gold transition-colors">
              <PhoneCall size={16} />
              <span>123-456-7890</span>
            </a>
            <a href="mailto:info@brewmasters.com" className="flex items-center gap-1 text-sm text-coffee hover:text-gold transition-colors">
              <Mail size={16} />
              <span>info@brewmasters.com</span>
            </a>
          </div>
        </div>
        
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu />
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <button onClick={() => handleNavigation('#home')} className="font-medium hover:text-gold transition-colors text-left">Home</button>
            <button onClick={() => handleNavigation('#course')} className="font-medium hover:text-gold transition-colors text-left">Courses</button>
            <button onClick={() => handleNavigation('#benefits')} className="font-medium hover:text-gold transition-colors text-left">Benefits</button>
            <button onClick={() => handleNavigation('#pricing')} className="font-medium hover:text-gold transition-colors text-left">Pricing</button>
            <button onClick={() => handleNavigation('#team')} className="font-medium hover:text-gold transition-colors text-left">Team</button>
            <button onClick={() => handleNavigation('#testimonials')} className="font-medium hover:text-gold transition-colors text-left">Testimonials</button>
            <div className="flex flex-col gap-2 pt-4 border-t border-gray-200">
              <a href="tel:+11234567890" className="flex items-center gap-1 text-sm text-coffee">
                <PhoneCall size={16} />
                <span>123-456-7890</span>
              </a>
              <a href="mailto:info@brewmasters.com" className="flex items-center gap-1 text-sm text-coffee">
                <Mail size={16} />
                <span>info@brewmasters.com</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
