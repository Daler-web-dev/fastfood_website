import {
    createSlice
} from "@reduxjs/toolkit";

const initialState = {
    burgers: [{
            id: 1,
            title: "Мясная бомба",
            body: "512г",
            price: "689₽",
            img: "/images/photo.png"
        },
        {
            id: 2,
            title: "Мясная бомба",
            body: "512г",
            price: "689₽",
            img: "/images/photo.png"
        },
        {
            id: 3,
            title: "Мясная бомба",
            body: "512г",
            price: "689₽",
            img: "/images/photo.png"
        },
        {
            id: 4,
            title: "Мясная бомба",
            body: "512г",
            price: "689₽",
            img: "/images/photo.png"
        },
        {
            id: 5,
            title: "Мясная бомба",
            body: "512г",
            price: "689₽",
            img: "/images/photo.png"
        },
        {
            id: 6,
            title: "Мясная бомба",
            body: "512г",
            price: "689₽",
            img: "/images/photo.png"
        }
    ]
}


export const burgersSlice = createSlice({
    name: 'burgers',
    initialState,
    reducers: {}
})

export default burgersSlice.reducer