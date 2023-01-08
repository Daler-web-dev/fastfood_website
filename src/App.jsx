import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";

import Layout from "./Layout/Layout";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ProductCard from "./Components/children/ProductCard";
import { Menu } from "./Pages/Menu";

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path="/about" element={<AboutPage />} />
				<Route path="/menu" element={<Menu />} />
			</Route>
		</Routes>
	)
}

export default App;