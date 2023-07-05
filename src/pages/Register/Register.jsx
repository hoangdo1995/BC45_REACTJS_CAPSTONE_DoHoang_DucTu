import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  NAME_REGEX,
  PASSWORD_REGEX,
  PHONE_VN_REGEX,
  http,
} from "../../utils/config";
import { history } from "../..";
import { useDispatch, useSelector } from "react-redux";
import { setUserRegister } from "../../redux/reducers/UserRegisterReducer";
import { setUserLogin } from "../../redux/reducers/UserLoginReducer";

const Register = () => {
  const emailExistsErr = useSelector((state) => state.UserRegisterReducer);
  const dispatch = useDispatch();
  useEffect(()=>{

  },[emailExistsErr]);
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      passwordConfirm: "",
      phone: "",
      gender: true,
    },
    onSubmit: async (values) => {
      const user_register = {
        email: values.email,
        name: values.name,
        password: values.password,
        phone: values.phone,
        gender: values.gender,
      };
      const res = await http.post("/api/Users/signup", user_register);
      if (res?.status === 200) {
        const action = setUserLogin({email:res.data?.content.email});
        dispatch(action);
        history.push("login");
      }
      if (res.response?.status === 400) {
        const actionError = setUserRegister("Email đã tồn tại!");
        dispatch(actionError);
      }
      else{
        const actionError = setUserRegister(null);
        dispatch(actionError);
      }
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required("Email không được để trống!")
        .email("Email sai định dạng!"),
      name: yup
        .string()
        .required("Name không được để trống!")
        .matches(NAME_REGEX, "Name sai định dạng!"),
      password: yup
        .string()
        .required("Password không được để trống!")
        .matches(PASSWORD_REGEX, "Password sai định dạng!"),
      passwordConfirm: yup
        .string()
        .required("Password không được để trống!")
        .oneOf([yup.ref("password"), null], "Không khớp với password!"),
      phone: yup
        .string()
        .required("Phone không được để trống!")
        .matches(PHONE_VN_REGEX, "Phone sai định dạng!"),
      gender: yup.boolean("Gender không được để trống!"),
    }),
  });
  return (
    <div
      className="container p-5"
      style={{
        background: "#F5F5F5",
      }}
    >
      <div className=" border-bottom py-3">
        <h2 className="fw-normal"> Register </h2>
      </div>
      <div>
        <form
          className="form row d-flex justify-content-between py-3"
          onSubmit={formik.handleSubmit}
        >
          <div className="form-group col-md-6 col-xl-5 my-2">
            <p className="my-2"> Email </p>
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              id="email"
              onChange={formik.handleChange}
            />
            <p className="position-absolute text-danger fs-6">
              {emailExistsErr.emailExistsError?emailExistsErr.emailExistsError:formik.errors.email}
            </p>
          </div>
          <div className="form-group col-md-6 col-xl-5 my-2">
            <p className="my-2"> Name </p>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              id="name"
              onChange={formik.handleChange}
            />
            <p className="position-absolute text-danger fs-6">
              {formik.errors.name}
            </p>
          </div>
          <div className="form-group col-md-6 col-xl-5 my-2">
            <p className="my-2"> Password </p>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              id="password"
              onChange={formik.handleChange}
            />
            <p className="position-absolute text-danger fs-6">
              {formik.errors.password}
            </p>
          </div>
          <div className="form-group col-md-6 col-xl-5 my-2">
            <p className="my-2"> Phone </p>
            <input
              type="text"
              className="form-control"
              placeholder="Phone"
              id="phone"
              onChange={formik.handleChange}
            />
            <p className="position-absolute text-danger fs-6">
              {formik.errors.phone}
            </p>
          </div>
          <div className="form-group col-md-6 col-xl-5 my-2">
            <p className="my-2"> Password Confirm </p>
            <input
              type="password"
              className="form-control"
              placeholder="Password confirm"
              id="passwordConfirm"
              onChange={formik.handleChange}
            />
            <p className="position-absolute text-danger fs-6">
              {formik.errors.passwordConfirm}
            </p>
          </div>
          <div className="form-group col-md-6 col-xl-5 my-2 d-flex justify-content-start align-items-baseline">
            <p className="my-2"> Gender </p>
            <div className="w-25 d-flex flex-column align-items-center">
              <input
                className=""
                type="radio"
                name="gender"
                value={true}
                id="gender_male"
                onChange={formik.handleChange}
                checked={true}
              />
              <p className="py-0"> Male </p>
            </div>
            <div className="w-25 d-flex flex-column align-items-center">
              <input
                className=""
                type="radio"
                name="gender"
                value={false}
                id="gender_female"
                onChange={formik.handleChange}
              />
              <p className="py-0"> Female </p>
            </div>
          </div>
          <div className=" d-flex justify-content-end">
            <div className="col-xl-5 col-md-6 px-3">
              <button type="submit" className="button-submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
