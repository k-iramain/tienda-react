import React from "react";
import { useContext } from "react";
import {CartContext} from "../../contexts/cartContext"
import { CartPreview } from "../../cartWidget";



export const HeaderItemCart = () => {
    const {products, addItem, removeItem, clear, isInCart} = useContext(CartContext)

    return (
        <div className="cart">
          <div className="cart-info">
            <table>
              <tbody>
                <tr>
                  <td>No. of items</td>
                  <td>:</td>
                  <td>
                    <strong>{products.length}</strong>
                  </td>
                </tr>
                <tr>
                  <td>Sub Total</td>
                  <td>:</td>
                  <td>
                    <strong>0</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <a className="cart-icon" href="#">
            <img
              className=""
              src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png"
              alt="Cart"
            />
            
              <span className="cart-count">{products.length}</span>
            
          </a>
          <CartPreview isCartOpen="true"/>
        </div>
    )
}