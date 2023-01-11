import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";

import Layout from "./Layout/Layout";
import AboutPage from "./Pages/AboutPage";
import Menu from "./Pages/Menu";
import HomePage from "./Pages/HomePage";
import Cart from "./Pages/Cart";
import CartReview from "./Pages/CartReview";

function App() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path='/' element={<Layout />}>
				<Route path="/about" element={<AboutPage />} />
				<Route path="/menu" element={<Menu />} />
				<Route path="/cart" element={<Cart/>} />
				<Route path="/cart/review" element={<CartReview/>} />
			</Route>
		</Routes>
	)
}

export default App;