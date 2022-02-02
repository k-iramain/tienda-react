import { Component } from "react";
import { menuItems} from "../../constants/commons";
import {Cartwidget} from "../cartWidget";
import "./Navbar.css"

class Header extends Component {
    state = {clicked : false }

    handleClick = () => {
        this.setState({ clicked : !this.state.clicked })
    }


    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="Navbar-logo">veggies<i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-time" : "fas fa-bars"}></i>

                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {menuItems.map((item, index) =>{
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            
                            </li>
                        )
                    })}                    
                </ul>
                <Cartwidget></Cartwidget>
            </nav>
        )
    }

}



export default Header