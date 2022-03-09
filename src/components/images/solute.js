import React from "react";
import "./App.css";
import Iphone from "./img/Iphone.png";



function App (){


  return(
    
    <div className="solution_container">
      <div className="rhombus1"></div> 
      <div className="solution_wrapper">
      
       <h1 className="solution_text">SOLUTION</h1>
       
        <div className="solution_all">

          <div className="stxt1"><h2>NEED MORE IMFORMATION?</h2>
          <h3 className="stext2">Ask Our Community</h3>
          <div className="stxth5">
          <h5 >01.App user experience & interface</h5>
          <p className="stxtp">Lorem ipsum dolor ait amet consectetur adipisicing elit. Non quis voluptetibus saepe<br/>architectto offlciis</p>
          <h5>02.App Performance and Security</h5>
          <h5>03.Best color Vision & Combination?</h5></div>
        </div>

          <div className="siphonecontainer">
      
            <div className="scircle"></div> 
             <img src={Iphone} className="siphone" alt="iphone" />
              
          </div>   
          

        

      </div>
      <div className="smainbut">
              <button className="sbut">Visit Community</button></div> 
             
         
            
    </div> 
    <div className="scontainer2">
              <div className="rhombus"></div> 
              <div className="stxtwrapper">

               <h1>DOWNLOAD</h1>
               
                </div>
              <div className="slastext">
                <h2>APP AVAILABLE</h2>
                <h5 className="stxth5">Get It Now Free</h5>
                <p>Lorem ipsum dolor ait amet consectetur adipisicing elit. Aperiam nihil praentium<br/> vel voluptates eos id cumque, dolore accusantium lur eaque nisi moles.tiae</p>
              </div>
            </div>
         </div>

  )
    
    
  
}

export default App