import React from "react";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import {  http, } from "../utils/config";
import { setUserLogin, setUserLoginError } from "../redux/reducers/UserLoginReducer";
import { useDispatch } from "react-redux";
import { history } from "..";

const LoginWithFacebook = () => {
    const dispatch = useDispatch();
    const responseFacebook = async(response)=>{
        let res = await http.post("/api/Users/facebooklogin",{facebookToken:response?.accessToken});
        console.log('facebookToken',res);
        
        if(res?.status===200){
          const actionLogin = setUserLogin({accessToken:res.data?.content.accessToken,name:response?.name});
        dispatch(actionLogin);
        const actionSetStatus = setUserLoginError(res.data?.message);
        dispatch(actionSetStatus);
        const userProfileRes =  await http.post('https://shop.cyberlearn.vn/api/Users/getProfile');
        if(userProfileRes?.status === 200){
          const profileAction = setUserLogin({...res.data?.content,...userProfileRes?.data.content});
          dispatch(profileAction);
        }
        history.push('profile');
        }
        
    }
  return <div>
    <FacebookLogin
  appId="986208089065400"
  callback={responseFacebook}
  render={renderProps => (
    <button onClick={renderProps.onClick} className="w-100 rounded-4 p-3 border-0 d-flex justify-content-center align-items-center" style={{background:'#1877F2'}}><i className="fab fa-facebook fs-2 me-4" style={{color:'white'}} id="facebook_login_btn"></i> <span className="text-light fs-5">Continue with Facebook</span></button>
  )}
/>
  </div>;
};

export default LoginWithFacebook;
