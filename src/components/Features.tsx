import { Coffee, Clock, Award, Users } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Coffee className="h-10 w-10 text-gold" />,
    title: "HANDS-ON PRACTICE WITH PROFESSIONAL EQUIPMENT",
    description: "Get real experience on commercial espresso machines"
  },
  {
    icon: <Clock className="h-10 w-10 text-gold" />,
    title: "FLEXIBLE SCHEDULING WITH DAILY SESSIONS",
    description: "Choose schedule that fits your lifestyle"
  },
  {
    icon: <Award className="h-10 w-10 text-gold" />,
    title: "INTERNATIONALLY RECOGNIZED CERTIFICATION",
    description: "Earn credentials respected by employers worldwide"
  },
  {
    icon: <Users className="h-10 w-10 text-gold" />,
    title: "SMALL CLASS SIZES WITH PERSONAL ATTENTION",
    description: "Enjoy more one-on-one time with expert instructors"
  }
];

const Features = () => {
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
      className="py-12 bg-gradient-to-b from-white to-coffee-light/10"
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
          WHY CHOOSE BREWS ACADEMY?
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
            <div className="mb-4">{feature.icon}</div>
              <h3 className="text-sm font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
  
            </motion.div>
          ))}


          {/* {features.map((feature, index) => (
            <div key={index} className="feature-card card-hover">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-sm font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))} */}
        </div>
      </div>
    </motion.section>
  );
};

export default Features;
