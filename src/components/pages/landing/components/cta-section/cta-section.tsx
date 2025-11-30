"use client";

import React from "react";
import classes from "./cta-section.module.scss";
import Button from "@/components/general/button/button";
import { EButtonVariant } from "@/components/general/button/button.types";

const CTASection: React.FC = () => {
  const handleGetStarted = () => {
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className={classes.ctaSection}>
      <div className={classes.container}>
        <h2 className={classes.heading}>Find your next job match today</h2>
        <p className={classes.paragraph}>Takes less than a minute</p>
        <div className={classes.buttons}>
          <Button
            variant={EButtonVariant.SECONDARY}
            className={classes.uploadButton}
            onClick={handleGetStarted}
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
