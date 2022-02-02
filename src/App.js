import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/catalog/products/itemListContainer";
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
