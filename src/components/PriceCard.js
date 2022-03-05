import React from "react"
import Button from "./Button"


const PriceCard= (props)=>{
    return(

        <div className="price-card">
            <div className="internal-bg">
                <p>{props.title}</p>
                <p>{props.price}</p>
                <p>{props.cardContent1}</p>
                <p>{props.cardContent2}</p>
                <p>{props.cardContent3}</p>
                <Button content="Buy Now"/>
            </div>
            
        </div>
    )
}
export default PriceCard 
