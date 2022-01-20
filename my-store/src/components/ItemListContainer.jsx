import React from "react";
 



export const ItemListContainer = ({
    children,
    greeting,
    

}) => {
    

    return (
        <div>
            {greeting}
            {children}
            
        </div>
    )
   
}
 