import React from "react";
import { ItemCount } from "./ItemCount";

export const Item = ({product}) =>{
    return(
        <div>
            <ItemCount stock={product.stock}/>
        </div>
    )

}   

    
          
   


    
  
