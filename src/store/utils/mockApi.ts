export const mockDelay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const mockApiCall = async <T>(data: T, delay: number = 500): Promise<T> => {
  await mockDelay(delay);

  return data;
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const generateInitials = (fullName: string): string => {
  if (!fullName || fullName.trim().length === 0) {
    return "U";
  }

  const names = fullName.trim().split(" ");
  const initials = names.map((n) => n[0]?.toUpperCase() || "").join("");

  return initials.slice(0, 2) || "U";
};

export const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
};

export const validatePassword = (password: string): boolean => {
  return password.length >= 6;
};
