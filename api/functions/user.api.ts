import { IFormInput } from "@/interface/common.interface";

import { IgetSignUpQuery } from "@/interface/apiresp.interfaces";
import { SignInFormValues, SignUpFormValues } from "@/types/common.type";
import axiosInstance from "../axiosInstance";
import { endpoints } from "../endpoints";

export const signUpMutation = async (body: IFormInput) => {
  const res = await axiosInstance.post<IgetSignUpQuery>(
    endpoints.auth.signup,
    body
  );
  return res;
};
export const loginMutation = async (body: SignInFormValues) => {
  const res = await axiosInstance.post<{ data: { token: string } }>(
    endpoints.auth.login,
    body
  );
  return res;
};
export const GetProfileDetails = async () => {
  const res = await axiosInstance.get<IgetSignUpQuery>(
    endpoints.auth.profileDetails
  );
  return res;
};
export const signUpProfileMutation = async (body: SignUpFormValues) => {
  const res = await axiosInstance.post<IgetSignUpQuery>(
    endpoints.auth.signUpProfile,
    body
  );
  return res;
};
