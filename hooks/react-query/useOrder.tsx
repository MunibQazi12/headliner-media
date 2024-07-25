/* eslint-disable no-console */

import { fetchOrders, purchaseOrder } from "@/api/functions/order.api";
import { useMutation, useQuery } from "@tanstack/react-query";

export const usePurchaseCreateMutation = () =>
  useMutation({
    mutationFn: purchaseOrder
  });

export const useOrdersQuery = () =>
  useQuery({
    queryKey: ["fetch-orders"],
    queryFn: fetchOrders
  });
