import React, {useState} from "react"
import "./Css/hero.css"
import Button from "./Button.js"
import {buttonStyle} from "./Button.js"

const Header=()=>{
    const [colorChange,setColorChange]=useState(false)
         const changeColor= ()=>{
            if(window.scrollY >=100){
               setColorChange(true)
            }else{
               setColorChange(false)
            }
         }
         document.addEventListener("scroll",changeColor)

    return(
        <div className="header">
           <div className="dot" ></div>
           <div className={colorChange?"header-logo-colorless":"header-logo"}>
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