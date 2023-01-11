import {
    createSlice
} from "@reduxjs/toolkit";

const initialState = {
    salads: [{
            id: 1,
            title:"Оливье",
            body: "220г",
            price: "349₽",
            img: "https://www.maggi.ru/data/images/recept/img640x500/recept_9986_99za.jpg",
            type: "salad"
        },
        {
            id: 2,
            title: "Цезарь",
            body: "220г",
            price: "389₽",
            img: "https://gotovim.uz/wp-content/uploads/2022/04/salat-cezar-1-e1638563059152.jpg",
            type: "salad"
        },
        {
            id: 3,
            title: "Ачичук",
            body: "220г",
            price: "269₽",
            img: "https://mtdata.ru/u16/photoAC2F/20143526660-0/original.jpg",
            type: "salad"
        },
        {
            id: 4,
            title: "Смак",
            body: "220г",
            price: "299₽",
            img: "http://sun9-54.userapi.com/impg/c857724/v857724945/1f9cb3/ISgGN8b178k.jpg?size=604x403&quality=96&sign=995302f6402c7c409c738b54d835150b&type=album",
            type: "salad"
        },
        {
            id: 5,
            title: "Салат с креветками и апельсином",
            body: "220г",
            price: "419₽",
            img: "https://www.gastronom.ru/binfiles/images/20170404/m2413223.jpg",
            type: "salad"
        },
        {
            id: 6,
            title: "Салат рукола с креветками",
            body: "220г",
            price: "399₽",
            img: "https://www.gastronom.ru/binfiles/images/00000202/m_00074500.jpg",
            type: "salad"
        },
        {
            id: 7,
            title: "Салат с лососем",
            body: "220г",
            price: "379₽",
            img: "https://www.gastronom.ru/binfiles/images/00000094/m_00104832.jpg",
            type: "salad"
        },
        {
            id: 8,
            title: "Салат с креветками, антоновкой и манго",
            body: "220г",
            price: "429₽",
            img: "https://www.gastronom.ru/binfiles/images/00000273/m_00093893.jpg",
            type: "salad"
        },
        {
            id: 9,
            title: "Зеленый салат с креветками и хурмой",
            body: "220г",
            price: "399₽",
            img: "https://www.gastronom.ru/binfiles/images/20181128/m55606da.jpg",
            type: "salad"
        },
        {
            id: 10,
            title: "Салат с тунцом",
            body: "220г",
            price: "459₽",
            img: "https://www.gastronom.ru/binfiles/images/00000115/m_00092769.jpg",
            type: "salad"
        }
    ]
}


export const saladsSlice = createSlice({
    name: 'salads',
    initialState,
    reducers: {}
})

export default saladsSlice.reducer