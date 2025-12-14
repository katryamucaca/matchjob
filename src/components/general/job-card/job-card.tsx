import React from "react";
import classes from "./job-card.module.scss";
import cn from "classnames";
import CompanyIcon from "../icons/company-icon";
import LocationIcon from "../icons/location-icon";

export interface JobData {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  matchPercentage: number;
}

interface JobCardProps {
  job: JobData;
  className?: string;
  onClick?: (job: JobData) => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, className, onClick }) => {
  const handleClick = () => {
    onClick?.(job);
  };

  return (
    <div className={cn(classes.jobCard, className)} onClick={handleClick}>
      <div className={classes.header}>
        <div className={classes.jobInfo}>
          <h3 className={classes.title}>{job.title}</h3>
          <div className={classes.metaInfo}>
            <div className={classes.companyInfo}>
              <div className={classes.icon}>
                <CompanyIcon />
              </div>
              <span className={classes.companyName}>{job.company}</span>
            </div>
            <div className={classes.locationInfo}>
              <div className={classes.icon}>
                <LocationIcon />
              </div>
              <span className={classes.locationName}>{job.location}</span>
            </div>
          </div>
        </div>
        <div className={classes.matchBadge}>{job.matchPercentage}% Match</div>
      </div>
      <div className={classes.description}>{job.description}</div>
    </div>
  );
};

export default JobCard;
