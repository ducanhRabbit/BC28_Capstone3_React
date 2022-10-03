import { Action } from "@remix-run/router";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { updateProfileApi } from "../../redux/reducers/userReducer";
export default function ProfileInformation(props) {
  const { userLogin } = props;
  const dispatch = useDispatch();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: userLogin?.email,
      name: userLogin?.name,
      phone: userLogin?.phone,
      gender: userLogin?.gender,
      password: null,
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Name is required!"),
      phone: Yup.string()
        .required("Phone is required!")
        .matches(/^\d{10}$/, "Phone must have 10 number!"),
    }),
    onSubmit: (value) => {
      console.log({ ...userLogin, ...value });
      const actionThunk = updateProfileApi({ ...userLogin, ...value });
      dispatch(actionThunk);
    },
  });
  console.log(formik.values.gender);
  return (
    <div className="profile__infor">
      <div className="profile__pic">
        <img src={userLogin?.avatar} alt="avatar" height={225} width={225} />
      </div>
      <form className="profile__form" onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <p>Email</p>
              <input
                type="text"
                className="form-control"
                id="email"
                value={formik.values.email || ""}
                readOnly
              />
            </div>
            <div className="form-group">
              <p>Phone</p>
              <input
                type="tel"
                className="form-control"
                id="phone"
                value={formik.values.phone || ""}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.phone ? (
                <div className="text text-danger valid_text">
                  {formik.errors.phone}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <p>Name</p>
              <input
                type="text"
                className="form-control"
                id="name"
                value={formik.values.name || ""}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.name ? (
                <div className="text text-danger valid_text">
                  {formik.errors.name}
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="form-group">
              <p>Password</p>
              <input
                type="password"
                className="form-control"
                id="password"
                readOnly
              />
            </div>
            <div className="form-group d-flex">
              <p>Gender</p>
              <div className="d-flex align-items-center">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value={true}
                    checked={formik.values.gender === true}
                    onChange={() => {
                      formik.setFieldValue("gender", true);
                    }}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value={false}
                    checked={formik.values.gender === false}
                    onChange={() => {
                      formik.setFieldValue("gender", false);
                    }}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    Female
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group d-flex justify-content-end">
              <button type="submit" className="update_profile">
                Update
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
