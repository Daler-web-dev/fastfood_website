import { configureStore } from "@reduxjs/toolkit";
import burgers from "../features/burgers/burgersSlice";
import salads from "../features/salads/salads";

export const store = configureStore({
    reducer: {
        burgers: burgers,
        salads: salads,
        liquid: '',
        pizzas: '',
        souses: '',
        desserts: '',
        cart: ''
    }
})

export default store