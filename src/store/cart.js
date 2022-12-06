import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui";

const initialCartState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItemToCart(state, action) {
      const new_item = action.payload;
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

// create custom action creator
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotifications({
        title: "pending",
        status: "pending",
        message: "Sedning Cart Data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-489ae-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed!");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotifications({
          status: "success",
          title: "success",
          message: "Sent Cart Data Successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotifications({
          status: "error",
          title: "error",
          message: "Sending Cart Data failed!",
        })
      );
    }
  };
};

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
