import React from "react";
import { ItemDetailContainer } from "../catalog/products/itemDetailContainer";
import { CommonLayout } from "../layouts/commonLayout"
import "../../assets/scss/components/products/_detail.css"


export const ItemDetail = () =>{
    return(
        <CommonLayout>
            <ItemDetailContainer></ItemDetailContainer>
        </CommonLayout>
            
    )
}