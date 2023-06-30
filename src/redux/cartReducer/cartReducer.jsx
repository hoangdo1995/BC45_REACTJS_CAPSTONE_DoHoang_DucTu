import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cart: []
}

const cartReducer = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    addToCartAction: (state, action) => {
      console.log(action);
      state.cart.push(action.payload)
    },
  },
});

export const { addToCartAction } = cartReducer.actions;

export default cartReducer.reducer;
