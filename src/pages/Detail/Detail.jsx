import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Header/Header.jsx";
import { getProductDetailApi } from "../../redux/reducers/productReducer.jsx";
import ProductDetail from "./ProductDetail.jsx";
import RelatedProduct from "./RelatedProduct.jsx";
export default function Detail() {
  const { productDetail } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const params = useParams();

  const getProductDetail = () => {
    const actionThunk = getProductDetailApi(params.id);
    dispatch(actionThunk);
  };

  useEffect(() => {
    getProductDetail();
  }, [params.id]);
  return (
    <div className="container">
      <ProductDetail productDetail={productDetail}/>
      <RelatedProduct relatedProducts={productDetail.relatedProducts} />
    </div>
  );
}
