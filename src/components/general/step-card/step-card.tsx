import React from "react";
import classes from "./step-card.module.scss";
import { Badge, EBadgeVariant } from "../badge";

interface IStepCardProps {
  icon: React.ReactNode;
  stepNumber: number;
  title: string;
  description: string;
}

const StepCard: React.FC<IStepCardProps> = ({ icon, stepNumber, title, description }) => {
  return (
    <div className={classes.stepCard}>
      <div className={classes.iconContainer}>
        <div className={classes.iconWrapper}>{icon}</div>
        <Badge variant={EBadgeVariant.NUMBER} value={stepNumber} className={classes.badge} />
      </div>
      <h3 className={classes.title}>{title}</h3>
      <p className={classes.description}>{description}</p>
    </div>
  );
};

export default StepCard;

