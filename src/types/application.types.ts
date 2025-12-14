export enum EApplicationStatus {
  APPLIED = "APPLIED",
  TEST_TASK = "TEST_TASK",
  INTERVIEW = "INTERVIEW",
  OFFER = "OFFER",
  REJECTED = "REJECTED",
}

export interface ApplicationData {
  id: string;
  jobId: string;
  status: EApplicationStatus;
  appliedAt: string;
  lastUpdated: string;
  notes?: string;
}

export interface ApplicationsState {
  applications: ApplicationData[];
  isLoading: boolean;
  error: string | null;
}

export interface UpdateStatusPayload {
  applicationId: string;
  newStatus: EApplicationStatus;
  previousStatus?: EApplicationStatus;
}
