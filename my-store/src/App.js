import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import { Home } from "./pages/home";
import { ItemDetail } from "./pages/itemDetail";


function App() {

 return (
    
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/category/:id" element={<Home />} />
        <Route path="/item/:id" element={<ItemDetail />} />
      </Routes>
    </BrowserRouter>

  );

}
 


export default App;
