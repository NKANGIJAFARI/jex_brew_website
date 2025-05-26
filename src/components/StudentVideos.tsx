import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

const StudentVideos = () => {
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
      id="testimonials" 
      className="py-24 bg-gradient-to-b from-white to-coffee-dark/10"
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
          STUDENT SUCCESS STORIES
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            className="relative rounded-xl overflow-hidden shadow-xl group cursor-pointer"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <img 
              src="/src/assets/student1.jpg" 
              alt="Student Testimonial" 
              className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee-black/90 via-coffee-black/50 to-transparent flex flex-col items-center justify-center group-hover:bg-coffee-black/70 transition-all duration-300">
              <PlayCircle className="h-20 w-20 text-teal-light opacity-90 mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:text-teal-DEFAULT animate-pulse" />
              <h3 className="text-white text-xl font-bold">Jessica's Journey</h3>
              <p className="text-teal-light text-sm">From Student to Cafe Owner</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative rounded-xl overflow-hidden shadow-xl group cursor-pointer"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <img 
              src="/src/assets/student2.jpg" 
              alt="Student Testimonial" 
              className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee-black/90 via-coffee-black/50 to-transparent flex flex-col items-center justify-center group-hover:bg-coffee-black/70 transition-all duration-300">
              <PlayCircle className="h-20 w-20 text-teal-light opacity-90 mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:text-teal-DEFAULT animate-pulse" />
              <h3 className="text-white text-xl font-bold">Michael's Story</h3>
              <p className="text-teal-light text-sm">International Barista Champion</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default StudentVideos;
