import React from "react"
import "./Css/Blog.css"
import LadyWithGadget from "./images/lady.jpg"
import BlogArrow from "./images/for-icon.png"
import ThumbsUP from "./images/thumbs-up.png"
import MessageIcon from "./images/mes-icon.png"
import ShareIcon from "./images/saa.png"
import BlogImg from "./images/blog2.jpg"
import BlogImg3 from "./images/blog3.jpg"
const Blog = () => {
  return (
    <div className="Blog-container">
      <div className="blog-head">
              <div className="rhombus"></div>
              <h2>BLOG</h2>
           </div>
        <div className="Blog-holder">
          <div className="left-blog-holder">
            <img className="Left-blog" src={LadyWithGadget}/>
            <div className="Left-blog-text">
              <h3>HOW TO INCREASE YOUR AUDIENCE?</h3>
              <span className="Blog-span">Posted by Apkly</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae repellat<br/> 
                possimus porro, aliquid perspiciatis dolorem praesentium numquam<br/> suscipit 
                unde adipisci.</p>
                <p className="para3-style">Read More <img className="blog-arror-icon" src={BlogArrow}/></p>
                <div className="Blog-data">
                  <span><img className="thumb-up-blog-icon" src={ThumbsUP}/>2.5K</span>
                  <span><img className="thumb-up-blog-icon" src={MessageIcon}/>123</span>
                  <span><img className="thumb-up-blog-icon" src={ShareIcon}/>1K</span>                  
              </div>
              </div>
            </div>
          <div className="Right-blog-holder">
              <div className="right-blog-content-holder">
                <img className="Right-blog-image" src={BlogImg}/>
              <div className="Right-text-blog1">
                <p className="para-style">5 Aguest, 2019</p>
                <h2 className="header2-style">ACCOUNT SECURITY & SAFETY</h2>
                <p className="para2-style">Read More <img className="blog-arror-icon" src={BlogArrow}/></p>
                <div className="Blog-data">
                  <span><img className="thumb-up-blog-icon" src={ThumbsUP}/>2.5K</span>
                  <span><img className="thumb-up-blog-icon" src={MessageIcon}/>123</span>
                  <span><img className="thumb-up-blog-icon" src={ShareIcon}/>1K</span>
                  </div><hr className="Blog-line"/>
              </div>
            </div>
            <div className="right-blog-content-holder">
              <img className="Right-blog-image" src={BlogImg3}/>
            <div className="Right-text-blog2">
              <p className="para-style">5 Aguest, 2019</p>
              <h2 className="header2-style">ACCOUNT SECURITY & SAFETY</h2>
              <p className="para2-style">Read More <img className="blog-arror-icon" src={BlogArrow}/></p>
              <div className="Blog-data">
                <span><img className="thumb-up-blog-icon" src={ThumbsUP}/>2.5K</span>
                <span><img className="thumb-up-blog-icon" src={MessageIcon}/>123</span>
                <span><img className="thumb-up-blog-icon" src={ShareIcon}/>1K</span>
                <hr className="Blog-line"/>
                </div>
            </div>
            </div>
            <div className="right-blog-content-holder">
              <img className="Right-blog-image" src={BlogImg}/>
            <div className="Right-text-blog3">
              <p className="para-style">5 Aguest, 2019</p>
              <h2 className="header2-style">ACCOUNT SECURITY & SAFETY</h2>
              <p className="para2-style">Read More <img className="blog-arror-icon" src={BlogArrow}/></p>
              <div className="Blog-data">
                <span><img className="thumb-up-blog-icon" src={ThumbsUP}/>2.5K</span>
                <span><img className="thumb-up-blog-icon" src={MessageIcon}/>123</span>
                <span><img className="thumb-up-blog-icon" src={ShareIcon}/>1K</span>
                <hr className="Blog-line"/>
                </div>
            </div>
            </div>
            </div>
          </div>        
    </div>
  )
}

export default Blog
