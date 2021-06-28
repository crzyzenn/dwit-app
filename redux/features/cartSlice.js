import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    add: (state, action) => {
      const { _id, name, image, price } = action.payload;
      const newItem = {
        _id,
        name,
        image,
        price,
        quantity: 1,
        basePrice: price, // Actual price...
      };

      // Check if item already exists...
      // Array.findIndex.....
      const itemIndex = state.items.findIndex((item) => item._id === _id);

      if (itemIndex === -1) {
        state.items = [...state.items, newItem];
      } else {
        const item = state.items[itemIndex];
        item.quantity = ++item.quantity;
        item.price = item.quantity * item.basePrice;

        state.items[itemIndex] = item;
      }
    },
    removeItem: (state, action) => {
      const _id = action.payload;
      state.items = state.items.filter((item) => item._id !== _id);
    },
    calculateTotal: (state) => {
      // items = [{price: 23}, {price: 45}, {price: 60}, {price: 100}]
      // ? 1. forEach 2. Array.reduce..
      // acc = 0, {_id: 121, name: '', price: 23, ...}
      // acc = 23, {_id: 2nd item, price: 45}
      const totalPrice = state.items.reduce((acc, val) => {
        return acc + val.price;
      }, 0);

      state.totalPrice = totalPrice;
    },
    incrementQuantity: (state, action) => {
      const _id = action.payload;
      const itemIndex = state.items.findIndex((item) => item._id === _id);
      const itemToUpdate = state.items[itemIndex];
      itemToUpdate.quantity = ++itemToUpdate.quantity;
      itemToUpdate.price = itemToUpdate.quantity * itemToUpdate.basePrice;

      state.items[itemIndex] = itemToUpdate;
    },
    decrementQuantity: (state, action) => {
      const _id = action.payload;
      const itemIndex = state.items.findIndex((item) => item._id === _id);
      const itemToUpdate = state.items[itemIndex];

      if (itemToUpdate.quantity > 1) {
        itemToUpdate.quantity = --itemToUpdate.quantity;
        itemToUpdate.price = itemToUpdate.quantity * itemToUpdate.basePrice;

        state.items[itemIndex] = itemToUpdate;
      }
    },
  },
});

export const {
  add,
  calculateTotal,
  removeItem,
  incrementQuantity,
  decrementQuantity,
} = actions;

export default reducer;
