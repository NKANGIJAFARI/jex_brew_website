
import { Menu, PhoneCall, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white bg-opacity-95 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-0">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-coffee-dark flex items-center gap-2">
            <img src="/src/assets/logo.png" alt="Brew Masters Logo" className="h-10" />
            <span>Brew Masters</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            <a href="#home" className="font-medium hover:text-gold transition-colors">Home</a>
            <a href="#course" className="font-medium hover:text-gold transition-colors">Courses</a>
            <a href="#benefits" className="font-medium hover:text-gold transition-colors">Benefits</a>
            <a href="#pricing" className="font-medium hover:text-gold transition-colors">Pricing</a>
            <a href="#team" className="font-medium hover:text-gold transition-colors">Team</a>
            <a href="#testimonials" className="font-medium hover:text-gold transition-colors">Testimonials</a>
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
            <a href="#home" className="font-medium hover:text-gold transition-colors">Home</a>
            <a href="#course" className="font-medium hover:text-gold transition-colors">Courses</a>
            <a href="#benefits" className="font-medium hover:text-gold transition-colors">Benefits</a>
            <a href="#pricing" className="font-medium hover:text-gold transition-colors">Pricing</a>
            <a href="#team" className="font-medium hover:text-gold transition-colors">Team</a>
            <a href="#testimonials" className="font-medium hover:text-gold transition-colors">Testimonials</a>
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
