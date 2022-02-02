import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from "./components/pages/home.jsx";
import { ItemDetail } from "./components/pages/itemDetail";
import './App.css';



function App() {

 return (
    <div className="App">

<BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/category/:id" element={<Home />} />
        <Route path="/item/:id" element={<ItemDetail />} />
      </Routes>
    </BrowserRouter>
    </div>
  );

}
 
export default App;
