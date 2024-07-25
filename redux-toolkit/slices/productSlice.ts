import { LoadingType, ProductData } from "@/types/common.type";
import { createSlice } from "@reduxjs/toolkit";
import { productSliceData } from "../interfaces/interfaces";

interface onProductChangeType extends LoadingType {
  product: ProductData;
  product_attribute: ProductData;
}

interface onProductsChangeType extends LoadingType {
  data: ProductData[];
}

const initialState: productSliceData = {
  isLoading: false,
  product: {
    product: null,
    product_attribute: {}
  },
  products: []
};

export const productSlice = createSlice({
  name: "productSlice",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    onProductsChange: (
      state,
      { payload }: { payload: onProductsChangeType }
    ) => {
      state.products = payload.data;
    },

    onProductChange: (state, { payload }: { payload: onProductChangeType }) => {
      state.product = payload;
    }
  }
});

export const { onProductsChange, onProductChange } = productSlice.actions;

export default productSlice.reducer;
