import { IndustryData, LoadingType } from "@/types/common.type";
import { createSlice } from "@reduxjs/toolkit";
import { industrySliceData } from "../interfaces/interfaces";

interface onIndustryChangeType extends LoadingType {
  industry: IndustryData;
}

interface onIndustriesChangeType extends LoadingType {
  data: IndustryData[];
}

const initialState: industrySliceData = {
  isLoading: false,
  industry: {
    industry: null,
  },
  industries: []
};

export const industrySlice = createSlice({
  name: "industrySlice",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    onIndustriesChange: (
      state,
      { payload }: { payload: onIndustriesChangeType }
    ) => {
      state.industries = payload.data;
    },

    onIndustryChange: (state, { payload }: { payload: onIndustryChangeType }) => {
      state.industry = payload;
    }
  }
});

export const { onIndustriesChange, onIndustryChange } = industrySlice.actions;

export default industrySlice.reducer;
