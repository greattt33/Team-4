import React from "react"
import Header from "./components/header.js"
import Hero from "./components/Hero.js"
import Price from "./components/Price"
import "./App.css"

const App=()=>{
    return(
        <div className="App">
            <Header/>
            <Hero/>
            <Price/>
        </div>
    )
}

export default App