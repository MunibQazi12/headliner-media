/* eslint-disable no-console */

import { CreateAddress } from "@/api/functions/address.api";
import { useMutation } from "@tanstack/react-query";

export const useAddressCreateMutation = () =>
  useMutation({
    mutationFn: CreateAddress
  });
