import { ResourcesData } from "@/types/common.type";
import axiosInstance from "../axiosInstance";
import { endpoints } from "../endpoints";

export const GetResources = async () => {
  const res = await axiosInstance.get<{ data: ResourcesData[] }>( // ProductData[]
    endpoints.resources.fetchAll
  );
  return res;
};
