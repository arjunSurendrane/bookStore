import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    total: 0,
  },
  reducers: {
    addToCart(state, action) {
      state.cartItems.push({ ...action.payload, quantity: 1 });
      state.total += action.payload?.price;
    },
    removeItemFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (data) => data.title !== action.payload.title
      );
      state.total -= action.payload.price;
    },
    resetCart(state) {
      state.cartItems = [];
      state.total = 0;
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeItemFromCart, resetCart } = cartSlice.actions;
