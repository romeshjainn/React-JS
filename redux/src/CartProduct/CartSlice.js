import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "CartArray",
  initialState: {
    data: [
      // {
      //   id: 2,
      //   title: "Mens Casual Premium Slim Fit T-Shirts ",
      //   price: 22.3,
      // },
    ],
  },
  reducers: {
    addToCart: (state, action) => {
      state.data.push(action.payload);
    },
  },
});
export const { addToCart } = CartSlice.actions;
export default CartSlice.reducer;
