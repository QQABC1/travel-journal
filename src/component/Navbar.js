import React from "react";
import  logo from "../images/Globe.png";
export default function Navbar(){
    return(
      <nav>
        <img src={logo} alt="logo" className="logo-global" />
        <h1 className="nav-title">my travel journal.</h1>
      </nav>
        
    )
}