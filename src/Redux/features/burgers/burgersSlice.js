import {
    createSlice
} from "@reduxjs/toolkit";
import { getPizzas, removePizza } from "../pizzas/pizzaasThunk";

const initialState = {
    status: "idle",
    burgers: []
}

export const burgersSlice = createSlice({
    name: 'burgers',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getPizzas.pending, (state, action) => {
                state.status = "getting your burgers"
            })
            .addCase(getPizzas.fulfilled, (state, action) => {
                state.status = "already got your burgers"
                state.burgers = action.payload
            })
            .addCase(getPizzas.rejected, (state, action) => {
                state.status = "budesh golodaty"
            });
        builder
            .addCase(removePizza.pending, (state, action) => {
                state.status = "removing your burgers"
            })
            .addCase(removePizza.fulfilled, (state, action) => {
                state.status = "removed your burger"
                state.burgers = state.burgers.filter((item) => item._id !== action.payload);
            })
            .addCase(removePizza.rejected, (state, action) => {
                state.status = "error"
            })
    }
})

export default burgersSlice.reducer