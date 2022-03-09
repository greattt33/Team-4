import React from "react";
import "./Css/solute.css";
import twoPhones from "./images/twophones.png";
import SolutionOption from "./solutionOptions"
import Button from "./Button"



function Solution (){


  return(
    
    <div className="solution_container">
     <div className="solution-head">
              <div className="s-rhombus"></div>
              <h2>SOLUTION</h2>
           </div> 
      <div className="solution-body">
        <div className="solution-body-text">
             <h2>NEED MORE INFORMATION?</h2>
             <SolutionOption itemsnumber="1" contents="Lorem ipsum dolor sit amet"/>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quis voluptatibus saepe architecto officiis</p>
             <SolutionOption itemsnumber="2" contents="Lorem ipsum dolor sit amet"/>
             <SolutionOption itemsnumber="3" contents="Lorem ipsum dolor sit amet"/>


        </div>

        <div className="solution-body-image">
          <div className="s-circle"></div>
          <img src={twoPhones} alt="phone with mandela pics"/>  
        </div>   
      </div>
      <div className="button-space">
         <Button content="View Community"/>  
      </div>
         

    </div> 
    
        

  )
   
}

export default Solution