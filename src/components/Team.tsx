
import { Facebook, Instagram, Twitter } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const teamMembers = [
  {
    name: "SOLOMON",
    role: "Head Trainer",
    image: "/src/assets/team1.jpg",
    bio: "Award-winning barista with over 10 years of experience in specialty coffee.",
    social: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
    }
  },
  {
    name: "JANET",
    role: "Latte Art Specialist",
    image: "/src/assets/team2.jpg",
    bio: "International latte art champion who has trained baristas across three continents.",
    social: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
    }
  },
  {
    name: "ALEX",
    role: "Coffee Roaster",
    image: "/src/assets/team3.jpg",
    bio: "Master roaster who brings bean-to-cup expertise to our comprehensive training program.",
    social: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
    }
  }
];

const Team = () => {
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
    <section id="team" className="py-16 bg-coffee-light/20" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className={`section-title ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          MEET OUR TEAM
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg overflow-hidden shadow-md group relative ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.3 + index * 0.2}s` }}
            >
              <div className="relative overflow-hidden h-80">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300 flex space-x-4">
                    <a href={member.social.twitter} className="social-icon">
                      <Twitter size={18} />
                    </a>
                    <a href={member.social.facebook} className="social-icon">
                      <Facebook size={18} />
                    </a>
                    <a href={member.social.instagram} className="social-icon">
                      <Instagram size={18} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6 relative">
                <h3 className="text-xl font-bold text-center mb-1 group-hover:text-teal-DEFAULT transition-colors">{member.name}</h3>
                <p className="text-teal-DEFAULT text-center text-sm mb-3">{member.role}</p>
                <div className="h-px w-20 bg-teal-DEFAULT mx-auto mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300"></div>
                <p className="text-gray-600 text-center">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
