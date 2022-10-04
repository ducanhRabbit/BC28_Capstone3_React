import React from "react";
import logo from "../../assets/img/logo_1.png";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  ACCESS_TOKEN,
  clearLocalStorage,
  getStore,
  getStoreJSON,
  USER_LOGIN,
} from "../../util/config";
import { setUserLoginAction } from "../../redux/reducers/userReducer";

export default function Header() {
  const user = useSelector((state) => state.userReducer.userLogin);
  const { totalAmount } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Man",
      path: "/",
    },
    {
      title: "Woman",
      path: "/",
    },
    {
      title: "Kid",
      path: "/",
    },
    {
      title: "Sport",
      path: "/",
    },
  ];

  return (
    <header>
      <div className="top_header py-3">
        <div className="container">
          <div className="wrapper d-flex align-items-center justify-center justify-content-between">
            <div className="logo">
              <NavLink to={"/"}>
                <img src={logo} alt="" />
              </NavLink>
            </div>
            <div className="user-login d-flex align-items-center justify-center gap-4">
              <NavLink
                className="d-flex align-items-center justify-center"
                to={"/search"}
              >
                <i className="fas fa-search"></i>
                <span>Search</span>
              </NavLink>
              <Link
                to={"/cart"}
                className="d-flex align-items-center justify-center"
              >
                <i className="fas fa-shopping-cart cart-icon" />
                <span className="cart-badge ">{totalAmount}</span>
              </Link>

              {user ? (
                <Link to={"/profile"}>Hello, {user.email}!</Link>
              ) : (
                <Link to={"/login"}>Login</Link>
              )}
              {user ? (
                <Link to={"/login"}
                  onClick={() => {
                    clearLocalStorage(USER_LOGIN);
                    clearLocalStorage(ACCESS_TOKEN);
                    const action = setUserLoginAction(null);
                    dispatch(action);
                  }}
                >
                  Logout
                </Link>
              ) : (
                <Link to={"/register"}>Register</Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="navigation">
        <div className="container">
          <div className="nav_wrap d-flex align-items-center justify-center gap-3 py-3">
            {navLinks.map((item, index) => {
              return (
                <NavLink key={index} to={item.path} className="nav_item ">
                  {item.title}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
