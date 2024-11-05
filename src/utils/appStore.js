import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartReducer from "./../utils/cartSlice";
//create store
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
