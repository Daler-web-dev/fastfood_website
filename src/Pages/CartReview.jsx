import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartReviewChild from "../Components/children/CartReviewChild";

function CartReview() {
  const [blockClick, setBlockClick] = useState(false);

  return (
    <div className="mx-16">
      <div className="flex items-center gap-3 mb-6">
        <h1 className="text-[30px] lg:text-[40px]">Обзор</h1>
      </div>
      <div className="flex w-full gap-5 flex-col lg:flex-row">
        <div className="w-full">
          <div
            onClick={() => setBlockClick(!blockClick)}
            className={
              blockClick
                ? "w-full shadow-md rounded-lg overflow-hidden h-auto"
                : "w-full shadow-md rounded-lg overflow-hidden h-[55px]"
            }
          >
            <div className="flex items-center justify-between p-4 cursor-pointer">
              <div className="flex items-center gap-5">
                <p className="text-xl">Выбранные товары</p>
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
                Menyuga o'tish
              </p>
            </Link>
          </div>
          <div>
		  </div>
        </div>
        <div className="w-full flex flex-col gap-5 lg:w-1/2">
          <div class="w-full p-4 bg-white border rounded-lg flex items-center flex-col gap-3 shadow-md sm:p-8">
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
                class="w-[70%] sm:mt-5 text-white bg-[#F86310]  hover:bg-[#ff803b] ease-in duration-200 font-medium rounded-3xl text-xl px-5 py-3  text-center"
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
