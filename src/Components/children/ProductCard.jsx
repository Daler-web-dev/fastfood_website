import { useState } from 'react';
import kruosan from '../../resources/kruosan.png'
import MyModal from '../MyModal';

import Button from "./Button";

const ProductCard = ({item}) => {
   const [visible, setVisible] = useState(false) 

   return (
      <>
      <div className="w-96 max-lg:flex max-md:block bg-white overflow-hidden rounded-[20px] drop-shadow-[0px_20px_30px_rgba(0,0,0,0.09)]">
         <a href="#" className='rounded-[20px] overflow-hidden'>
            <img className="rounded-t-lg w-full" src={item.img} alt="" />
         </a>
         <div className="p-5">
            <a href="#">
               <h5 className="mb-2 text-2xl text-black max-md:text-xl">{item.title}</h5>
            </a>
            <p className="mb-3 font-normal text-base text-[#75797F] max-md:truncate max-sm:text-sm">{item.body}</p>
            <div className="flex justify-between items-center">
               <span className='text-black font-bold'>{item.price}</span>
               <Button onClick={() => setVisible(true)} />
            </div>
         </div>
      </div>
      <MyModal visible={visible} setVisible={setVisible}><h1 style={{color: "black"}}>{item.title}</h1></MyModal>
      </>
   );
}

export default ProductCard;