import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ExtendedJobData } from "@/constants/sample-jobs";
import { SAMPLE_JOBS } from "@/constants/sample-jobs";
import { mockApiCall } from "../utils/mockApi";

interface JobsState {
  jobs: ExtendedJobData[];
  selectedJob: ExtendedJobData | null;
  filters: {
    search: string;
    location: string;
    minMatch: number;
  };
  isLoading: boolean;
  error: string | null;
}

const initialState: JobsState = {
  jobs: [],
  selectedJob: null,
  filters: {
    search: "",
    location: "",
    minMatch: 0,
  },
  isLoading: false,
  error: null,
};

export const fetchJobs = createAsyncThunk(
  "jobs/fetchJobs",
  async (_, { rejectWithValue }) => {
    try {
      const jobs = await mockApiCall<ExtendedJobData[]>(SAMPLE_JOBS, 800);
      return jobs;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "Failed to fetch jobs",
      );
    }
  },
);

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    selectJob: (state, action: PayloadAction<string>) => {
      const job = state.jobs.find((j) => j.id === action.payload);
      state.selectedJob = job || null;
    },
    clearSelectedJob: (state) => {
      state.selectedJob = null;
    },
    setSearchFilter: (state, action: PayloadAction<string>) => {
      state.filters.search = action.payload;
    },
    setLocationFilter: (state, action: PayloadAction<string>) => {
      state.filters.location = action.payload;
    },
    setMinMatchFilter: (state, action: PayloadAction<number>) => {
      state.filters.minMatch = action.payload;
    },
    clearFilters: (state) => {
      state.filters = {
        search: "",
        location: "",
        minMatch: 0,
      };
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchJobs.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchJobs.fulfilled, (state, action) => {
      state.isLoading = false;
      state.jobs = action.payload;
      state.error = null;
    });
    builder.addCase(fetchJobs.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
  },
});

export const {
  selectJob,
  clearSelectedJob,
  setSearchFilter,
  setLocationFilter,
  setMinMatchFilter,
  clearFilters,
  clearError,
} = jobsSlice.actions;

export default jobsSlice.reducer;
