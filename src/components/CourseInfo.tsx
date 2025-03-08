
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const CourseInfo = () => {
  return (
    <section id="course" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title">SPECIALTY BARISTA TRAINING COURSE UNIT 1</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="/lovable-uploads/f6ea5d3f-9c7a-4f75-a471-ffbd837fb531.png" 
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
              <Button className="btn-primary w-full">DOWNLOAD SYLLABUS</Button>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Course Overview</h3>
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
            
            <Button className="btn-primary self-start">ENROLL TODAY</Button>
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

export default CourseInfo;
