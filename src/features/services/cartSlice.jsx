import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
const initialState = {
  cartItems: [],
  totalAmount: 0,
  quantity: 0
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const isExisted = state.cartItems.find((item) => item.id === payload.id);
      if (isExisted) {
        return state;
      } else {
        state.cartItems = [...state.cartItems, { ...payload, quantity: 1 }];
      }
      state.totalAmount += payload.price;
      state.quantity++;
    },
    removeFromCart: (state, { payload }) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== payload.id
      );
      state.totalAmount -= payload.price * payload.quantity;
      state.quantity--;
    },
    addItemsQuantity: (state, { payload }) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      state.quantity++;
      state.totalAmount += payload.price;
    },
    subtractItemsQuantity: (state, { payload }) => {
      const subItem = state.cartItems.find((item) => item.id === payload.id);
      state.cartItems = state.cartItems.map((item) => {
        if (subItem.quantity > 1) {
          if (item.id === payload.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        }
      });
      state.quantity--;
      state.totalAmount -= payload.price;
    }
  }
});
export const {
  addToCart,
  removeFromCart,
  addItemsQuantity,
  subtractItemsQuantity
} = cartSlice.actions;
export default cartSlice.reducer;
