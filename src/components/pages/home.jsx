import React from "react";
import { CommonLayout } from "../layouts/commonLayout"
import { ItemListContainer } from "../catalog/products/itemListContainer";


export const Home = () =>{
    return(
       <CommonLayout>
            <ItemListContainer></ItemListContainer>
        </CommonLayout>
    )

} 