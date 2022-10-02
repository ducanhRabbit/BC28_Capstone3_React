import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function ProductCard(props) {
  const { product } = props;
  const [liked,setLiked] = useState(false)
  const favProducts = useSelector(state => state.productReducer.favProducts)
  let isLiked = favProducts.find((item,index) => item.id === product.id)
  console.log(isLiked)
  return (
    <div className="product-card my-2">
      <div className="card-img">
        <img src={product.image} alt="" />
        <label htmlFor={`like-${product.id}`}  className="like-btn">

          <input className="like-switch" checked={favProducts.find((item,index) => item.id === product.id)}  type="checkbox" id={`like-${product.id}`}/>
          <i className="fa fa-heart heart-icon" />
        </label>
      </div>
      <div className="card-body">
        <h4>{product.name}</h4>
        <p>{product.description}</p>
      </div>
      <div className="card-footer d-flex align-items-center">
        <NavLink className="btn-primary-cus" to={`/detail/${product.id}`}>
          <span>Buy Now</span>
        </NavLink>
        <div className="price">${product.price}</div>
      </div>
    </div>
  );
}
