import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { signInAPI } from "../../redux/reducers/userReducer";

export default function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("Email is required!")
        .email("Invalid email!"),
      password: Yup.string()
        .required("Password is required!")
        .min(1, "Password must have at least 8 characters"),
    }),
    onSubmit: (values) => {
      const action = signInAPI(values);
      dispatch(action)

    },
  });
  return (
    <div className="container login pb-5">
      <h3>Login</h3>
      <div className="d-flex justify-content-center align-items-center">
        <div className="wrap-form">
          <div className="form-content">
            <form action="" onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label className="login-label" htmlFor="email">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="login-input"
                  placeholder="Email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.errors.email ? (
                  <div className="text text-danger valid-notice">
                    {formik.errors.email}
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="form-group">
                <label className="login-label" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="login-input"
                  placeholder="Password"
                  name="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.errors.password ? (
                  <p className="text text-danger valid-notice">
                    {formik.errors.password}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="login-btn mt-4 mb-2 me-2">
                <button type="submit">Login</button>
              </div>
            </form>
            <Link className="register" to={"/register"}>
              Register now ?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
