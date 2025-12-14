export interface LandingFormData {
  name: string;
  email: string;
  phone: string;
  location: string;
  yearsExperience: string;
  specialization: string;
  skills: string;
}

export interface SignInCredentials {
  email: string;
  password: string;
}

export interface SignUpData {
  fullName: string;
  email: string;
  password: string;
}
