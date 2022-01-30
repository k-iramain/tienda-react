import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import { Home } from "./pages/home";


function App() {

 return (
    
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>

  );

}
 


export default App;
