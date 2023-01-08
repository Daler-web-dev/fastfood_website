import kruosan from '../../resources/kruosan.png'

import Button from "./Button";

const ProductCard = () => {
   return (
      <div className="max-lg:flex max-md:block bg-white overflow-hidden rounded-[20px] drop-shadow-[0px_20px_30px_rgba(0,0,0,0.09)]">
         <a href="#0" className='rounded-[20px] overflow-hidden'>
            <img className="rounded-t-lg" src={kruosan} alt="" />
         </a>
         <div className="p-5">
            <a href="#0">
               <h5 className="mb-2 text-2xl text-black max-md:text-xl">Dunkin' Munchkins</h5>
            </a>
            <p className="mb-3 font-normal text-base text-[#75797F] max-md:truncate max-sm:text-sm">But I must explain to you how all this mistaken idea of  will give you a complete account of the system</p>
            <div className="flex justify-between items-center">
               <span className='text-black font-bold'>$6.30</span>
               <Button />
            </div>
         </div>
      </div>
   );
}

export default ProductCard;