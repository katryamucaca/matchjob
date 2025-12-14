import React from "react";
import classes from "./job-card-simple.module.scss";
import { Badge, EBadgeVariant } from "../badge";
import CompanyIcon from "../icons/company-icon";
import LocationIcon from "../icons/location-icon";

interface IJobCardSimpleProps {
  title: string;
  company: string;
  location: string;
  matchPercentage: number;
  onClick?: () => void;
}

const JobCardSimple: React.FC<IJobCardSimpleProps> = ({
  title,
  company,
  location,
  matchPercentage,
  onClick,
}) => {
  return (
    <div
      className={classes.jobCardSimple}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
    >
      <div className={classes.header}>
        <div className={classes.info}>
          <h4 className={classes.title}>{title}</h4>
          <div className={classes.meta}>
            <div className={classes.metaItem}>
              <CompanyIcon />
              <span>{company}</span>
            </div>
            <div className={classes.metaItem}>
              <LocationIcon />
              <span>{location}</span>
            </div>
          </div>
        </div>
        <Badge variant={EBadgeVariant.PERCENTAGE} value={`${matchPercentage}%`} />
      </div>
    </div>
  );
};

export default JobCardSimple;
