import { FooterSettingsData, IndustryData, ProductData, ResourcesData, seoData, userData } from "@/types/common.type";

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


export interface ResourcesSliceData {
  isLoading: boolean;
  resources: ResourcesData[];
}

export interface FooterSettingsSliceData {
  isLoading: boolean;
  footerSettings: FooterSettingsData[];
}


export interface industrySliceData {
  isLoading: boolean;
  industries: IndustryData[];
  industry: { industry: IndustryData | null; };
}

export interface registrationData {}

export interface globalStateInterface {
  counter: number;
}
