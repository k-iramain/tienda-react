import React from "react";
import "../../../assets/scss/components/products/_detail.css"
import "@fortawesome/react-fontawesome"


export const ItemDetail = ( {product}) => {
    
    return (
        <div className="card">
            <div className = "product-imgs">
                <div className = "img-display">
                    <div className = "img-showcase">
                        <img src={product.image} alt = "shoe image" />
                    </div>
                </div>
            </div>

            <div className = "product-content">
                <h2 className = "product-title">{product.name}</h2>
                <div className = "product-rating">
                    <i className = "fas fa-star"></i>
                    <i className = "fas fa-star"></i>
                    <i className = "fas fa-star"></i>
                    <i className = "fas fa-star"></i>
                    <i className = "fas fa-star-half-alt"></i>
                    <span>4.7(21)</span>
                </div>
                <div className = "product-price">
                    <p className = "new-price">New Price: <span>{product.price}</span></p>
                </div>
                <div className = "product-detail">
                    <h2>about this item: </h2>
                    <p>{product.description}</p>
                    <ul>
                    <li>Available: <span>in stock</span></li>
                    <li>Category: <span>{product.category.name}</span></li>
                    </ul>
                </div>

                <div className = "purchase-info">
                    <input type = "number" min = "0" value = "1"/>
                    <button type = "button" className = "btn">
                    Add to Cart <i className = "fas fa-shopping-cart"></i>
                    </button>
                    <button type = "button" className = "btn">Compare</button>
                </div>
            </div>
        </div>

        
    )
   
}