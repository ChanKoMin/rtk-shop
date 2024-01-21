import React from "react";
import { MdOutlineRemoveCircle } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  addItemsQuantity,
  removeFromCart,
  subtractItemsQuantity
} from "../features/services/cartSlice";

const Cart = (props) => {
  const { id, title, image, category, price, quantity } = props;
  const dispatch = useDispatch();
  const oneItemPrice = price * quantity;
  return (
    <div className="d-flex justify-content-between align-items-center my-4 p-3 shadow rounded-2">
      <div className="d-flex gap-4">
        <img
          src={image}
          width="150px"
          height="150px"
          className=" img-thumbnail"
          alt=""
        />
        <div className="">
          <h4 className="text-secondary lh-1">{title}</h4>
          <span className="badge text-bg-success my-3">{category}</span>
          <p className="fw-bold">Price : ${oneItemPrice.toFixed(2)}</p>

          <button
            className="btn btn-danger"
            onClick={() => dispatch(removeFromCart(props))}
          >
            <MdOutlineRemoveCircle className="fs-4 me-2" />
            Remove
          </button>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center me-5">
        <button
          onClick={() => dispatch(addItemsQuantity(props))}
          className="border-none"
        >
          <MdOutlineKeyboardArrowUp className="fs-4" />
        </button>
        <span className=" fw-bold">{quantity}</span>
        <button
          onClick={() => quantity > 1 && dispatch(subtractItemsQuantity(props))}
          className="border-none"
        >
          <MdOutlineKeyboardArrowDown className="fs-4" />
        </button>
      </div>
    </div>
  );
};

export default Cart;
