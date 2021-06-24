import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    add: (state, action) => {
      // arary.push ?? let a = [1] // a.push(4) a = [1,2,3,4]
      const { _id, name, image, price } = action.payload;
      state.items = state.items.push({ _id, name, image, price, quantity: 1 });
    },
  },
});

export const { add } = actions;

export default reducer;
