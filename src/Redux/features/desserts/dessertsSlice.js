import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   desserts: [
      {
         id: 1,
         title: "cupcakes",
         body: "100г",
         price: "5$",
         img: "/images/waffles.jpg"
      },
      {
         id: 2,
         title: "cupcakes",
         body: "100г",
         price: "5$",
         img: "/images/waffles.jpg"
      },
      {
         id: 3,
         title: "cupcakes",
         body: "100г",
         price: "5$",
         img: "/images/waffles.jpg"
      },
      {
         id: 4,
         title: "cupcakes",
         body: "100г",
         price: "5$",
         img: "/images/waffles.jpg"
      },
      {
         id: 5,
         title: "cupcakes",
         body: "100г",
         price: "5$",
         img: "/images/waffles.jpg"
      },
      {
         id: 6,
         title: "cupcakes",
         body: "100г",
         price: "5$",
         img: "/images/waffles.jpg"
      },
   ]
}

export const dessertsSlice = createSlice({
   name: 'desserts',
   initialState,
   reducers: {}
})

export default dessertsSlice.reducer