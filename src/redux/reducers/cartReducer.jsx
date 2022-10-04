import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cartList: [],
  totalAmount: 0,
  totalBill: 0,
};

const cartReducer = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {

    addToCart: (state, action) => {
      const newItem = action.payload;

      const existingItem = state.cartList.find(
        (item) => item.id === newItem.id
      );

      if (!existingItem) {
        state.cartList.push({
          ...newItem,
          // quantity:1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice =
          Number(existingItem.quantity) * Number(existingItem.price);
      }
      state.totalBill = state.cartList.reduce((total, item) => {
        return total + item.totalPrice;
      }, 0);

      state.totalAmount = state.cartList.reduce((total, item) => {
        return total + item.quantity;
      }, 0);

    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      const indexItemRemove = state.cartList.findIndex(
        (item) => item.id === id
      );
      state.cartList.splice(indexItemRemove, 1);

      state.totalBill = state.cartList.reduce((total, item) => {
        return total + item.totalPrice;
      }, 0);

      state.totalAmount = state.cartList.reduce((total, item) => {
        return total + item.quantity;
      }, 0);
    },
    setTotalAmountAction: (state, action) => {
      state.totalAmount = action.payload;
      return state;
    },
  },
});

export const { addToCart, removeFromCart, setTotalAmountAction } = cartReducer.actions;

export default cartReducer.reducer;

export const postOderAPI = async (order, dispatch) => {
  try {
    const result = await axios({
      url: "https://shop.cyberlearn.vn/api/Users/order",
      method: "POST",
      data: order,
    });

    alert(result.data.message);
    const action = setTotalAmountAction(0);
    dispatch(action);
  } catch (err) {
    alert(err);
  }
};
