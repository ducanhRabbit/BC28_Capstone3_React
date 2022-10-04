import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addToCart,
  postOderAPI,
  removeFromCart,
} from "../../redux/reducers/cartReducer";
import { ACCESS_TOKEN, getStore } from "../../util/config";

export default function Carts() {
  const navigate = useNavigate();
  const { cartList, totalBill } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userReducer.userLogin);
  useEffect(() => {
    if (!getStore(ACCESS_TOKEN)) {
      alert("Please log in!");
      navigate("/login");
    }
  }, []);
  console.log([...cartList]);

  const renderCartList = () => {
    return cartList.map((item, index) => {
      return (
        <tr key={index}>
          <td>
            <input type="checkbox" />
          </td>
          <td>{item.id}</td>
          <td>
            <img src={item.image} height={50} width={50} alt="" />
          </td>
          <td className="name-item">{item.name}</td>
          <td>{item.price}</td>
          <td>
            <div className="wrap d-flex align-items-x justify-content-center">
              <button
                className="increase-btn"
                onClick={() => {
                  const action = addToCart({
                    ...item,
                    quantity: 1,
                  });
                  dispatch(action);
                }}
              >
                <i className="fas fa-plus"></i>
              </button>
              <span className="quantity">{item.quantity}</span>
              <button
                className="decrease-btn"
                onClick={() => {
                  if (item.quantity > 1) {
                    const action = addToCart({
                      ...item,
                      quantity: -1,
                    });
                    dispatch(action);
                  }
                }}
              >
                <i className="fas fa-minus"></i>
              </button>
            </div>
          </td>
          <td>{item.totalPrice}</td>
          <td>
            <button
              className="delete-btn"
              onClick={() => {
                const action = removeFromCart({
                  ...item,
                });
                dispatch(action);
              }}
            >
              <i className="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      );
    });
  };

  // const handleDelete = ()=>{
  //   dispatch()
  // }
  return (
    <div className="container carts">
      <h3 className="mb-5">Carts</h3>
      {cartList.length <= 0 ? (
        <div className="cartList-empty d-flex flex-column justify-content-center align-items-center mb-5">
          <img
            src="https://www.seekpng.com/png/detail/117-1170538_404-your-cart-is-empty.png"
            alt=""
          />
        </div>
      ) : (
        <>
          <table className="table">
            <thead>
              <th></th>
              <th>Id</th>
              <th>Img</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </thead>
            <tbody>{renderCartList()}</tbody>
          </table>
          <div className="d-flex justify-content-between mt-4">
            <div className="subtotal">
              Subtotal: <span>${totalBill}</span>
            </div>
            <div className="submit-order">
              <button
                onClick={() => {
                  let order = cartList.map((item, index) => ({
                    ...item,
                    productId: item.id,
                  }));
                  postOderAPI({
                    orderDetail: order,
                    email: userLogin?.email,
                  },dispatch).then((result) => {
                    navigate("/");
                  });
                }}
              >
                Order Now
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
