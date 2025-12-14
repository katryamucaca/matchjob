const STORAGE_KEY = "matchjob_state";

export const saveState = (state: {
  auth?: unknown;
  user?: unknown;
  applications?: unknown;
}): void => {
  try {
    if (typeof window === "undefined") return;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error("Error saving to localStorage:", error);
  }
};

export const loadState = (): {
  auth?: unknown;
  user?: unknown;
  applications?: unknown;
} | null => {
  try {
    if (typeof window === "undefined") return null;

    const serialized = localStorage.getItem(STORAGE_KEY);

    if (!serialized) return null;

    return JSON.parse(serialized);
  } catch (error) {
    console.error("Error loading from localStorage:", error);

    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
    }

    return null;
  }
};

export const clearLocalStorage = (): void => {
  try {
    if (typeof window !== "undefined") {
      localStorage.removeItem(STORAGE_KEY);
    }
  } catch (error) {
    console.error("Error clearing localStorage:", error);
  }
};
