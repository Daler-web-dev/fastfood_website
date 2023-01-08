import React from 'react'
import ProductCard from '../Components/children/ProductCard'

 const Menu = () => {

    const arr = [
        {
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
        },
        {
            id: 7,
            title: "Мясная бомба",
            body: "512г",
            price: "689₽",
            img: "/images/photo.png"
        }
    ]

  return (
    <div className='w-full flex flex-col items-center justify-center gap-10'>
        <h1 className=' text-5xl'>Our menu</h1>
        <div className="flex justify-center flex-wrap gap-8">
            {arr.map(item => <ProductCard key={item.id} item={item}/>)}
        </div>
    </div>
  )
}
export default Menu