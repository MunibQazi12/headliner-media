import { FooterSettingsData } from "@/types/common.type";
import axiosInstance from "../axiosInstance";
import { endpoints } from "../endpoints";

export const GetFooterSettings = async () => {
  const res = await axiosInstance.get<{ data: FooterSettingsData[] }>(
    endpoints.footerSettings.fetchAll
  );
  return res;
};
