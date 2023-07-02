import { createSlice } from "@reduxjs/toolkit";
import { getStorageJson,setStorageJson,USER_LOGIN } from "../../utils/config";
import { http } from "../../utils/config";
import { history } from "../..";

const initialState = {
    user_login:getStorageJson(USER_LOGIN),
    user_login_error:'',
    likeProduct:''
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
    },
    setLikeProduct:(state,action)=>{
      state.likeProduct = action.payload;
      return state;
    }
  },
});

export const {setUserLogin,setUserLoginError,setLikeProduct} = UserLoginReducer.actions;

export default UserLoginReducer.reducer;

export const loginAction = (userLogin)=>{
  return async (dispatch)=>{
    const res = await http.post('/api/Users/signin',userLogin);
      if(res?.status === 200){
        const actionUser = setUserLogin({...res.data?.content});
        dispatch(actionUser);
        const actionError = setUserLoginError(res?.data.message);
        dispatch(actionError);
        
        history.push('profile');
      }else{
        const action = setUserLogin({email:res.response?.data.content.email});
        dispatch(action);
        const actionError = setUserLoginError(res.response?.data.message);
        dispatch(actionError);
      }
  }
}

export const profileAction = ()=>{
  return  async(dispatch)=>{
    const res =  await http.post('https://shop.cyberlearn.vn/api/Users/getProfile');
        if(res?.status === 200){
          const profile = setUserLogin({...getStorageJson(USER_LOGIN),...res?.data.content});
          dispatch(profile);
          history.push('/profile/history');
      }
        else{
          history.push('/login');
        }
      }
}
export const getLikeProduct =()=>{
  return async (dispatch)=>{
    const likeProds = await http.get('/api/Users/getproductfavorite');
    const action = setLikeProduct(likeProds.data?.content?.productsFavorite);
    dispatch(action);
  }
}
