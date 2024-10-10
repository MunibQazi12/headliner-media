export const baseUrl = process.env.NEXT_APP_BASE_URL;
export const baseUrlApi = `${process.env.NEXT_APP_BASE_URL}/api/`;
export const baseUrlMedia = process.env.NEXT_APP_BASE_URL;

// api doc => https://militarymoves-admin.dedicateddevelopers.us/apidoc

export const mediaUrl = (url: string) => {
  return `${baseUrlMedia}/uploads/${url}`;
};

export const endpoints = {
  auth: {
    signup: "user/existence",
    signUpProfile: "register",
    login: "login",
    profileDetails: "my-profile",
    profileUpdate: "personal-details-update",
    changePassword: "update-password"
  },
  cms: {
    about: "aboutpolicy/details",
    faq: "faq/all"
  },
  faq: {
    fetchAll: "get-faq"
  },
  seo: {
    fetchAll: "seo-pages",
    fetchOne: (slug: string) => `seo/${slug}`
  },
  products: {
    fetchAll: "products",
    fetchOne: (slug: string) => `products/${slug}`,
    getDistance: "products/distance"
  },
  industries: {
    fetchAll: "industries",
    fetchOne: (slug: string) => `industries/${slug}`
  },
  order: {
    purchase: "order/purchase",
    fetchAll: "order"
  },
  addresses: "addresses",
  addressDelete: "delete-address",
  payment: { paymentMethod: "payment/payment-method" },
  resources: {
    fetchAll: "resources"
  },
  footerSettings: {
    fetchAll: "footer-settings"
  }
};

export const sucessNotificationEndPoints = [
  // endpoints.auth.signup,
  endpoints.auth.signUpProfile,
  endpoints.auth.login,
  endpoints.auth.profileUpdate
];
