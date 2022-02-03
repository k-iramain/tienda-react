import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from "./components/pages/home.jsx";
import { ItemDetail } from "./components/pages/itemDetail";
import './App.css';
import { ProductsByCategory } from "./components/pages/productsByCategory.jsx";



function App() {

 return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/categories/:category" element={<ProductsByCategory />} />
        <Route path="/item/:id" element={<ItemDetail />} />
      </Routes>
    </BrowserRouter>
  );

}
 
export default App;
