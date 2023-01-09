import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";

import Layout from "./Layout/Layout";
import AboutPage from "./Pages/AboutPage";
import Menu from "./Pages/Menu";
import Card from "./Pages/Card";
import HomePage from "./Pages/HomePage";

function App() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path='/' element={<Layout />}>
				<Route path="/about" element={<AboutPage />} />
				<Route path="/menu" element={<Menu />} />
				<Route path="/card" element={<Card />} />
			</Route>
		</Routes>
	)
}

export default App;