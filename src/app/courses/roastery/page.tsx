import { Button } from "@/components/ui/button";
import { Check, ArrowLeft, Mail, Phone, Coffee, Flame } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RoasteryCourse() {
  const navigate = useNavigate();
  
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero Section */}
        <section 
          className="relative min-h-[70vh] flex items-center"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/assets/coffee-beans-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-coffee-black/80 via-transparent to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <Button 
              variant="link" 
              className="flex items-center text-white mb-8 hover:text-gold transition-colors p-0"
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Courses
            </Button>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-gold/20 rounded-full px-4 py-1 mb-4 backdrop-blur-sm">
                <Flame className="h-4 w-4 text-gold" />
                <span className="text-sm text-gold font-medium">Premium Course</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white leading-tight">
                MASTERING THE ART OF COFFEE ROASTING
              </h1>
              <h2 className="text-2xl mb-8 text-gold font-medium">A Comprehensive Roastery Course</h2>
              <p className="text-xl mb-10 text-white/90 max-w-2xl leading-relaxed">
                Embark on an exciting journey into the world of coffee roasting, where you'll learn the intricate processes involved in transforming green coffee beans into aromatic, flavorful roasts.
              </p>
              
              {/* Course details with improved alignment */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 mb-10 text-white bg-coffee-black/50 p-6 rounded-lg backdrop-blur-sm">
                <div className="flex items-center">
                  <div className="w-24 flex-shrink-0">
                    <span className="font-bold">Duration:</span>
                  </div>
                  <span>6 Sessions over 3 Weeks</span>
                </div>
                <div className="flex items-center">
                  <div className="w-24 flex-shrink-0">
                    <span className="font-bold">Level:</span>
                  </div>
                  <span>Beginner to Advanced</span>
                </div>
                <div className="flex items-center">
                  <div className="w-24 flex-shrink-0">
                    <span className="font-bold">Format:</span>
                  </div>
                  <span>In-person, Hands-on</span>
                </div>
                <div className="flex items-center">
                  <div className="w-24 flex-shrink-0">
                    <span className="font-bold">Location:</span>
                  </div>
                  <span>Dubai Al Baraha</span>
                </div>
              </div>
              
              <Button className="btn-primary text-lg px-10 py-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                ENROLL NOW
              </Button>
            </div>
          </div>
        </section>

        {/* Course Overview Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center mb-12">
              <div className="w-16 h-1 bg-gold mb-8"></div>
              <h2 className="section-title text-center mb-4">COURSE OVERVIEW</h2>
              <p className="text-lg text-coffee-dark/80 max-w-3xl text-center">
                This comprehensive course is designed to empower you with the knowledge and skills required to excel in coffee roasting.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="bg-white rounded-lg p-8 shadow-md border-t-4 border-gold">
                  <h3 className="text-2xl font-bold mb-8 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-white mr-3">
                      <Coffee className="h-5 w-5" />
                    </div>
                    Course Objectives
                  </h3>
                  <ul className="space-y-5">
                    <li className="flex items-start">
                      <div className="bg-gold/10 p-2 rounded-full mr-3 mt-1">
                        <Check className="h-4 w-4 text-gold" />
                      </div>
                      <span>Understand coffee roasting process and chemical changes</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-gold/10 p-2 rounded-full mr-3 mt-1">
                        <Check className="h-4 w-4 text-gold" />
                      </div>
                      <span>Identify different coffee bean varieties and flavor profiles</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-gold/10 p-2 rounded-full mr-3 mt-1">
                        <Check className="h-4 w-4 text-gold" />
                      </div>
                      <span>Operate roasting equipment with consistency and quality</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-gold/10 p-2 rounded-full mr-3 mt-1">
                        <Check className="h-4 w-4 text-gold" />
                      </div>
                      <span>Develop your own roasting profiles based on taste preferences</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-gold/10 p-2 rounded-full mr-3 mt-1">
                        <Check className="h-4 w-4 text-gold" />
                      </div>
                      <span>Conduct cupping sessions to evaluate your roasted coffee</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-8 shadow-md border-t-4 border-gold">
                  <h3 className="text-2xl font-bold mb-8 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-white mr-3">
                      <Flame className="h-5 w-5" />
                    </div>
                    Course Highlights
                  </h3>
                  <ul className="space-y-5">
                    <li className="flex items-start">
                      <div className="bg-gold/10 p-2 rounded-full mr-3 mt-1">
                        <Check className="h-4 w-4 text-gold" />
                      </div>
                      <span>Hands-on training with commercial coffee roasters</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-gold/10 p-2 rounded-full mr-3 mt-1">
                        <Check className="h-4 w-4 text-gold" />
                      </div>
                      <span>Learn bean sourcing, green coffee evaluation, and storage</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-gold/10 p-2 rounded-full mr-3 mt-1">
                        <Check className="h-4 w-4 text-gold" />
                      </div>
                      <span>Master roast profiles for different brew methods</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-gold/10 p-2 rounded-full mr-3 mt-1">
                        <Check className="h-4 w-4 text-gold" />
                      </div>
                      <span>Business guidance for starting your own roastery</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-gold/10 p-2 rounded-full mr-3 mt-1">
                        <Check className="h-4 w-4 text-gold" />
                      </div>
                      <span>Take home a sample of your own roasted coffee beans</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-16 bg-coffee-light p-8 rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="mb-6 md:mb-0 md:mr-8">
                    <h4 className="text-xl font-bold mb-3">Who This Course Is For</h4>
                    <p className="text-coffee-dark">
                      Coffee lovers, aspiring baristas, home roasters, cafe owners, and anyone interested in understanding the science and art behind coffee roasting.
                    </p>
                  </div>
                  <div className="border-t md:border-t-0 md:border-l border-coffee-dark/20 pt-6 md:pt-0 md:pl-8">
                    <h4 className="text-xl font-bold mb-3">Prerequisites</h4>
                    <p className="text-coffee-dark">
                      No prior experience required, just a passion for coffee and willingness to learn.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Schedule Section */}
        <section className="py-20 bg-coffee-light/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center mb-12">
              <div className="w-16 h-1 bg-gold mb-8"></div>
              <h2 className="section-title text-center mb-4">COURSE SCHEDULE</h2>
              <p className="text-lg text-coffee-dark/80 max-w-3xl text-center">
                The course consists of six sessions held over three weeks, featuring a combination of lectures, hands-on activities, and discussions.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-md transform transition-all hover:shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-white mr-4 text-2xl font-bold">1</div>
                    <div>
                      <h3 className="font-bold text-xl">Introduction to Coffee & Roasting</h3>
                    </div>
                  </div>
                  <p className="text-coffee-dark">
                    Learn about the history of coffee roasting, global coffee supply chain, and basic roasting principles.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-md transform transition-all hover:shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-white mr-4 text-2xl font-bold">2</div>
                    <div>
                      <h3 className="font-bold text-xl">Bean Selection and Preparation</h3>
                    </div>
                  </div>
                  <p className="text-coffee-dark">
                    Discover different coffee varieties, processing methods, and how to evaluate green coffee.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-md transform transition-all hover:shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-white mr-4 text-2xl font-bold">3</div>
                    <div>
                      <h3 className="font-bold text-xl">Roasting Techniques and Equipment</h3>
                    </div>
                  </div>
                  <p className="text-coffee-dark">
                    Dive into different roasting techniques, heat transfer principles, and professional equipment.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-md transform transition-all hover:shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-white mr-4 text-2xl font-bold">4</div>
                    <div>
                      <h3 className="font-bold text-xl">Hands-On Roasting Practice</h3>
                    </div>
                  </div>
                  <p className="text-coffee-dark">
                    Apply your knowledge by roasting multiple batches of coffee beans with expert guidance.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-md transform transition-all hover:shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-white mr-4 text-2xl font-bold">5</div>
                    <div>
                      <h3 className="font-bold text-xl">Tasting and Cupping Techniques</h3>
                    </div>
                  </div>
                  <p className="text-coffee-dark">
                    Learn professional cupping methods to evaluate coffee quality and flavor characteristics.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-md transform transition-all hover:shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-white mr-4 text-2xl font-bold">6</div>
                    <div>
                      <h3 className="font-bold text-xl">Final Project & Certification</h3>
                    </div>
                  </div>
                  <p className="text-coffee-dark">
                    Create your own signature roast profile and take home your freshly roasted coffee beans.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Pricing Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center mb-12">
              <div className="w-16 h-1 bg-gold mb-8"></div>
              <h2 className="section-title text-center mb-4">PRICING & REGISTRATION</h2>
              <p className="text-lg text-coffee-dark/80 max-w-3xl text-center">
                Invest in your coffee career with our comprehensive roastery training program.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white border border-gold/20 rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-coffee-dark text-white p-8 text-center">
                  <h3 className="text-3xl font-bold mb-2 text-white">AED 9,999</h3>
                  <p className="text-lg mb-2 text-white/80">per person</p>
                  {/* <div className="inline-flex items-center gap-2 bg-gold/20 rounded-full px-4 py-1 mb-4">
                    <span className="text-sm text-gold">Limited to 8 students per class</span>
                  </div> */}
                </div>
                
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="flex items-start">
                      <div className="bg-gold/10 p-2 rounded-full mr-3 mt-1">
                        <Check className="h-4 w-4 text-gold" />
                      </div>
                      <span>All materials and coffee supplies included</span>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-gold/10 p-2 rounded-full mr-3 mt-1">
                        <Check className="h-4 w-4 text-gold" />
                      </div>
                      <span>Free specialty toolkit for all participants</span>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-gold/10 p-2 rounded-full mr-3 mt-1">
                        <Check className="h-4 w-4 text-gold" />
                      </div>
                      <span>Certificate and portfolio included in price</span>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-gold/10 p-2 rounded-full mr-3 mt-1">
                        <Check className="h-4 w-4 text-gold" />
                      </div>
                      <span>Flexible payment plans available with Tabby</span>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-gold/10 p-2 rounded-full mr-3 mt-1">
                        <Check className="h-4 w-4 text-gold" />
                      </div>
                      <span>Green coffee beans for practice</span>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-gold/10 p-2 rounded-full mr-3 mt-1">
                        <Check className="h-4 w-4 text-gold" />
                      </div>
                      <span>Sample of your roasted coffee to take home</span>
                    </div>
                  </div>
                  
                  <div className="text-center pt-4 border-t border-gray-200">
                    <Button className="btn-primary w-full sm:w-auto px-10 py-4 text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                      RESERVE YOUR SPOT
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 bg-coffee-light p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-center">Contact Information</h3>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-white mr-3">
                      <Mail className="h-5 w-5" />
                    </div>
                    <span>info@jexbarista.com</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-white mr-3">
                      <Phone className="h-5 w-5" />
                    </div>
                    <span>+971 50 123 4567</span>
                  </div>
                </div>
                <p className="text-center">
                  For questions about the course or to discuss your registration, please reach out to our team.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-coffee-light/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center mb-12">
              <div className="w-16 h-1 bg-gold mb-8"></div>
              <h2 className="section-title text-center mb-4">FREQUENTLY ASKED QUESTIONS</h2>
              <p className="text-lg text-coffee-dark/80 max-w-3xl text-center">
                Find answers to common questions about our roastery course.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-coffee-dark flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold mr-3 font-bold">?</div>
                    What to expect in hands-on sessions?
                  </h3>
                  <p className="text-coffee-dark">
                    Participants will roast coffee beans, taste their results, and learn to adjust techniques for different outcomes with expert guidance.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-coffee-dark flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold mr-3 font-bold">?</div>
                    Is there an age requirement?
                  </h3>
                  <p className="text-coffee-dark">
                    Participants must be at least 13 years old. Minors (13-17) must be accompanied by an adult during hands-on sessions.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-coffee-dark flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold mr-3 font-bold">?</div>
                    How many students per class?
                  </h3>
                  <p className="text-coffee-dark">
                    We keep classes small with a maximum of 8 students to ensure personalized attention and adequate hands-on practice time.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-coffee-dark flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold mr-3 font-bold">?</div>
                    Do I need to bring coffee beans?
                  </h3>
                  <p className="text-coffee-dark">
                    No, all green coffee beans and materials are provided. You'll also receive a sample of your roasted coffee to take home.
                  </p>
                </div>
              </div>
              
              <div className="mt-16 text-center">
                <Button className="btn-primary text-lg px-10 py-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  ENROLL IN THE ROASTERY COURSE
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 