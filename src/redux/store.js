import { configureStore } from "@reduxjs/toolkit";
import subjectReducer from "./slice/subjectSlice";
import bookReducer from "./slice/bookSlice";
import cartReducer from "./slice/cartSlice";

const store = configureStore({
  reducer: {
    subject: subjectReducer,
    books: bookReducer,
    cart: cartReducer,
  },
});

export default store;
