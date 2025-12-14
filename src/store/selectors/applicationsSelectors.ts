import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { EApplicationStatus } from "@/types/application.types";
import { selectAllJobs } from "./jobsSelectors";

export const selectApplicationsState = (state: RootState) =>
  state.applications;

export const selectAllApplications = createSelector(
  [selectApplicationsState],
  (applicationsState) => applicationsState.applications,
);

export const selectApplicationsByStatus = (status: EApplicationStatus) =>
  createSelector([selectAllApplications], (applications) =>
    applications.filter((app) => app.status === status),
  );

export const selectApplicationsGroupedByStatus = createSelector(
  [selectAllApplications],
  (applications) => {
    return {
      [EApplicationStatus.APPLIED]: applications.filter(
        (app) => app.status === EApplicationStatus.APPLIED,
      ),
      [EApplicationStatus.TEST_TASK]: applications.filter(
        (app) => app.status === EApplicationStatus.TEST_TASK,
      ),
      [EApplicationStatus.INTERVIEW]: applications.filter(
        (app) => app.status === EApplicationStatus.INTERVIEW,
      ),
      [EApplicationStatus.OFFER]: applications.filter(
        (app) => app.status === EApplicationStatus.OFFER,
      ),
      [EApplicationStatus.REJECTED]: applications.filter(
        (app) => app.status === EApplicationStatus.REJECTED,
      ),
    };
  },
);

export const selectApplicationForJob = (jobId: string) =>
  createSelector([selectAllApplications], (applications) =>
    applications.find((app) => app.jobId === jobId),
  );

export const selectHasAppliedToJob = (jobId: string) =>
  createSelector([selectAllApplications], (applications) =>
    applications.some((app) => app.jobId === jobId),
  );

export const selectApplicationsWithJobData = createSelector(
  [selectAllApplications, selectAllJobs],
  (applications, jobs) => {
    return applications.map((app) => {
      const job = jobs.find((j) => j.id === app.jobId);
      return {
        ...app,
        job,
      };
    });
  },
);

export const selectApplicationsLoading = createSelector(
  [selectApplicationsState],
  (applicationsState) => applicationsState.isLoading,
);

export const selectApplicationsError = createSelector(
  [selectApplicationsState],
  (applicationsState) => applicationsState.error,
);

export const selectTotalApplicationsCount = createSelector(
  [selectAllApplications],
  (applications) => applications.length,
);
