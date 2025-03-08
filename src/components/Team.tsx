
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
    <section id="team" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title">MEET OUR TEAM</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md card-hover">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-center mb-1">{member.name}</h3>
                <p className="text-gold text-center text-sm mb-3">{member.role}</p>
                <p className="text-gray-600 text-center mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-4">
                  <a href={member.social.twitter} className="text-coffee hover:text-gold transition-colors">
                    <Twitter size={18} />
                  </a>
                  <a href={member.social.facebook} className="text-coffee hover:text-gold transition-colors">
                    <Facebook size={18} />
                  </a>
                  <a href={member.social.instagram} className="text-coffee hover:text-gold transition-colors">
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
