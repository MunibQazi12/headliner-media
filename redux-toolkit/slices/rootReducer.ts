import globalSlice from "./global.slice";
import productSlice from "./productSlice";
import seoSlice from "./seoSlice";
import userSlice from "./userSlice";

const rootReducer = {
  userSlice,
  seoSlice,
  globalSlice,
  productSlice
};

export default rootReducer;
