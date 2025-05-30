import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Set animation to visible after component mounts
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] flex items-center"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('/assets/herobackground.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-coffee-black/70 via-transparent to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className=" text-left">
          <h1
        className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
        style={{ animationDelay: '0.2s' }}
      >
      <span>
        ☕ Barista & Roaster <span className="text-primary">Courses In Dubai</span>
      </span>
        <span className="block">Master the Art of Specialty Coffee.</span>
      </h1>
          <p 
            className={`text-lg sm:text-xl mb-8 text-white/90 max-w-4xl ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.5s' }}
          >
            Our expert-led barista training courses teach you everything from espresso basics to latte art mastery. 
            🔥 Learn from Experts | Get Certified | Elevate Your Coffee Game. Join today and become a Specialty Coffee Pro!
          </p>
          <div 
            className={`flex flex-col sm:flex-row gap-4 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.8s' }}
          >
            <Button
              className="btn-primary text-lg px-8 py-6 group"
              onClick={() => document.getElementById('course')?.scrollIntoView({ behavior: 'smooth' })}
            >
              ENROLL NOW <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6"
              onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
            >
              SEE STUDENT STORIES
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
