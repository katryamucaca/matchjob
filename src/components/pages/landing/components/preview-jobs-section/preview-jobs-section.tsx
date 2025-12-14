import React from "react";
import classes from "./preview-jobs-section.module.scss";
import { JobCardSimple } from "@/components/general/job-card-simple";
import Button from "@/components/general/button/button";
import { EButtonVariant } from "@/components/general/button/button.types";
import LockIcon from "@/components/general/icons/lock-icon";

const PreviewJobsSection: React.FC = () => {
  const jobs = [
    {
      title: "Senior Frontend Developer",
      company: "Acme Co.",
      location: "Remote",
      matchPercentage: 95,
    },
    {
      title: "Full Stack Engineer",
      company: "TechStart Inc.",
      location: "San Francisco, CA",
      matchPercentage: 92,
    },
    {
      title: "UI/UX Developer",
      company: "Design Studio",
      location: "New York, NY",
      matchPercentage: 88,
    },
  ];

  return (
    <section className={classes.previewJobsSection}>
      <div className={classes.container}>
        <div className={classes.header}>
          <h2 className={classes.heading}>See What You&apos;ll Get</h2>
          <p className={classes.paragraph}>
            AI-powered job matches tailored to your skills and experience
          </p>
        </div>
        <div className={classes.jobsGrid}>
          {jobs.map((job, index) => (
            <JobCardSimple
              key={index}
              title={job.title}
              company={job.company}
              location={job.location}
              matchPercentage={job.matchPercentage}
            />
          ))}
        </div>
        <div className={classes.lockedOverlay}>
          <div className={classes.blurredCards}>
            <div className={classes.blurredCard} />
            <div className={classes.blurredCard} />
          </div>
          <div className={classes.lockCard}>
            <LockIcon size={32} />
            <p className={classes.lockText}>Sign up to see more matches</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviewJobsSection;
