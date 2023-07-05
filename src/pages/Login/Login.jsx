import React, { useEffect } from 'react'
import {history} from '../../index.js'
import LoginWithFacebook from '../../components/LoginWithFacebook.jsx'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { http } from '../../utils/config.js'
import { useDispatch, useSelector } from 'react-redux'
import { loginAction, setUserLogin, setUserLoginError } from '../../redux/reducers/UserLoginReducer.js'
const Login = () => {
  const dispatch = useDispatch();
  const loginStatus = useSelector(state=>state.UserLoginReducer);
  const frm = useFormik({
    initialValues:{
      email_login:'',
      password_login:''
    },
    onSubmit:(()=>{
      const loginUser = loginAction({email:frm.values.email_login,password:frm.values.password_login});
      dispatch(loginUser);
    }),
    validationSchema:Yup.object().shape({
      email_login:Yup.string().email('Email sai định dạng!').required('Email không được thiếu!'),
      password_login:Yup.string().required('Password chưa nhập!')
    })
  });
  useEffect(()=>{
    document.querySelector('#email_login').value = loginStatus.user_login?.email?loginStatus.user_login?.email:'';
    frm.values.email_login = loginStatus.user_login?.email;
  },[])
  return (
    <div className='container px-5 py-0' style={{
      background: "#F5F5F5",
    }}>
        <div>
          <h3 className='fw-normal border-bottom border-2 py-3'>Login</h3>
        </div>
        <div className='d-flex flex-column align-items-center py-3'>
          <form action="" className='form w-50' onSubmit={frm.handleSubmit}>
          {loginStatus.user_login_error && <p className={(loginStatus.user_login?.accessToken)? 'text-center text-success':'text-center text-danger'}>{loginStatus.user_login_error}</p>}
            <div className='form-group mb-4'>
              <p className='text-secondary fw-semibold mb-1'>Email</p>
              <input type="text" className="form-control" id='email_login' onChange={frm.handleChange}/>
              {frm.errors.email_login&&<p className='text-danger position-absolute'>{frm.errors.email_login}</p>}
            </div>
            <div className='form-group mb-4'>
              <p className='text-secondary fw-semibold mb-1'>Password</p>
              <input type="password" className="form-control" id='password_login' onChange={frm.handleChange}/>
              {frm.errors.password_login&&<p className='text-danger position-absolute'>{frm.errors.password_login}</p>}
            </div>
            <div className="row d-flex justify-content-end p-3">
              <button className='col-4 border-0 bg-transparent text-primary fw-semibold' style={{Color:'#152AEB'}} onClick={()=>history.push('register')}>Register now?</button>
              <button className='col-4 fw-semibold button-submit' style={{padding:'10px 5px 10px 6px'}} type='submit'>Login</button>
            </div>
          </form>
          <div style={{width:'50%'}}>
              <LoginWithFacebook></LoginWithFacebook>
            </div>
        </div>
    </div>
  )
}

export default Login