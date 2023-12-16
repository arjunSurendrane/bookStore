import { configureStore } from "@reduxjs/toolkit";
import subjectReducer from "./slice/subjectSlice";
import bookReducer from "./slice/bookSlice";
import cartReducer from "./slice/cartSlice";
import orderReducer from "./slice/orderSlice";

const store = configureStore({
  reducer: {
    subject: subjectReducer,
    books: bookReducer,
    cart: cartReducer,
    order: orderReducer,
  },
});

export default store;
