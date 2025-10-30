import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import authSlice from "./slices/authSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authSlice,
      product: productSlice,
    },
  });
};
