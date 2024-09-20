/* eslint-disable no-console */

import { UpdatePaymentMethod } from "@/api/functions/payment.api";
import { useMutation } from "@tanstack/react-query";

export const usePaymentUpdateMutation = () =>
  useMutation({
    mutationFn: UpdatePaymentMethod
  });
