import { createSlice } from "@reduxjs/toolkit";
import { getStorageJson,setStorageJson,USER_LOGIN } from "../../utils/config";

const initialState = {
    user_login:getStorageJson(USER_LOGIN),
    user_login_error:''
};

const UserLoginReducer = createSlice({
  name: 'UserLoginReducer',
  initialState,
  reducers: {
    setUserLogin:(state,action)=>{
        state.user_login = action.payload;
        setStorageJson(USER_LOGIN,state.user_login);
        return state;
    },
    setUserLoginError:(state,action)=>{
        state.user_login_error = action.payload;
        return state;
    }
  },
});

export const {setUserLogin,setUserLoginError} = UserLoginReducer.actions;

export default UserLoginReducer.reducer;
