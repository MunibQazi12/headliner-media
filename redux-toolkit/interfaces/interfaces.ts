import { seoData, userData } from "@/types/common.type";

export interface userSliceData {
  isLoggedIn: boolean;
  userData: userData | null;
}

export interface seoSliceData {
  isLoading: boolean;
  data: seoData | null;
}

export interface registrationData {}

export interface globalStateInterface {
  counter: number;
}
