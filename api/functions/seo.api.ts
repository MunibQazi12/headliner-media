import { seoData } from "@/types/common.type";
import axiosInstance from "../axiosInstance";
import { endpoints } from "../endpoints";

export const GetSeoPage = async (slug: string) => {
  const res = await axiosInstance.get<{ data: seoData }>(endpoints.seo(slug));
  return res;
};
