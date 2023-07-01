import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Reducer/cartReducer";

export const store = configureStore({
  reducer: {
    cartReducer
  },
});
