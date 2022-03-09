import React from "react"
import Header from "./components/header.js"
import Hero from "./components/Hero.js"
import Price from "./components/Price"
import "./App.css"
import Overview from "./components/overview.js"
import Features from "./components/features"
import Footer from "./components/footer"

const App=()=>{
   
    return(
        <div className="App">
            <Header/>
            <Hero/>
            <Overview/>
            <Features/>
            <Price/>
            <Footer/>
        </div>
    )
}

export default App