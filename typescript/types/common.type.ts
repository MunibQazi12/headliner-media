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

type seoData = {
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
  DistanceInputType, IndustryData, LoadingType,
  ProductAttributeData,
  ProductData,
  SignInFormValues,
  SignUpFormValues,
  seoData,
  userData,
  ProfileUpdate,
  ChangePassword
};

