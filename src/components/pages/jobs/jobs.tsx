"use client";

import React, { useEffect } from "react";
import { JobCard, JobData } from "@/components/general/job-card";
import { JobDetailModal } from "@/components/general/job-detail-modal";
import classes from "./jobs.module.scss";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchJobs, selectJob, clearSelectedJob } from "@/store/slices/jobsSlice";
import { selectFilteredJobs, selectSelectedJob, selectJobsLoading } from "@/store/selectors/jobsSelectors";
import { LoadingSpinner } from "@/components/general/loading-spinner";

const Jobs: React.FC = () => {
  const dispatch = useAppDispatch();
  const jobs = useAppSelector(selectFilteredJobs);
  const selectedJob = useAppSelector(selectSelectedJob);
  const isLoading = useAppSelector(selectJobsLoading);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const handleJobClick = (job: JobData) => {
    dispatch(selectJob(job.id));
  };

  const handleCloseModal = () => {
    dispatch(clearSelectedJob());
  };

  if (isLoading) {
    return <LoadingSpinner fullScreen message="Loading jobs..." />;
  }

  return (
    <>
      <main className={classes.main}>
        <div className={classes.container}>
          <div className={classes.header}>
            <div className={classes.titleSection}>
              <h1 className={classes.title}>Job Matches</h1>
              <p className={classes.subtitle}>
                Found {jobs.length} positions matching your profile
              </p>
            </div>
          </div>

          <div className={classes.jobsGrid}>
            {jobs.map((job) => (
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
