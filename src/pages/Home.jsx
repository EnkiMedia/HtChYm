import React from "react";
import AnimatedSection from "@/components/AnimatedSection";
import HeroSection from "@/pages/Home/components/HeroSection";
import WhatIsHypnotherapySection from "@/pages/Home/components/WhatIsHypnotherapySection";
import ServicesPreviewSection from "@/pages/Home/components/ServicesPreviewSection";
import TestimonialsPreviewSection from "@/pages/Home/components/TestimonialsPreviewSection";
import CTASection from "@/pages/Home/components/CTASection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <WhatIsHypnotherapySection />
      <ServicesPreviewSection />
      <TestimonialsPreviewSection />
      <CTASection />
    </>
  );
};

export default Home;