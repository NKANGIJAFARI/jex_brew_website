import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="py-24 bg-gradient-to-b from-white to-coffee-dark/5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title mb-16 text-center text-4xl font-bold bg-gradient-to-r from-coffee-dark to-gold bg-clip-text text-transparent"
          variants={itemVariants}
        >
          INVEST IN YOUR COFFEE FUTURE
        </motion.h2>
        
        <div className="text-gray-700 max-w-3xl mx-auto mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Invest in Your Coffee Career</h3>
          <p className="mb-6 text-center">
            Our comprehensive coffee training programs offer exceptional value with hands-on learning, professional equipment, and industry-recognized certification.
          </p>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-gold mr-3 mt-1 flex-shrink-0" />
              <span>All materials and coffee supplies included</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-gold mr-3 mt-1 flex-shrink-0" />
              <span>Free specialty toolkit for all participants</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-gold mr-3 mt-1 flex-shrink-0" />
              <span>Certificate and portfolio included in price</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-gold mr-3 mt-1 flex-shrink-0" />
              <span>Flexible payment plans available</span>
            </li>
          </ul>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Barista Course Pricing */}
          <motion.div 
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div 
              className="p-6 text-center relative"
              style={{
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/barista.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "300px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Complete Barista Course</h3>
              <div className="mt-4 mb-2">
                <span className="text-sm text-white/80">Starting at</span>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-white">AED 1999</span>
                  <span className="text-white/80 ml-2">/person</span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                  <span className="text-gray-700">5 full days of intensive training</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Professional barista toolkit</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Comprehensive course materials</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Certification upon completion</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Job placement assistance</span>
                </li>
              </ul>
              
              <Button className="btn-primary w-full">ENROLL NOW</Button>
            </div>
          </motion.div>
          
          {/* Roastery Course Pricing */}
          <motion.div 
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div 
              className="p-6 text-center relative"
              style={{
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/roastery.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "300px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Coffee Roasting Course</h3>
              <div className="mt-4 mb-2">
                <span className="text-sm text-white/80">Starting at</span>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-white">AED 9999</span>
                  <span className="text-white/80 ml-2">/person</span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                  <span className="text-gray-700">7 full days of intensive training</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Coffee sourcing guide & samples</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Roast profiling software license</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Roasting certification</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Business startup consultation</span>
                </li>
              </ul>
              
              <Button className="btn-primary w-full">ENROLL NOW</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Pricing;