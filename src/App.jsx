import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";

import Layout from "./Layout/Layout";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ProductCard from "./Components/children/ProductCard";

function App() {
	return (
		<Routes>
				<Route index element={<HomePage />} />
			    <Route path='/menu' element={<Layout />}>
				    <Route path="about" element={<AboutPage />} />
			   </Route>
		</Routes>
	)
}

export default App;