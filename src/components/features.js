import React from "react"
import twoPhones from "./images/twophones.png"
import AppFeatures from "./appFeatures"
import "./Css/feature.css"

const Features=()=>{
    return(
        <div className="feature">
           <div className="feature-head">
              <div className="rhombus"></div>
              <h2>FEATURES</h2>
          </div>
          <div className="feature-body">
               <div className="feature-body-image">
                  <div className="f-circle"></div>
                  <img src={twoPhones} alt="phone with mandela pics"/>  
              </div>
              <div className="feature-body-text">
                  <p>UNLOCK THE BEST</p>
                  <p>App Features Here</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Iste laboriosam facilis dolorem, adipisci quis perspiciatis!</p>
                  <div className="app-features">
                      <AppFeatures image="" contents="Light weight & super fast"/>
                      <AppFeatures image="" contents="Strong security With privacy Care"/>
                      <AppFeatures image="" contents="Best support from our big community"/>
                      <AppFeatures image="" contents=" Latest updates on every week and stress free"/>
                  </div>
              </div>

          </div>
             
        </div>
    )
}
export default Features