import React from "react"
import twoPhones from "./images/twophones.png"
import AppFeatures from "./appFeatures"
import "./Css/feature.css"
import Feature2 from "./feature2"
import setting from "./images/setting-icon.png"
import security from "./images/security-icon.png"
import rocket from "./images/rocket-icon.png"
import question from "./images/question-mark-icon.png"

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
                      <AppFeatures image={rocket} contents="Light weight & super fast"/>
                      <AppFeatures image={security} contents="Strong security With privacy Care"/>
                      <AppFeatures image={question} contents="Best support from our big community"/>
                      <AppFeatures image={setting} contents=" Latest updates on every week and stress free"/>
                  </div>
              </div>

          </div>
             <Feature2/>
        </div>
    )
}
export default Features