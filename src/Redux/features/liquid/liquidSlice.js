import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    liquids:[
        {
            id: 1,
            title: "Coca Cola",
            body: "0,5 l",
            price: "689₽",
            img: "/img/coca_cola_0.5.jpg",
            type: 'liquid'
        },
        {
            id: 2,
            title: "Coca Cola",
            body: "1,5 l",
            price: "989₽",
            img: "/img/cocacola_1.5.jpg",
            type: 'liquid'
        },
        {
            id: 3,
            title: "Coca Cola",
            body: "1,5 l",
            price: "689₽",
            img: "/img/cocacola_1.5.jpg",
            type: 'liquid'
        },
        {
            id: 4,
            title: "Coca Cola",
            body: "0,5 l",
            price: "689₽",
            img: "/img/coca_cola_0.5.jpg",
            type: 'liquid'
        },
        {
            id: 5,
            title: "Coca Cola",
            body: "0,5 l",
            price: "689₽",
            img: "/img/coca_cola_0.5.jpg",
            type: 'liquid'
        },
        {
            id: 6,
            title: "Coca Cola",
            body: "0,5 l",
            price: "689₽",
            img: "/img/coca_cola_0.5.jpg",
            type: 'liquid'
        },
        {
            id: 7,
            title: "Coca Cola",
            body: "0,5 l",
            price: "689₽",
            img: "/img/coca_cola_0.5.jpg",
            type: 'liquid'
        },
        {
            id: 8,
            title: "Coca Cola",
            body: "1,5 l",
            price: "689₽",
            img: "/img/coca_cola_0.5.jpg",
            type: 'liquid'
        }
    ]
}

export const liquidsSlice = createSlice({
    name: "liquids",
    initialState,
    reducers:{}
})

export default liquidsSlice.reducer