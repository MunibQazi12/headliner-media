import { AddressInputType } from "@/types/common.type";
import axiosInstance from "../axiosInstance";
import { endpoints } from "../endpoints";

interface AddressData {
  id: string;
  formatted_address: string;
  place_id: string;
}

export const GetAddresses = async () => {
  const res = await axiosInstance.get<{ data: AddressData[] }>(
    endpoints.addresses
  );
  return res;
};

export const CreateAddress = async (
  payload: AddressInputType
): Promise<AddressData> => {
  const { data } = await axiosInstance.post(endpoints.addresses, payload);
  return data;
};
