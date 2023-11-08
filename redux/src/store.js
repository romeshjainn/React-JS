import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartProduct/CartSlice";
const store = configureStore({
  reducer: {
    CartArray: CartSlice,
  },
});
export default store;
