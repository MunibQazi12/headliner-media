import { LoadingType, ResourcesData } from "@/types/common.type";
import { createSlice } from "@reduxjs/toolkit";
import { ResourcesSliceData } from "../interfaces/interfaces";

interface onResourceChangeType extends LoadingType {
  data: ResourcesData[];
}

const initialState: ResourcesSliceData = {
  isLoading: false,
  resources: []
};

export const ResourcesSlice = createSlice({
  name: "ResourcesSlice",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    onResourceChange: (
      state,
      { payload }: { payload: onResourceChangeType }
    ) => {
      state.resources = payload.data;
    }
  }
});

export const { onResourceChange } = ResourcesSlice.actions;

export default ResourcesSlice.reducer;
