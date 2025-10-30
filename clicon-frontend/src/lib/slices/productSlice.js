import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentCategory: "",
  pricerange: [0, 200000],
  currentProduct: {},
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    shopCategory: (state, action) => {
      state.currentCategory = action.payload;
    },
    pricerange: (state, action) => {
      state.pricerange = action.payload;
      console.log("price range", action.payload);
    },
    currProduct: (state, action) => {
      state.currentProduct = action.payload;
    },
  },
});

export const { shopCategory, pricerange, currProduct } = productSlice.actions;

export default productSlice.reducer;
