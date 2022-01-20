import React from "react";
import Navbar from "./components/Navbar/Navbar";
import  ItemCount  from "./components/ItemCount";
import './App.css';
import { Cartwidget } from "./components/cartWidget";
import {ItemListContainer} from "./components/ItemListContainer"


function App() {

 return (
    
    <div className="App">
      <Navbar/> 
      <ItemListContainer greeting="Mis productos">
         <ItemCount stock={10} />
      </ItemListContainer>
     
    </div>
  );

}
 


export default App;
