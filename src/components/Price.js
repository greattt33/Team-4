import React from "react"
import Download from "./Download.js"
import PriceCard from "./PriceCard.js"
import "./Css/price.css"

const Price =()=>{
    return(
        <div className="price">
            <div className="price-head">
              <div className="rhombus"></div>
              <h2>PRICE PLAN</h2>
           </div>
            <div className="price-body">
                <div className="price-cards-section">
                    <PriceCard title="Basic" price="$10/month" cardContent1="25GB storage space" cardContent2="Limited Support" cardContent3="Fastest Load Speed"/>
                    <PriceCard title="Free" price="$0/month" cardContent1="5GB storage space" cardContent2="Limited Support" cardContent3="Medium Load Speed"/>
                    <PriceCard title="Advance" price="$35/month" cardContent1="150GB storage space" cardContent2="Limited Support" cardContent3="Fastest Load Speed"/>
                    
                </div>
                <Download/>
            </div>
        </div>
    )
}
export default Price 