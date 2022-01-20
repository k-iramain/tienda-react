import React from "react";
 



export const ItemListContainer = ({
    children,
    greeting,
    

}) => {
    

    return (
        <container>
            {greeting}
            {children}
            
        </container>
    )
   
}
 