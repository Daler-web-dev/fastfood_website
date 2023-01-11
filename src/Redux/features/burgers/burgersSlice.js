import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    burgers: [
        {
            id: 1,
            title: "Мясная бомба",
            body: "512г",
            price: "689₽",
            img: "/images/photo.png",
            type: 'burger'
        },
        {
            id: 2,
            title: "Мясная бомба",
            body: "512г",
            price: "689₽",
            img: "/images/photo.png",
            type: 'burger'
        },
        {
            id: 3,
            title: "Мясная бомба",
            body: "512г",
            price: "689₽",
            img: "/images/photo.png",
            type: 'burger'
        },
        {
            id: 4,
            title: "Мясная бомба",
            body: "512г",
            price: "689₽",
            img: "/images/photo.png",
            type: 'burger'
        },
        {
            id: 5,
            title: "Мясная бомба",
            body: "512г",
            price: "689₽",
            img: "/images/photo.png",
            type: 'burger'
        },
        {
            id: 6,
            title: "Мясная бомба",
            body: "512г",
            price: "689₽",
            img: "/images/photo.png",
            type: 'burger'
        }
    ]
}

export const burgersSlice = createSlice({
    name: 'burgers',
    initialState,
    reducers: {}
})

export default burgersSlice.reducer