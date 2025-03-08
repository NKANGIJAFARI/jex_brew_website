
import { PlayCircle } from "lucide-react";

const StudentVideos = () => {
  return (
    <section id="testimonials" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title">WHAT OUR STUDENTS SAY</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative rounded-lg overflow-hidden shadow-lg group">
            <img 
              src="/src/assets/student1.jpg" 
              alt="Student Testimonial" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-coffee-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <PlayCircle className="h-16 w-16 text-white" />
            </div>
          </div>
          
          <div className="relative rounded-lg overflow-hidden shadow-lg group">
            <img 
              src="/src/assets/student2.jpg" 
              alt="Student Testimonial" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-coffee-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <PlayCircle className="h-16 w-16 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentVideos;
