import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/reducers/cartReducer";
export default function ProductDetail(props) {
  const { image, name, description, size, price } = props.productDetail;
  let [quantity,setQuantity] = useState(1);
  const dispatch = useDispatch();

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
          <button className="btn btn--quantity me-3" onClick={()=>{setQuantity(quantity+1)}}>+</button>{quantity}
          <button className="btn btn--quantity ms-3" onClick={()=>{
            if(quantity>1){
              setQuantity(quantity-1)
            }
          }}>-</button>
        </div>
        <button className="btn btn--addToCart" onClick={()=>{
          const action = addToCart({
            ...props.productDetail,
            quantity: quantity,
          });
          dispatch(action)
          
        }}>Add to cart</button>
      </div>
    </div>
  );
}
