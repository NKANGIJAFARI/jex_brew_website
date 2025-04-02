
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
  return (
    <section className="py-16 bg-white bg-opacity-90">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">WHAT FEEDBACK HAVE OUR STUDENTS PROVIDED?</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 card-hover">
              <div className="flex justify-center mb-4">
                {/* <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="h-16 w-16 rounded-full object-cover border-2 border-gold"
                /> */}
              </div>
              <h3 className="font-bold text-center">{testimonial.name}</h3>
              <p className="text-sm text-center text-coffee mb-2">{testimonial.role}</p>
              
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-gold fill-gold" />
                ))}
              </div>
              
              <p className="text-sm text-center text-gray-600">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
