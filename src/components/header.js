import React from "react"
import "./Css/hero.css"
import Button from "./Button.js"
import {buttonStyle} from "./Button.js"

const Header=()=>{
    return(
        <div className="header">
           <div className="header-logo">
              <p>Apkly</p>
           </div>
           <nav>
              <ul>
                <li><a href=".hero">Home</a></li>
                <li><a href=".overview">Overview</a></li>
                <li><a href=".features">Festures</a></li>
                <li><a href=".price">Price</a></li>
                <li><a href=".contact">Contact</a></li>
              </ul>
              <Button content="Sign Up" style={buttonStyle}/>
           </nav>
        </div>
    )
}
export default Header