import FooterSettingsSlice from "./footerSettingsSlice";
import globalSlice from "./global.slice";
import productSlice from "./productSlice";
import ResourcesSlice from "./resourseSlice";
import seoSlice from "./seoSlice";
import userSlice from "./userSlice";

const rootReducer = {
  userSlice,
  seoSlice,
  globalSlice,
  productSlice,
  ResourcesSlice,
  FooterSettingsSlice,
};

export default rootReducer;
