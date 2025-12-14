import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import jobsReducer from "./slices/jobsSlice";
import applicationsReducer from "./slices/applicationsSlice";
import { loadState } from "./middleware/localStorage";

const rootReducer = {
  auth: authReducer,
  user: userReducer,
  jobs: jobsReducer,
  applications: applicationsReducer,
};

export const makeStore = () => {
  const persistedState = typeof window !== "undefined" ? loadState() : null;

  const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
  });

  if (persistedState) {
    if (persistedState.auth) {
      store.dispatch({ type: "auth/rehydrate", payload: persistedState.auth });
    }
    if (persistedState.user) {
      store.dispatch({ type: "user/rehydrate", payload: persistedState.user });
    }
    if (persistedState.applications) {
      store.dispatch({
        type: "applications/rehydrate",
        payload: persistedState.applications,
      });
    }
  }

  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
