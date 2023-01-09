import { useState } from 'react';
import MyModal from '../MyModal';

import Button from "./Button";

const ProductCard = ({ item, price }) => {
   const [visible, setVisible] = useState(false)

   return (
      <>
         <div className="max-lg:flex  max-md:block bg-white overflow-hidden rounded-[20px] drop-shadow-[0px_20px_30px_rgba(0,0,0,0.09)]">
            <a href="#0" className='rounded-[20px] overflow-hidden'>
               <img className="rounded-t-lg w-full max-lg:object-cover" src={item.img} alt="" />
            </a>
            <div className="p-5 w-full">
               <a href="#0">
                  <h5 className="mb-2 text-2xl text-black max-md:text-xl">{item.title}</h5>
               </a>
               <p className="mb-3 font-normal text-base text-[#75797F] max-md:truncate max-sm:text-sm">{item.body}</p>
               <div className="flex justify-between items-center w-full">
                  <span className='text-black font-bold'>{item.price}</span>
                  <Button onClick={() => setVisible(true)} />
               </div>
            </div>
         </div>
         <MyModal visible={visible} setVisible={setVisible}><h1 style={{ color: "black" }}>{item.title}</h1></MyModal>
      </>
   );
}

export default ProductCard;