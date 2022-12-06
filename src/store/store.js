import uiReducer from "./ui";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
});

export default store;
