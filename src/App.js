import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from "./components/pages/home.jsx";
import { ItemDetail } from "./components/pages/itemDetail";
import './App.css';
import { ProductsByCategory } from "./components/pages/productsByCategory.jsx";
import { Cart } from "./components/pages/cart.jsx";
import { CartProvider } from "./components/contexts/cartContext.jsx";



function App() {

 return (
   < CartProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/categories/:category" element={<ProductsByCategory />} />
          <Route path="/item/:id" element={<ItemDetail />} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );

}
 
export default App;
