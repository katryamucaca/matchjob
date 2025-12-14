import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  SignInCredentials,
  SignUpData,
  LandingFormData,
} from "@/types/auth.types";
import {
  mockApiCall,
  validateEmail,
  validatePassword,
  generateId,
} from "../utils/mockApi";

interface AuthState {
  isAuthenticated: boolean;
  userId: string | null;
  landingFormData: LandingFormData | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  userId: null,
  landingFormData: null,
  isLoading: false,
  error: null,
};

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (credentials: SignInCredentials, { rejectWithValue }) => {
    try {
      if (!validateEmail(credentials.email)) {
        throw new Error("Invalid email format");
      }

      if (!validatePassword(credentials.password)) {
        throw new Error("Password must be at least 6 characters");
      }

      const userData = await mockApiCall(
        {
          id: generateId(),
          email: credentials.email,
          fullName: "User",
        },
        500,
      );

      return userData;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "Sign in failed",
      );
    }
  },
);

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (data: SignUpData, { rejectWithValue }) => {
    try {
      if (!validateEmail(data.email)) {
        throw new Error("Invalid email format");
      }

      if (!validatePassword(data.password)) {
        throw new Error("Password must be at least 6 characters");
      }

      if (!data.fullName || data.fullName.trim().length === 0) {
        throw new Error("Full name is required");
      }

      const userData = await mockApiCall(
        {
          id: generateId(),
          email: data.email,
          fullName: data.fullName,
        },
        700,
      );

      return userData;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "Sign up failed",
      );
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOut: (state) => {
      state.isAuthenticated = false;
      state.userId = null;
      state.landingFormData = null;
      state.error = null;
    },
    setLandingFormData: (state, action: PayloadAction<LandingFormData>) => {
      state.landingFormData = action.payload;
    },
    clearLandingFormData: (state) => {
      state.landingFormData = null;
    },
    clearError: (state) => {
      state.error = null;
    },
    rehydrate: (state, action: PayloadAction<Partial<AuthState>>) => {
      return { ...state, ...action.payload, isLoading: false, error: null };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.userId = action.payload.id;
      state.error = null;
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.userId = null;
      state.error = action.payload as string;
    });

    builder.addCase(signUp.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.userId = action.payload.id;
      state.error = null;
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.userId = null;
      state.error = action.payload as string;
    });
  },
});

export const {
  signOut,
  setLandingFormData,
  clearLandingFormData,
  clearError,
} = authSlice.actions;

export default authSlice.reducer;
