import React from "react";
import avatar from "../../assets/img/download_1.png";

export default function ProfileInformation(props) {
  const { userLogin } = props;
  return (
    <div className="profile__infor">
      <div className="profile__pic">
        <img src={userLogin?.avatar} alt="avatar" height={225} width={225} />
      </div>
      <form className="profile__form">
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <p>Email</p>
              <input
                type="text"
                className="form-control"
                id="email"
                value={userLogin?.email || ""}
                readOnly
              />
            </div>
            <div className="form-group">
              <p>Phone</p>
              <input
                type="tel"
                className="form-control"
                id="phone"
                value={userLogin?.phone || ""}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <p>Name</p>
              <input
                type="text"
                className="form-control"
                id="name"
                value={userLogin?.name || ""}
              />
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
                  {userLogin?.gender ? (
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      value={true}
                      defaultChecked
                    />
                  ) : (
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      value={true}
                    />
                  )}
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Male
                  </label>
                </div>
                <div className="form-check">
                  {userLogin?.gender ? (
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      value={false}
                    />
                  ) : (
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      value={false}
                    />
                  )}
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
              <button className="update_profile">Update</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
