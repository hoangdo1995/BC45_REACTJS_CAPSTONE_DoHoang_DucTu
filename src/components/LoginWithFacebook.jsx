import React, { useEffect } from "react";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { USER_LOGIN, getStorageJson, http, setStorageJson } from "../utils/config";
import { setUserLogin, setUserLoginError } from "../redux/reducers/UserLoginReducer";
import { useDispatch } from "react-redux";

const LoginWithFacebook = () => {
    const dispatch = useDispatch();
    const responseFacebook = async(response)=>{
        let res = await http.post("/api/Users/facebooklogin",{facebookToken:response?.accessToken});
        console.log(res.data?.message);
        const actionLogin = setUserLogin({accessToken:res.data?.content.accessToken});
        dispatch(actionLogin);
        const actionSetStatus = setUserLoginError(res.data?.message);
        dispatch(actionSetStatus);
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
