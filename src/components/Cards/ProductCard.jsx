import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
    const {product} = props
  return (
    <div className="product-card my-2">
      <div className="card-img">
        <img src={product.image} alt="" />
      </div>
      <div className="card-body">
        <h4>{product.name}</h4>
        <p>{product.description}</p>
      </div>
      <div className="card-footer d-flex align-items-center">
        <Link className="btn-primary-cus">
          <span>Buy Now</span>
        </Link>
        <div className="price">
            ${product.price}
        </div>
      </div>
    </div>
  );
}
