import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CourseInfo from "@/components/CourseInfo";
import WhatYouLearn from "@/components/WhatYouLearn";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import EnrollForm from "@/components/EnrollForm";
import Team from "@/components/Team";
import StudentVideos from "@/components/StudentVideos";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <CourseInfo />
        {/* <WhatYouLearn /> */}
        <Pricing />
        <Testimonials />
        <StudentVideos />
        <EnrollForm />
        {/* <Team /> */}
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
