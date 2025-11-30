import React from "react";
import classes from "./why-matchjob-section.module.scss";
import { FeatureCard } from "@/components/general/feature-card";
import LightbulbIcon from "@/components/general/icons/lightbulb-icon";
import LightningIcon from "@/components/general/icons/lightning-icon";
import ChartIcon from "@/components/general/icons/chart-icon";
import GlobeIcon from "@/components/general/icons/globe-icon";

const WhyMatchJobSection: React.FC = () => {
  const features = [
    {
      icon: <LightbulbIcon />,
      title: "Smart matching powered by AI",
      description:
        "Advanced algorithms analyze your profile and match you with the most relevant opportunities",
    },
    {
      icon: <LightningIcon />,
      title: "Save time — no endless scrolling",
      description:
        "Get curated job matches instantly instead of browsing hundreds of irrelevant listings",
    },
    {
      icon: <ChartIcon />,
      title: "Track your progress in one dashboard",
      description:
        "Manage all your applications from applied to offer in a simple kanban board",
    },
    {
      icon: <GlobeIcon />,
      title: "Powered by real job platforms",
      description:
        "Access opportunities from DOU, Djinni, and other leading job boards in one place",
    },
  ];

  return (
    <section className={classes.whyMatchJobSection}>
      <div className={classes.container}>
        <div className={classes.header}>
          <h2 className={classes.heading}>Why MatchJob?</h2>
          <p className={classes.paragraph}>Your job search, simplified and supercharged</p>
        </div>
        <div className={classes.featuresGrid}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMatchJobSection;

