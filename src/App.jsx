import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";

import Layout from "./Layout/Layout";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path="about" element={<AboutPage />} />
			</Route>
		</Routes>
	)
}

export default App;