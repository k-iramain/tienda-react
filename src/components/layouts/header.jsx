import { Component } from "react";
import { HeaderItemCart } from "./headers/headerItemCart";
import {HeaderMenuLink} from "./headers/headerMenuLink"
import { categoriesItems } from "../../constants/commons"
import { Logo } from "./headers/logo";
import "./Navbar.css"
import "../../assets/scss/components/layouts/_header.scss"

class Header extends Component {
    render() {
        return(
            <nav className="NavbarItems">
                <Logo/>
                <HeaderMenuLink categories={categoriesItems}/>
                <HeaderItemCart/>
            </nav>
        )
    }

}

export default Header