import React from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import { Link } from "react-router-dom";

const AddToCart = () => {
  const { cartItems, totalAmount } = useSelector((state) => state.cart);
  console.log(cartItems);
  return (
    <>
      {/* {if(cart.length === 0){
        return <div className="rounded w-50 h-100 shadow text-center mx-auto p-5">
        <p>Your Cart is Empty</p>
        <Link to={"/"}>
          <button className="btn btn-primary">Back To Shop</button>
        </Link>
      </div>
    }}
     */}
      {cartItems.length ? (
        <div className="container">
          {cartItems?.map((item) => {
            return <Cart key={item.id} {...item} />;
          })}
          <div className="d-flex justify-content-between my-5">
            <h1>Total</h1>
            <h4>${totalAmount.toFixed(2)}</h4>
          </div>
        </div>
      ) : (
        <div className="rounded w-50 h-100 shadow text-center mx-auto p-5">
          <p>Your Cart is Empty</p>
          <Link to={"/"}>
            <button className="btn btn-primary">Back To Shop</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default AddToCart;
