import React from "react";
import Navbar from "./components/Navbar/Navbar";
import  ItemCount  from "./components/ItemCount";
import {ItemList} from "./components/ItemList";
import {Item} from "./components/Item";
import { Cartwidget } from "./components/cartWidget";
import {ItemListContainer} from "./components/ItemListContainer"
import './App.css';


function App() {

 return (
    
    <div className="App">
      <Navbar/> 
      <ItemListContainer greeting="Mis productos"></ItemListContainer>
     
    </div>
  );

}
 


export default App;
