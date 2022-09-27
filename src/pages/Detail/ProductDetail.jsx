import React from "react";
export default function ProductDetail(props) {
  const { image, name, description, size, price } = props.productDetail;
  return (
    <div className="productDetail d-flex">
      <div className="productDetail__img">
        <img src={image} alt="productImg" height={156} width={220} />
      </div>
      <div className="productDetail__content">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Available size</p>
        {size?.map((e, index) => {
          return (
            <button className="btn btn--size" key={index}>
              {e}
            </button>
          );
        })}
        <p className="productDetail__price">{price}$</p>
        <div className="btnGroup--quantity">
          <button className="btn btn--quantity me-3">+</button>1
          <button className="btn btn--quantity ms-3">-</button>
        </div>
        <button className="btn btn--addToCart">Add to cart</button>
      </div>
    </div>
  );
}
