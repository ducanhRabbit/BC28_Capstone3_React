import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../../components/Cards/ProductCard";
import { getSearchProductApi, setArrSearchProduct } from "../../redux/reducers/productReducer";
import { orderBy } from "lodash";
let timeout = null;
export default function Search(props) {
  const { arrSearchProduct } = useSelector((state) => state.productReducer);
  const [searchValue, setSearchValue] = useSearchParams({ keyword: "" });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    getSearchProduct();
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue({
      keyword: value,
    });
  };
  const getSearchProduct = () => {
    const actionThunk = getSearchProductApi(searchValue.get("keyword"));
    dispatch(actionThunk);
  };

  const ascendingPrice = () => {
    const ascendingPriceArr = orderBy(arrSearchProduct, ["price"], ["asc"]);
    const action = setArrSearchProduct(ascendingPriceArr);
    dispatch(action);
  };
  const descendingPrice = () => {
    const descendingPriceArr = orderBy(arrSearchProduct, ["price"], ["desc"]);
    const action = setArrSearchProduct(descendingPriceArr);
    dispatch(action);
  };
  useEffect(() => {
    timeout = setTimeout(() => {
      getSearchProduct();
    }, 1000);
    return () => {
      if (timeout != null) {
        clearTimeout(timeout);
      }
    };
  }, [searchValue.get("keyword")]);
  return (
    <div className="search">
      <form className="search__form container" onSubmit={handleSubmit}>
        <div className="form-group">
          <p>Search</p>
          <input
            type="text"
            placeholder="product name ..."
            className="searchInput"
            onChange={handleChange}
            value={searchValue.get("keyword")}
          />
          <button className="searchButton">SEARCH</button>
        </div>
      </form>
      <h1>Seach result</h1>
      <div className="search__content container">
        <p className="title">Price</p>
        <div className="button__sort">
          <button className="btn search__content-filter" onClick={descendingPrice}>
            decrease <span className="sort__desc"></span>
          </button>
        </div>
        <div className="button__sort">
          <button className="btn search__content-filter" onClick={ascendingPrice}>
            ascending <span className="sort__asc"></span>
          </button>
        </div>
        <div className="row">
          {arrSearchProduct?.map((e, index) => {
            return (
              <div className="col-4" key={index}>
                <ProductCard product={e} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
