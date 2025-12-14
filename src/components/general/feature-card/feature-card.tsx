import React from "react";
import classes from "./feature-card.module.scss";

interface IFeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<IFeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className={classes.featureCard}>
      <div className={classes.iconContainer}>{icon}</div>
      <h3 className={classes.title}>{title}</h3>
      <p className={classes.description}>{description}</p>
    </div>
  );
};

export default FeatureCard;
