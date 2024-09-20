/* eslint-disable no-console */

import {
    changePasswordMutation,
    loginMutation,
    profileUpdateMutation,
    signUpProfileMutation
} from "@/api/functions/user.api";
import { useMutation } from "@tanstack/react-query";

export const useSignUpMutation = () =>
  useMutation({
    mutationFn: signUpProfileMutation
  });

export const useProfileUpdateMutation = () =>
    useMutation({
        mutationFn: profileUpdateMutation
    });

export const useChangePasswordMutation = () =>
    useMutation({
        mutationFn: changePasswordMutation
    });

export const useSignInMutation = () =>
  useMutation({
    mutationFn: loginMutation
  });
