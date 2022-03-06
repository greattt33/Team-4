import React from "react"

const OverviewCard=(props)=>{
    return(
        <div className="overview-card">
            <div className="o-image">
               
                   <img src={props.image} alt ="o-icons"/>
               
            </div>
            <div className="o-text">
                <p className="o-head-text">{props.head}</p>
                <hr/>
                <p className="o-body-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam nihil praesentium vel voluptates eos id cumque</p>
                <p className="o-link-text"><a href=".price">{props.linkText}</a></p>
            </div>
        </div>
    )
}

export default OverviewCard 