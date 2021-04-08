import * as React from "react";
import "./style.css";

function Card() {
  return (
    
  <div className="e-card">
  
    <div className="e-card-title"><h4>Progressive Budget</h4> </div>
    <div className="e-card-image">
    
  </div>
  <div className="e-card-content">
  <br></br>
  <a style={{display: "table-cell"}} href="https://github.com/MigsGithub/Budget-App" target="_blank" rel="noopener noreferrer"><h5>GitHub repository</h5></a> 
  <br></br>
  <a style={{display: "table-cell"}} href="https://migs-budget-app.herokuapp.com/" target="_blank" rel="noopener noreferrer"><h5>Deployed version</h5></a> 
  </div>
</div>);
}

export default Card;
