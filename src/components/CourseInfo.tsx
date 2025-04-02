import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CourseInfo = () => {
  const navigate = useNavigate();
  
  return (
    <section id="course" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12">OUR SPECIALTY COFFEE TRAINING PROGRAMS</h2>
        
        {/* Barista Course */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="/barista.jpg" 
              alt="Barista Training Course" 
              className="w-full h-64 object-cover"
            />
            <div className="bg-white p-6">
              <div className="flex justify-between items-center mb-4">
                <p className="text-sm text-coffee-dark">Duration: <span className="font-bold">5 Days</span></p>
                <div className="flex items-center">
                  <div className="bg-gold p-2 rounded-full flex items-center justify-center">
                    <Coffee className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">BECOME A CERTIFIED BARISTA</h3>
              <p className="text-gray-600 mb-4">
                This immersive, hands-on course provides a comprehensive foundation in specialty coffee preparation techniques.
              </p>
              <Button 
                className="btn-primary w-full" 
                onClick={() => navigate('/courses/barista')}
              >
                ENROLL NOW
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Barista Course Overview</h3>
            <p className="mb-6 text-coffee-dark">
              Master the art and science of specialty coffee with our comprehensive training program. From bean selection to perfect extraction, we'll guide you through every step of creating exceptional coffee experiences.
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-gold mr-2 mt-1 flex-shrink-0" />
                <span>Learn on professional espresso machines used in high-end cafes</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-gold mr-2 mt-1 flex-shrink-0" />
                <span>Small class sizes ensure plenty of hands-on practice time</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-gold mr-2 mt-1 flex-shrink-0" />
                <span>Comprehensive curriculum covering everything from bean origins to latte art</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-gold mr-2 mt-1 flex-shrink-0" />
                <span>Certificate recognized by specialty coffee shops worldwide</span>
              </li>
            </ul>
            
            <Button 
              className="btn-primary self-start"
              onClick={() => navigate('/courses/barista')}
            >
              ENROLL TODAY
            </Button>
          </div>
        </div>
        
        {/* Roastery Course */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="/roastery.jpg" 
              alt="Coffee Roasting Course" 
              className="w-full h-64 object-cover"
            />
            <div className="bg-white p-6">
              <div className="flex justify-between items-center mb-4">
                <p className="text-sm text-coffee-dark">Duration: <span className="font-bold">7 Days</span></p>
                <div className="flex items-center">
                  <div className="bg-gold p-2 rounded-full flex items-center justify-center">
                    <Flame className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">MASTER COFFEE ROASTING</h3>
              <p className="text-gray-600 mb-4">
                Dive deep into the art and science of coffee roasting with our comprehensive roastery training program.
              </p>
              <Button 
                className="btn-primary w-full" 
                onClick={() => navigate('/courses/roastery')}
              >
                ENROLL NOW
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Roastery Course Overview</h3>
            <p className="mb-6 text-coffee-dark">
              Discover the intricacies of coffee roasting from green bean selection to roast profiling. Learn to develop flavor profiles and create signature roasts on professional-grade equipment.
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-gold mr-2 mt-1 flex-shrink-0" />
                <span>Hands-on training with commercial coffee roasters</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-gold mr-2 mt-1 flex-shrink-0" />
                <span>Learn bean sourcing, green coffee evaluation, and storage</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-gold mr-2 mt-1 flex-shrink-0" />
                <span>Master roast profiles for different brew methods</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-gold mr-2 mt-1 flex-shrink-0" />
                <span>Business guidance for starting your own roastery</span>
              </li>
            </ul>
            
            <Button 
              className="btn-primary self-start"
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
