import React from "react";
import logo from "../../assets/img/logo_1.png";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
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
              <Link>
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className="user-login d-flex align-items-center justify-center gap-4">
              <Link className="d-flex align-items-center justify-center">
                <i className="fas fa-search"></i>
                <span>Search</span>
              </Link>
              <Link className="d-flex align-items-center justify-center">
                <i className="fas fa-shopping-cart cart-icon" />
                <span className="cart-badge ">
                  1
                </span>
              </Link>
              <Link>Login</Link>
              <Link>Register</Link>
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
