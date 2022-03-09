import React from "react"
import "./Css/feature2.css";
import VideoPlay from "./images/videoplay-icon.png";
import FeatureCount from "./images/count.jpg";
 


const Feature2 = () => {
  return (
    <div className="feature2-fill-container">
      <div className="count-img-holder">
          <img className="feature-background-img" src={FeatureCount}/>
          <div className="canvas-youtube-holder">
            <div className="left-canvas">
              <div className="first-two-canvas">
                <div className="canvas-content"></div>
                <h3 className="tag-h3-feature">1.5B<br/>Download</h3>
                <div className="canvas-content2"></div>
                <h3 className="tag-h3-feature2">4.6<br/>Rating</h3>
              </div>
              <div className="second-two-canvas">
                <div className="canvas-content3"></div>
                <h3 className="tag-h3-feature3">13K<br/>Updates</h3>
                <div className="canvas-content4"></div>
                <h3 className="tag-h3-feature4">500M<br/>Active User</h3>
              </div>                                         
            </div>
                          
          <div className="play-video-holder"><div className="right-youtube"><img className="video-icon-play" src={VideoPlay}/>
            <p className="Mypara">Watch Our Story</p></div>
          </div>
        </div>
      </div>    
      
    </div>
  );
}

export default Feature2
