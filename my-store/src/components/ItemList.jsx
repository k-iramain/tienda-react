import React from "react";
import {ItemCount} from "./ItemCount"

export const ItemList = ({product}) => {
    return (
        <div>
            <ItemCount stock={product.stock} name={product.name}/>
        </div>
    )
}

   
    
