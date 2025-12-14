export interface UserProfile {
  fullName: string;
  email: string;
  initials: string;
  phone?: string;
  location?: string;
}

export interface KeyInfo {
  yearsOfExperience: string;
  specialization: string;
  technologies: string[];
}

export interface Resume {
  summaryPoints: string[];
  fileName?: string;
  uploadedAt?: string;
}

export interface UserState {
  profile: UserProfile;
  keyInfo: KeyInfo;
  resume: Resume;
  isLoading: boolean;
  error: string | null;
}

export interface UpdateProfileData {
  fullName: string;
  email: string;
}

export interface UpdateKeyInfoData {
  yearsOfExperience: string;
  specialization: string;
  technologies: string[];
}
