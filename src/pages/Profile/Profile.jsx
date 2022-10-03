import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { getProductAPI } from "../../redux/reducers/productReducer";
import { getProfileApi } from "../../redux/reducers/userReducer";
import FavoriteProduct from "./FavoriteProduct";
import OrderHistory from "./OrderHistory";
import ProfileInformation from "./ProfileInformation";

export default function Profile(props) {
  const { userLogin } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (userLogin) {
      const actionThunk = getProfileApi;
      dispatch(actionThunk);
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <div className="profile">
      <h1>Profile</h1>
      <div className="container">
        <ProfileInformation userLogin={userLogin} />
        <hr style={{ color: "#DEDDDC", opacity: "1" }} />
        <ul className="nav nav-tabs" id="profileTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="orderHistory-tab"
              data-bs-toggle="tab"
              data-bs-target="#orderHistory-tab-pane"
              type="button"
              role="tab"
              aria-controls="orderHistory-tab-pane"
              aria-selected="true"
            >
              Order history
            </button>
          </li>
          <li className="nav-item border-start-0">
            <button
              className="nav-link"
              id="favorite-tab"
              data-bs-toggle="tab"
              data-bs-target="#favorite-tab-pane"
              type="button"
              role="tab"
              aria-controls="favorite-tab-pane"
              aria-selected="false"
            >
              Favorite
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="orderHistory-tab-pane"
            role="tabpanel"
            aria-labelledby="orderHistory-tab"
          >
            <OrderHistory userLogin={userLogin}/>
          </div>
          <div
            className="tab-pane fade"
            id="favorite-tab-pane"
            role="tabpanel"
            aria-labelledby="favorite-tab"
          >
            <FavoriteProduct />
          </div>
        </div>
      </div>
    </div>
  );
}
