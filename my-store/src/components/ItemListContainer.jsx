import React from "react";
import { useState, useEffect } from 'react';
import { ItemList } from "./ItemList";
 


const productList = [
    {
        name: "banana", 
        price: 234,
        stock: 50,
    },
    {
        name: "manzana", 
        price: 140,
        stock: 40,
    },
    {
        name: "pera", 
        price: 300,
        stock: 30,
    },
    {
        name: "durazno", 
        price: 350,
        stock: 40,
    },
    {
        name: "frutilla", 
        price: 200,
        stock: 50,
    },
]

const task = new Promise((resolve, reject) => {
    setTimeout( () => {
      if (productList.length > 0) {
        resolve(productList)
      } else {
        reject("En estos momentos no podemo procesar tu pedido")
      }
    }, 2000)
  
  })
  
  

export const ItemListContainer = ({
    children,
    greeting,
    

}) => {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        let mounted = true
        task.then(result => {
           setProducts(result)
          }).then(result => {
            console.log(result)
          })
          .catch( err => {
            console.log(err)
          }).finally( result => {
            console.log("Su pedido ha finalizado")
            
          })
        return () => mounted = false;
      }, []);

    return (
        <div>
            {greeting}
            {products.map((product) => (
                <ItemList key={product.name} product={product}/>
                
            ))}
            
        </div>
    )
   
}
 
