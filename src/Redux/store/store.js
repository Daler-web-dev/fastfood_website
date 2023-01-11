import { configureStore } from "@reduxjs/toolkit";
import burgers from "../features/burgers/burgersSlice";
import desserts from "../features/desserts/dessertsSlice";
import souses from "../features/souses/souses";
import salads from "../features/salads/salads";

export const store = configureStore({
    reducer: {
        burgers: burgers,
        salads: salads,
        liquid: '',
        pizzas: '',
        souses: souses,
        desserts: desserts,
        cart: ''
    }
})

export default store