import React from "react";
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import { Cartwidget } from "./components/cartWidget";
import {ItemListContainer} from "./components/ItemListContainer"


function App() {
  
  return (
    
    <div className="App">
      <Navbar/> 
      <ItemListContainer greeting="Mis productos"/>
    </div>
  );
}

export default App;
