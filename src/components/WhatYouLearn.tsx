import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const courses = [
  {
    title: "COFFEE BASICS",
    image: "/assets/coffee-basics.jpg",
    items: [
      "Bean varieties",
      "Growing regions",
      "Processing methods",
      "Roast profiles"
    ]
  },
  {
    title: "MILK SCIENCE",
    image: "/src/assets/milk-science.jpg",
    items: [
      "Milk texturing",
      "Micro-foam creation",
      "Temperature control",
      "Alternative milks"
    ]
  },
  {
    title: "ESPRESSO",
    image: "/src/assets/espresso.jpg",
    items: [
      "Grind adjustment",
      "Tamping techniques",
      "Extraction timing",
      "Flavor profiling"
    ]
  },
  {
    title: "LATTE ART",
    image: "/src/assets/latte-art.jpg",
    items: [
      "Pour techniques",
      "Heart designs",
      "Rosetta patterns",
      "Tulip variations"
    ]
  },
  {
    title: "BREWING METHODS",
    image: "/assets/brewing-methods.jpg",
    items: [
      "Espresso extraction",
      "Pour over techniques",
      "French press",
      "Cold brew"
    ]
  },
  {
    title: "BUSINESS",
    image: "/src/assets/business.jpg",
    items: [
      "Menu design",
      "Service workflows",
      "Cost calculation",
      "Customer experience"
    ]
  },
  {
    title: "EQUIPMENT MASTERY",
    image: "/assets/equipment.jpg",
    items: [
      "Machine operation",
      "Grinder calibration",
      "Daily cleaning",
      "Troubleshooting",
      "Equipment selection"
    ]
  },
  {
    title: "SENSORY SKILLS",
    image: "/assets/sensory-skills.jpg",
    items: [
      "Flavor identification",
      "Aroma recognition",
      "Taste development",
      "Describing coffees professionally"
    ]
  }
];

const WhatYouLearn = () => {
  return (
    <section id="benefits" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title">WHAT YOU WILL LEARN</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div key={index} className="course-card card-hover">
              <div className="relative h-64 bg-coffee-dark">
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
                  style={{
                    backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), transparent), url(${course.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-xl font-bold mb-3 text-white">{course.title}</h3>
                  <ul className="space-y-1">
                    {course.items.map((item, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <Check className="h-4 w-4 text-gold mr-2 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-gold p-2 text-center">
                <Button variant="ghost" className="text-white font-medium hover:bg-gold-dark w-full">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearn;
