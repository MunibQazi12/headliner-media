/* eslint-disable no-console */

import { loginMutation, signUpProfileMutation } from "@/api/functions/user.api";
import { useMutation } from "@tanstack/react-query";

export const useSignUpMutation = () =>
  useMutation({
    mutationFn: signUpProfileMutation
  });

export const useSignInMutation = () =>
  useMutation({
    mutationFn: loginMutation
  });
