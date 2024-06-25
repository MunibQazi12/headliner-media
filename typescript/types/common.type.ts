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

type LoadingType = {
  isLoading: boolean;
};

export type { CommonButtonType, LoadingType, seoData, userData };
