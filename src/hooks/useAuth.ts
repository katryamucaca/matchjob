import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  signIn as signInAction,
  signUp as signUpAction,
  signOut as signOutAction,
  setLandingFormData as setLandingFormDataAction,
  clearError,
} from "@/store/slices/authSlice";
import { initializeProfile } from "@/store/slices/userSlice";
import { SignInCredentials, SignUpData, LandingFormData } from "@/types/auth.types";
import { clearLocalStorage } from "@/store/middleware/localStorage";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { isAuthenticated, userId, landingFormData, isLoading, error } = useAppSelector(
    (state) => state.auth,
  );

  const signIn = useCallback(
    async (credentials: SignInCredentials) => {
      const result = await dispatch(signInAction(credentials));

      if (signInAction.fulfilled.match(result)) {
        dispatch(
          initializeProfile({
            fullName: result.payload.fullName,
            email: result.payload.email,
          }),
        );
      }

      return result;
    },
    [dispatch],
  );

  const signUp = useCallback(
    async (data: SignUpData) => {
      const result = await dispatch(signUpAction(data));

      if (signUpAction.fulfilled.match(result)) {
        dispatch(
          initializeProfile({
            fullName: data.fullName,
            email: data.email,
            landingData: landingFormData || undefined,
          }),
        );
      }

      return result;
    },
    [dispatch, landingFormData],
  );

  const signOut = useCallback(() => {
    dispatch(signOutAction());
    clearLocalStorage();
  }, [dispatch]);

  const setLandingFormData = useCallback(
    (data: LandingFormData) => {
      dispatch(setLandingFormDataAction(data));
    },
    [dispatch],
  );

  const clearAuthError = useCallback(() => {
    dispatch(clearError());
  }, [dispatch]);

  return {
    isAuthenticated,
    userId,
    landingFormData,
    isLoading,
    error,
    signIn,
    signUp,
    signOut,
    setLandingFormData,
    clearError: clearAuthError,
  };
};
