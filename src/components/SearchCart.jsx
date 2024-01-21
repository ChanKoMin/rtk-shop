import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/services/cartSlice";

const SearchCart = (props) => {
  const { image, title, description } = props;
  const dispatch = useDispatch();
  return (
    <div className="card shadow p-4" style={{ width: "19rem" }}>
      <img src={image} className="card-img-top" height="300px" alt="..." />
      <div className="card-body">
        <h5 className="card-title text-truncate">{title}</h5>
        <p className="card-text text-truncate">{description}</p>
        <button
          onClick={() => dispatch(addToCart(props))}
          className="btn btn-primary w-100"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default SearchCart;
