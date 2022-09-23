import React from "react";
import ProductCard from "../../components/Cards/ProductCard";
import HomeSlider from "../../components/Slider/HomeSlider";
import Features from "./Features";

export default function Home() {
  return (

    <div className="container">
      <HomeSlider/>
      <Features/>
  
    </div>

  );
}
