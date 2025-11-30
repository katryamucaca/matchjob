import React from "react";
import classes from "./key-information.module.scss";
import Button from "@/components/general/button/button";
import EditIcon from "@/components/general/icons/edit-icon";
import { EButtonVariant } from "@/components/general/button/button.types";

interface KeyInformationProps {
  yearsOfExperience: string;
  specialization: string;
  technologies: string[];
  onEdit?: () => void;
}

const KeyInformation: React.FC<KeyInformationProps> = ({
  yearsOfExperience,
  specialization,
  technologies,
  onEdit,
}) => {
  const handleEdit = () => {
    onEdit?.();
  };

  return (
    <div className={classes.keyInformation}>
      <div className={classes.header}>
        <h3 className={classes.title}>Key Information</h3>

        <Button
          variant={EButtonVariant.SECONDARY}
          className={classes.editButton}
          onClick={handleEdit}
        >
          <EditIcon />
        </Button>
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
