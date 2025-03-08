
import { Facebook, Instagram, Twitter } from "lucide-react";

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
  return (
    <section id="team" className="py-16 bg-coffee-light/20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">MEET OUR TEAM</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md group relative">
              <div className="relative overflow-hidden h-80">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 relative">
                <div className="absolute -top-10 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex space-x-3">
                    <a href={member.social.twitter} className="bg-white rounded-full p-2 text-coffee hover:text-gold transition-colors shadow-md">
                      <Twitter size={18} />
                    </a>
                    <a href={member.social.facebook} className="bg-white rounded-full p-2 text-coffee hover:text-gold transition-colors shadow-md">
                      <Facebook size={18} />
                    </a>
                    <a href={member.social.instagram} className="bg-white rounded-full p-2 text-coffee hover:text-gold transition-colors shadow-md">
                      <Instagram size={18} />
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-1">{member.name}</h3>
                <p className="text-gold text-center text-sm mb-3">{member.role}</p>
                <div className="h-px w-20 bg-gold mx-auto mb-4"></div>
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
