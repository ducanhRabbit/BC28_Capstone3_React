import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  arrProduct: [
    {
      id: 1,
      name: "Giày 1 ",
      price: 1000,
      image: "https://picsum.photos/200/200",
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    },
  ],
  productDetail: {},
  arrSearchProduct: [],

  favProducts: [{id:3},{id:2}]

};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    setArrProductAction: (state, action) => {
      const arrProduct = action.payload;
      state.arrProduct = arrProduct;
    },

    setProductDetailAction: (state, action) => {
      state.productDetail = action.payload;
    },

    setArrSearchProduct: (state,action) => {
        state.arrSearchProduct = action.payload;

    },
    setArrFavProducts: (state,action) =>{
      state.favProducts = action.payload
    }
    

  },
});

export const { setArrProductAction, setProductDetailAction, setArrSearchProduct } =
  productReducer.actions;

export default productReducer.reducer;

// getProductAPI

export const getProductAPI = async (dispatch) => {
  try {
    let result = await axios({
      url: "https://shop.cyberlearn.vn/api/Product",
      method: "GET",
    });

    let action = setArrProductAction(result.data.content);
    dispatch(action);
  } catch (err) {
  }
};

export const getProductDetailApi = (productID) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${productID}`,
        method: "GET",
      });
      const action = setProductDetailAction(result.data.content);
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};

export const getSearchProductApi = (keyword) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: "https://shop.cyberlearn.vn/api/Product?keyword=" + keyword,
        method: "GET",
      });
      console.log(result.data.content);
      const action = setArrSearchProduct(result.data.content);
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};
