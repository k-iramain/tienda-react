import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/catalog/products/itemListContainer";
import './App.css';
import CommonLayout from "./components/layouts/commonLayout";


function App() {

 return (
    <div className="App">
      <CommonLayout>
        <ItemListContainer greeting="Mis productos"></ItemListContainer>
      </CommonLayout>
    </div>
  );

}
 
export default App;
