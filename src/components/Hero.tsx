
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] flex items-center"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('/lovable-uploads/f6ea5d3f-9c7a-4f75-a471-ffbd837fb531.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-coffee-black/70 via-transparent to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-left">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            BECOME A <span className="text-gold">SPECIALTY</span> PRO BARISTA
          </h1>
          <p className="text-xl mb-8 text-white/90 max-w-xl">
            Our expert-led barista training courses teach you everything from espresso basics to latte art mastery. Join thousands of successful students worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
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
