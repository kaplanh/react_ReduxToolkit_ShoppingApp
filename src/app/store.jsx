import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feature/authSlice";
import productsReducer from "../feature/productSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productsReducer,
    },
});
