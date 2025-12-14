import { useEffect } from "react";
import { useAppSelector } from "@/store/hooks";
import { saveState } from "@/store/middleware/localStorage";

export const useSaveState = () => {
  const auth = useAppSelector((state) => state.auth);
  const user = useAppSelector((state) => state.user);
  const applications = useAppSelector((state) => state.applications);

  useEffect(() => {
    if (auth.isAuthenticated) {
      saveState({
        auth,
        user,
        applications,
      });
    }
  }, [auth, user, applications]);
};
