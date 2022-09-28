import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Slider from "react-slick";
import { getProductAPI } from "../../redux/reducers/productReducer";

export default function HomeSlider() {
  const { arrProduct } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  const getAPIProduct = () => {
    const actionThunk = getProductAPI;
    dispatch(actionThunk);
  };

  useEffect(() => {
    getAPIProduct();
  },[]);

  const renderSliderContent = () => {
    let slides = 3;
    let jsx = [];
    let cloneArr = [...arrProduct];

    for (let i = 0; i < slides; i++) {
      let randomIndex = Math.floor(Math.random() * (cloneArr.length - 1));
      let currentItem = cloneArr.splice(randomIndex,1);
      let [product] = currentItem;

      let out = (
          <div className="slide-wrap d-flex justify-content-center align-items-center" key={i}>
            <div className="slide-left">
              <div className="img-product">
                <img src={product?.image} alt={product?.name} />
              </div>
            </div>
            <div className="slide-right d-flex align-items-center">
              <div className="product-detail">
                <h3>
                  {product?.name}
                </h3>
                <p>
                  {product?.shortDescription}
                </p>
                <Link to={`/detail/${product?.id}`} className="btn-primary-cus">
                  
                  <span>Buy Now</span>
                </Link>
              </div>
            </div>
          </div>
      );
      jsx.push(out);
    }

    return jsx;
  };

  const settings = {
    dots: false,
    autoplay: false,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 2500,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>{renderSliderContent()}</Slider>
    </div>
  );
}
