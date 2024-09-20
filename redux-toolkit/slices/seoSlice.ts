import { LoadingType, seoData } from "@/types/common.type";
import { createSlice } from "@reduxjs/toolkit";
import { seoSliceData } from "../interfaces/interfaces";

interface onSeoChangeType extends LoadingType {
  data: seoData;
}

const initialState: seoSliceData = {
  isLoading: false,
  data: null
};

export const seoSlice = createSlice({
  name: "seoSlice",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    onSeoChange: (state, { payload }: { payload: onSeoChangeType }) => {
      state.data = payload.data;
    }
  }
});

export const { onSeoChange } = seoSlice.actions;

export default seoSlice.reducer;
