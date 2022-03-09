import React from "react"
import "./Css/overview.css"
import OverviewCard from "./OverviewCard"
import setting from "./images/setting-icon.png"
import security from "./images/security-icon.png"
import rocket from "./images/rocket-icon.png"
import question from "./images/question-mark-icon.png"

const Overview=()=>{
    let count=0
    
        setInterval(()=>{
            
            if(count<860){
                count=420
            document.querySelector(".overview-body").scrollLeft=count;
            }
        }, 5000);
        return(
        <div className="overview">
            <div className="overview-title">
              <div className="rhombus"></div>
              <h2>OVERVIEW</h2>
            </div>
            <div className="overview-body">
                <OverviewCard image={rocket} head="Secure Lock" linkText="Read More"/>
                <OverviewCard image={security} head="Easy Setup" linkText="Read More"/>
                <OverviewCard image={setting} head="Free Use" linkText="Read More"/>
                <OverviewCard image={question} head="Best Design"  linkText="Read More"/>
               
            </div>
        </div>
    )
}

export default Overview