import {
    createSlice
} from "@reduxjs/toolkit";
import { getSouses } from "../souses/sousesThunk";

const initialState = {
    pizzas: []
}


export const pizzassSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getSouses.pending, (state, action) => {
                state.status = "getting souses"
            })
            .addCase(getSouses.fulfilled, (state, action) => {
                state.status = "your souses"
                state.souses = action.payload
            })
            .addCase(getSouses.rejected, (state, action) => {
                state.status = "rejected"
            })
    }
})

export default pizzassSlice.reducer