import {
    createSlice
} from "@reduxjs/toolkit";

const initialState = {
    pizzas: [
        {
            id: 1,
            title: "Классическая",
            body: "30см",
            price: "340₽",
            img: "/images/pizza-classic.jpg",
            type: "pizza"
        },
        {
            id: 2,
            title: "Гавайская",
            body: "30см",
            price: "360₽",
            img: "/images/pizza-gavayski.jpg",
            type: "pizza"
        },
        {
            id: 3,
            title: "Куриная",
            body: "30см",
            price: "499₽",
            img: "/images/pizza-kuriniy.jpg",
            type: "pizza"
        },
        {
            id: 4,
            title: "Маргарита",
            body: "30см",
            price: "450₽",
            img: "/images/pizza-margarita.jpg",
            type: "pizza"
        },
        {
            id: 5,
            title: "Мясная",
            body: "30см",
            price: "549₽",
            img: "/images/pizza-myasnoy.jpg",
            type: "pizza"
        },
        {
            id: 6,
            title: "Пепперони",
            body: "30см",
            price: "689₽",
            img: "/images/pizza-peperoni.jpg",
            type: "pizza"
        }
    ]
}


export const pizzassSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {}
})

export default pizzassSlice.reducer