import React from "react"
import "./Css/overview.css"
import OverviewCard from "./OverviewCard"

const Overview=()=>{
    return(
        <div className="overview">
            <div className="overview-title">
              <div className="rhombus"></div>
              <h2>OVERVIEW</h2>
            </div>
            <div className="overview-body">
                <OverviewCard image="" head="Secure Lock" linkText="Read More"/>
                <OverviewCard image="" head="Easy Setup" linkText="Read More"/>
                <OverviewCard image="" head="Free Use" linkText="Read More"/>
                <OverviewCard image="" head="Best Design"  linkText="Read More"/>
               
            </div>
        </div>
    )
}

export default Overview