import React from 'react';
import { Outlet } from 'react-router-dom';
import 'swiper/swiper.min.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import Items from './Items';
const Layout = () => {
    const arr = [
        {
            name: 'Бургеры',
            img: '/Icons/burger-icon.svg'
        },
        {
            name: 'Закуски',
            img: '/Icons/snacks.svg'
        },
        {
            name: 'Хот-доги',
            img: '/Icons/xot-dog.svg'
        },
        {
            name: 'Комбо',
            img: '/Icons/combo.svg'
        },
        {
            name: 'Шаурма',
            img: '/Icons/shaverma.svg'
        },
        {
            name: 'Пицца',
            img: '/Icons/pizza.svg'
        },
        {
            name: 'Wok',
            img: '/Icons/wok.svg'
        },
        {
            name: 'Десерты',
            img: '/Icons/desserts.svg'
        },
        {
            name: 'Соусы',
            img: '/Icons/sous.svg'
        },
    ]
    return (
        <div>
            <div className="w-[100%] bg-cover bg-center bg-[url('../public/images/header-bg.svg')] h-[466px] py-8 font-['Nunito'] mb-10">
                <div className='flex items-center justify-center gap-3 text-white'>
                   <h2 className='text-4xl'>Loft</h2>
                   <img src="/Icons/logo.svg" alt="" />
                </div>
                <div className="flex items-center flex-col justify-center mt-0 md:mt-0 1l:flex-row 1l:mt-[20px]">
                    <img src="/Images/burger-img.svg" className=' w-[200px] 3:lw-[250px] 2l:w-[300px]' />
                    <h1 className='text-4xl 3l:text-5xl text-center text-white 2l:text-6xl'>Только самые <br /> <span className='text-[#FF5C00]'>сочные бургеры</span></h1>
                </div>
            </div>
          
            <div className='w-[90%] flex flex-wrap items-center gap-10 m-auto'>
            <Swiper
        grabCursor={true}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
        breakpoints={{
            0: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 5,
            },
            1024: {
                slidesPerView: 7,
            },
            1280: {
                slidesPerView: 9,
            }
        }}
      >     
            {
                arr.map((i, index) => <SwiperSlide key={index} ><Items i={i} /></SwiperSlide>)
            }
         </Swiper>
            </div>
            <Outlet></Outlet>
        </div>
    );
}

export default Layout;