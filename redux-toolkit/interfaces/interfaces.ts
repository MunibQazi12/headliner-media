import { ProductData, seoData, userData } from "@/types/common.type";

export interface userSliceData {
  isLoggedIn: boolean;
  userData: userData | null;
}

export interface seoSliceData {
  isLoading: boolean;
  data: seoData | null;
}

export interface productSliceData {
  isLoading: boolean;
  products: ProductData[];
  product: { product: ProductData | null; product_attribute: any };
}

export interface registrationData {}

export interface globalStateInterface {
  counter: number;
}
