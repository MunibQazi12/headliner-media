import axiosInstance from "../axiosInstance";
import { endpoints } from "../endpoints";

interface PaymentMethodData {
  customer_id: string;
  payment_method_id: string;
}

export const GetPaymentMethod = async () => {
  const res = await axiosInstance.get<PaymentMethodData>(
    endpoints.payment.paymentMethod
  );
  return res;
};

export const UpdatePaymentMethod = async (payment_method_id: string) => {
  const res = await axiosInstance.post<PaymentMethodData>(
    endpoints.payment.paymentMethod,
    { payment_method_id }
  );
  return res;
};
