
import { PlayCircle } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const StudentVideos = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        threshold: 0.2,
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="testimonials" 
      className="py-20 bg-gradient-to-b from-white to-teal-light/30"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <h2 className={`section-title ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          WHAT OUR STUDENTS SAY
        </h2>
        <p className={`text-center text-coffee-dark/80 max-w-2xl mx-auto mb-12 ${isVisible ? 'animate-slide-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          Hear directly from our graduates about their experiences with our barista training program and how it has transformed their careers.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div 
            className={`relative rounded-xl overflow-hidden shadow-xl group cursor-pointer transform transition-all duration-300 hover:-translate-y-2 ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.5s' }}
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
          </div>
          
          <div 
            className={`relative rounded-xl overflow-hidden shadow-xl group cursor-pointer transform transition-all duration-300 hover:-translate-y-2 ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.7s' }}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentVideos;
