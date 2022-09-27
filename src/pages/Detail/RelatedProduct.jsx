import React from "react";
import ProductCard from "../../components/Cards/ProductCard";

export default function RelatedProduct(props) {
  const { relatedProducts } = props;
  return (
    <div className="relatedProduct">
      <h1>-Relate Product -</h1>
      <div className="row">
        {relatedProducts?.map((item, index) => {
          return (
            <div className="col-4" key={index}>
              <ProductCard product={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
