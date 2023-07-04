import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Reducer/cartReducer";
import UserRegisterReducer from './reducers/UserRegisterReducer'
import UserLoginReducer from './reducers/UserLoginReducer'

export const store = configureStore({
  reducer: {
    cartReducer:cartReducer,
    UserRegisterReducer:UserRegisterReducer,
    UserLoginReducer:UserLoginReducer
  },
});
        