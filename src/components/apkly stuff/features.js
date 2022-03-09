import  "../Components/features.css";
import FeaturePhone from "../img_feature/feature-phone.png";
import FeatureRocket from "../img_feature/rocket-icon.png"; 
import FeatureSecurity from "../img_feature/security-icon.png";
import FeatureQmark from "../img_feature/question-mark-icon.png";
import FeatureSetting from "../img_feature/setting-icon.png";



const Features = () => {
  return (
    <div className="feature-fill-container">
      <div className="feature-header-container"><h1>FEATURE</h1></div>
        <div className="feature-holding">
          <div className="phone-holder">
            <div className="phone-container">
              <img className="edit-phone-image" src={FeaturePhone}/></div>
            </div>
            <div className="text-phone-side-holder">
              <div>
                <h1>UNLOCK THE BEST,</h1>
                <h2 className="make-it-read">App Features Here</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Iste<br/>
                  laboriosam facilis dolorem, adipisci quis perspiciatis!</p>
              </div>
              <div className="feature-text-icon-holder">
                <div className="icon-text-align">
                  <img className="feature-text-icon" src={FeatureRocket}/>
                <p><b>Light weight & super fast</b></p>                 
                </div>
                <div className="icon-text-align">
                  <img className="feature-text-icon" src={FeatureSecurity}/>
                <p><b>Strong security With privacy Care</b></p>                 
                </div>
                <div className="icon-text-align">
                  <img className="feature-text-icon" src={FeatureQmark}/>
                <p><b>Best support from our big community</b></p>                 
                </div>
                <div className="icon-text-align">
                  <img className="feature-text-icon" src={FeatureSetting}/>
                <p><b> Latest updates on every week and stress free</b></p>                 
                </div>
              </div>
            </div>
        </div>  
        
    </div>
  )
}

export default Features
