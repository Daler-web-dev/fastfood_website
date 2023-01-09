import { configureStore } from "@reduxjs/toolkit";
import burgers from "../features/burgers/burgersSlice";

export const store = configureStore({
    reducer: {
        burgers: burgers,
        salads: '',
        liquid: '',
        pizzas: '',
        souses: '',
        desserts: '',
        cart: ''
    }
})

export default store