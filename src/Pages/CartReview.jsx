import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartReviewChild from "../Components/children/CartReviewChild";
import { TbPencil } from "react-icons/tb";
import { IoMdContact } from "react-icons/io";
import { BiTimeFive } from "react-icons/bi";
import { GiMoneyStack } from "react-icons/gi";

function CartReview() {
  const [blockClick, setBlockClick] = useState(false);

  return (
    <div className="mx-16 max-lg:mx-10 max-md:mx-6">
      <div className="flex items-center gap-3 mb-6">
        <h1 className="lg:text-4xl font-semibold text-2xl ">
          Оформление заказа
        </h1>
      </div>
      <div className="flex w-full gap-5 flex-col lg:flex-row">
        <div className="w-full flex flex-col gap-5">
          <div
            onClick={() => setBlockClick(!blockClick)}
            className={
              blockClick
                ? "w-full shadow-md rounded-lg overflow-hidden h-auto bg-[#F2F2F2]"
                : "w-full shadow-md rounded-lg overflow-hidden h-[55px] bg-[#F2F2F2]"
            }
          >
            <div className="flex items-center justify-between gap-3 p-4 cursor-pointer">
              <div className="flex items-center gap-5">
                <p className="text-xl max-sm:text-base">Выбранные товары</p>
                <div className="w-7 h-7 bg-[#F86310] flex justify-center items-center rounded-full">
                  <span className="font-bold">3</span>
                </div>
              </div>
              <div>
                <img
                  src="/Icons/dropdown-icon.svg"
                  className={blockClick ? "transform rotate-180" : ""}
                  alt=""
                />
              </div>
            </div>
            <ul role="list" className="divide-y divide-gray-200 ">
              <CartReviewChild />
              <CartReviewChild />
              <CartReviewChild />
            </ul>
            <Link to="/menu">
              <p className="text-center mb-2 text-[17px] text-[grey]">
                Меню
              </p>
            </Link>
          </div>
          <ul role="list" className="divide-y rounded-lg divide-gray-200">
            <li className="w-full flex rounded-t-lg items-center justify-between shadow-md p-4 bg-[#FFCCD5]">
              <div className="flex items-center gap-3">
                <img src="/icons/location.svg" className="w-7 h-7" alt="" />
                <p className="text-[red]">Выберите адрес</p>
              </div>
              <TbPencil size="22" color="red" />
            </li>
            <li className="w-full flex items-center justify-between shadow-md p-4 bg-[#EBF3F2]">
              <div className="flex items-center gap-3">
                <IoMdContact size="40" color="grey" />
                <div className="flex flex-col items-start">
                  <p className="font-black">User</p>
                  <p className="font-black max-sm:text-sm">+998 (90) 123-45-67</p>
                </div>
              </div>
              <TbPencil size="22" color="green" />
            </li>
            <li className="w-full flex items-center justify-between shadow-md p-4 bg-[#EBF3F2]">
              <div className="flex items-center gap-3">
                <BiTimeFive size="40" color="green" />
                <div className="flex flex-col items-start">
                  <p className="font-bold text-[grey]">Время доставки</p>
                  <p className="font-black max-sm:text-sm">Как можно быстрее</p>
                </div>
              </div>
              <TbPencil size="22" color="green" />
            </li>
            <li className="w-full flex items-center justify-between shadow-md p-4 rounded-b-lg bg-[#EBF3F2]">
              <div className="flex items-center gap-3">
                <GiMoneyStack size="40" color="green" />
                <div className="flex flex-col items-start">
                  <p className="font-bold text-[grey]">Способ оплаты</p>
                  <p className="font-black max-sm:text-sm">Наличными (Без сдачи)</p>
                </div>
              </div>
              <TbPencil size="22" color="green" />
            </li>
          </ul>
          <textarea
            rows="4"
            className="block p-2.5 w-full text-lg text-gray-900 rounded-lg mt-5 border shadow-sm outline-none"
            placeholder="Комментарий"
          ></textarea>
        </div>
        <div className="w-full flex flex-col gap-5 lg:w-1/2">
          <div className="w-full p-4 bg-white border rounded-lg flex items-center flex-col gap-3 shadow-md sm:p-8">
            <div className="w-full flex items-center justify-between">
              <p>Доставка</p>
              <p>Безплатная</p>
            </div>
            <div className="w-full flex items-center justify-between">
              <p className="font-bold text-xl">Общая цена</p>
              <p className="font-bold text-xl">$320</p>
            </div>
            <Link to="/cart/review" className="w-full flex justify-center">
              <button
                type="button"
                className="w-[70%] sm:mt-5 text-white bg-[#F86310]  hover:bg-[#ff803b] ease-in duration-200 font-medium rounded-3xl text-xl px-5 py-3  text-center"
              >
                Продолжить
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartReview;
