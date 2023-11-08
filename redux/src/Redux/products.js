import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "productData",
  initialState: { data: [] },
  reducers: {
    addToCart: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { addToCart } = ProductSlice.actions;
export default ProductSlice.reducer;
