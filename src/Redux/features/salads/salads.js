import {
    createSlice
} from "@reduxjs/toolkit";

const initialState = {
    salads: [{
            id: 1,
            title:"Оливье",
            body: "220г",
            price: "349₽",
            img: "https://www.maggi.ru/data/images/recept/img640x500/recept_9986_99za.jpg"
        },
        {
            id: 2,
            title: "Цезарь",
            body: "220г",
            price: "389",
            img: "https://gotovim.uz/wp-content/uploads/2022/04/salat-cezar-1-e1638563059152.jpg"
        },
        {
            id: 3,
            title: "Ачичук",
            body: "220г",
            price: "269₽",
            img: "https://mtdata.ru/u16/photoAC2F/20143526660-0/original.jpg"
        },
        {
            id: 4,
            title: "Смак",
            body: "220г",
            price: "299₽",
            img: "http://sun9-54.userapi.com/impg/c857724/v857724945/1f9cb3/ISgGN8b178k.jpg?size=604x403&quality=96&sign=995302f6402c7c409c738b54d835150b&type=album"
        }
    ]
}


export const saladsSlice = createSlice({
    name: 'salads',
    initialState,
    reducers: {}
})

export default saladsSlice.reducer