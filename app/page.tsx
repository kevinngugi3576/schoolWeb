import React from "react";
import StarBackground from "@/components/stars";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Teachers from "@/components/Teachers";
import Events from "@/components/Events";
import Cocurricular from "@/components/Cocurricular";
import Header from "@/components/Header";

const page = () => {
  return (
    <div className="">
      <div className="">
        <Header />
      </div>

      <HeroSection />
      <Section />
      <Cocurricular />
      <Teachers />
      <Events />
      <Footer />
    </div>
  );
};

export default page;
