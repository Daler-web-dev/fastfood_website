import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
const Layout2 = ({i}) => {
    return (
                <div className=' px-2 py-2 shadow-md flex items-center rounded-2xl'>
                    <img src={i.img}  />
                    <p>{i.name}</p>
        </div>
    );
}

export default Layout2;
