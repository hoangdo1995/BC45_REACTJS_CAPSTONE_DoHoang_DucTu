import { Collapse } from "antd";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import UserLoginReducer, { loginAction, profileAction } from "../../redux/reducers/UserLoginReducer";
import { NAME_REGEX,PASSWORD_REGEX,PHONE_VN_REGEX, http } from "../../utils/config";
import { setUserLogin,setUserLoginError } from "../../redux/reducers/UserLoginReducer";
import { useDispatch } from "react-redux";
import { history } from "../..";
import * as yup from "yup";


const Profile = () => {
  
  const dispatch = useDispatch();
  
  const {user_login} = useSelector(state=>state.UserLoginReducer);
   
  const frm = useFormik({
    initialValues:{
      email_update:user_login?.email,
      name_update:user_login?.name,
      password_update:'',
      phone_update:user_login?.phone,
      gender_update:user_login?.gender
    },
    onSubmit:(async()=>{
      let genderUpdate = {
        "email": frm.values.email_update,
        "password": frm.values.password_update,
        "name": frm.values.name_update,
        "gender": frm.values.gender_update,
        "phone": frm.values.phone_update
      }
      console.log(frm.values);
      const res = await http.post('/api/Users/updateProfile',genderUpdate);
      if(res?.status === 200){
          const action = setUserLogin({email:frm.values.email_update});
        await dispatch(action);
        const action2 = setUserLoginError('');
        await dispatch(action2);
        history.push('/login');
      }
      
    }),
    validationSchema: yup.object().shape({
      email_update: yup
        .string()
        .required("Email không được để trống!")
        .email("Email sai định dạng!"),
      name_update: yup
        .string()
        .required("Name không được để trống!")
        .matches(NAME_REGEX, "Name sai định dạng!"),
      password_update: yup
        .string()
        .required("Password không được để trống!")
        .matches(PASSWORD_REGEX, "Password sai định dạng!"),
      phone_update: yup
        .string()
        .required("Phone không được để trống!")
        .matches(PHONE_VN_REGEX, "Phone sai định dạng!"),
      gender_update: yup.boolean("Gender không được để trống!"),
    })
  });
  useEffect(()=>{
    if(!user_login?.name){
      const profile = profileAction();
      dispatch(profile);
    }
    else{
      const listInput = document.querySelectorAll('[id$="update"]');
    listInput.forEach(input=>{
      const {id} = input;
      const idShort = id.split('_')[0];
      document.querySelector(`#${id}`).value = user_login[idShort];
    });
    const genderInputs = document.querySelectorAll('[name="gender_update"]');
    genderInputs.forEach(input =>{
      if(input.value == user_login.gender?.toString()){
        input.setAttribute('checked',true);
      }
    })
  }
  },[user_login]);
  return (
    <div className="container">
      <div className="title bg-linear px-4 py-1 w-50">
        <h3 className="text-light">Profile</h3>
      </div>
      <div className="profile p-4">
        <form className="row" onSubmit={frm.handleSubmit}>
          <div className="avatar col-2 ">
            <img
              src={user_login?.avatar}
              alt="..."
              style={{ width: "100%", display: "block", borderRadius: "50%" }}
            />
          </div>
          <div className="infor_item col-5 row d-flex justify-content-end">
            <div className="form-group col-md-11 mb-3">
              <p className="my-2">Email</p>
              <input type="text" className="form-control" placeholder="Email" disabled id="email_update" onChange={frm.handleChange}/>
              <p className="position-absolute text-danger fs-6">{frm.errors.email_update}</p>
            </div>
            <div className="form-group col-md-11 mb-3">
              <p className="my-2">Phone</p>
              <input type="text" className="form-control" placeholder="Phone" id="phone_update" onChange={frm.handleChange}/>
              <p className="position-absolute text-danger fs-6">{frm.errors.phone_update}</p>
            </div>
          </div>
          <div className="infor_item col-5 row d-flex justify-content-end">
            <div className="form-group col-md-11 mb-3">
              <p className="my-2">Name</p>
              <input type="text" className="form-control" placeholder="Name" id="name_update" onChange={frm.handleChange}/>
              <p className="position-absolute text-danger fs-6">{frm.errors.name_update}</p>
            </div>
            <div className="form-group col-md-11 mb-3">
              <p className="my-2">Password</p>
              <input type="password" className="form-control" placeholder="Password" id="password_update" onChange={frm.handleChange}/>
              <p className="position-absolute text-danger fs-6">{frm.errors.password_update}</p>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-end">
              <div className="form-group col-5 px-4 mt-2 d-flex">
                <div>
                  <p>Gender</p>
                </div>
                <div className="d-flex justify-content-between flex-column align-items-center mx-4">
                  <input type="radio" name="gender_update" value={true} onChange={frm.handleChange}/>
                  <p className="mb-0">Male</p>
                </div>
                <div className="d-flex justify-content-between flex-column align-items-center">
                  <input type="radio" name="gender_update" value={false} onChange={frm.handleChange}/>
                  <p className="mb-0">Female</p>
                </div>
              </div>
          </div>
          <div className=" d-flex justify-content-end me-md-5">
            <button className="button-submit me-md-5" type="submit" style={{padding:'10px 30px 10px 28px'}} onSubmit={frm.handleSubmit}>Update</button>
          </div>
        </form>
      </div>
      <div className="border-top">
        <div className="nav">
          <NavLink to='history' className={({isActive})=>(isActive?'nav-active':'nav-unactive')} style={{textDecoration:'none',padding:'10px 20px',fontWeight:500,borderCollapse:Collapse,fontSize:25}}>Order history</NavLink>
          <NavLink to='favourite' className={({isActive})=>(isActive?'nav-active':'nav-unactive')} style={{textDecoration:'none',padding:'10px 20px',fontWeight:500,borderCollapse:Collapse,fontSize:25}}>Favourite</NavLink>
        </div>
        <div className="p-4">
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default Profile;
