"use client";

import React, { useState } from "react";
import { JobCard, JobData } from "@/components/general/job-card";
import { JobDetailModal } from "@/components/general/job-detail-modal";
import classes from "./jobs.module.scss";
import { ExtendedJobData, SAMPLE_JOBS } from "@/constants/sample-jobs";

const Jobs: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<ExtendedJobData | null>(null);

  const handleJobClick = (job: JobData) => {
    const extendedJob = SAMPLE_JOBS.find((j) => j.id === job.id);

    if (extendedJob) {
      setSelectedJob(extendedJob);
    }
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
  };

  return (
    <>
      <main className={classes.main}>
        <div className={classes.container}>
          <div className={classes.header}>
            <div className={classes.titleSection}>
              <h1 className={classes.title}>Job Matches</h1>
              <p className={classes.subtitle}>
                Found {SAMPLE_JOBS.length} positions matching your profile
              </p>
            </div>
          </div>

          <div className={classes.jobsGrid}>
            {SAMPLE_JOBS.map((job) => (
              <JobCard key={job.id} job={job} onClick={handleJobClick} />
            ))}
          </div>
        </div>
      </main>

      {selectedJob && (
        <JobDetailModal
          isOpen={!!selectedJob}
          onClose={handleCloseModal}
          job={selectedJob}
        />
      )}
    </>
  );
};

export default Jobs;
