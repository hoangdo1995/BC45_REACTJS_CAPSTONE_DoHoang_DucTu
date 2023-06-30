import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer/cartReducer";

export const store = configureStore({
  reducer: {
    cartReducer
  },
});
