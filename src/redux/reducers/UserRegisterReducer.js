import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    emailExistsError :''
};

const UserRegisterReducer = createSlice({
  name: 'UserRegisterReducer',
  initialState,
  reducers: {
    setUserRegister:(state,action)=>{
        state.emailExistsError = action.payload;
        return state;
    }
  },
});

export const {setUserRegister} = UserRegisterReducer.actions;

export default UserRegisterReducer.reducer;

