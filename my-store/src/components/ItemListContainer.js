import React from "react";



export const ItemListContainer = ({
    children,
    greeting,

}) => {
    

    return (
        <h1>
            {greeting}
            {children}
        </h1>
    )
   
}
 