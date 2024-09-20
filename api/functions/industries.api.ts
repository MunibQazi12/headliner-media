import {
    IndustryData
} from "@/types/common.type";
import axiosInstance from "../axiosInstance";
import { endpoints } from "../endpoints";
  
  export const GetIndustries = async () => {
    const res = await axiosInstance.get<{ data: { data: IndustryData[] } }>(
      endpoints.industries.fetchAll
    );
    return res;
  };
  
  export const GetIndustry = async (slug: string) => {
    const res = await axiosInstance.get<{
      industry: IndustryData;
    }>(endpoints.industries.fetchOne(slug));
    return res;
  };
  

  