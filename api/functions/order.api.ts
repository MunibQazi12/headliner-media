// import { OrderInputType } from "@/types/common.type";
import axiosInstance from "../axiosInstance";
import { endpoints } from "../endpoints";

export const purchaseOrder = async (payload: any): Promise<any> => {
  const { data } = await axiosInstance.post(endpoints.order.purchase, payload);
  return data;
};

export const fetchOrders = async () => {
  const { data } = await axiosInstance.get(endpoints.order.fetchAll);
  return data;
};
