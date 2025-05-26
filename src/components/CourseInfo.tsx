import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CourseInfo = () => {
  const navigate = useNavigate();
  
  return (
    <section id="course" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-16 text-center text-4xl font-bold bg-gradient-to-r from-coffee-dark to-gold bg-clip-text text-transparent">
          OUR SPECIALTY COFFEE TRAINING PROGRAMS
        </h2>
        
        {/* Barista Course */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <div className="rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl">
            <div className="relative">
              <img 
                src="/barista.jpg" 
                alt="Barista Training Course" 
                className="w-full h-80 object-cover"
              />

            </div>
            <div className="bg-white p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-gold to-amber-500 p-3 rounded-full flex items-center justify-center">
                  <Coffee className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold ml-4">BECOME A CERTIFIED BARISTA</h3>
              </div>
              <p className="text-gray-600 mb-6 text-lg">
                This immersive, hands-on course provides a comprehensive foundation in specialty coffee preparation techniques.
              </p>
              <Button 
                className="btn-primary w-full py-6 text-lg font-semibold transition-all duration-300 hover:shadow-lg"
                onClick={() => navigate('/courses/barista')}
              >
                ENROLL NOW
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-coffee-dark to-gold bg-clip-text text-transparent">
              Barista Course Overview
            </h3>
            <p className="mb-8 text-coffee-dark text-lg leading-relaxed">
              Master the art and science of specialty coffee with our comprehensive training program. From bean selection to perfect extraction, we'll guide you through every step of creating exceptional coffee experiences.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "Learn on professional espresso machines used in high-end cafes",
                "Small class sizes ensure plenty of hands-on practice time",
                "Comprehensive curriculum covering everything from bean origins to latte art",
                "Certificate recognized by specialty coffee shops worldwide"
              ].map((item, index) => (
                <li key={index} className="flex items-start group">
                  <div className="bg-gradient-to-r from-gold to-amber-500 p-1 rounded-full mr-4 mt-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700 group-hover:text-coffee-dark transition-colors duration-300">{item}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              className="btn-primary self-start px-8 py-6 text-lg font-semibold transition-all duration-300 hover:shadow-lg"
              onClick={() => navigate('/courses/barista')}
            >
              ENROLL TODAY
            </Button>
          </div>
        </div>
        
        {/* Roastery Course */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl">
            <div className="relative">
              <img 
                src="/roastery.jpg" 
                alt="Coffee Roasting Course" 
                className="w-full h-80 object-cover"
              />
           
            </div>
            <div className="bg-white p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-gold to-amber-500 p-3 rounded-full flex items-center justify-center">
                  <Flame className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold ml-4">MASTER COFFEE ROASTING</h3>
              </div>
              <p className="text-gray-600 mb-6 text-lg">
                Dive deep into the art and science of coffee roasting with our comprehensive roastery training program.
              </p>
              <Button 
                className="btn-primary w-full py-6 text-lg font-semibold transition-all duration-300 hover:shadow-lg"
                onClick={() => navigate('/courses/roastery')}
              >
                ENROLL NOW
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-coffee-dark to-gold bg-clip-text text-transparent">
              Roastery Course Overview
            </h3>
            <p className="mb-8 text-coffee-dark text-lg leading-relaxed">
              Discover the intricacies of coffee roasting from green bean selection to roast profiling. Learn to develop flavor profiles and create signature roasts on professional-grade equipment.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "Hands-on training with commercial coffee roasters",
                "Learn bean sourcing, green coffee evaluation, and storage",
                "Master roast profiles for different brew methods",
                "Business guidance for starting your own roastery"
              ].map((item, index) => (
                <li key={index} className="flex items-start group">
                  <div className="bg-gradient-to-r from-gold to-amber-500 p-1 rounded-full mr-4 mt-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700 group-hover:text-coffee-dark transition-colors duration-300">{item}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              className="btn-primary self-start px-8 py-6 text-lg font-semibold transition-all duration-300 hover:shadow-lg"
              onClick={() => navigate('/courses/roastery')}
            >
              ENROLL TODAY
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Add the Coffee icon component since we're using it
const Coffee = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M17 8h1a4 4 0 1 1 0 8h-1"></path>
    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path>
    <line x1="6" x2="6" y1="2" y2="4"></line>
    <line x1="10" x2="10" y1="2" y2="4"></line>
    <line x1="14" x2="14" y1="2" y2="4"></line>
  </svg>
);

// Add the Flame icon component for the roastery course
const Flame = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
  </svg>
);

export default CourseInfo;
