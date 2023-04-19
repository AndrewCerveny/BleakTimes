import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
import RainStorm from '../../util/Images/RainStorm.png'

const Navbar = () => {
  
  return(
   <nav className="nav-area">
    <Link to='/' className="nav-l">
      <div className="nav-wrapper">
        <img src={RainStorm} alt="Rain Clouds blocking the sun"/>
        <h1> Bleak Times </h1>
      </div>
    </Link>
    </nav>
  )
}
export default Navbar;