import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <section 
      id="pricing" 
      className="py-16"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/assets/coffee-beans-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="section-title text-white mb-12">AFFORDABLE PRICES FOR SPECIALTY TRAINING</h2>
        
        <div className="text-white max-w-3xl mx-auto mb-12">
          <h3 className="text-2xl font-bold mb-6">Invest in Your Coffee Career</h3>
          <p className="mb-6">
            Our comprehensive coffee training programs offer exceptional value with hands-on learning, professional equipment, and industry-recognized certification.
          </p>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-gold mr-2 mt-1 flex-shrink-0" />
              <span>All materials and coffee supplies included</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-gold mr-2 mt-1 flex-shrink-0" />
              <span>Free specialty toolkit for all participants</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-gold mr-2 mt-1 flex-shrink-0" />
              <span>Certificate and portfolio included in price</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-gold mr-2 mt-1 flex-shrink-0" />
              <span>Flexible payment plans available</span>
            </li>
          </ul>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Barista Course Pricing */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="bg-gold p-6 text-center">
              <div className="inline-block rounded-full bg-white p-2 mb-4">
                <img src="/assets/logo.png" alt="Logo" className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-white">Complete Barista Course</h3>
              <div className="mt-4 mb-2">
                <span className="text-sm text-white/80">Starting at</span>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-white">$1,999</span>
                  <span className="text-white/80 ml-1">/person</span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-gold mr-2 flex-shrink-0" />
                  <span>5 full days of intensive training</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-gold mr-2 flex-shrink-0" />
                  <span>Professional barista toolkit</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-gold mr-2 flex-shrink-0" />
                  <span>Comprehensive course materials</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-gold mr-2 flex-shrink-0" />
                  <span>Certification upon completion</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-gold mr-2 flex-shrink-0" />
                  <span>Job placement assistance</span>
                </li>
              </ul>
              
              <Button className="btn-primary w-full">ENROLL NOW</Button>
            </div>
          </div>
          
          {/* Roastery Course Pricing */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="bg-coffee-dark p-6 text-center">
              <div className="inline-block rounded-full bg-white p-2 mb-4">
                <img src="/assets/logo.png" alt="Logo" className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-white">Coffee Roasting Course</h3>
              <div className="mt-4 mb-2">
                <span className="text-sm text-white/80">Starting at</span>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-white">$2,499</span>
                  <span className="text-white/80 ml-1">/person</span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-gold mr-2 flex-shrink-0" />
                  <span>7 full days of intensive training</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-gold mr-2 flex-shrink-0" />
                  <span>Coffee sourcing guide & samples</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-gold mr-2 flex-shrink-0" />
                  <span>Roast profiling software license</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-gold mr-2 flex-shrink-0" />
                  <span>Roasting certification</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-gold mr-2 flex-shrink-0" />
                  <span>Business startup consultation</span>
                </li>
              </ul>
              
              <Button className="btn-primary w-full">ENROLL NOW</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
