import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import "./button.css";

const STYLES = [
    "btn--primary",
    "btn--outline "

]

const SIZES = [
    "btn--medium",
    "btn--large"
]

export const Cartwidget = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
             <FontAwesomeIcon icon={faCartPlus} />
            {children}

        </button>
    )
   
}