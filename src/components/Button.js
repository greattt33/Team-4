import React from "react"


export  const buttonStyle={
    width:"min(150px)",
    height:"50px",
    borderRadius:"100px",
    border:"none",
    fontSize:"medium",
    fontWeight:"bold"
}

const Button=(props)=>{
    return(
        <button style={buttonStyle}>{props.content}</button>
    )
}


export default Button
