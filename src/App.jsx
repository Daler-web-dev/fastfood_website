import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Layout from "./Layout/Layout";
function App() {
	return (
	   <Routes>
		<Route path='/' element={<Layout />} >
		   <Route index path="/"  element={<Homepage />}></Route>
		   {/* <Route path="/cart" element={<Cart />}></Route> */}
		</Route>
	   </Routes>
	)
}

export default App;
