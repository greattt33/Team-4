import React from "react"
import "./Css/hero.css"
import mandela from "./images/mandela.png"
import Button from "./Button.js"
import {buttonStyle} from "./Button.js"


 
const Hero= ()=>{
    return(
        <div className="hero">
           
           <div className="hero-body">
              <div className="hero-body-text">
                  <p >AWESOME</p>
                  <p>
                  App Of The Year
                  </p>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit Ad doloribus laborum     omnis       obcaecati sit dolore
                  </p>
                  <Button content="Get it now" style={buttonStyle}/>
              </div>
              <div className="hero-body-image">
                  <div className="circle"></div>
                  <img src={mandela} alt="phone with mandela pics"/>
                  
              </div>
           </div>
        </div>
    )
}
export default Hero