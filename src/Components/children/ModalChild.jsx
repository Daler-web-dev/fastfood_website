import React, { useState } from 'react'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../Redux/features/cart/cartSlice'
import Button from './Button'

const ModalChild = ({item}) => {
    const [count, setCount] = useState(1)
    const [price, setPrice] = useState(+ item.price.split('₽')[0])

    const dispatch = useDispatch();

    const priceOfOne = + item.price.split('₽')[0]
  return (
        <div className="flex flex-col items-start justify-between gap-7 text-black max-w-xl ">
            <h1 className=' text-3xl font-bold	'>{item.title}</h1>
            <div className="flex gap-10">
                <img className=' w-[270px] h-[220px]' src={item.img} />
                <p className=''>Супер мясное наслаждение! Большая рубленая котлета из свежего говяжего мяса покорит вас своей сочностью, а хрустящие листья салата добавят свежести.</p>
            </div>
            <div className="flex gap-24 items-center justify-between ">
                <Button onClick={() => dispatch(addToCart({...item, count: count}))} >Добавить в корзину</Button>
                <div className=" bg-[#DF6751] text-white rounded-xl flex gap-2 items-center justify-center p-2">
                    <BiMinus onClick={() => {setCount(count - 1); setPrice(price - priceOfOne)}} size={25}/>
                        {count}
                    <BiPlus onClick={() => {setCount(count + 1); setPrice(price + priceOfOne)}} size={25}/>
                </div>
                <h1 className='text-2xl font-bold'>{price + '₽'}</h1>
            </div>
        </div>
  )
}

export default ModalChild