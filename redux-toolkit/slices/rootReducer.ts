import globalSlice from "./global.slice";
import seoSlice from "./seoSlice";
import userSlice from "./userSlice";

const rootReducer = {
  userSlice,
  seoSlice,
  globalSlice
};

export default rootReducer;
