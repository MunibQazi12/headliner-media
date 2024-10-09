import { SEO_PagesData, seoData } from "@/types/common.type";
import axiosInstance from "../axiosInstance";
import { endpoints } from "../endpoints";

export const GetSeoPage = async (slug: string) => {
  const res = await axiosInstance.get<{ data: seoData }>(
    endpoints.seo.fetchOne(slug)
  );
  return res;
};

export const GetAllSeoPages = async () => {
  const res = await axiosInstance.get<SEO_PagesData[]>(endpoints.seo.fetchAll);
  return res;
};
