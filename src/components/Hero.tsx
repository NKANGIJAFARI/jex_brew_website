
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-[80vh] flex items-center"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/lovable-uploads/f6ea5d3f-9c7a-4f75-a471-ffbd837fb531.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">BECOME A SPECIALTY PRO BARISTA</h1>
          <p className="text-xl mb-8 text-white/90">
            Our expert-led barista training courses teach you everything from espresso basics to latte art mastery. Join thousands of successful students worldwide.
          </p>
          <Button
            className="btn-primary text-lg px-8 py-6"
            onClick={() => document.getElementById('course')?.scrollIntoView({ behavior: 'smooth' })}
          >
            ENROLL NOW
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
