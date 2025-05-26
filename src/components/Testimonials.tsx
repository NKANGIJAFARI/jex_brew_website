import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    avatar: "/src/assets/avatar1.jpg",
    name: "Jessica Smith",
    role: "Cafe Owner",
    rating: 5,
    text: "Taking the barista course was one of the best career decisions I've made. I now own my own cafe and train my staff using the techniques I learned."
  },
  {
    avatar: "/src/assets/avatar2.jpg",
    name: "Michael Rodriguez",
    role: "Head Barista",
    rating: 5,
    text: "The hands-on training and personalized attention helped me secure a position as head barista at a prestigious coffee shop."
  },
  {
    avatar: "/src/assets/avatar3.jpg",
    name: "Sarah Johnson",
    role: "Coffee Consultant",
    rating: 5,
    text: "The knowledge I gained from this course enabled me to start my own coffee consulting business. Truly life-changing!"
  },
  {
    avatar: "/src/assets/avatar4.jpg",
    name: "David Williams",
    role: "Coffee Shop Manager",
    rating: 5,
    text: "I was promoted to manager within three months of completing the course. The business aspects covered were incredibly valuable."
  }
];

const Testimonials = () => {
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
      className="py-24 bg-gradient-to-b from-coffee-dark/5 to-white"
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
          WHAT OUR GRADUATES SAY
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-gold fill-gold" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-coffee-dark">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
