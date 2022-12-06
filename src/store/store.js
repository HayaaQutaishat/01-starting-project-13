import uiReducer from "./ui";
import cartReducer from "./cart";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    cart: cartReducer,
  },
});

export default store;
