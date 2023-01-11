import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   souses: [
    {
        id: 1,
        title: "Фирменный соус",
        body: "70г",
        price: "190₽",
        img: "/images/cheese-souse.jpeg",
        type: 'souses'
    },
    {
        id: 2,
        title: "Сырный соус",
        body: "50г",
        price: "200₽",
        img: "/images/cheese-souse2.webp",
        type: 'souses'
    },
    {
        id: 3,
        title: "Барбекью соус",
        body: "51г",
        price: "210₽",
        img: "/images/barbeque-sous.webp",
        type: 'souses'
    },
    {
        id: 4,
        title: "Чесночный соус",
        body: "50г",
        price: "210₽",
        img: "/images/onion-sous.jpeg",
        type: 'souses'
    }
    ]
}

export const sousesSlice = createSlice({
    name: 'souses',
    initialState,
    reducers: {}
})

export default sousesSlice.reducer