import {
    createSlice
} from '@reduxjs/toolkit'
import { getSouses } from './sousesThunk';

const initialState = {
    souses: [], 
    status: ''
}

export const sousesSlice = createSlice({
    name: 'souses',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getSouses.pending, (state, action) => {
                state.status = "getting your burgers"
            })
            .addCase(getSouses.fulfilled, (state, action) => {
                state.status = "already got your burgers"
                state.souses = action.payload
            })
            .addCase(getSouses.rejected, (state, action) => {
                state.status = "budesh golodaty"
            });
        }
})

export default sousesSlice.reducer