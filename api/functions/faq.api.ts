import { FAQs } from "@/types/common.type";
import axiosInstance from "../axiosInstance";
import { endpoints } from "../endpoints";

export const GetAllFAQs = async () => {
  const res = await axiosInstance.get<FAQs[]>(endpoints.faq.fetchAll);
  return res;
};
