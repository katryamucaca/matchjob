import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { UserState, UpdateProfileData, UpdateKeyInfoData } from "@/types/user.types";
import { LandingFormData } from "@/types/auth.types";
import { mockApiCall, generateInitials } from "../utils/mockApi";

const initialState: UserState = {
  profile: {
    fullName: "",
    email: "",
    initials: "",
    phone: undefined,
    location: undefined,
  },
  keyInfo: {
    yearsOfExperience: "",
    specialization: "",
    technologies: [],
  },
  resume: {
    summaryPoints: [],
    fileName: undefined,
    uploadedAt: undefined,
  },
  isLoading: false,
  error: null,
};

export const updateProfile = createAsyncThunk(
  "user/updateProfile",
  async (data: UpdateProfileData, { rejectWithValue }) => {
    try {
      if (!data.fullName || data.fullName.trim().length === 0) {
        throw new Error("Full name is required");
      }

      const updatedProfile = await mockApiCall(
        {
          ...data,
          initials: generateInitials(data.fullName),
        },
        500,
      );

      return updatedProfile;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "Profile update failed",
      );
    }
  },
);

export const updateKeyInfo = createAsyncThunk(
  "user/updateKeyInfo",
  async (data: UpdateKeyInfoData, { rejectWithValue }) => {
    try {
      const updatedKeyInfo = await mockApiCall(data, 500);

      return updatedKeyInfo;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "Key info update failed",
      );
    }
  },
);

export const uploadResume = createAsyncThunk(
  "user/uploadResume",
  async (file: File, { rejectWithValue }) => {
    try {
      if (file.type !== "application/pdf") {
        throw new Error("Only PDF files are allowed");
      }

      await mockApiCall(true, 1000);

      const mockSummaryPoints = [
        `Professional with expertise in ${file.name.replace(".pdf", "")}`,
        "Strong technical background with proven track record of success",
        "Experience in collaborative team environments and agile methodologies",
        "Committed to continuous learning and professional development",
      ];

      return {
        fileName: file.name,
        uploadedAt: new Date().toISOString(),
        summaryPoints: mockSummaryPoints,
      };
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "Resume upload failed",
      );
    }
  },
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    initializeProfile: (
      state,
      action: PayloadAction<{
        fullName: string;
        email: string;
        phone?: string;
        location?: string;
        landingData?: LandingFormData;
      }>,
    ) => {
      const { fullName, email, phone, location, landingData } = action.payload;

      state.profile = {
        fullName,
        email,
        initials: generateInitials(fullName),
        phone: phone || state.profile.phone,
        location: location || state.profile.location,
      };
      
      if (landingData) {
        state.keyInfo = {
          yearsOfExperience: landingData.yearsExperience.includes("year")
            ? landingData.yearsExperience
            : `${landingData.yearsExperience} years`,
          specialization: landingData.specialization,
          technologies: landingData.skills
            .split(",")
            .map((s) => s.trim())
            .filter((s) => s.length > 0),
        };
      }
    },
    clearError: (state) => {
      state.error = null;
    },
    rehydrate: (state, action: PayloadAction<Partial<UserState>>) => {
      return { ...state, ...action.payload, isLoading: false, error: null };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateProfile.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(updateProfile.fulfilled, (state, action) => {
      state.isLoading = false;
      state.profile = {
        ...state.profile,
        fullName: action.payload.fullName,
        email: action.payload.email,
        initials: action.payload.initials,
      };
      state.error = null;
    });
    builder.addCase(updateProfile.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });

    builder.addCase(updateKeyInfo.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(updateKeyInfo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.keyInfo = action.payload;
      state.error = null;
    });
    builder.addCase(updateKeyInfo.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });

    builder.addCase(uploadResume.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(uploadResume.fulfilled, (state, action) => {
      state.isLoading = false;
      state.resume = {
        summaryPoints: action.payload.summaryPoints,
        fileName: action.payload.fileName,
        uploadedAt: action.payload.uploadedAt,
      };
      state.error = null;
    });
    builder.addCase(uploadResume.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
  },
});

export const { initializeProfile, clearError } = userSlice.actions;

export default userSlice.reducer;
