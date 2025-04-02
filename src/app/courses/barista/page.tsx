import { Button } from "@/components/ui/button";
import { Check, ArrowLeft } from "lucide-react";
import WhatYouLearn from "@/components/WhatYouLearn";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BaristaCoursePage() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section 
          className="relative min-h-[60vh] flex items-center"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('/assets/espresso.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-coffee-black/70 via-transparent to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <Button 
              variant="link" 
              className="flex items-center text-white mb-6 hover:text-gold transition-colors p-0"
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Courses
            </Button>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                SPECIALTY BARISTA TRAINING COURSE
              </h1>
              <p className="text-xl mb-8 text-white/90 max-w-2xl">
                Master the art and science of specialty coffee with our comprehensive barista training program.
              </p>
              <div className="flex flex-wrap gap-6 mb-8 text-white">
                <div className="flex items-center">
                  <span className="font-bold mr-2">Duration:</span> 5 Days
                </div>
                <div className="flex items-center">
                  <span className="font-bold mr-2">Level:</span> Beginner to Advanced
                </div>
                <div className="flex items-center">
                  <span className="font-bold mr-2">Format:</span> In-person, Hands-on
                </div>
              </div>
              <Button className="btn-primary text-lg px-8 py-6">
                ENROLL NOW
              </Button>
            </div>
          </div>
        </section>

        {/* Course Overview Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6">Course Overview</h2>
                <p className="mb-6 text-coffee-dark">
                  Our Specialty Barista Training Course is designed to transform coffee enthusiasts into professional baristas. 
                  Whether you're looking to start a career in specialty coffee or elevate your home brewing skills, 
                  this comprehensive program covers everything from coffee science to latte art mastery.
                </p>
                
                <p className="mb-6 text-coffee-dark">
                  Working with professional-grade equipment, you'll develop the technical skills, knowledge, and confidence 
                  needed to create exceptional coffee experiences. Our small class sizes ensure plenty of hands-on practice 
                  and personalized instruction.
                </p>

                <h3 className="text-2xl font-bold mb-4 mt-8">Who This Course Is For</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-gold mr-2 mt-1 flex-shrink-0" />
                    <span>Coffee enthusiasts looking to deepen their knowledge</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-gold mr-2 mt-1 flex-shrink-0" />
                    <span>Individuals seeking a career in specialty coffee</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-gold mr-2 mt-1 flex-shrink-0" />
                    <span>Cafe owners and managers wanting to improve quality</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-gold mr-2 mt-1 flex-shrink-0" />
                    <span>Current baristas looking to upgrade their skills</span>
                  </li>
                </ul>
              </div>

              <div className="bg-coffee-light p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Course Highlights</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-gold mr-2 mt-1 flex-shrink-0" />
                    <span>Learn on professional espresso machines used in high-end cafes</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-gold mr-2 mt-1 flex-shrink-0" />
                    <span>Small class sizes ensure plenty of hands-on practice time</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-gold mr-2 mt-1 flex-shrink-0" />
                    <span>Comprehensive curriculum covering everything from bean origins to latte art</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-gold mr-2 mt-1 flex-shrink-0" />
                    <span>Certificate recognized by specialty coffee shops worldwide</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-gold mr-2 mt-1 flex-shrink-0" />
                    <span>Job placement assistance after completion</span>
                  </li>
                </ul>

                <div className="mt-8 p-4 bg-gold/10 rounded-lg border border-gold/30">
                  <h4 className="font-bold mb-2">Starting at AED 1999/person</h4>
                  <p className="text-sm mb-4">All materials and coffee supplies included</p>
                  <Button className="btn-primary w-full">RESERVE YOUR SPOT</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You Will Learn Section */}
        <WhatYouLearn />
        
        {/* Daily Schedule Section */}
        <section className="py-16 bg-coffee-light">
          <div className="container mx-auto px-4">
            <h2 className="section-title mb-12">5-DAY COURSE SCHEDULE</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Day 1: Coffee Fundamentals</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-gold text-white text-xs font-bold px-2 py-1 rounded mr-3 mt-1">AM</div>
                    <div>
                      <p className="font-semibold">Introduction to Specialty Coffee</p>
                      <p className="text-sm text-gray-600">History, industry overview, and coffee's journey from seed to cup</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-gold text-white text-xs font-bold px-2 py-1 rounded mr-3 mt-1">PM</div>
                    <div>
                      <p className="font-semibold">Coffee Tasting Workshop</p>
                      <p className="text-sm text-gray-600">Cupping techniques, flavor identification, tasting protocols</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Day 2: Espresso Foundations</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-gold text-white text-xs font-bold px-2 py-1 rounded mr-3 mt-1">AM</div>
                    <div>
                      <p className="font-semibold">Espresso Machine Components</p>
                      <p className="text-sm text-gray-600">Machine anatomy, operation, and basic maintenance</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-gold text-white text-xs font-bold px-2 py-1 rounded mr-3 mt-1">PM</div>
                    <div>
                      <p className="font-semibold">Pulling the Perfect Shot</p>
                      <p className="text-sm text-gray-600">Grind adjustment, dose measurement, tamping techniques</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Day 3: Milk Texturing & Latte Art</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-gold text-white text-xs font-bold px-2 py-1 rounded mr-3 mt-1">AM</div>
                    <div>
                      <p className="font-semibold">Milk Science and Steaming</p>
                      <p className="text-sm text-gray-600">Proper temperature, texture, and stretch techniques</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-gold text-white text-xs font-bold px-2 py-1 rounded mr-3 mt-1">PM</div>
                    <div>
                      <p className="font-semibold">Introduction to Latte Art</p>
                      <p className="text-sm text-gray-600">Basic patterns: heart, rosetta, and tulip</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Day 4: Brew Methods & Service</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-gold text-white text-xs font-bold px-2 py-1 rounded mr-3 mt-1">AM</div>
                    <div>
                      <p className="font-semibold">Alternative Brewing Methods</p>
                      <p className="text-sm text-gray-600">Pour over, French press, Aeropress, cold brew techniques</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-gold text-white text-xs font-bold px-2 py-1 rounded mr-3 mt-1">PM</div>
                    <div>
                      <p className="font-semibold">Cafe Workflow & Customer Service</p>
                      <p className="text-sm text-gray-600">Efficiency behind the bar, handling rush periods, customer experience</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Day 5: Advanced Skills & Certification</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-gold text-white text-xs font-bold px-2 py-1 rounded mr-3 mt-1">AM</div>
                    <div>
                      <p className="font-semibold">Advanced Latte Art & Signature Drinks</p>
                      <p className="text-sm text-gray-600">Complex patterns, drink design, presentation techniques</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-gold text-white text-xs font-bold px-2 py-1 rounded mr-3 mt-1">PM</div>
                    <div>
                      <p className="font-semibold">Practical Exam & Certification</p>
                      <p className="text-sm text-gray-600">Skills assessment, written test, certification ceremony</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button className="btn-primary text-lg px-10 py-6">
                ENROLL IN THE BARISTA COURSE
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 

// Use the course details
// Course Title:
// Mastering the Art of Coffee Roasting: A Comprehensive Roastery Course

// Course Description:
// Embark on an exciting journey into the world of coffee roasting, where you'll learn the intricate processes involved in transforming green coffee beans into aromatic, flavorful roasts. This course is designed to empower you with the knowledge and skills required to excel in coffee roasting, whether you're a beginner looking to explore your passion or an enthusiast aiming to deepen your expertise.

// Course Objectives:
// By the end of this course, participants will be able to:
// - Understand the coffee roasting process, including the chemical changes that occur during roasting.
// - Identify different coffee bean varieties and their flavor profiles.
// - Operate roasting equipment effectively, ensuring consistency and quality in their roasts.
// - Develop their own roasting profiles based on personal taste preferences.
// - Conduct cupping sessions to evaluate and refine their roasted coffee.

// Course Schedule:
// The course consists of six sessions held over three weeks:
// - Session 1: Introduction to Coffee & Roasting Fundamentals
// - Session 2: Bean Selection and Preparation
// - Session 3: Roasting Techniques and Equipment Overview
// - Session 4: Hands-On Roasting Practice
// - Session 5: Tasting and Cupping Techniques 
// - Session 6: Final Project – Create Your Own Roast Profile 

// Each class will feature a combination of lectures, hands-on activities, and discussion.

// Target Audience:
// This course is ideal for coffee lovers, aspiring baristas, home roasters, and anyone interested in understanding the science and art behind coffee roasting.

// Prerequisites:
// No prior experience in coffee roasting is required; however, a passion for coffee and a willingness to learn are essential.

// Location:
// Classes will be held at The JEX Barista and Roastery Training Institute, located in Dubai Al Baraha.

// Instructor Information:
// A seasoned coffee roaster with over 5 years of experience, He has worked with major coffee brands and has a deep understanding of coffee aesthetics and flavors. They are passionate about sharing their expertise and helping others uncover the nuances of roasting.

// Materials and Equipment:
// Participants will need:
// - A notebook and pen for note-taking.
// All roasting equipment and green coffee beans will be provided during the course.

// Tuition and Fees:
// The course fee is 10,000 AED, which covers all materials, equipment, and a sample of roasted coffee beans to take home. Payment can be made in installments or by Tabby upon registration.

// Registration Details:
// To secure your spot, please register by . Click here to complete the registration form. Early registration is recommended as spaces are limited.

// Contact Information:
// If you have any questions about the course, please reach out to us at [Your Em or call [Your Phone Number]. We're here to help!


// Gallery:
// Insert a few captivating images showcasing the roasting process, classroom setup.

// FAQs:
// -What should I expect during the hands-on sessions?
//   Participants will get the chance to roast coffee beans, taste their results, and learn to adjust their techniques for different outcomes.
  
// -Is there an age requirement to join the course?
//   Participants must be at least 13 years old due to safety regulations.

// By structuring your webpage with these detailed elements, you provide prospective students with a clear understanding of what to expect and why they should enroll in your roastery course.
