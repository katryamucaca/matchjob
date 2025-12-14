import React from "react";
import classes from "./application-card.module.scss";
import { useDraggable } from "@dnd-kit/core";
import { Badge } from "@/components/general/badge";
import { JobData } from "@/components/general/job-card";
import { ApplicationData } from "../progress";
import { EBadgeVariant } from "@/components/general/badge/badge";

interface IApplicationCardProps {
  application: ApplicationData;
  isOverlay?: boolean;
}

const ApplicationCard: React.FC<IApplicationCardProps> = ({
  application,
  isOverlay = false,
}) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: application.id,
  });

  if (isOverlay) {
    return (
      <div className={`${classes.task} ${classes.overlay}`}>
        <h3 className={classes.title}>{application.title}</h3>
        <p className={classes.description}>{application.company}</p>
      </div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={`${classes.task} ${isDragging ? classes.dragging : ""}`}
    >
      <div className={classes.topContent}>
        <h3 className={classes.title}>{application.title}</h3>

        {application.matchPercentage && (
          <Badge variant={EBadgeVariant.PERCENTAGE} className={classes.badge}>
            {application.matchPercentage}%
          </Badge>
        )}
      </div>
      <p className={classes.description}>{application.company}</p>
    </div>
  );
};

export default ApplicationCard;
