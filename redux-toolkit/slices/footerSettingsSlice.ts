import { FooterSettingsData, LoadingType } from "@/types/common.type";
import { createSlice } from "@reduxjs/toolkit";
import { FooterSettingsSliceData } from "../interfaces/interfaces";

interface onFooterSettingsChangeType extends LoadingType {
  data: FooterSettingsData[];
}

const initialState: FooterSettingsSliceData = {
  isLoading: false,
  footerSettings: []
};

export const FooterSettingsSlice = createSlice({
  name: "FooterSettingsSlice",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    onFooterSettingsChange: (
      state,
      { payload }: { payload: onFooterSettingsChangeType }
    ) => {
      state.footerSettings = payload.data;
    }
  }
});

export const { onFooterSettingsChange } = FooterSettingsSlice.actions;

export default FooterSettingsSlice.reducer;
