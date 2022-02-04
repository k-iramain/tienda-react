import { Component } from "react";
import {Link, NavLink} from "react-router-dom"
import {Cartwidget} from "../cartWidget";
import { categoriesItems } from "../../constants/commons"
import "./Navbar.css"

class Header extends Component {
    state = {clicked : false }

    handleClick = () => {
        this.setState({ clicked : !this.state.clicked })
    }


    render() {
        return(
            <nav className="NavbarItems">
                <Link to={"/"}>
                    <h1 className="Navbar-logo">veggies<i className="fab fa-react"></i></h1>
                </Link>
                
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-time" : "fas fa-bars"}></i>

                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {categoriesItems.map((item, index) =>{
                        return(
                            <NavLink key={item.id}  className="nav-links" to={`/categories/${item.slug}`}>
                                <li>
                                    {item.name}
                            </li>
                            </NavLink>
                            
                        )
                    })}                    
                </ul>
                <Cartwidget></Cartwidget>
            </nav>
        )
    }

}



export default Header