/* eslint-disable no-console */

import { GetAddresses } from "@/api/functions/address.api";
import { useQuery } from "@tanstack/react-query";

export const useAddresses = () =>
  useQuery({
    queryKey: ["addresses"],
    queryFn: GetAddresses
  });
