type CommonButtonType = {
  children: JSX.Element;
  variant?: "text" | "outlined" | "contained";
  disabled: boolean;
  onClick?: () => {};
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  endIcon?: JSX.Element;
  startIcon?: JSX.Element;
  loading?: boolean;
};

type SignUpFormValues = {
  full_name: string;
  email: string;
  password: string;
  password_confirmation: string;
  phone: string;
  company: string;
};

type ProfileUpdate = {
  full_name: string;

  email: string;

  phone: string;
  company: string;
};

type ChangePassword = {
  old_password: string;

  password: string;

  confirm_password: string;
};

type SignInFormValues = {
  email: string;
  password: string;
};

type userData = {
  _id?: string;
  role: {
    _id?: string;
    role?: string;
    roleDisplayName?: string;
  };
  first_name?: string;
  last_name?: string;
  fullName?: string;
  username?: string;
  phone?: string;
  email?: string;
  bio?: string;
  otp?: string;
  profile_image?: string;
  registerType?: string;
  socialAccount: [];
  createdAt?: string;
  updatedAt?: string;
  address?: string;
  education?: string;
  location?: string;
  about_title?: string;
  about_description?: string;
  cover_picture?: string;
};

type seoDataIndividual = {
  id: number;
  slug: string;
  meta_title: string;
  meta_description: string;
  h1_tag: string;
  h2_tag: string;
  p_tag: string;
  city: string;
  state: string;
  state_code: string;
  type: string;
  zip_codes: string;
  latitude: number;
  longitude: number;
};

type ProductData = {
  id: number;
  name: string;
  available_stock: number;
  canonical_url: string;
  created_at: Date;
  description: string;
  featured_image: string;
  featured_image_url: string;
  h1: string;
  image: string;
  meta_description: string;
  meta_title: string;
  open_graph_description: string;
  open_graph_image: string;
  open_graph_image_url: string;
  open_graph_title: string;
  open_graph_url: string;
  product_image_url: string;
  schema: string;
  slug: string;
  status: number;
  updated_at: Date;
  x_card_description: string;
  x_card_title: string;
};

type ResourcesData = {
  id: number;
  title: string;
  thumbnail: string;
  resource_desc: string;
  status: string;
  slug: string;
  h1: string;
  meta_title: string;
  meta_description: string;
  featured_image: string | null;
  open_graph_title: string;
  open_graph_description: string;
  open_graph_url: string | null;
  open_graph_image: string | null;
  schema: string | null;
  x_card_title: string;
  x_card_description: string;
  canonical_url: string | null;
  created_at: string; // ISO 8601 format
  updated_at: string; // ISO 8601 format
  open_graph_image_url: string;
  featured_image_url: string;
};

type FooterSettingsData = {
  id: number;
  key: string;
  value: string;
  created_at: string; // ISO 8601 format
  updated_at: string; // ISO 8601 format
};

type FAQs = {
  id: number;
  question: string;
  answer: string;
  active: string; // Assuming 'active' is a string, if it's meant to be a boolean, change the type to boolean
  created_at: string; // ISO 8601 format
  updated_at: string; // ISO 8601 format
};

type SEO_FAQs = {
  id: number;
  slug: string;
  question: string;
  answer: string;
  created_at: string | null; // ISO 8601 format or null
  updated_at: string | null; // ISO 8601 format or null
};

type seoData = {
  faq: SEO_FAQs;
  seo: seoDataIndividual;
};

type SEO_PagesData = {
  id: number;
  meta_title: string;
  meta_description: string;
  slug: string;
  p_tag: string;
  h1_tag: string;
  h2_tag: string;
  city: string;
  state: string;
  state_code: string;
  zip_codes: string;
  type: string;
  latitude: number;
  longitude: number;
  created_at: string | null; // ISO 8601 format or null
  updated_at: string | null; // ISO 8601 format or null
  status: number;
  open_graph_image_url: string;
};

type IndustryData = {
  id: number;
  title: string;
  thumbnail: string;
  full_photo_url: string;
  short_description: string;
  status: string;
  slug: string;
  meta_title: string;
  meta_description: string;
  open_graph_title: string;
  open_graph_description: string;
  open_graph_url: string;
  open_graph_image: string;
  open_graph_image_url: string;
  schema: string;
  x_card_title: string;
  x_card_description: string;
  canonical_url: string;
  featured_image: string;
  featured_image_url: string;
  created_at: Date;
  updated_at: Date;
};

type ProductAttributeData = {
  id: number;
  size: string;
  price: number;
  details: string;
};

type DistanceInputType = {
  location: string;
};

type LoadingType = {
  isLoading: boolean;
};

type AddressInputType = {
  place_id: string;
  formatted_address: string;
};

export type {
  AddressInputType,
  CommonButtonType,
  DistanceInputType,
  IndustryData,
  LoadingType,
  ProductAttributeData,
  ProductData,
  SignInFormValues,
  SignUpFormValues,
  seoData,
  userData,
  ProfileUpdate,
  ChangePassword,
  ResourcesData,
  FooterSettingsData,
  SEO_PagesData,
  FAQs,
  SEO_FAQs,
};
