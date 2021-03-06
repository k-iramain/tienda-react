import React from "react";
import { Link } from "react-router-dom";
import "../../../assets/scss/components/layouts/_header.scss"


export const Logo = ({text}) => {

    return (
        <div className="brand">
          <Link to="/">
            <img
              className="logo"
              src={require("../../../assets/img/Veggy.png")}
              alt="Veggy Brand Logo"
            />
          </Link>
        </div>
        
    )
}