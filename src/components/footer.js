import React from "react";
import peoples from "./Css/peoples.png"
import "./Css/footercorrected.css"
import manw3p from "./Css/manw3p.png"
import screenshot from "./Css/screenshot.png"
import commentcma from "./Css/commentcma.png"
import send222 from "./Css/send222.png"




function Footer(){
  return(
    <div className="footerOverall">
    <div className="apklyshotbkg">
      <div className="shot">
        <img src={screenshot} className="screensht"/></div>
      <div className="multiimage">
        <img src={peoples} className="imagepeople"/>
      </div>
    </div>
    <div className="contcomment">
    
        <div className="dicomma">
          <img src={commentcma} className="comma"/></div>  
        <br></br>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum fugiat similique quisquam quae maiores</p>
        <p>quam illum eligendi, quidem repudiandae quaerat, animi inventore quod, dignissimos laboriosam,</p>
        <p>praesentium. Blanditiis delectus laborum ipsum</p>
        <h2>Shukib.</h2>
        <p style={{color:"red"}}>GRAPHIC DESIGN</p>
        <img src={manw3p} className="threeimg"/>
      
    </div>
    <div className="apklyfooter">
      <div className="innerfooter">
        <div className="contapkly">
        <h1>Apkly.</h1>
        
        <div className="contpholder"> 
             <input className="inputplaceholder" type= "string" placeholder="Subscribe Now"></input>
             <button className="btn"> <img src= {send222} className="send" ></img>Send</button>
         </div> 
        </div>
      </div>
      <div className="contapklydetail">
        <div className="contabt">
        <h3>About Us </h3>
        <hr className="hr-line-about-us" />
      
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit
        Praesentium ipsa quisquam nam eos
        facilis vero dolorum. Sit earum ea
        landditiis
        </div>
        <div className="contour">
          <h3>Our Menu  </h3>
          <hr className="hr-line-our-menu" />
          <a href="#"> Overview</a>
          <a href="#">  Feature</a>
          <a href="#"> Home</a>
          <a href="#"> Download</a>
          <a href="#"> Others</a>
        </div>
        <div className="contfollow">
        <h3> Follow Us</h3>
        <hr className="hr-line-follow-us" />
        <a href="#">Follow Us</a>
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#"> Youtube</a>
        <a href="#"> Instagram</a>
        </div>
        <div className="contothers">
          <h3>Other Features</h3>
          <hr className="hr-line-other-features" />
          <a href="#"> Affliate</a>
          <a href="#"> FAQ</a>
          <a href="#">Tutorial</a>
          <a href="#">Groups</a>
          <a href="#"> Others</a>
        </div>   
      </div>
    </div>
    <div className="apklyend">
      <p>Copyright2018 - Design by Apkly</p>
    </div>
    </div>
  )
}

export default Footer;

















