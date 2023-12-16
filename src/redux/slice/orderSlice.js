import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: {},
    orderCount: 100,
  },
  reducers: {
    createOrder(state, action) {
      const currentDate = moment();
      state.orderCount += 1;
      state.orders[state.orderCount] = {
        id: state.orderCount,
        date: currentDate.format("MMM Do YY"),
        items: action.payload.cartItems,
        total: action.payload.total,
      };
    },
  },
});

export default orderSlice.reducer;
export const { createOrder } = orderSlice.actions;
