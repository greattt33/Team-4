import React from "react"
import "./Css/feature.css"

const AppFeatures=(props)=>{
    return(
        <div className="app-feature">
            <div className="f-icons"><img src={props.image} alt="icons"/></div>
            <p>{props.contents}</p>
        </div>
    )
}
export default AppFeatures