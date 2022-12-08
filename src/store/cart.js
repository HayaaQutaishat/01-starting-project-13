import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  totalQuantity: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
    },
    addItemToCart(state, action) {
      const new_item = action.payload;
      state.changed = true;
      state.totalQuantity++;
      //   check if the item is already in the cart
      const existingItem = state.items.find((item) => item.id === new_item.id);
      if (!existingItem) {
        // add the item to the list
        state.items.push({
          id: new_item.id,
          title: new_item.title,
          price: new_item.price,
          quantity: 1,
          totalPrice: new_item.price,
        });
      } else {
        // update the existing item
        existingItem.quantity = existingItem.quantity + 1;
        existingItem.totalPrice = existingItem.totalPrice + new_item.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      state.changed = true;
      state.totalQuantity--;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        // remove the item from the array entirely
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        // reduce quantity by 1
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
