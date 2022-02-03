import React from "react";
import { useState, useEffect } from 'react'
import { ItemDetail } from "../products/itemDetail";
import { productList } from "../../../constants/products"
import "./products.css"

const task = new Promise((resolve, reject) => {
    setTimeout( () => {
      if (productList.length > 0) {
        console.log(productList)
        let product = productList.filter(
            (element) => {
                return element.id == 1
            }
        )
        if (product.length > 0) {
            resolve(product[0])
        } else {
            reject("En estos momentos no podemo procesar tu pedido")
        }
        
      } else {
        reject("En estos momentos no podemo procesar tu pedido")
      }
    }, 2000)
  
  })


export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        let mounted = true
        task.then(result => {
           setProduct(result)
          }).then(result => {
            console.log(result)
          })
          .catch( err => {
            console.log(err)
          })
        return () => mounted = false;
      }, []);

    return (
        <div className = "card-wrapper">
            <ItemDetail product={product}></ItemDetail>
        </div>
    )
   
}