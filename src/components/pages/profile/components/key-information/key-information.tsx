import React from "react";
import classes from "./key-information.module.scss";

interface KeyInformationProps {
  yearsOfExperience: string;
  specialization: string;
  technologies: string[];
}

const KeyInformation: React.FC<KeyInformationProps> = ({
  yearsOfExperience,
  specialization,
  technologies,
}) => {
  return (
    <div className={classes.keyInformation}>
      <div className={classes.header}>
        <h3 className={classes.title}>Key Information</h3>
      </div>

      <div className={classes.content}>
        <div className={classes.infoRow}>
          <span className={classes.label}>Years of Experience</span>
          <span className={classes.value}>{yearsOfExperience}</span>
        </div>

        <div className={classes.infoRow}>
          <span className={classes.label}>Specialization</span>
          <span className={classes.value}>{specialization}</span>
        </div>

        <div className={classes.infoRow}>
          <span className={classes.label}>Technologies</span>
          <div className={classes.technologies}>
            {technologies.map((tech, index) => (
              <span key={index} className={classes.techBadge}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyInformation;
