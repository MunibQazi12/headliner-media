/* eslint-disable no-console */

import { GetPaymentMethod } from "@/api/functions/payment.api";
import { useQuery } from "@tanstack/react-query";

export const usePaymentMethod = () =>
  useQuery({
    queryKey: ["payment-mehtod"],
    queryFn: GetPaymentMethod
  });
