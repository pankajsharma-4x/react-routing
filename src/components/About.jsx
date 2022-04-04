import React from "react";
import Common from "./common";
import web from "../images/mobile.png"


const About =  () => {
  return (
    <div>
     <Common 
      welcome ="--Welcome to the--"
      name = "Business Digital"
      pickupline ="We are a transparent Digital Marketing Agency that prioritises a friendly,people first Approch."
      button ="Contact Us"
      visit = "/contact"
      imgsrc ={web}
     />
    </div>
  
  );
}

export default About;