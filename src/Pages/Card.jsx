import React from "react";
import { useSelector } from "react-redux";
import Lottie from 'react-lottie';
import cartAnimation from '../lotties/emptyCart.json';
import CardLine from "../Components/children/CardLine";

function Card() {
	const cartData = useSelector((state) => state.cart.cart);

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: cartAnimation,
		rendererSettings: {
		  preserveAspectRatio: "xMidYMid slice"
		}
	  };

	return (
		<div className="mx-16">
			<div className="flex items-center gap-3 mb-6">
				<h1 className="text-[30px] lg:text-[40px]">Корзина</h1>
				<div className="w-8 h-8 lg:w-10 lg:h-10 rounded-xl bg-[#F2F2F3] flex items-center justify-center">
					<span>{cartData.length}</span>
				</div>
			</div>
			<div className="flex w-full gap-5 flex-col lg:flex-row">
				<div className="w-full bg-white border rounded-lg shadow-md p-3 dark:bg-gray-800 dark:border-gray-700">
					<ul
						role="list"
						className="divide-y divide-gray-200 dark:divide-gray-700"
					>
						{cartData.length <= 0 ? (
							<h1 className="text-white">корзина пуста</h1>
						) : (
							cartData.map((item) => <CardLine item={item} />)
						)}
					</ul>
				</div>
				{cartData.length <= 0 ? <Lottie 
						options={defaultOptions}
						height={400}
						width={400}
					/> : (
					<div className="w-full flex flex-col gap-5 lg:w-1/2">
						<div className="w-full p-4 bg-white border rounded-lg flex items-center flex-col gap-3 shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
							<div className="w-full flex items-center justify-between">
								<p>Доставка</p>
								<p>Безплатная</p>
							</div>
							<div className="w-full flex items-center justify-between">
								<p className="font-bold text-xl">Общая цена</p>
								<p className="font-bold text-xl">$320</p>
							</div>
							<button
								type="button"
								className="w-[70%] sm:mt-5 text-white bg-[#F86310]  hover:bg-[#ff803b] ease-in duration-200 font-medium rounded-3xl text-xl px-5 py-3  text-center"
							>
								Продолжить
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default Card;
