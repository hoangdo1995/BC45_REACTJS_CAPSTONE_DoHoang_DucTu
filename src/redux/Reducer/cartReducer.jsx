import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  quantity:0,
};

const cartReducer = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    addToCartAction: (state, action) => {
      const itemCart = state.cart.find((item) => item.id === action.payload.id);
      if (itemCart) {
        itemCart.quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
    },
    delItemAction: (state, action) => {
      const id = action.payload;
      state.cart = state.cart.filter((item) => item.id !== id);
    },
    changeQuantityAction:(state,action)=>{
      const {id,quantity}=action.payload

      const itemCart =state.cart.find(item => item.id ===id)
      if(itemCart){
        itemCart.quantity+=quantity;
        if(itemCart.quantity<1){
          alert('Số lượng nhỏ hơn 1');
          itemCart.quantity-=quantity
        }
      }
    }
  },
});

export const { addToCartAction,delItemAction,changeQuantityAction } = cartReducer.actions;

export default cartReducer.reducer;
