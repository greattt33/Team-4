import React from "react"
import Button from "./Button"
import {buttonStyle} from "./Button"
import "./Css/download.css"
import android from './images/android.png'
import apple from './images/apple.png'
import window from './images/window.png'
import others from './images/others.png'

const Download = ()=>{
  return (
      <div className="download">
          <div className="download-head">
              <div className="rhombus"></div>
              <h2>DOWNLOAD</h2>
          </div>
              

          <div className="download-body">
              <div className="download-body-text">
                  <div className="top-text">
                  <p>APP AVAILABLE</p>
                  <p>Get It Now</p>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam nihil praesentium vel voluptates eos id cumque, dolore accusantium iure eaque nisi molestiae</p>
                  <p>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <Button style={buttonStyle} content="Learn More"/>
              </div>
              <div className="download-body-boxes">
                  <div className="box-column-1">
                      <div className="box-1a">
                          <div className="download-circle"><img src={android} alt="android"/></div>
                          <h3>ANDROID</h3>
                          <p>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          <Button style={buttonStyle}content="Download"/>
                      </div>
                      <div className="box-1b">
                          <div className="download-circle"><img src={apple} alt="android"/></div>
                          <h3>APPLE</h3>
                          <p>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          <Button style={buttonStyle}content="Download"/>
                      </div>
                  </div>
                  <div className="box-column-2">
                      <div className="box-2a">
                          <div className="download-circle"><img src={window} alt="android"/></div>
                          <h3>WINDOW</h3>
                          <p>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          <Button style={buttonStyle}content="Download"/>
                      </div>
                      <div className="box-2b">
                          <div className="download-circle"><img src={others} alt="android"/></div>
                          <h3>OTHERS</h3>
                          <p>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          <Button style={buttonStyle}content="Download"/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}
export default Download