import React from "react";
import classes from "./landing.module.scss";
import { HeroSection } from "./components/hero-section";
import { HowItWorksSection } from "./components/how-it-works-section";
import { PreviewJobsSection } from "./components/preview-jobs-section";
import { AIMatchingSection } from "./components/ai-matching-section";
import { WhyMatchJobSection } from "./components/why-matchjob-section";
import { CTASection } from "./components/cta-section";

const Landing: React.FC = () => {
  return (
    <div className={classes.landing}>
      <HeroSection />
      <HowItWorksSection />
      <PreviewJobsSection />
      <AIMatchingSection />
      <WhyMatchJobSection />
      <CTASection />
    </div>
  );
};

export default Landing;
