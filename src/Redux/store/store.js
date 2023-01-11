import { configureStore } from "@reduxjs/toolkit";
import burgers from "../features/burgers/burgersSlice";
import desserts from "../features/desserts/dessertsSlice";

export const store = configureStore({
    reducer: {
        burgers: burgers,
        salads: '',
        liquid: '',
        pizzas: '',
        souses: '',
        desserts: desserts,
        cart: ''
    }
})

export default store