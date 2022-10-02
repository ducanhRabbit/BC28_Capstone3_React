import React from "react";
import logo from "../../assets/img/logo_1.png";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getStore, getStoreJSON, USER_LOGIN } from "../../util/config";

export default function Header() {
  const user = useSelector(state => state.userReducer.userLogin)
  const {totalAmount} = useSelector(state => state.cartReducer);
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

              <Link className="d-flex align-items-center justify-center" to={"/search"}>

                <i className="fas fa-search"></i>
                <span>Search</span>

              </Link>
              <Link to={'/cart'} className="d-flex align-items-center justify-center">

                <i className="fas fa-shopping-cart cart-icon" />
                <span className="cart-badge ">
                  {totalAmount}
                </span>
              </Link>

              {
                user?(
                  <Link to={'/profile'}>
                    Hello, {user.email}!
                  </Link>
                ) : (
                  <Link to={'/login'}>Login</Link>
                )
              }
              <Link to={'/register'}>Register</Link>

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
