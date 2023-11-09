import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "CartArray",
  initialState: {
    data: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      state.data.push({ ...item, quantity: 1 });
    },
    deleteCard: (state, action) => {
      const cardId = action.payload;
      const updatedCards = state.data.filter((card) => card.id !== cardId);
      return { ...state, data: updatedCards };
    },
    increase: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.data.findIndex((item) => item.id === itemId);

      if (itemIndex !== -1) {
        state.data[itemIndex].quantity++;
      }
    },
    decrease: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.data.findIndex((item) => item.id === itemId);

      if (itemIndex !== -1) {
        state.data[itemIndex].quantity--;
      }
    },
  },
});

export const { addToCart, deleteCard, increase, decrease } = CartSlice.actions;
export default CartSlice.reducer;
