import React from "react";
import classes from "./how-it-works-section.module.scss";
import { StepCard } from "@/components/general/step-card";
import UploadDocumentIcon from "@/components/general/icons/upload-document-icon";
import AISparkleLargeIcon from "@/components/general/icons/ai-sparkle-large-icon";
import TargetIcon from "@/components/general/icons/target-icon";

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      icon: <UploadDocumentIcon />,
      stepNumber: 1,
      title: "Upload your résumé or fill the form",
      description: "We analyze your skills and experience",
    },
    {
      icon: <AISparkleLargeIcon />,
      stepNumber: 2,
      title: "Get personalized matches",
      description: "AI instantly selects jobs that fit your background",
    },
    {
      icon: <TargetIcon />,
      stepNumber: 3,
      title: "Track your progress easily",
      description: "From application to offer — everything in one place",
    },
  ];

  return (
    <section className={classes.howItWorksSection}>
      <div className={classes.container}>
        <div className={classes.header}>
          <h2 className={classes.heading}>How It Works</h2>
          <p className={classes.paragraph}>
            Three simple steps to find your perfect job match
          </p>
        </div>
        <div className={classes.steps}>
          {steps.map((step, index) => (
            <StepCard
              key={index}
              icon={step.icon}
              stepNumber={step.stepNumber}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
