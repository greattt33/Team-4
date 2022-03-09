import "./Css/contact.css";
import Arrow from "./images/arrow_contact_img2.png";
import Email from "./images/envelope_contact_img.png";
import Message from "./images/chat_contact_img.png";
import Avatar_img from "./images/i.png";
import Background_img from "./images/contact_img_1.jpg";

const Contact = () => {
return (
    <div className="Contact-container">
        <img className="Define-img"  src={Background_img}/>
        <div className="Contact-holder">
            <div className="Contact-header"><h1>CONTACT</h1></div>                        
        </div>      
        <div className="Contact-form-holder">
            <div className="left-form">                
                <img className="avatar_img" src={Avatar_img}/>
                <span className="spanName">Your First Name </span>
                <input className="form-ctrl" placeholder="Ex. Shakib"></input>  
                <hr className="hr-class"/>             
            </div>
            <div className="right-form">
                <img className="avatar_img" src={Avatar_img}/>
                <span className="spanName">Your Last Name </span>
                <input className="form-ctrl" placeholder="Ex. Alarm"></input>  
                <hr className="hr-class"/>
            </div>                      
        </div>
        <div className="Email-holder">
            <img className="email-icon" src={Email}/>
            <span className="spanEmail">Your Email Address </span>
            <input type="text" className="email-ctrl" placeholder="name@example.com"></input>
            <hr className="hr-email-line"/>
        </div> 
        <div className="message-holder">
            <img className="message-icon" src={Message}/>
            <span className="spanMessage">Send Us Message </span>
            <input type="text" className="message-ctrl" placeholder="..."></input>
            <hr className="hr-email-line"/>
        </div> 
        <div className="button-holder">
            <img className="arrow-button" src={Arrow}/>
            <button className="contact-button">Send Message</button>
        </div> 
    </div>
)
}

export default Contact
