import {
  DistanceInputType,
  ProductAttributeData,
  ProductData
} from "@/types/common.type";
import axiosInstance from "../axiosInstance";
import { endpoints } from "../endpoints";

export const GetProducts = async () => {
  const res = await axiosInstance.get<{ data: { data: ProductData[] } }>(
    endpoints.products.fetchAll
  );
  return res;
};

export const GetProduct = async (slug: string) => {
  const res = await axiosInstance.get<{
    product: ProductData;
    product_attribute: ProductAttributeData[];
  }>(endpoints.products.fetchOne(slug));
  return res;
};

export const GetOrderDistance = async (payload: DistanceInputType) => {
  const res = await axiosInstance.post<{ data: any }>(
    endpoints.products.getDistance,
    payload
  );
  return res;
};
