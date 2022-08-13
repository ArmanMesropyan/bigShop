import { configureStore } from '@reduxjs/toolkit'
import ShopReducer from "./reducers/shopReducer";
export const store = configureStore({
    reducer: {
        ShopReducer
    },
})