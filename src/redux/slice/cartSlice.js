import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart(state, action) {
      state.cartItems.push(action.payload);
    },
    removeItemFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (data) => data !== action.payload
      );
    },
    resetCart(state) {
      state.cartItems = [];
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeItemFromCart, resetCart } = cartSlice.actions;
