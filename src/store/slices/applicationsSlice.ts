import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  ApplicationsState,
  ApplicationData,
  UpdateStatusPayload,
  EApplicationStatus,
} from "@/types/application.types";
import { SAMPLE_JOBS } from "@/constants/sample-jobs";
import { mockApiCall, generateId } from "../utils/mockApi";

const initialState: ApplicationsState = {
  applications: [],
  isLoading: false,
  error: null,
};

const INITIAL_APPLICATIONS: ApplicationData[] = [
  {
    id: "app-1",
    jobId: SAMPLE_JOBS[0].id,
    status: EApplicationStatus.APPLIED,
    appliedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    lastUpdated: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "app-2",
    jobId: SAMPLE_JOBS[1].id,
    status: EApplicationStatus.APPLIED,
    appliedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    lastUpdated: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "app-3",
    jobId: SAMPLE_JOBS[2].id,
    status: EApplicationStatus.TEST_TASK,
    appliedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    lastUpdated: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "app-4",
    jobId: SAMPLE_JOBS[3].id,
    status: EApplicationStatus.INTERVIEW,
    appliedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    lastUpdated: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "app-5",
    jobId: SAMPLE_JOBS[4].id,
    status: EApplicationStatus.INTERVIEW,
    appliedAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
    lastUpdated: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "app-6",
    jobId: SAMPLE_JOBS[5].id,
    status: EApplicationStatus.INTERVIEW,
    appliedAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
    lastUpdated: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "app-7",
    jobId: SAMPLE_JOBS[6].id,
    status: EApplicationStatus.REJECTED,
    appliedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    lastUpdated: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "app-8",
    jobId: SAMPLE_JOBS[7].id,
    status: EApplicationStatus.REJECTED,
    appliedAt: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
    lastUpdated: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

export const fetchApplications = createAsyncThunk(
  "applications/fetchApplications",
  async (_, { rejectWithValue }) => {
    try {
      const applications = await mockApiCall<ApplicationData[]>(
        INITIAL_APPLICATIONS,
        600,
      );
      return applications;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "Failed to fetch applications",
      );
    }
  },
);

export const updateApplicationStatus = createAsyncThunk(
  "applications/updateStatus",
  async (payload: UpdateStatusPayload, { rejectWithValue }) => {
    try {
      await mockApiCall(true, 300);

      return {
        applicationId: payload.applicationId,
        newStatus: payload.newStatus,
        lastUpdated: new Date().toISOString(),
      };
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "Failed to update application status",
      );
    }
  },
);

export const addApplication = createAsyncThunk(
  "applications/addApplication",
  async (jobId: string, { rejectWithValue, getState }) => {
    try {
      const state = getState() as { applications: ApplicationsState };
      const exists = state.applications.applications.some((app) => app.jobId === jobId);

      if (exists) {
        throw new Error("You have already applied to this job");
      }

      const newApplication: ApplicationData = await mockApiCall(
        {
          id: generateId(),
          jobId,
          status: EApplicationStatus.APPLIED,
          appliedAt: new Date().toISOString(),
          lastUpdated: new Date().toISOString(),
        },
        500,
      );

      return newApplication;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "Failed to add application",
      );
    }
  },
);

const applicationsSlice = createSlice({
  name: "applications",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    rehydrate: (state, action: PayloadAction<Partial<ApplicationsState>>) => {
      return { ...state, ...action.payload, isLoading: false, error: null };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApplications.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchApplications.fulfilled, (state, action) => {
      state.isLoading = false;
      state.applications = action.payload;
      state.error = null;
    });
    builder.addCase(fetchApplications.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });

    builder.addCase(updateApplicationStatus.pending, (state) => {
      state.error = null;
    });
    builder.addCase(updateApplicationStatus.fulfilled, (state, action) => {
      const application = state.applications.find(
        (app) => app.id === action.payload.applicationId,
      );
      if (application) {
        application.status = action.payload.newStatus;
        application.lastUpdated = action.payload.lastUpdated;
      }
      state.error = null;
    });
    builder.addCase(updateApplicationStatus.rejected, (state, action) => {
      state.error = action.payload as string;
    });

    builder.addCase(addApplication.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(addApplication.fulfilled, (state, action) => {
      state.isLoading = false;
      state.applications.push(action.payload);
      state.error = null;
    });
    builder.addCase(addApplication.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
  },
});

export const { clearError } = applicationsSlice.actions;

export default applicationsSlice.reducer;
