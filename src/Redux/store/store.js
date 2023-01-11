import { configureStore } from "@reduxjs/toolkit";
import burgers from "../features/burgers/burgersSlice";
import desserts from "../features/desserts/dessertsSlice";
import souses from "../features/souses/souses";

export const store = configureStore({
    reducer: {
        burgers: burgers,
        salads: '',
        liquid: '',
        pizzas: '',
        souses: souses,
        desserts: desserts,
        cart: ''
    }
})

export default store