import React from "react";
import { useState, useEffect } from 'react'
import { CommonLayout } from "../../layouts/commonLayout";
import { ItemDetail } from "../products/itemDetail";
import "./products.css"


export const ItemDetailContainer = () => {
    
    return (
             <div class = "card-wrapper">
                <ItemDetail></ItemDetail>
            </div>
       
    )
   
}