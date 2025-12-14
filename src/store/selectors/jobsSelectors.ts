import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../index";

export const selectJobsState = (state: RootState) => state.jobs;

export const selectAllJobs = createSelector(
  [selectJobsState],
  (jobsState) => jobsState.jobs,
);

export const selectFilters = createSelector(
  [selectJobsState],
  (jobsState) => jobsState.filters,
);

export const selectFilteredJobs = createSelector(
  [selectAllJobs, selectFilters],
  (jobs, filters) => {
    return jobs.filter((job) => {
      const matchesSearch =
        !filters.search ||
        job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        job.company.toLowerCase().includes(filters.search.toLowerCase()) ||
        job.description.toLowerCase().includes(filters.search.toLowerCase());

      const matchesLocation =
        !filters.location ||
        job.location.toLowerCase().includes(filters.location.toLowerCase());

      const matchesMinMatch = job.matchPercentage >= filters.minMatch;

      return matchesSearch && matchesLocation && matchesMinMatch;
    });
  },
);

export const selectJobById = (jobId: string) =>
  createSelector([selectAllJobs], (jobs) =>
    jobs.find((job) => job.id === jobId),
  );

export const selectSelectedJob = createSelector(
  [selectJobsState],
  (jobsState) => jobsState.selectedJob,
);

export const selectJobsLoading = createSelector(
  [selectJobsState],
  (jobsState) => jobsState.isLoading,
);

export const selectJobsError = createSelector(
  [selectJobsState],
  (jobsState) => jobsState.error,
);

export const selectJobsCount = createSelector(
  [selectFilteredJobs],
  (jobs) => jobs.length,
);
